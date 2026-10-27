import { readFileSync } from 'fs';
import { join } from 'path';
import GalleryGrid from '@/components/gallery/GalleryGrid';

export type GalleryItem = {
  id: number;
  title: string;
  year: string;
  size: string;
  description: string;
  image: string;
  column: 1 | 2 | 3;
};

export default function GalleryPage() {
  const raw = readFileSync(join(process.cwd(), 'data/gallery.json'), 'utf-8');
  const items: GalleryItem[] = JSON.parse(raw);

  return (
    <main className="page-content gallery-page">
      <div className="gallery-page-inner">
        <GalleryGrid items={items} />
      </div>
    </main>
  );
}
