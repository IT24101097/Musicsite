'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Disc, Play } from 'lucide-react';
import { albumsData } from '@/data/artistData';
import { useMusicPlayer } from '@/context/MusicPlayerContext';

export default function FeaturedAlbumsSection() {
  const { playTrack } = useMusicPlayer();

  return (
    <section className="relative py-28 md:py-36 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
          <div>
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#C9A86C] font-mono mb-2 block">
              Discography
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light tracking-[0.08em] uppercase text-white">
              FEATURED RELEASES
            </h2>
          </div>

          <Link
            href="/music"
            className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#C9A86C] hover:text-[#DFC28D] mt-4 md:mt-0 font-medium"
          >
            <span>VIEW FULL DISCOGRAPHY</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {albumsData.slice(0, 6).map((album, idx) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative flex flex-col"
            >
              {/* Album Artwork Card */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#161616] border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-[#C9A86C]/50 group-hover:shadow-[0_0_30px_rgba(201,168,108,0.15)]">
                <Image
                  src={album.coverImage}
                  alt={album.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Quick Play First Track Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (album.tracks.length > 0) {
                      playTrack({
                        ...album.tracks[0],
                        albumTitle: album.title,
                        coverImage: album.coverImage,
                      });
                    }
                  }}
                  aria-label={`Play album ${album.title}`}
                  className="absolute top-4 right-4 w-11 h-11 rounded-full bg-[#C9A86C] text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-xl hover:scale-110 active:scale-95"
                >
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </button>

                {/* Card Bottom Meta */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A86C] font-mono">
                    {album.type} &bull; {album.releaseYear}
                  </span>
                  <h3 className="font-serif text-2xl font-light text-white tracking-wide mt-1 group-hover:text-[#DFC28D] transition-colors">
                    {album.title}
                  </h3>
                </div>
              </div>

              {/* Action row below card */}
              <div className="pt-4 flex items-center justify-between text-xs text-zinc-400">
                <span className="font-mono text-[11px]">
                  {album.tracks.length} Tracks
                </span>

                <Link
                  href={`/music#${album.slug}`}
                  className="inline-flex items-center space-x-1.5 text-zinc-300 hover:text-[#C9A86C] transition-colors uppercase tracking-wider text-[11px] font-medium"
                >
                  <Disc className="w-3.5 h-3.5" />
                  <span>VIEW ALBUM</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
