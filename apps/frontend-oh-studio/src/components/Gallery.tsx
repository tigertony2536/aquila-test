import { ReactNode } from 'react';

interface GalleryProps {
  children: ReactNode;
}

const Gallery = ({ children }: GalleryProps) => {
  return (
    <div className="flex h-fit flex-col flex-wrap justify-center gap-6 p-12 md:flex-row md:flex-wrap">
      {children}
    </div>
  );
};

export default Gallery;
