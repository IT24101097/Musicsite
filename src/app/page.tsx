import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import LatestReleaseSection from '@/components/home/LatestReleaseSection';
import FeaturedAlbumsSection from '@/components/home/FeaturedAlbumsSection';
import FeaturedVideoSection from '@/components/home/FeaturedVideoSection';
import UpcomingEventsSection from '@/components/home/UpcomingEventsSection';
import ArtistBioSection from '@/components/home/ArtistBioSection';
import GalleryPreviewSection from '@/components/home/GalleryPreviewSection';
import SocialMediaSection from '@/components/home/SocialMediaSection';
import NewsletterSection from '@/components/home/NewsletterSection';

export default function HomePage() {
  return (
    <main className="relative w-full">
      <HeroSection />
      <LatestReleaseSection />
      <FeaturedAlbumsSection />
      <FeaturedVideoSection />
      <UpcomingEventsSection />
      <ArtistBioSection />
      <GalleryPreviewSection />
      <SocialMediaSection />
      <NewsletterSection />
    </main>
  );
}
