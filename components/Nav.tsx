'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';

const links = [
  { href: '/work', label: 'Work' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/resume.pdf', label: 'Resume', external: true },
];

export default function Nav() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = pathname === '/';
  const activeIndex = links.findIndex(link => pathname.startsWith(link.href));

  const movePillTo = (index: number) => {
    const el = linkRefs.current[index];
    const container = containerRef.current;
    if (el && container) {
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setPillStyle({
        left: elRect.left - containerRect.left,
        width: elRect.width,
        opacity: 1,
      });
    }
  };

  const hidePill = () => {
    setPillStyle(prev => ({ ...prev, opacity: 0 }));
  };

  useEffect(() => {
    if (!isHome && activeIndex >= 0) {
      setTimeout(() => movePillTo(activeIndex), 50);
    } else {
      hidePill();
    }
  }, [pathname]);

  const handleMouseEnter = (index: number) => {
    movePillTo(index);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    if (!isHome && activeIndex >= 0) {
      movePillTo(activeIndex);
    } else {
      hidePill();
    }
  };

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        <svg
          className="nav-logo-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 46.01 66.17"
          width="28"
          height="40"
          aria-hidden="true"
        >
          <rect className="logo-stroke" x=".75" y=".75" width="44.51" height="64.67" />
          <line className="logo-stroke" x1=".75" y1="33.08" x2="45.26" y2="33.08" />
          <polyline className="logo-stroke" points="45.26 65.42 .75 .75 23.01 65.42" />
          <polygon className="logo-stroke" points="23.01 65.42 23.01 33.08 45.26 .75 23.01 65.42" />
        </svg>
        <span
          className="nav-logo-text"
          style={{ opacity: scrolled ? 0 : 1, transition: 'opacity 0.4s ease' }}
        >
          Evelyn Swanson{' '}
          <span className="nav-logo-divider">| Portfolio</span>
        </span>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <ThemeToggle />
        <div
          className="nav-links-container"
          ref={containerRef}
          onMouseLeave={handleMouseLeave}
        >
        <div
          className="nav-pill-indicator"
          style={{
            left: pillStyle.left,
            width: pillStyle.width,
            opacity: pillStyle.opacity,
          }}
        />
        {links.map((link, i) => (
          link.external ? (
            <a
              key={link.href}
              href={link.href}
              ref={el => { linkRefs.current[i] = el; }}
              className={`nav-link${hoveredIndex === i ? ' is-hovered' : ''}`}
              onMouseEnter={() => handleMouseEnter(i)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              ref={el => { linkRefs.current[i] = el; }}
              className={`nav-link${!isHome && activeIndex === i ? ' is-active' : ''}${hoveredIndex === i ? ' is-hovered' : ''}`}
              onMouseEnter={() => handleMouseEnter(i)}
            >
              {link.label}
            </Link>
          )
        ))}
        </div>
      </div>
    </nav>
  );
}
