'use client';

import Link from 'next/link';
import { Fragment } from 'react';

const FOLDERS = [
  {
    tab: 'Case Study 1.0',
    title: 'Flora & Fauna: Reimagined',
    desc: 'A fresh new look to a local Savannah favorite.',
    skills: ['Figma', 'User Testing', 'Interactive Design'],
    image: '/case-studies/project-1/1.png',
    href: '/work/project-1',
  },
  {
    tab: 'Case Study 2.0',
    title: 'SCADride',
    desc: 'Rides for students, by students, a safer way to travel.',
    skills: ['UI/UX', 'Figma', 'User Research'],
    image: '/case-studies/project-2/1.png',
    href: '/work/project-2',
  },
  {
    tab: 'Case Study 3.0',
    title: 'Daily Garden: Savannah',
    desc: 'A new way to learn about Savannah and local species.',
    skills: ['Vibe Coding', 'Interactive Design', 'UI/UX'],
    image: '/work/project3-2.jpg',
    href: '/work/project-3',
  },
];

const WHIMSY_COLORS = ['#faeee6', '#ffe5e6', '#d7f4da'];
const CORPORATE_COLORS = ['#e4e4e4', '#d1d1d1', '#b2b2b2'];

export default function CaseStudyFolders({ isWhimsy }: { isWhimsy: boolean }) {
  const colors = isWhimsy ? WHIMSY_COLORS : CORPORATE_COLORS;

  return (
    <div className="folders-scene">
      {FOLDERS.map((folder, i) => (
        <Fragment key={i}>
          {i > 0 && <div className="folder-scroll-gap" />}
          <div className="folder-sticky-wrapper" style={{ zIndex: i + 1 }}>
            <div
              className="folder-tab-btn"
              style={{ left: `calc(${i} * 27.1%)`, backgroundColor: colors[i] }}
            >
              {folder.tab}
            </div>
            <Link
              href={folder.href}
              className={`folder-body folder-body-${i + 1} folder-body-link`}
              style={{ backgroundColor: colors[i] }}
            >
              <div className="folder-layout">
                <div className="folder-text-col">
                  <h3 className="folder-case-title">{folder.title}</h3>
                  <p className="folder-case-desc">{folder.desc}</p>
                  <div className="folder-tags">
                    {folder.skills.map((s, j) => (
                      <span key={j} className="folder-tag">{s}</span>
                    ))}
                  </div>
                </div>
                <div className={`folder-img${!isWhimsy ? ' folder-img--bw' : ''}`}>
                  <img
                    src={folder.image}
                    alt={folder.title}
                    className="folder-img-actual"
                    draggable={false}
                  />
                </div>
              </div>
            </Link>
          </div>
        </Fragment>
      ))}
      <div className="folder-scroll-trail" />
    </div>
  );
}
