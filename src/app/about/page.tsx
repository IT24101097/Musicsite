'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  Trophy,
  Award,
  Sparkles,
  Milestone,
  CheckCircle,
  Quote,
} from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import {
  artistProfile,
  careerMilestones,
  awardsData,
} from '@/data/artistData';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080808] pb-28">
      <PageHeader
        badge="Biography & Odyssey"
        title="ABOUT CASPIRE"
        subtitle="A journey through sonic worldbuilding, classical conservatory disciplines, and the evolution of modern cinematic pop."
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 space-y-28">
        {/* Section 1 & 2: Cinematic Intro & Full Biography */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={artistProfile.studioPortrait}
                alt={artistProfile.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            </div>

            {/* Quote badge */}
            <div className="mt-6 p-6 rounded-2xl bg-[#141414] border border-white/10">
              <Quote className="w-5 h-5 text-[#C9A86C] mb-2" />
              <p className="font-serif italic text-sm text-zinc-300 leading-relaxed">
                &ldquo;{artistProfile.quote}&rdquo;
              </p>
              <span className="text-[10px] uppercase tracking-widest text-[#C9A86C] font-mono mt-2 block">
                — {artistProfile.quoteAuthor}
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-6">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#C9A86C] font-mono">
              The Genesis & Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white uppercase tracking-wide">
              SOUND AS AN ARCHITECTURE OF EMOTION
            </h2>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
              {artistProfile.bioFull.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Quick Fact sheet */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <span className="text-[10px] font-mono uppercase text-zinc-400">
                  GENRES
                </span>
                <span className="text-xs text-white font-medium block mt-1">
                  Cinematic Pop
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-zinc-400">
                  STUDIO BASES
                </span>
                <span className="text-xs text-white font-medium block mt-1">
                  London & LA
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-zinc-400">
                  INSTRUMENTS
                </span>
                <span className="text-xs text-white font-medium block mt-1">
                  Piano, Synthesizers
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-zinc-400">
                  ORCHESTRAL
                </span>
                <span className="text-xs text-white font-medium block mt-1">
                  Live String Ensemble
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Animated Vertical Career Timeline */}
        <section className="relative py-12">
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#C9A86C] font-mono mb-2 block">
              Timeline
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase text-white tracking-wide">
              CAREER MILESTONES
            </h3>
            <div className="w-16 h-0.5 bg-[#C9A86C]/50 mx-auto mt-4" />
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/15 -translate-x-1/2" />

            <div className="space-y-12">
              {careerMilestones.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={item.year + item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`relative flex flex-col md:flex-row items-start ${
                      isEven ? 'md:flex-row-reverse' : ''
                    } gap-8`}
                  >
                    {/* Node Dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#080808] border-2 border-[#C9A86C] z-10" />

                    {/* Content Card */}
                    <div className="ml-10 md:ml-0 md:w-1/2 p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#C9A86C]/40 transition-colors">
                      <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#C9A86C] font-mono mb-1">
                        <Milestone className="w-3.5 h-3.5" />
                        <span>{item.year} &bull; {item.tag}</span>
                      </div>
                      <h4 className="font-serif text-xl font-light text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#DFC28D] font-mono mt-0.5 mb-2">
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 5: Awards and Achievements */}
        <section className="p-8 md:p-12 rounded-3xl bg-[#121212]/70 border border-white/10 backdrop-blur-xl">
          <div className="text-center mb-12">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#C9A86C] font-mono mb-2 block">
              Recognition
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-light uppercase text-white tracking-wide">
              AWARDS & HONORS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awardsData.map((award, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#C9A86C]/10 border border-[#C9A86C]/30 flex items-center justify-center text-[#C9A86C]">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[9px] font-mono tracking-widest bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 uppercase">
                    {award.result}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C9A86C] font-mono">
                    {award.year} &bull; {award.organization}
                  </span>
                  <h4 className="font-serif text-lg font-light text-white mt-1">
                    {award.category}
                  </h4>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    For &ldquo;{award.work}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Notable Collaborations */}
        <section className="text-center">
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#C9A86C] font-mono mb-2 block">
            Creative Alliances
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-light uppercase text-white tracking-wide mb-8">
            NOTABLE COLLABORATORS
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: 'Royal Philharmonic Orchestra',
                role: 'Symphonic Scoring & Live Residency',
              },
              {
                name: 'Julian Thorne',
                role: 'Featured Vocalist & Duet Partner',
              },
              {
                name: 'Claire De La Tour',
                role: 'Visual Cinematography Director',
              },
              {
                name: 'Abbey Road Studio Two',
                role: 'Analogue Tape & Acoustic Mastering',
              },
            ].map((collab, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#141414] border border-white/10"
              >
                <h5 className="font-medium text-white text-sm">
                  {collab.name}
                </h5>
                <p className="text-xs text-zinc-400 mt-1 font-light">
                  {collab.role}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
