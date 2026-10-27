'use client';

import { useState, useCallback } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import type { GalleryItem } from '@/app/gallery/page';

const FADE_MS = 250;

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const { theme } = useTheme();
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const isWhimsy = theme === 'whimsy';

  const openModal = (item: GalleryItem) => {
    setIsClosing(false);
    setSelected(item);
  };

  const closeModal = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setSelected(null);
      setIsClosing(false);
    }, FADE_MS);
  }, []);

  const col1 = items.filter(i => i.column === 1);
  const col2 = items.filter(i => i.column === 2);
  const col3 = items.filter(i => i.column === 3);

  const renderItem = (item: GalleryItem) => (
    <div
      key={item.id}
      className="gallery-item"
      role="button"
      onClick={() => openModal(item)}
    >
      <img src={item.image} alt={item.title} className="gallery-item-img" />
      <div className={`gallery-overlay ${isWhimsy ? 'gallery-overlay--whimsy' : 'gallery-overlay--corp'}`} />
      <span className="gallery-title">{item.title}</span>
    </div>
  );

  return (
    <>
      <div className="gallery-masonry">
        <div className="gallery-col">{col1.map(renderItem)}</div>
        <div className="gallery-col">{col2.map(renderItem)}</div>
        <div className="gallery-col">{col3.map(renderItem)}</div>
      </div>

      {selected && (
        <div
          className={`gallery-modal-backdrop${isClosing ? ' gallery-modal-backdrop--closing' : ''}`}
          onClick={closeModal}
        >
          <div
            className={`gallery-modal ${isWhimsy ? 'gallery-modal--whimsy' : 'gallery-modal--corp'}`}
            onClick={e => e.stopPropagation()}
          >
            <div className="gallery-modal-img-wrap">
              <img src={selected.image} alt={selected.title} className="gallery-modal-img" />
            </div>
            <div className="gallery-modal-info">
              <div className="gallery-modal-header">
                <h2 className="gallery-modal-title">{selected.title}</h2>
                <span className="gallery-modal-year">{selected.year}</span>
              </div>
              <span className="gallery-modal-size">{selected.size}</span>
              <p className="gallery-modal-desc">{selected.description}</p>
            </div>
            <button
              className="gallery-modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
