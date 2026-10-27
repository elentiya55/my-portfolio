import Link from 'next/link';
import StickyBackArrow from '@/components/StickyBackArrow';

export default function Project3Page() {
  return (
    <main className="page-content cs-page">

      <StickyBackArrow />

      <div className="cs-inner">

        {/* Title */}
        <h1 className="cs-title">Daily Garden: Savannah</h1>

        {/* Hero image */}
        <img
          src="/case-studies/project-3/1.png"
          alt="Daily Garden: Savannah"
          className="cs-hero-img"
        />

        <hr className="cs-divider" />

        <p className="cs-label">Coming soon</p>

        <p className="cs-body cs-conclusion" style={{ marginTop: '16px' }}>
          A new way to explore Savannah. Local wildflowers and insects are so important to the ecosystem.
          In order to maintain what we have, we need to understand what we need to protect. Daily Garden:
          Savannah is adjacent to a cozy relaxing game to play. Users get to grow their own field of
          drawings of flowers and insects that are local to Savannah. Each day a new species is available
          to learn about. As user&apos;s gardens grow, so will their understanding of the special world
          around them.
        </p>

        <hr className="cs-divider" />

        {/* Return button */}
        <div className="cs-return">
          <Link href="/work" className="btn">back</Link>
        </div>

      </div>
    </main>
  );
}
