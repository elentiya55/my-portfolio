'use client';

import { useState, useCallback, useRef } from 'react';

const PHOTOS = [1, 2, 3, 4, 5];

interface Props {
  onPhotoChange?: (index: number) => void;
}

export default function PhotoShuffle({ onPhotoChange }: Props) {
  const [current, setCurrent] = useState(0);
  const [shuffling, setShuffling] = useState(false);
  const currentRef = useRef(0);

  const shuffle = useCallback(() => {
    if (shuffling) return;
    setShuffling(true);

    const target = (currentRef.current + 1) % PHOTOS.length;
    let cycles = 0;
    const totalCycles = 8;
    const interval = setInterval(() => {
      cycles++;
      const isLast = cycles >= totalCycles;
      const next = isLast
        ? target
        : (currentRef.current + 1) % PHOTOS.length;
      currentRef.current = next;
      setCurrent(next);
      onPhotoChange?.(next);
      if (isLast) {
        clearInterval(interval);
        setShuffling(false);
      }
    }, 120);
  }, [shuffling, onPhotoChange]);

  return (
    <div className="photo-shuffle">
      <div className="photo-shuffle-frame-wrap">
        <div className="photo-shuffle-frame">
          {PHOTOS.map((n, i) => (
            <div
              key={n}
              className={`photo-shuffle-slide${i === current ? ' photo-shuffle-slide--active' : ''}`}
            >
              <img
                src={`/about/${n}.jpg`}
                alt={`Photo ${n}`}
                className="photo-shuffle-img"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="photo-shuffle-btn-wrap">
        <button
          className="btn photo-shuffle-btn"
          onClick={shuffle}
          disabled={shuffling}
          style={shuffling ? { opacity: 0.6, cursor: 'default' } : undefined}
        >
          shuffle
        </button>
      </div>
    </div>
  );
}
