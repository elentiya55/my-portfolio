'use client';

import { useState } from 'react';

export default function CatGraphic() {
  const [gifKey, setGifKey] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setGifKey(k => k + 1);
    setHovered(true);
  };

  return (
    <div
      style={{ width: 600, height: 680, cursor: 'default', transform: 'translateY(-100px)' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        key={hovered ? gifKey : 'static'}
        src={hovered ? `/cat-animated.gif?k=${gifKey}` : '/cat-static.png'}
        alt="Hand-drawn black cat illustration"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        draggable={false}
      />
    </div>
  );
}
