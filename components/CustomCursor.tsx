'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const mouseRef = useRef({ x: -100, y: -100 });
  const posRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element;
      setHovered(!!target.closest('a, button, [role="button"]'));
    };

    const animate = () => {
      const lerp = 0.38;
      posRef.current.x += (mouseRef.current.x - posRef.current.x) * lerp;
      posRef.current.y += (mouseRef.current.y - posRef.current.y) * lerp;
      wrap.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
    };
  }, []);

  return (
    <div ref={wrapRef} className="cc-wrap">
      <div className={`cc-dot${hovered ? ' cc-dot--hover' : ''}`} />
    </div>
  );
}
