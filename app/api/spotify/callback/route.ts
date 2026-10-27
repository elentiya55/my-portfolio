import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code');
  if (!code) return NextResponse.json({ error: 'No code' }, { status: 400 });

  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI ?? 'http://127.0.0.1:3000/api/spotify/callback';

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json({ error: data }, { status: 400 });
  }

  const html = `<!DOCTYPE html>
<html>
<head><title>Spotify Setup</title>
<style>body{font-family:monospace;padding:40px;max-width:700px;margin:0 auto;background:#f9f9f9;}
h2{color:#1db954;}pre{background:#fff;padding:20px;border-radius:8px;border:1px solid #ddd;word-break:break-all;white-space:pre-wrap;}
.label{font-size:12px;color:#888;margin-top:20px;}
</style>
</head>
<body>
<h2>✅ Spotify authorization successful!</h2>
<p>Copy the value below and share it with Claude to finish the setup.</p>
<p class="label">SPOTIFY_REFRESH_TOKEN</p>
<pre>${data.refresh_token}</pre>
<p style="color:#888;font-size:12px;margin-top:32px;">This page is only visible locally — you can close it after copying.</p>
</body>
</html>`;

  return new NextResponse(html, { headers: { 'Content-Type': 'text/html' } });
}
