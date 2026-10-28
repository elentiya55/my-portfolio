'use client';

import { useTheme } from '@/components/ThemeProvider';
import CaseStudyFolders from '@/components/CaseStudyFolders';
import SkillsCarousel from '@/components/SkillsCarousel';
import CatGraphic from '@/components/CatGraphic';
import IdCard from '@/components/IdCard';
import AboutSection from '@/components/AboutSection';
import Link from 'next/link';
import SplashFade from '@/components/SplashFade';
import LoadScreen from '@/components/LoadScreen';

export default function Home() {
  const { theme } = useTheme();
  const isWhimsy = theme === 'whimsy';

  return (
    <main className="page-content home-page">
      <SplashFade />
      <LoadScreen />

      {/* ── Hero ── */}
      <section className="hero-section">
        <div style={!isWhimsy ? { paddingTop: '93px' } : undefined}>
          <p className="hero-greeting">Hello I&apos;m Evelyn -</p>
          <h1 className="hero-headline">
            An architect of the{' '}
            <span style={{ whiteSpace: 'nowrap' }}>human experience.</span>
          </h1>
        </div>

        <div className="hero-graphic">
          {isWhimsy ? <CatGraphic /> : <IdCard />}
        </div>
      </section>

      {/* ── Work / Highlighted Projects ── */}
      <section className="work-section">
        <h2 className="t-h2 section-heading" style={{ textAlign: 'center' }}>Projects Built</h2>
        <CaseStudyFolders isWhimsy={isWhimsy} />
        <div className="more-cta">
          <span className="more-cta-text">Like what you see?</span>
          <Link href="/work" className="btn more-cta-btn">more</Link>
        </div>
      </section>

      {/* ── Skills / Certifications Carousel ── */}
      <SkillsCarousel />

      {/* ── About ── */}
      <AboutSection isWhimsy={isWhimsy} />

      {/* ── Off the Clock ── */}
      <section className="clock-section">
        {isWhimsy ? (
          <div className="art-scattered">
            <img src="/art-manta-ray.png" alt="Manta Ray artwork" className="art-piece art-piece-1" draggable={false} />
            <img src="/art-mantis.jpg" alt="Mantis artwork" className="art-piece art-piece-2" draggable={false} />
            <img src="/art-elysian.jpg" alt="Elysian artwork" className="art-piece art-piece-3" draggable={false} />
            <img src="/gallery/ruby.jpg" alt="Ruby artwork" className="art-piece art-piece-4" draggable={false} />
          </div>
        ) : (
          <div className="art-grid">
            <img src="/art-manta-ray.png" alt="Manta Ray artwork" className="art-grid-piece art-grid-manta-ray" draggable={false} />
            <img src="/art-mantis.jpg" alt="Mantis artwork" className="art-grid-piece art-grid-mantis" draggable={false} />
            <img src="/art-elysian.jpg" alt="Elysian artwork" className="art-grid-piece art-grid-elysian" draggable={false} />
            <img src="/gallery/ruby.jpg" alt="Ruby artwork" className="art-grid-piece art-grid-wildflower" draggable={false} />
          </div>
        )}

        <div className="clock-text">
          <h2 className="clock-heading">Off the clock</h2>
          <p className="clock-subtext">Want to see what I do outside of work?</p>
          <Link href="/gallery" className="btn">more</Link>
        </div>
      </section>

    </main>
  );
}
