'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, ArrowUp } from 'lucide-react';
import {
  SpotifyIcon,
  AppleMusicIcon,
  YoutubeIcon,
  InstagramIcon,
} from '@/components/ui/BrandIcons';
import { artistProfile } from '@/data/artistData';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'MUSIC', href: '/music' },
  { name: 'VIDEOS', href: '/videos' },
  { name: 'EVENTS', href: '/events' },
  { name: 'ABOUT', href: '/about' },
  { name: 'GALLERY', href: '/gallery' },
  { name: 'CONTACT', href: '/contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Subtle glow in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[radial-gradient(ellipse_at_top,rgba(201,168,108,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl md:text-4xl font-light tracking-[0.25em] uppercase text-white hover:text-[#DFC28D] transition-colors">
                CASPIRE
              </span>
            </Link>
            <p className="text-zinc-400 text-xs md:text-sm max-w-sm leading-relaxed font-light">
              {artistProfile.tagline} • Official Artist Management & Representation.
            </p>
            <div className="pt-2 text-xs text-zinc-500 font-mono">
              <span>Management: </span>
              <a
                href={`mailto:${artistProfile.management.generalEmail}`}
                className="text-[#C9A86C] hover:underline"
              >
                {artistProfile.management.generalEmail}
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 flex flex-col space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A86C] font-mono mb-2">
              Explore
            </span>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs uppercase tracking-[0.15em] text-zinc-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect / Socials */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A86C] font-mono mb-2">
              Official Channels
            </span>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={artistProfile.socialLinks.spotify}
                target="_blank"
                rel="noreferrer"
                aria-label="Spotify"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#C9A86C] hover:border-[#C9A86C]/40 hover:bg-white/10 transition-all"
              >
                <SpotifyIcon className="w-4 h-4" />
              </a>
              <a
                href={artistProfile.socialLinks.appleMusic}
                target="_blank"
                rel="noreferrer"
                aria-label="Apple Music"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#C9A86C] hover:border-[#C9A86C]/40 hover:bg-white/10 transition-all"
              >
                <AppleMusicIcon className="w-4 h-4" />
              </a>
              <a
                href={artistProfile.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#C9A86C] hover:border-[#C9A86C]/40 hover:bg-white/10 transition-all"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={artistProfile.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#C9A86C] hover:border-[#C9A86C]/40 hover:bg-white/10 transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                aria-label="Contact Management"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#C9A86C] hover:border-[#C9A86C]/40 hover:bg-white/10 transition-all"
              >
                <Mail className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-[11px] text-zinc-500 pt-2">
              For corporate bookings & press licensing, please reach out via our contact portal.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-zinc-500 font-mono gap-4">
          <p>© {new Date().getFullYear()} CASPIRE MUSIC GROUP. ALL RIGHTS RESERVED.</p>

          <div className="flex items-center space-x-6">
            <span className="hover:text-zinc-300 cursor-pointer">PRIVACY POLICY</span>
            <span>•</span>
            <span className="hover:text-zinc-300 cursor-pointer">TERMS OF USE</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 text-[#C9A86C] hover:text-white transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
