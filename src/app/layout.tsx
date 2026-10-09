import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import { MusicPlayerProvider } from '@/context/MusicPlayerContext';
import Preloader from '@/components/layout/Preloader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MusicPlayerDrawer from '@/components/layout/MusicPlayerDrawer';
import VideoModal from '@/components/videos/VideoModal';
import { artistProfile } from '@/data/artistData';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${artistProfile.name} | Official Website • Chronicles of Dusk`,
  description: `${artistProfile.name} - ${artistProfile.tagline}. Official music, music videos, upcoming world tour concerts, and biography.`,
  keywords: [
    'Caspire',
    'Caspire Music',
    'Chronicles of Dusk',
    'Official Musician Website',
    'Cinematic Art Pop',
    'Live Tour Concerts',
  ],
  authors: [{ name: 'Caspire Music Group' }],
  openGraph: {
    title: `${artistProfile.name} | The Official Website`,
    description: `${artistProfile.name} - ${artistProfile.tagline}. Stream latest releases and discover tour dates.`,
    url: 'https://caspiremusic.com',
    siteName: 'Caspire Official',
    images: [
      {
        url: artistProfile.heroImage,
        width: 1200,
        height: 630,
        alt: `${artistProfile.name} Official Portrait`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${artistProfile.name} | Official Website`,
    description: `${artistProfile.name} - ${artistProfile.tagline}`,
    images: [artistProfile.heroImage],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#080808] text-white selection:bg-[#C9A86C] selection:text-black">
        <MusicPlayerProvider>
          <Preloader />
          <Navbar />
          <div className="flex-1 w-full">{children}</div>
          <Footer />
          <MusicPlayerDrawer />
          <VideoModal />
        </MusicPlayerProvider>
      </body>
    </html>
  );
}
