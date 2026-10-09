'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock } from 'lucide-react';
import { YoutubeIcon } from '@/components/ui/BrandIcons';
import { useMusicPlayer } from '@/context/MusicPlayerContext';

export default function VideoModal() {
  const { activeVideo, closeVideoModal } = useMusicPlayer();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeVideoModal();
      }
    };
    if (activeVideo) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [activeVideo, closeVideoModal]);

  if (!activeVideo) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeVideoModal}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161616]">
            <div className="flex items-center space-x-3 truncate">
              <span className="text-[10px] uppercase tracking-[0.25em] px-2.5 py-1 rounded bg-[#C9A86C]/10 text-[#C9A86C] border border-[#C9A86C]/30 font-mono">
                {activeVideo.category}
              </span>
              <h4 className="text-sm md:text-base font-serif font-light text-white truncate">
                {activeVideo.title}
              </h4>
            </div>

            <button
              onClick={closeVideoModal}
              className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors ml-4"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 16:9 Responsive Video Iframe */}
          <div className="relative w-full aspect-video bg-black">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>

          {/* Video Description & Details */}
          <div className="p-6 bg-[#121212] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs text-zinc-300 max-w-2xl leading-relaxed">
                {activeVideo.description}
              </p>
              <div className="flex items-center space-x-4 text-[11px] text-zinc-400 pt-1 font-mono">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{activeVideo.releaseDate}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{activeVideo.duration}</span>
                </span>
                {activeVideo.viewsCount && <span>{activeVideo.viewsCount}</span>}
              </div>
            </div>

            <a
              href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 hover:bg-red-600 hover:text-white transition-colors text-xs uppercase tracking-wider font-semibold shrink-0"
            >
              <YoutubeIcon className="w-4 h-4" />
              <span>Watch on YouTube</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
