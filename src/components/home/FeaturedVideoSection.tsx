'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Play, ArrowRight, Film } from 'lucide-react';
import { musicVideosData } from '@/data/artistData';
import { useMusicPlayer } from '@/context/MusicPlayerContext';

export default function FeaturedVideoSection() {
  const { openVideoModal } = useMusicPlayer();
  const featuredVideo = musicVideosData[0]; // Lead official video

  return (
    <section className="relative py-28 md:py-36 bg-[#0a0a0a] overflow-hidden border-t border-b border-white/5">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(201,168,108,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div>
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#C9A86C] font-mono mb-2 flex items-center space-x-2">
              <Film className="w-3.5 h-3.5" />
              <span>Cinematography</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light tracking-[0.08em] uppercase text-white">
              FEATURED MUSIC VIDEO
            </h2>
          </div>

          <Link
            href="/videos"
            className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#C9A86C] hover:text-[#DFC28D] mt-4 md:mt-0 font-medium"
          >
            <span>EXPLORE ALL VIDEOS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Large Cinematic Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onClick={() => openVideoModal(featuredVideo)}
          className="group relative aspect-video w-full rounded-3xl overflow-hidden bg-[#141414] border border-white/10 shadow-2xl cursor-pointer"
        >
          {/* Video Thumbnail */}
          <Image
            src={featuredVideo.thumbnail}
            alt={featuredVideo.title}
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />

          {/* Cinematic Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30 group-hover:bg-black/40 transition-colors duration-500" />

          {/* Center Pulsing Animated Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-24 w-24 rounded-full bg-[#C9A86C]/40 opacity-75" />
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#C9A86C] text-black flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-115">
                <Play className="w-8 h-8 md:w-10 md:h-10 fill-current ml-1" />
              </div>
            </div>
          </div>

          {/* Bottom Bar Info */}
          <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#C9A86C] font-mono">
                {featuredVideo.category} &bull; {featuredVideo.releaseYear}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-wide mt-1">
                {featuredVideo.title}
              </h3>
              <p className="text-zinc-300 text-xs md:text-sm mt-2 line-clamp-2 font-light">
                {featuredVideo.description}
              </p>
            </div>

            <div className="shrink-0 flex items-center space-x-3">
              <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-xs uppercase tracking-[0.15em] border border-white/15">
                Watch Official Video ({featuredVideo.duration})
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
