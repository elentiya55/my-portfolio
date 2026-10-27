'use client';

import { useEffect, useRef } from 'react';

// Resets on page load/reload; survives SPA navigation (prevents replay on back-nav)
let splashPlayed = false;

export default function SplashFade() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (splashPlayed) {
      el.style.display = 'none';
      return;
    }

    splashPlayed = true;

    const fade = setTimeout(() => {
      el.style.opacity = '0';
      setTimeout(() => { el.style.display = 'none'; }, 520);
    }, 1000);

    return () => clearTimeout(fade);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#ff8ba7',
        zIndex: 99997,
        pointerEvents: 'none',
        opacity: 1,
        transition: 'opacity 0.5s ease',
      }}
    />
  );
}
