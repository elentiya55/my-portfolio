'use client';

import Image from 'next/image';

export default function CatCard() {
  return (
    <div className="about-cat">
      <div className="about-cat-img-wrap">
        <Image
          src="/cat2-still.png"
          alt="Cat"
          width={200}
          height={200}
          className="about-cat-still"
        />
        <Image
          src="/cat2.gif"
          alt="Cat animated"
          width={200}
          height={200}
          unoptimized
          className="about-cat-gif"
        />
      </div>
    </div>
  );
}
