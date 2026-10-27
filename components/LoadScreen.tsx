'use client';

import { useEffect, useRef, useState } from 'react';

export default function LoadScreen() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.location.pathname !== '/') return;

    // Always remove the flash-prevention class once React has mounted
    document.documentElement.classList.remove('intro-active');

    if (sessionStorage.getItem('intro-played')) return;

    setVisible(true);

    const fallback = setTimeout(dismiss, 8000);
    return () => clearTimeout(fallback);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem('intro-played', '1');
    setLeaving(true);
    setTimeout(() => setVisible(false), 900);
  };

  if (!visible) return null;

  return (
    <div className={`load-screen${leaving ? ' load-screen--leaving' : ''}`}>
      <video
        src="/load-screen.mp4"
        autoPlay
        muted
        playsInline
        onEnded={dismiss}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
}
