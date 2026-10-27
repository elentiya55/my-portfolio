'use client';

import { useState } from 'react';
import PhotoShuffle from '@/components/about/PhotoShuffle';
import SpotifyCard from '@/components/about/SpotifyCard';
import GhinCard from '@/components/about/GhinCard';
import CatCard from '@/components/about/CatCard';
import ReadingCard from '@/components/about/ReadingCard';

const BLURBS = [
  "I’m Evelyn Swanson, UX designer, artist, and golf extraordinaire. That last part was a joke but my students definitely think I’m a professional golfer. I was born in Woodstock, Georgia, then moved to Austin, Texas when I was 10. It was fate that brought me back to Georgia, Savannah to be specific for college. The Savannah College of Art and Design is where I told my mom I would go when I was 7, and now more than 10 years later I’m here! Shuffle to find out more about me! <3",
  "We just can't get enough baby photos, right? Wasn't I so adorable? Just go ahead and nod along, stroke my ego a bit.",
  "Like I said, professional golfer. I've played so many courses and so many tournaments I couldn't tell you where I was. But look how tan I am! Wow, do outdoor sports give you early onset skin cancer or what? Let's not talk about how egregious my sock tan was every summer though.",
  "My absolutely adorable dog. I miss her so much when I'm away for college. Interesting fact, I was a Harry Potter obsessed child. Therefore it's only right that she has a Harry Potter themed name. Meet Leviosa, or Levee. The cutest labradoodle in the whole entire world!",
  "Ah, the mandatory family photo. My super duper awesome parents are who pushed me to this point in my life and I cannot thank them enough for everything they've done. And to my little sister, not that she'll ever see this, but I'm so proud of you and excited to see where your life is taking you! Moving on, we're at Disney in this photo! Isn't that just so cool and amazing? Hollywood Studios to be exact. One can never be too old to enjoy a rollercoaster.",
];

const EXPERIENCES = [
  { name: 'Westwood Cheer Team', role: 'Graphic Design', years: '2025' },
];


const EDUCATION = [
  {
    name: 'Savannah College of Art and Design',
    role: 'B.F.A. User Experience Design | Minors in Industrial Design and Design for Sustainability',
    years: '2025 – Present',
  },
];

export default function AboutPage() {
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <main className="page-content about-page">

      {/* ── Bento section ── */}
      <section className="about-bento-section">
        <div className="about-bento-grid">

          <div className="about-photo-col">
            <PhotoShuffle onPhotoChange={setPhotoIndex} />
          </div>

          <div className="about-bento-col">
            <div className="about-bento about-bento--blurb">
              <div className="about-blurb-inner">
                <p className="about-blurb-text">{BLURBS[photoIndex]}</p>
              </div>
            </div>
            <div className="about-bento-row">
              <div className="about-bento about-bento--spotify">
                <SpotifyCard />
              </div>
              <div className="about-bento about-bento--ghin">
                <GhinCard />
              </div>
            </div>
          </div>

          <div className="about-bento-col">
            <div className="about-bento about-bento--cat">
              <CatCard />
            </div>
            <div className="about-bento about-bento--reading">
              <ReadingCard />
            </div>
          </div>

        </div>
      </section>

      {/* ── CV sections ── */}
      <section className="about-cv">

        <div className="about-cv-row">
          <h2 className="about-cv-label">Experience</h2>
          <div className="about-cv-entries">
            {EXPERIENCES.map((e, i) => (
              <div key={i} className="about-cv-entry">
                <div className="about-cv-entry-header">
                  <span className="about-cv-name">{e.name}</span>
                  <span className="about-cv-year">{e.years}</span>
                </div>
                <p className="about-cv-role">{e.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-cv-row">
          <h2 className="about-cv-label">Education</h2>
          <div className="about-cv-entries">
            {EDUCATION.map((e, i) => (
              <div key={i} className="about-cv-entry">
                <div className="about-cv-entry-header">
                  <span className="about-cv-name">{e.name}</span>
                  <span className="about-cv-year">{e.years}</span>
                </div>
                <p className="about-cv-role">{e.role}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}
