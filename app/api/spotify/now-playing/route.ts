import { NextResponse } from 'next/server';

const TOKEN_URL = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_URL = 'https://api.spotify.com/v1/me/player/currently-playing';
const RECENTLY_PLAYED_URL = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';

async function getAccessToken(): Promise<string> {
  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN!;

  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  const { access_token } = await res.json();
  return access_token;
}

function formatTrack(item: Record<string, unknown>, isPlaying: boolean) {
  const artists = (item.artists as Array<{ name: string }>)?.map((a) => a.name).join(', ') ?? null;
  const album = item.album as Record<string, unknown> | undefined;
  const images = album?.images as Array<{ url: string }> | undefined;
  const externalUrls = item.external_urls as Record<string, string> | undefined;

  return {
    isPlaying,
    title: (item.name as string) ?? null,
    artist: artists,
    albumArt: images?.[2]?.url ?? images?.[0]?.url ?? null,
    songUrl: externalUrls?.spotify ?? null,
  };
}

export async function GET() {
  try {
    const accessToken = await getAccessToken();

    const res = await fetch(NOW_PLAYING_URL, {
      headers: { Authorization: `Bearer ${accessToken}` },
      next: { revalidate: 30 },
    });

    if (res.status === 200) {
      const data = await res.json();
      if (data.currently_playing_type === 'track' && data.item) {
        return NextResponse.json(formatTrack(data.item, data.is_playing));
      }
    }

    // Nothing playing — fall back to last played track
    const recentRes = await fetch(RECENTLY_PLAYED_URL, {
      headers: { Authorization: `Bearer ${accessToken}` },
      next: { revalidate: 60 },
    });

    if (recentRes.ok) {
      const recentData = await recentRes.json();
      const lastTrack = recentData.items?.[0]?.track;
      if (lastTrack) {
        return NextResponse.json(formatTrack(lastTrack, false));
      }
    }

    return NextResponse.json({ isPlaying: false });
  } catch {
    return NextResponse.json({ isPlaying: false });
  }
}
