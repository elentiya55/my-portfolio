'use client';

import { useTheme } from '@/components/ThemeProvider';
import Link from 'next/link';

const PROJECTS = [
  {
    id: 1,
    title: 'Flora & Fauna: Reimagined',
    description: 'A fresh new look to a local Savannah favorite.',
    tags: ['Figma', 'User Testing', 'Interactive Design'],
    tilts: [4, -6, 3],
    images: ['/work/project1-1.png', '/work/project1-2.png', '/work/project1-3.png'],
    href: '/work/project-1',
  },
  {
    id: 2,
    title: 'SCADride',
    description: 'Rides for students, by students, a safer way to travel.',
    tags: ['UI/UX', 'Figma', 'User Research'],
    tilts: [-5, 7, -3],
    images: ['/work/project2-1.png', '/work/project2-2.png', '/work/project2-3.png'],
    imageZooms: [1, 1.25, 1],
    href: '/work/project-2',
  },
  {
    id: 3,
    title: 'Daily Garden: Savannah',
    description: 'A new way to learn about Savannah and local species.',
    tags: ['Vibe Coding', 'Interactive Design', 'UI/UX'],
    tilts: [6, -4, 5],
    images: ['/work/project3-1.png', '/work/project3-2.jpg', '/work/project3-3.png'],
    href: '/work/project-3',
  },
];

export default function WorkPage() {
  const { theme } = useTheme();
  const isWhimsy = theme === 'whimsy';

  return (
    <main className="page-content work-page">
      <div className="work-page-inner">
      <h1 className="t-h2" style={{ textAlign: 'center', marginBottom: '-70px' }}>Projects</h1>
        {PROJECTS.map((project) => (
          <section key={project.id} className="work-project">
            <div className="work-images">
              {project.images.map((src, i) => (
                <div
                  key={i}
                  className={`work-img-box${!isWhimsy ? ' work-img-box--corp' : ''}`}
                  style={isWhimsy ? { transform: `rotate(${project.tilts[i]}deg)` } : undefined}
                >
                  {src && (
                    <img
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="work-img"
                      style={project.imageZooms?.[i] && project.imageZooms[i] !== 1
                        ? { transform: `scale(${project.imageZooms[i]})` }
                        : undefined}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="work-project-info">
              <div className="work-project-left">
                <h2 className="work-project-title">{project.title}</h2>
                <div className="work-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="folder-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="work-project-right">
                <p className="work-project-desc">{project.description}</p>
                <Link href={project.href ?? '#'} className="btn work-more-btn">more</Link>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
