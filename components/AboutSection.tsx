'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';

function OrchidGraphic() {
  const [playing, setPlaying] = useState(false);
  const [key, setKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setKey(k => k + 1);
    setPlaying(true);
    timerRef.current = setTimeout(() => setPlaying(false), 2100);
  };

  return (
    <div className="about-orchid" onMouseEnter={handleEnter}>
      <img
        key={playing ? key : 'static'}
        src={playing ? `/orchid-animated.gif?k=${key}` : '/orchid-static.png'}
        alt="Illustrated orchid flower"
        draggable={false}
      />
    </div>
  );
}

export default function AboutSection({ isWhimsy }: { isWhimsy: boolean }) {
  return (
    <section className="about-section-new">
      {/* Left */}
      {isWhimsy ? (
        <OrchidGraphic />
      ) : (
        <div className="about-corp-photo-wrap">
          <img
            src="/about-baby.png"
            alt="Baby photo of Evelyn"
            className="about-corp-img"
          />
        </div>
      )}

      {/* Center */}
      <div className="about-center">
        <h2 className="about-name">Evelyn Swanson</h2>
        <p className="about-tagline">Designer, Artist, and Amateur Golfer</p>
        <Link href="/about" className="btn">more</Link>
      </div>

      {/* Right */}
      {isWhimsy ? (
        <div className="about-photos-stack">
          <img
            src="/about-baby.png"
            alt="Baby photo of Evelyn"
            className="about-stack-back"
          />
          <img
            src="/about-grownup.png"
            alt="Grown up photo of Evelyn"
            className="about-stack-front"
          />
        </div>
      ) : (
        <div className="about-corp-photo-wrap">
          <img
            src="/about-grownup.png"
            alt="Grown up photo of Evelyn"
            className="about-corp-img"
          />
        </div>
      )}
    </section>
  );
}
