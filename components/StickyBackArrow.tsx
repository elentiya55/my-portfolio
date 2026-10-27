'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function StickyBackArrow({ returnSelector = '.cs-return' }: { returnSelector?: string }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const target = document.querySelector(returnSelector);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [returnSelector]);

  return (
    <Link
      href="/work"
      className="cs-back"
      aria-label="Back to Work"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 5L7.5 11L13.5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Link>
  );
}
