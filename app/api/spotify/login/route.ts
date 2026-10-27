import { NextResponse } from 'next/server';

export async function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI ?? 'http://127.0.0.1:3000/api/spotify/callback';
  const scope = 'user-read-currently-playing user-read-playback-state user-read-recently-played';

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    scope,
    redirect_uri: redirectUri,
  });

  return NextResponse.redirect(`https://accounts.spotify.com/authorize?${params}`);
}
