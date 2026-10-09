'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Camera,
  MapPin,
  Calendar,
} from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { galleryPhotosData } from '@/data/artistData';
import { GalleryCategory, GalleryPhoto } from '@/types/artist';

const categories: GalleryCategory[] = [
  'ALL',
  'Live',
  'Studio',
  'Photoshoots',
  'Behind the Scenes',
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('ALL');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeCategory === 'ALL'
      ? galleryPhotosData
      : galleryPhotosData.filter((p) => p.category === activeCategory);

  const activePhoto: GalleryPhoto | null =
    activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] : null;

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;

      if (e.key === 'Escape') {
        setActivePhotoIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActivePhotoIndex((prev) =>
          prev !== null ? (prev + 1) % filteredPhotos.length : null
        );
      } else if (e.key === 'ArrowLeft') {
        setActivePhotoIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length
            : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    if (activePhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [activePhotoIndex, filteredPhotos.length]);

  return (
    <div className="min-h-screen bg-[#080808] pb-28">
      <PageHeader
        badge="Photography Archives"
        title="PHOTO GALLERY"
        subtitle="Live performance visuals, studio recording sessions, and official editorial portraiture of Cristina Casado."
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActivePhotoIndex(null);
              }}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[#C9A86C] text-black font-semibold shadow-lg shadow-[#C9A86C]/20'
                  : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Grid Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredPhotos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setActivePhotoIndex(idx)}
              className="group break-inside-avoid relative rounded-2xl overflow-hidden bg-[#161616] border border-white/10 cursor-pointer shadow-xl transition-all duration-300 hover:border-[#C9A86C]/50"
            >
              <div
                className={`relative w-full ${
                  photo.aspect === 'tall'
                    ? 'aspect-[3/4]'
                    : photo.aspect === 'wide'
                    ? 'aspect-[16/10]'
                    : 'aspect-square'
                }`}
              >
                <Image
                  src={photo.imageUrl}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="flex justify-end">
                    <span className="p-2 rounded-full bg-black/60 backdrop-blur-md text-[#C9A86C]">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-[#C9A86C] font-mono">
                      {photo.category} &bull; {photo.year}
                    </span>
                    <h4 className="font-serif text-xl font-light text-white mt-0.5">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-zinc-300 line-clamp-1 mt-1 font-light">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && activePhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhotoIndex(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhotoIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors z-20"
              aria-label="Close image viewer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActivePhotoIndex(
                  (activePhotoIndex - 1 + filteredPhotos.length) %
                    filteredPhotos.length
                );
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-white/10 text-white hover:bg-[#C9A86C] hover:text-black transition-colors z-20"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActivePhotoIndex(
                  (activePhotoIndex + 1) % filteredPhotos.length
                );
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-white/10 text-white hover:bg-[#C9A86C] hover:text-black transition-colors z-20"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Image Container */}
            <motion.div
              key={activePhoto.id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
            >
              <div className="relative w-full h-[65vh] md:h-[75vh]">
                <Image
                  src={activePhoto.imageUrl}
                  alt={activePhoto.title}
                  fill
                  sizes="(max-width: 1200px) 95vw, 1200px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Caption Bar */}
              <div className="mt-4 text-center max-w-xl">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A86C] font-mono">
                  {activePhoto.category} &bull; {activePhoto.year}
                  {activePhoto.location ? ` &bull; ${activePhoto.location}` : ''}
                </span>
                <h3 className="font-serif text-2xl font-light text-white mt-1">
                  {activePhoto.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 font-light">
                  {activePhoto.caption}
                </p>
                <span className="text-[10px] font-mono text-zinc-600 mt-2 block">
                  {activePhotoIndex + 1} of {filteredPhotos.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
