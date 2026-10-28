'use client';

import { useState } from 'react';
import PhotoShuffle from '@/components/about/PhotoShuffle';
import SpotifyCard from '@/components/about/SpotifyCard';
import GhinCard from '@/components/about/GhinCard';
import CatCard from '@/components/about/CatCard';
import ReadingCard from '@/components/about/ReadingCard';

const BLURBS = [
  "I’m Evelyn Swanson, a UX designer based in Austin. I’m currently pursuing my B.F.A. in User Experience design at the incredible Savannah College of Art and Design. At the same time I’m also a youth golf coach, spreading the joy of the sport one class at a time. Outside of golf, hobbies of mine include drawing, reading, and the occasional hike. Shuffle through the photos to find out more about me!",
  "Born in Georgia, I’ve come back for school. Recently everything has felt like an incredible full circle moment. I grew up in Woodstock before moving to Austin when I was 10. It’s safe to say I’m a southern girl through and through! Maybe someday I’ll get to live up north.",
  "Golf is a huge part of my life. While I’m at school I coach with the First Tee of Savannah, a youth development program that introduces the game and its values to all of its students. I’ve been playing golf since middle school, nearly 9 years now which is incredible. I played for my high school team as well and was my schools regional qualifier my senior year. I love playing for fun now that I’m retired from tournament play.",
  "Meet the cutest little Labradoodle in the whole wide world. I just had to include a picture of her. I miss her so much when I’m away from school. An interesting fact about me, I was a Harry Potter obsessed child. Naturally when I came time to get a dog I threw the name Leviosa into the hat. Another fun fact, I trained her to jump up or “levitate” when I cast the spell at her with a chopstick.",
  "Allow me to introduce my super duper awesome family. To my parents, I couldn’t have gotten this far without your love, support, and guidance. And to my sister, I cannot wait to see what the next years ahead of you bring. These are the coolest people you’ll ever meet, I can guarantee you that!",
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
