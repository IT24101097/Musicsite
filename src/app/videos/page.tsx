'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Play, Film, Calendar, Clock, Sparkles } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { musicVideosData } from '@/data/artistData';
import { useMusicPlayer } from '@/context/MusicPlayerContext';
import { VideoCategory } from '@/types/artist';

const categories: VideoCategory[] = [
  'ALL',
  'OFFICIAL MUSIC VIDEOS',
  'LIVE PERFORMANCES',
  'ACOUSTIC',
  'BEHIND THE SCENES',
];

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState<VideoCategory>('ALL');
  const { openVideoModal } = useMusicPlayer();

  const filteredVideos =
    activeCategory === 'ALL'
      ? musicVideosData
      : musicVideosData.filter((v) => v.category === activeCategory);

  const featuredVideo = musicVideosData[0];

  return (
    <div className="min-h-screen bg-[#080808] pb-28">
      <PageHeader
        badge="Official Visuals"
        title="MUSIC VIDEOS"
        subtitle="Explore official music videos, live acoustic performances, and behind-the-scenes studio sessions by Cristina Casado."
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#C9A86C] text-black font-semibold shadow-lg shadow-[#C9A86C]/20'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Large Video (Only if showing ALL or matching category) */}
        {activeCategory === 'ALL' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A86C] font-mono mb-3 block">
              Spotlight Premiere
            </span>
            <div
              onClick={() => openVideoModal(featuredVideo)}
              className="group relative aspect-video w-full rounded-3xl overflow-hidden bg-[#141414] border border-white/15 shadow-2xl cursor-pointer"
            >
              <Image
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#C9A86C] text-black flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-8 h-8 md:w-10 md:h-10 fill-current ml-1" />
                </div>
              </div>

              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#C9A86C] font-mono">
                    {featuredVideo.category} &bull; {featuredVideo.releaseYear}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-wide mt-1">
                    {featuredVideo.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-zinc-300 bg-black/60 px-4 py-2 rounded-full border border-white/10 shrink-0">
                  {featuredVideo.duration} &bull; {featuredVideo.viewsCount}
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Responsive Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => openVideoModal(video)}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#141414] border border-white/10 shadow-xl mb-4">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                {/* Center Hover Play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#C9A86C] text-black flex items-center justify-center shadow-xl transform scale-90 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 font-mono text-[10px] text-white">
                  {video.duration}
                </div>
              </div>

              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A86C] font-mono mb-1">
                {video.category}
              </span>
              <h4 className="font-serif text-lg font-light text-white group-hover:text-[#DFC28D] transition-colors line-clamp-1">
                {video.title}
              </h4>
              <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed font-light">
                {video.description}
              </p>
              <div className="flex items-center space-x-3 text-[11px] font-mono text-zinc-500 mt-2">
                <span>{video.releaseDate}</span>
                {video.viewsCount && <span>&bull; {video.viewsCount}</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
