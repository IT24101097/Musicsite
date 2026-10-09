'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  Play,
  Pause,
  ExternalLink,
  Disc,
  Clock,
  Sparkles,
  Music2,
} from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { albumsData, latestRelease } from '@/data/artistData';
import { useMusicPlayer } from '@/context/MusicPlayerContext';
import { MediaType } from '@/types/artist';

export default function MusicPage() {
  const [filter, setFilter] = useState<'ALL' | MediaType>('ALL');
  const { playTrack, togglePlay, isPlaying, currentTrack } = useMusicPlayer();

  const filteredAlbums =
    filter === 'ALL'
      ? albumsData
      : albumsData.filter((a) => a.type === filter);

  return (
    <div className="min-h-screen bg-[#080808] pb-28">
      <PageHeader
        badge="Official Discography"
        title="THE MUSIC"
        subtitle="In the process of recording new songs, Cristina strives to create music that is both relatable and authentic. Explore the discography of singles, EPs, and studio projects."
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {(['ALL', 'EP', 'SINGLE'] as const).map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item as 'ALL' | MediaType)}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                filter === item
                  ? 'bg-[#C9A86C] text-black font-semibold shadow-lg shadow-[#C9A86C]/20'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {item === 'ALL' ? 'ALL RELEASES' : `${item}S`}
            </button>
          ))}
        </div>

        {/* Albums Showcase with Tracklists */}
        <div className="space-y-24">
          {filteredAlbums.map((album, albumIndex) => (
            <motion.section
              key={album.id}
              id={album.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-8 md:p-12 rounded-3xl bg-[#121212]/70 border border-white/10 backdrop-blur-xl relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                {/* Left: Album Artwork & Meta */}
                <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 group mb-6">
                    <Image
                      src={album.coverImage}
                      alt={album.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase tracking-widest text-[#C9A86C]">
                      {album.type} &bull; {album.releaseYear}
                    </div>
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A86C] font-mono">
                    Released {album.releaseDate}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-light text-white mt-1 mb-3">
                    {album.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light mb-6">
                    {album.description}
                  </p>

                  {/* Streaming Platforms */}
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    <a
                      href={album.spotifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-emerald-950/30 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-colors text-xs font-medium"
                    >
                      <span>Spotify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={album.appleMusicUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-pink-950/30 border border-pink-500/30 text-pink-400 hover:bg-pink-500 hover:text-black transition-colors text-xs font-medium"
                    >
                      <span>Apple Music</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={album.youtubeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-red-950/30 border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white transition-colors text-xs font-medium"
                    >
                      <span>YouTube</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Right: Tracklist Table */}
                <div className="lg:col-span-7 flex flex-col">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-2">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-400 font-mono flex items-center space-x-2">
                      <Music2 className="w-3.5 h-3.5 text-[#C9A86C]" />
                      <span>Tracklist ({album.tracks.length} Songs)</span>
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-400 font-mono flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>Duration</span>
                    </span>
                  </div>

                  <div className="divide-y divide-white/5">
                    {album.tracks.map((track) => {
                      const isThisTrackPlaying =
                        isPlaying && currentTrack?.title === track.title;

                      return (
                        <div
                          key={track.id}
                          className="group py-3.5 px-3 -mx-3 rounded-xl flex items-center justify-between hover:bg-white/5 transition-colors"
                        >
                          <div className="flex items-center space-x-4 min-w-0">
                            {/* Play / Number button */}
                            <button
                              onClick={() => {
                                if (isThisTrackPlaying) {
                                  togglePlay();
                                } else {
                                  playTrack({
                                    ...track,
                                    albumTitle: album.title,
                                    coverImage: album.coverImage,
                                  });
                                }
                              }}
                              aria-label={`Play ${track.title}`}
                              className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#C9A86C] group-hover:text-black flex items-center justify-center text-zinc-400 transition-colors shrink-0"
                            >
                              {isThisTrackPlaying ? (
                                <Pause className="w-3.5 h-3.5 fill-current text-[#C9A86C] group-hover:text-black" />
                              ) : (
                                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                              )}
                            </button>

                            <div className="truncate">
                              <span
                                className={`text-sm tracking-wide font-medium block truncate ${
                                  isThisTrackPlaying
                                    ? 'text-[#C9A86C]'
                                    : 'text-white group-hover:text-[#DFC28D]'
                                } transition-colors`}
                              >
                                {track.trackNumber}. {track.title}
                              </span>
                              {track.lyricsExcerpt && (
                                <span className="text-[10px] text-zinc-500 italic truncate block">
                                  &ldquo;{track.lyricsExcerpt}&rdquo;
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center space-x-4 shrink-0 font-mono text-xs text-zinc-400">
                            <span>{track.duration}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
