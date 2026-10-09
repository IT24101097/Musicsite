'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Quote, Sparkles } from 'lucide-react';
import { artistProfile } from '@/data/artistData';

export default function ArtistBioSection() {
  return (
    <section className="relative py-28 md:py-36 bg-[#0c0c0c] overflow-hidden border-t border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(201,168,108,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large Artistic Musician Portrait */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group"
            >
              <Image
                src={artistProfile.profilePortrait}
                alt={`${artistProfile.name} Portrait`}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              {/* Editorial Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Floating Quote Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/10">
                <div className="flex items-start space-x-3">
                  <Quote className="w-5 h-5 text-[#C9A86C] shrink-0 mt-0.5" />
                  <p className="text-xs text-zinc-300 italic font-serif leading-relaxed">
                    &ldquo;{artistProfile.quote}&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: The Story Behind The Music */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col space-y-6 text-left"
          >
            <div>
              <span className="text-[11px] uppercase tracking-[0.35em] text-[#C9A86C] font-mono mb-2 flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Behind the Music</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.06em] uppercase text-white mt-2">
                BEHIND THE MUSIC
              </h2>
            </div>

            <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light">
              {artistProfile.bioShort}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-b border-white/10 py-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono block">
                  GENRES
                </span>
                <span className="text-xs text-white font-medium mt-1 block">
                  {artistProfile.genres.slice(0, 2).join(' & ')}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono block">
                  ORIGINS
                </span>
                <span className="text-xs text-white font-medium mt-1 block">
                  {artistProfile.hometown}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono block">
                  JOURNEY
                </span>
                <span className="text-xs text-white font-medium mt-1 block">
                  Active Since 2020 &bull; Debut EP
                </span>
              </div>
            </div>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#C9A86C] hover:bg-[#DFC28D] text-black font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-[#C9A86C]/20"
              >
                <span>DISCOVER MY STORY</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
