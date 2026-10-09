'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Play, Disc, ArrowDown } from 'lucide-react';
import { useMusicPlayer } from '@/context/MusicPlayerContext';
import { artistProfile } from '@/data/artistData';

export default function HeroSection() {
  const { togglePlay, openDrawer, isPlaying } = useMusicPlayer();

  const scrollToNext = () => {
    const nextSection = document.getElementById('latest-release');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-[#080808]">
      {/* Background Image with Cinematic Grading */}
      <div className="absolute inset-0 z-0">
        <Image
          src={artistProfile.heroImage}
          alt={`${artistProfile.name} Official Portrait`}
          fill
          priority
          className="object-cover object-top scale-105 animate-subtle-zoom brightness-[0.72] contrast-[1.1]"
        />

        {/* Ambient Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/70 via-transparent to-[#080808]/70" />
        <div className="absolute inset-0 cinematic-vignette opacity-85" />
      </div>

      {/* Atmospheric Gold Light Flare */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(circle,rgba(201,168,108,0.12)_0%,transparent_70%)] pointer-events-none z-1" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Subtle Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#C9A86C]/30 bg-black/40 backdrop-blur-md mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86C] animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#DFC28D] font-mono">
            New Single &ldquo;Oxymoron&rdquo; &bull; Stream on Spotify
          </span>
        </motion.div>

        {/* Massive Editorial Artist Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30, letterSpacing: '0.22em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.12em' }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-light uppercase tracking-[0.12em] text-white select-none drop-shadow-2xl leading-none"
        >
          {artistProfile.name}
        </motion.h1>

        {/* Cinematic Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-serif italic text-lg sm:text-2xl md:text-3xl text-zinc-300 font-light tracking-widest mt-4 md:mt-6 max-w-2xl"
        >
          &ldquo;{artistProfile.tagline}&rdquo;
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-12"
        >
          <button
            onClick={() => {
              togglePlay();
              openDrawer();
            }}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-[#C9A86C] hover:bg-[#DFC28D] text-black font-semibold text-xs uppercase tracking-[0.22em] transition-all duration-300 shadow-xl shadow-[#C9A86C]/20 hover:scale-105 active:scale-95"
          >
            <Play className="w-4 h-4 fill-current ml-0.5" />
            <span>{isPlaying ? 'PAUSE TRACK' : 'LISTEN NOW'}</span>
          </button>

          <Link
            href="/music"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white hover:border-[#C9A86C]/50 font-medium text-xs uppercase tracking-[0.22em] backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Disc className="w-4 h-4 text-[#C9A86C]" />
            <span>EXPLORE MUSIC</span>
          </Link>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 text-zinc-400 hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-mono group-hover:text-[#C9A86C] transition-colors">
          Scroll Down
        </span>
        <div className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-[#C9A86C]"
          />
        </div>
      </motion.button>
    </section>
  );
}
