'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Play, Pause, ExternalLink, Sparkles, Disc3 } from 'lucide-react';
import { useMusicPlayer } from '@/context/MusicPlayerContext';
import { latestRelease } from '@/data/artistData';

export default function LatestReleaseSection() {
  const { playTrack, togglePlay, isPlaying, currentTrack } = useMusicPlayer();

  const isCurrentReleasePlaying =
    isPlaying && currentTrack?.title === latestRelease.songTitle;

  return (
    <section
      id="latest-release"
      className="relative py-28 md:py-36 bg-[#0c0c0c] overflow-hidden border-t border-b border-white/5"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(201,168,108,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#C9A86C] font-mono mb-2 flex items-center space-x-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Music Release</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light tracking-[0.1em] uppercase text-white">
            THE LATEST RELEASE
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A86C]/50 mt-4" />
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Artwork with Vinyl Glow */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative group w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 p-2 bg-gradient-to-br from-white/10 via-black to-black">
              {/* Cover Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={latestRelease.coverImage}
                  alt={latestRelease.songTitle}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle dark gradient overlay on artwork */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                {/* Center Play Button Overlay */}
                <button
                  onClick={() => {
                    if (isCurrentReleasePlaying) {
                      togglePlay();
                    } else {
                      playTrack({
                        title: latestRelease.songTitle,
                        albumTitle: latestRelease.albumTitle,
                        coverImage: latestRelease.coverImage,
                        duration: latestRelease.duration,
                        previewAudioUrl: latestRelease.previewAudioUrl,
                        spotifyUrl: latestRelease.spotifyUrl,
                        appleMusicUrl: latestRelease.appleMusicUrl,
                      });
                    }
                  }}
                  aria-label={isCurrentReleasePlaying ? 'Pause song' : 'Play song'}
                  className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-[#C9A86C]/90 hover:bg-[#DFC28D] text-black flex items-center justify-center transition-all duration-300 shadow-2xl hover:scale-110 active:scale-95 group-hover:opacity-100"
                >
                  {isCurrentReleasePlaying ? (
                    <Pause className="w-8 h-8 fill-current" />
                  ) : (
                    <Play className="w-8 h-8 fill-current ml-1" />
                  )}
                </button>
              </div>

              {/* Floating Single Tag */}
              <div className="absolute bottom-6 left-6 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[10px] uppercase tracking-[0.25em] text-[#C9A86C] font-mono">
                OUT NOW WORLDWIDE
              </div>
            </div>
          </div>

          {/* Right Column: Information & Streaming Integrations */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-mono">
                From the Album &bull; {latestRelease.albumTitle}
              </span>
              <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-wide mt-2">
                {latestRelease.songTitle}
              </h3>
              <p className="text-xs text-[#C9A86C] font-mono tracking-widest uppercase mt-2">
                Released {latestRelease.releaseDate} &bull; {latestRelease.duration}
              </p>
            </div>

            <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light">
              {latestRelease.description}
            </p>

            {/* Audio Preview Action */}
            <div className="pt-2">
              <button
                onClick={() => {
                  if (isCurrentReleasePlaying) {
                    togglePlay();
                  } else {
                    playTrack({
                      title: latestRelease.songTitle,
                      albumTitle: latestRelease.albumTitle,
                      coverImage: latestRelease.coverImage,
                      duration: latestRelease.duration,
                      previewAudioUrl: latestRelease.previewAudioUrl,
                      spotifyUrl: latestRelease.spotifyUrl,
                      appleMusicUrl: latestRelease.appleMusicUrl,
                    });
                  }
                }}
                className="inline-flex items-center space-x-3 px-6 py-3.5 rounded-full bg-white text-black hover:bg-[#C9A86C] transition-all duration-300 text-xs uppercase tracking-[0.2em] font-semibold hover:scale-105 active:scale-95 shadow-lg"
              >
                {isCurrentReleasePlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>PAUSE PREVIEW</span>
                  </>
                ) : (
                  <>
                    <Disc3 className="w-4 h-4 animate-spin" />
                    <span>LISTEN TO AUDIO PREVIEW</span>
                  </>
                )}
              </button>
            </div>

            {/* External Streaming Platform Links */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-mono block mb-3">
                Stream On Your Preferred Platform:
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href={latestRelease.spotifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#1db954]/10 hover:bg-[#1db954] text-[#1db954] hover:text-black border border-[#1db954]/30 transition-all text-xs font-semibold uppercase tracking-wider"
                >
                  <span>Spotify</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={latestRelease.appleMusicUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#fc3c44]/10 hover:bg-[#fc3c44] text-[#fc3c44] hover:text-white border border-[#fc3c44]/30 transition-all text-xs font-semibold uppercase tracking-wider"
                >
                  <span>Apple Music</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={latestRelease.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white border border-red-500/30 transition-all text-xs font-semibold uppercase tracking-wider"
                >
                  <span>YouTube Music</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
