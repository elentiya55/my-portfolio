'use client';

import { useEffect, useState } from 'react';

type NowPlaying = {
  isPlaying: boolean;
  title?: string | null;
  artist?: string | null;
  albumArt?: string | null;
  songUrl?: string | null;
};

export default function SpotifyCard() {
  const [data, setData] = useState<NowPlaying>({ isPlaying: false });

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch('/api/spotify/now-playing');
        const json = await res.json();
        setData(json);
      } catch {
        // silently fail
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30_000);
    return () => clearInterval(interval);
  }, []);

  const title = data.title ?? 'Not playing';
  const artist = data.artist ?? null;

  const content = (
    <div className="about-spotify">
      <span className="about-card-label">currently listening</span>
      <div className="about-spotify-body">
        {data.albumArt && (
          <img src={data.albumArt} alt={title} className="about-spotify-art" />
        )}
        <div className="about-spotify-info">
          <span className="about-spotify-song">{title}</span>
          {artist && <span className="about-spotify-artist">{artist}</span>}
        </div>
      </div>
    </div>
  );

  if (data.songUrl) {
    return (
      <a href={data.songUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        {content}
      </a>
    );
  }

  return content;
}
