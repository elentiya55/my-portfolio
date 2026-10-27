'use client';

import Image from 'next/image';

export default function ReadingCard() {
  const book = {
    title: 'The Dark Lord\'s Guide to Dating (and Other War Crimes)',
    author: 'Tiffany Hunt',
    cover: '/book-current.jpg',
  };

  return (
    <div className="about-reading">
      <span className="about-card-label">currently reading</span>
      <div className="about-reading-body">
        <div className="about-reading-cover-wrap">
          <Image
            src={book.cover}
            alt={book.title}
            fill
            className="about-reading-cover-img"
            style={{ objectFit: 'contain', borderRadius: '6px' }}
          />
        </div>
        <div className="about-reading-info">
          <span className="about-reading-title">{book.title}</span>
          <span className="about-reading-author">{book.author}</span>
        </div>
      </div>
    </div>
  );
}
