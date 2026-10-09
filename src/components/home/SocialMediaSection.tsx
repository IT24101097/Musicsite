'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import {
  SpotifyIcon,
  AppleMusicIcon,
  YoutubeIcon,
  InstagramIcon,
  TikTokIcon,
  FacebookIcon,
} from '@/components/ui/BrandIcons';
import { artistProfile } from '@/data/artistData';

const socialChannels = [
  {
    name: 'Spotify',
    handle: '@caspire',
    followers: '4.8M Monthly Listeners',
    url: artistProfile.socialLinks.spotify,
    icon: SpotifyIcon,
    color: 'hover:border-[#1db954] hover:text-[#1db954]',
  },
  {
    name: 'Apple Music',
    handle: 'Caspire Official',
    followers: 'Spatial Audio Releases',
    url: artistProfile.socialLinks.appleMusic,
    icon: AppleMusicIcon,
    color: 'hover:border-[#fc3c44] hover:text-[#fc3c44]',
  },
  {
    name: 'YouTube',
    handle: '@caspiremusic',
    followers: '2.1M Subscribers',
    url: artistProfile.socialLinks.youtube,
    icon: YoutubeIcon,
    color: 'hover:border-[#ff0000] hover:text-[#ff0000]',
  },
  {
    name: 'Instagram',
    handle: '@caspire',
    followers: '3.4M Followers',
    url: artistProfile.socialLinks.instagram,
    icon: InstagramIcon,
    color: 'hover:border-[#e1306c] hover:text-[#e1306c]',
  },
  {
    name: 'TikTok',
    handle: '@caspiremusic',
    followers: '1.9M Followers',
    url: artistProfile.socialLinks.tiktok,
    icon: TikTokIcon,
    color: 'hover:border-[#00f2fe] hover:text-[#00f2fe]',
  },
  {
    name: 'Facebook',
    handle: 'Caspire Official',
    followers: '850K Followers',
    url: artistProfile.socialLinks.facebook || 'https://facebook.com',
    icon: FacebookIcon,
    color: 'hover:border-[#1877f2] hover:text-[#1877f2]',
  },
];

export default function SocialMediaSection() {
  return (
    <section className="relative py-28 md:py-36 bg-[#0c0c0c] overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#C9A86C] font-mono mb-2">
            Global Artist Presence
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light tracking-[0.08em] uppercase text-white">
            STAY CONNECTED
          </h2>
          <p className="text-xs md:text-sm text-zinc-400 max-w-lg mt-3 font-light">
            Follow Caspire across all verified official channels for live updates, behind the scenes moments, and studio previews.
          </p>
          <div className="w-16 h-0.5 bg-[#C9A86C]/50 mt-4" />
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialChannels.map((channel) => {
            const Icon = channel.icon;
            return (
              <a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noreferrer"
                className={`group p-6 rounded-2xl bg-[#141414] border border-white/10 ${channel.color} transition-all duration-300 flex items-center justify-between text-left hover:scale-[1.02] shadow-xl`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-base">
                      {channel.name}
                    </h4>
                    <span className="text-xs text-zinc-400 block font-mono">
                      {channel.handle}
                    </span>
                    <span className="text-[10px] text-zinc-500 block font-mono mt-0.5">
                      {channel.followers}
                    </span>
                  </div>
                </div>

                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
