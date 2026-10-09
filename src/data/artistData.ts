import {
  ArtistProfile,
  Album,
  MusicVideo,
  TourEvent,
  GalleryPhoto,
  CareerMilestone,
  AwardItem,
} from '@/types/artist';

export const artistProfile: ArtistProfile = {
  name: 'CRISTINA CASADO',
  alias: 'Cristina Casado Music',
  title: 'Pop Singer-Songwriter & Vocalist',
  tagline: 'THE SOUND OF MODERN LATIN & ANGLO POP',
  heroSubtitle:
    'A captivating blend of sincere storytelling, acoustic warmth, and Anglo-Saxon & Latin pop fusion.',
  bioShort:
    'Cristina Casado is a Dominican pop singer-songwriter renowned for her emotive vocals, sensitive lyricism, and seamless fusion of contemporary Anglo-Saxon and Latin pop.',
  bioFull: [
    'Beginning her musical studies at just eight years old with piano, guitar, and vocal training, Cristina Casado was drawn early on to the craft of melodic storytelling. Inspired by Anglo-Saxon pop music and rooted in the vibrant artistic spirit of the Dominican Republic, her work blends acoustic intimacy with modern pop sensibilities.',
    'In 2021, Cristina made her formal debut with "Without You", an emotional confessional produced by Álvaro Dinzey that marked songwriting as her deepest medium of healing and artistic expression. She quickly rose through the Dominican music landscape, with singles such as "Don\'t Ask Don\'t Tell" capturing the #1 spot on English-language radio charts.',
    'Today, collaborating with Dare Management in Miami and visionary producers including Danicrazytown, Cristina has released acclaimed singles like "Reliquia", "Lilac", "Oxymoron", and "Me Perdiste". With an expanding international presence, showcase performances, and her anticipated upcoming EP, Cristina Casado is cementing her place as one of the most compelling rising voices in contemporary pop.',
  ],
  // Official Spotify Artist Portrait & editorial imagery
  heroImage:
    'https://i.scdn.co/image/ab6761610000e5eb4ebf92e28dfd1ebf54ec36be',
  heroSecondaryImage:
    'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=2400&q=85',
  profilePortrait:
    'https://i.scdn.co/image/ab6761610000e5eb4ebf92e28dfd1ebf54ec36be',
  studioPortrait:
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=85',
  quote:
    'I believe that my success is linked to the love and support of my fans. Music is a tool for storytelling, connection, and emotional truth.',
  quoteAuthor: 'Cristina Casado',
  genres: ['Pop', 'Latin Pop', 'Pop R&B', 'Bilingual Pop', 'Acoustic Pop'],
  hometown: 'Santo Domingo, Dominican Republic & Miami, FL',
  yearsActive: '2020 – Present',
  socialLinks: {
    spotify: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
    appleMusic: 'https://music.apple.com/artist/cristina-casado/1564757304',
    youtube: 'https://www.youtube.com/@cristinacasadomusic',
    instagram: 'https://www.instagram.com/cristinacasadomusic',
    tiktok: 'https://www.tiktok.com/@cristinacasadomusic',
    twitter: 'https://x.com/cristinacasado',
    facebook: 'https://www.facebook.com/cristinacasadomusic',
  },
  management: {
    generalEmail: 'cristinacasadomusic@gmail.com',
    bookingEmail: 'cristinacasadomusic@gmail.com',
    pressEmail: 'cristinacasadomusic@gmail.com',
    phone: '+1 (305) 555-0199',
    location: 'Dare Management, Miami, FL & Santo Domingo, Dominican Republic',
  },
};

export const albumsData: Album[] = [
  {
    id: 'album-1',
    slug: 'reliquia',
    title: 'RELIQUIA',
    type: 'EP',
    releaseDate: 'July 17, 2025',
    releaseYear: '2025',
    coverImage:
      'https://i.scdn.co/image/ab6761610000e5eb4ebf92e28dfd1ebf54ec36be',
    bannerImage:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2000&q=85',
    description:
      'A landmark bilingual pop R&B project exploring timeless commitment, secrecy, and emotional depth. Featuring the international hit title track "Reliquia", "Oxymoron", and "Lilac".',
    spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
    appleMusicUrl: 'https://music.apple.com/artist/cristina-casado/1564757304',
    youtubeUrl: 'https://www.youtube.com/watch?v=kY3j9s56o-o',
    featured: true,
    tracks: [
      {
        id: 't-101',
        albumId: 'album-1',
        trackNumber: 1,
        title: 'Reliquia',
        duration: '3:34',
        durationSeconds: 214,
        previewAudioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
        appleMusicUrl: 'https://music.apple.com/artist/cristina-casado/1564757304',
        youtubeUrl: 'https://www.youtube.com/watch?v=kY3j9s56o-o',
        producer: 'Danicrazytown & Cristina Casado',
        lyricsExcerpt:
          'Though our road is no longer rosy, what we have is a sacred relic. En cada latido guardo el secreto que nos une...',
      },
      {
        id: 't-102',
        albumId: 'album-1',
        trackNumber: 2,
        title: 'Oxymoron',
        duration: '3:42',
        durationSeconds: 222,
        previewAudioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
        appleMusicUrl: 'https://music.apple.com/artist/cristina-casado/1564757304',
        youtubeUrl: 'https://www.youtube.com/watch?v=kY3j9s56o-o',
        producer: 'Danicrazytown',
        lyricsExcerpt:
          'You are a walking oxymoron, whispering silence in the storm. You say you love me while pulling away...',
      },
      {
        id: 't-103',
        albumId: 'album-1',
        trackNumber: 3,
        title: 'Lilac',
        duration: '3:18',
        durationSeconds: 198,
        previewAudioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
        appleMusicUrl: 'https://music.apple.com/artist/cristina-casado/1564757304',
        youtubeUrl: 'https://www.youtube.com/watch?v=F0kQv2WnQ-0',
        producer: 'Cristina Casado',
        lyricsExcerpt:
          'Under the lilac sky, innocent and young. A sweet first chapter in a song left unsung...',
      },
      {
        id: 't-104',
        albumId: 'album-1',
        trackNumber: 4,
        title: 'Writing On A Wall',
        duration: '3:26',
        durationSeconds: 206,
        previewAudioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
        spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
        appleMusicUrl: 'https://music.apple.com/artist/cristina-casado/1564757304',
        youtubeUrl: 'https://www.youtube.com/watch?v=kY3j9s56o-o',
      },
      {
        id: 't-105',
        albumId: 'album-1',
        trackNumber: 5,
        title: 'Fool For You',
        duration: '3:50',
        durationSeconds: 230,
        previewAudioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
        spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
        appleMusicUrl: 'https://music.apple.com/artist/cristina-casado/1564757304',
        youtubeUrl: 'https://www.youtube.com/watch?v=kY3j9s56o-o',
      },
    ],
  },
  {
    id: 'album-2',
    slug: 'singles-collection',
    title: 'THE SINGLES & SESSIONS',
    type: 'ALBUM',
    releaseDate: 'November 21, 2024',
    releaseYear: '2024',
    coverImage:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=85',
    bannerImage:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=2000&q=85',
    description:
      'The complete compilation of Cristina Casado’s chart-topping radio hits, acoustic sessions, and bilingual pop singles including "#1 hit Don\'t Ask Don\'t Tell" and "Me Perdiste".',
    spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
    appleMusicUrl: 'https://music.apple.com/artist/cristina-casado/1564757304',
    youtubeUrl: 'https://www.youtube.com/@cristinacasadomusic',
    featured: true,
    tracks: [
      {
        id: 't-201',
        albumId: 'album-2',
        trackNumber: 1,
        title: "Don't Ask Don't Tell",
        duration: '3:15',
        durationSeconds: 195,
        previewAudioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
        spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
        appleMusicUrl: 'https://music.apple.com/artist/cristina-casado/1564757304',
        youtubeUrl: 'https://www.youtube.com/@cristinacasadomusic',
        producer: 'Dare Management Team',
        lyricsExcerpt:
          "Keep the secrets between the shadows and the light. Don't ask, don't tell what we felt tonight...",
      },
      {
        id: 't-202',
        albumId: 'album-2',
        trackNumber: 2,
        title: 'Me Perdiste',
        duration: '3:28',
        durationSeconds: 208,
        previewAudioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
        spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
        appleMusicUrl: 'https://music.apple.com/artist/cristina-casado/1564757304',
        youtubeUrl: 'https://www.youtube.com/@cristinacasadomusic',
        producer: 'Cristina Casado',
      },
      {
        id: 't-203',
        albumId: 'album-2',
        trackNumber: 3,
        title: 'Pausa',
        duration: '3:45',
        durationSeconds: 225,
        previewAudioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
        spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
        appleMusicUrl: 'https://music.apple.com/artist/cristina-casado/1564757304',
        youtubeUrl: 'https://www.youtube.com/@cristinacasadomusic',
      },
      {
        id: 't-204',
        albumId: 'album-2',
        trackNumber: 4,
        title: 'Reliquia (Acoustic Unplugged)',
        duration: '3:40',
        durationSeconds: 220,
        previewAudioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
        spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
        appleMusicUrl: 'https://music.apple.com/artist/cristina-casado/1564757304',
        youtubeUrl: 'https://www.youtube.com/watch?v=F0kQv2WnQ-0',
      },
      {
        id: 't-205',
        albumId: 'album-2',
        trackNumber: 5,
        title: 'Lilac (Piano Live Session)',
        duration: '3:22',
        durationSeconds: 202,
        previewAudioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
        appleMusicUrl: 'https://music.apple.com/artist/cristina-casado/1564757304',
        youtubeUrl: 'https://www.youtube.com/watch?v=F0kQv2WnQ-0',
      },
    ],
  },
  {
    id: 'album-3',
    slug: 'without-you-single',
    title: 'WITHOUT YOU (THE GENESIS)',
    type: 'SINGLE',
    releaseDate: 'April 30, 2021',
    releaseYear: '2021',
    coverImage:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85',
    bannerImage:
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=2000&q=85',
    description:
      'Cristina Casado’s breakout debut single produced by Álvaro Dinzey. A delicate, heart-rending piano pop ballad that first brought her voice to international listeners.',
    spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
    appleMusicUrl: 'https://music.apple.com/artist/cristina-casado/1564757304',
    youtubeUrl: 'https://www.youtube.com/@cristinacasadomusic',
    featured: true,
    tracks: [
      {
        id: 't-301',
        albumId: 'album-3',
        trackNumber: 1,
        title: 'Without You',
        duration: '3:52',
        durationSeconds: 232,
        previewAudioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
        appleMusicUrl: 'https://music.apple.com/artist/cristina-casado/1564757304',
        youtubeUrl: 'https://www.youtube.com/@cristinacasadomusic',
        producer: 'Álvaro Dinzey',
        lyricsExcerpt:
          'Learning to breathe again when you are not around. Standing in the echoes of what we used to be...',
      },
      {
        id: 't-302',
        albumId: 'album-3',
        trackNumber: 2,
        title: 'Without You (Acoustic Guitar Version)',
        duration: '4:05',
        durationSeconds: 245,
        previewAudioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
        appleMusicUrl: 'https://music.apple.com/artist/cristina-casado/1564757304',
        youtubeUrl: 'https://www.youtube.com/@cristinacasadomusic',
      },
    ],
  },
];

export const latestRelease = {
  songTitle: 'Oxymoron',
  albumTitle: 'Reliquia / Dare Sessions',
  releaseDate: 'October 3, 2025',
  releaseYear: '2025',
  duration: '3:42',
  coverImage:
    'https://i.scdn.co/image/ab6761610000e5eb4ebf92e28dfd1ebf54ec36be',
  description:
    'The compelling bilingual pop single from Cristina Casado, produced, mixed, and mastered by Danicrazytown. Exploring the bittersweet contradictions of romance through delicate vocals and modern synth-pop textures.',
  previewAudioUrl:
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
  appleMusicUrl: 'https://music.apple.com/artist/cristina-casado/1564757304',
  youtubeUrl: 'https://www.youtube.com/watch?v=kY3j9s56o-o',
};

export const musicVideosData: MusicVideo[] = [
  {
    id: 'vid-1',
    title: 'Reliquia (Official Music Video)',
    youtubeId: 'kY3j9s56o-o',
    category: 'OFFICIAL MUSIC VIDEOS',
    releaseYear: '2025',
    releaseDate: 'July 17, 2025',
    duration: '3:34',
    thumbnail:
      'https://img.youtube.com/vi/kY3j9s56o-o/maxresdefault.jpg',
    featured: true,
    description:
      'The official music video for "Reliquia", capturing the timeless intimacy and bilingual lyricism of Cristina Casado’s signature pop R&B ballad.',
    viewsCount: '1.2M views',
  },
  {
    id: 'vid-2',
    title: 'Lilac & Reliquia (Live Acoustic Showcase)',
    youtubeId: 'F0kQv2WnQ-0',
    category: 'LIVE PERFORMANCES',
    releaseYear: '2025',
    releaseDate: 'August 10, 2025',
    duration: '6:12',
    thumbnail:
      'https://img.youtube.com/vi/F0kQv2WnQ-0/maxresdefault.jpg',
    featured: false,
    description:
      'Pure acoustic talent: Cristina Casado performs stripped-down renditions of "Lilac" and "Reliquia" live in studio.',
    viewsCount: '490K views',
  },
  {
    id: 'vid-3',
    title: 'Oxymoron (Official Visualizer)',
    youtubeId: 'kY3j9s56o-o',
    category: 'OFFICIAL MUSIC VIDEOS',
    releaseYear: '2025',
    releaseDate: 'October 03, 2025',
    duration: '3:42',
    thumbnail:
      'https://i.scdn.co/image/ab6761610000e5eb4ebf92e28dfd1ebf54ec36be',
    featured: false,
    description:
      'Visual aesthetic for "Oxymoron", exploring modern relationship contradictions and produced by Danicrazytown.',
    viewsCount: '650K views',
  },
  {
    id: 'vid-4',
    title: 'Without You (Debut Performance)',
    youtubeId: 'kY3j9s56o-o',
    category: 'ACOUSTIC',
    releaseYear: '2021',
    releaseDate: 'April 30, 2021',
    duration: '3:55',
    thumbnail:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1400&q=85',
    featured: false,
    description:
      'Raw acoustic performance of the debut single produced by Álvaro Dinzey, recorded live with grand piano and strings.',
    viewsCount: '890K views',
  },
  {
    id: 'vid-5',
    title: 'In The Studio: The Creative Journey (Canela Music)',
    youtubeId: 'kY3j9s56o-o',
    category: 'BEHIND THE SCENES',
    releaseYear: '2025',
    releaseDate: 'September 15, 2025',
    duration: '14:20',
    thumbnail:
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=85',
    featured: false,
    description:
      'Exclusive behind-the-scenes studio feature with Canela Music, exploring Cristina Casado’s songwriting process with Dare Management.',
    viewsCount: '310K views',
  },
  {
    id: 'vid-6',
    title: 'Live at Women Who Dare Showcase (Miami)',
    youtubeId: 'F0kQv2WnQ-0',
    category: 'LIVE PERFORMANCES',
    releaseYear: '2025',
    releaseDate: 'March 21, 2025',
    duration: '4:48',
    thumbnail:
      'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1400&q=85',
    featured: false,
    description:
      'Highlights from Cristina Casado’s electrifying live set at the Women Who Dare festival in Miami Beach.',
    viewsCount: '580K views',
  },
];

export const tourEventsData: TourEvent[] = [
  {
    id: 'event-1',
    title: 'WOMEN WHO DARE SHOWCASE',
    tourName: 'Dare Management Showcase',
    date: '2026-03-21T20:00:00Z',
    displayDate: '21 MAR 2026',
    time: '8:00 PM',
    venue: 'Dare Soundstage, Miami Beach',
    city: 'Miami',
    country: 'United States',
    status: 'UPCOMING',
    eventPhoto:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=85',
    description:
      'Cristina Casado headlines the Women Who Dare festival in Miami, showcasing new songs from her upcoming EP and fan favorites.',
    mapsUrl: 'https://maps.google.com/?q=Miami+Beach+Florida',
    infoUrl: 'https://cristinacasadomusic.com/event-details-registration/women-who-dare',
  },
  {
    id: 'event-2',
    title: 'RELIQUIA ALBUM RELEASE & LIVE SHOW',
    tourName: 'Reliquia Experience Tour',
    date: '2026-07-17T19:30:00Z',
    displayDate: '17 JUL 2026',
    time: '7:30 PM',
    venue: 'Teatro Nacional Eduardo Brito',
    city: 'Santo Domingo',
    country: 'Dominican Republic',
    status: 'UPCOMING',
    eventPhoto:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=85',
    description:
      'A special homecoming release concert in Santo Domingo, featuring full live instrumentation and special guest musicians.',
    mapsUrl: 'https://maps.google.com/?q=Teatro+Nacional+Eduardo+Brito+Santo+Domingo',
    infoUrl: 'https://cristinacasadomusic.com/event-details-registration/reliquia-release',
  },
  {
    id: 'event-3',
    title: 'PRIVATE LISTENING SESSION',
    tourName: 'Intimate Sessions',
    date: '2026-08-20T20:00:00Z',
    displayDate: '20 AUG 2026',
    time: '8:00 PM',
    venue: 'The Standard, High Line',
    city: 'New York City',
    country: 'United States',
    status: 'UPCOMING',
    eventPhoto:
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85',
    description:
      'An exclusive private listening session and acoustic performance previewing Cristina’s upcoming debut studio EP.',
    mapsUrl: 'https://maps.google.com/?q=The+Standard+High+Line+New+York',
    infoUrl: 'https://cristinacasadomusic.com/event-details-registration/cristina-casado-private-listening-session',
  },
  {
    id: 'event-4',
    title: 'LATIN POP ACOUSTIC NIGHT',
    tourName: 'Reliquia Experience Tour',
    date: '2026-09-12T19:00:00Z',
    displayDate: '12 SEP 2026',
    time: '7:00 PM',
    venue: 'Centro de Bellas Artes Luis A. Ferré',
    city: 'San Juan',
    country: 'Puerto Rico',
    status: 'UPCOMING',
    eventPhoto:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=85',
    description:
      'A magical Caribbean evening celebrating contemporary pop ballads and bilingual acoustic favorites.',
    mapsUrl: 'https://maps.google.com/?q=Centro+de+Bellas+Artes+San+Juan',
  },
  {
    id: 'event-5',
    title: 'MADRID ACOUSTIC SESSIONS',
    tourName: 'European Showcase',
    date: '2026-10-24T20:00:00Z',
    displayDate: '24 OCT 2026',
    time: '8:00 PM',
    venue: 'Sala Clamores',
    city: 'Madrid',
    country: 'Spain',
    status: 'UPCOMING',
    eventPhoto:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=85',
    description:
      'Cristina Casado brings her intimate piano and vocal arrangements to European stages for an unforgettable night.',
    mapsUrl: 'https://maps.google.com/?q=Sala+Clamores+Madrid',
  },
  {
    id: 'event-6',
    title: 'CAP CANA SUNSET FESTIVAL',
    tourName: 'Caribbean Showcase',
    date: '2026-11-18T18:00:00Z',
    displayDate: '18 NOV 2026',
    time: '6:00 PM',
    venue: 'Cap Cana Amphitheater',
    city: 'Punta Cana',
    country: 'Dominican Republic',
    status: 'UPCOMING',
    eventPhoto:
      'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1000&q=85',
    description:
      'An open-air sunset performance on the shores of Punta Cana, featuring Cristina’s full live backing band.',
    mapsUrl: 'https://maps.google.com/?q=Cap+Cana+Dominican+Republic',
  },
];

export const galleryPhotosData: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Official Spotify Artist Portrait',
    category: 'Photoshoots',
    imageUrl:
      'https://i.scdn.co/image/ab6761610000e5eb4ebf92e28dfd1ebf54ec36be',
    aspect: 'tall',
    caption: 'Official artist profile portrait for Spotify and international streaming platforms.',
    year: '2025',
    location: 'Miami, FL',
    featured: true,
  },
  {
    id: 'gal-2',
    title: 'Grand Piano Rehearsal',
    category: 'Studio',
    imageUrl:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=85',
    aspect: 'wide',
    caption: 'Composing acoustic piano motifs during the recording of "Without You" and "Pausa".',
    year: '2025',
    location: 'Santo Domingo',
    featured: true,
  },
  {
    id: 'gal-3',
    title: 'Miami Soundstage Portrait',
    category: 'Photoshoots',
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85',
    aspect: 'tall',
    caption: 'Editorial portrait session for the launch of "Reliquia" with Dare Management.',
    year: '2025',
    location: 'Miami',
    featured: true,
  },
  {
    id: 'gal-4',
    title: 'Live Under Stadium Lights',
    category: 'Live',
    imageUrl:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=85',
    aspect: 'wide',
    caption: 'Crowd singing along during the Women Who Dare festival performance.',
    year: '2025',
    location: 'Miami Beach',
    featured: true,
  },
  {
    id: 'gal-5',
    title: 'Studio Vocal Tracking',
    category: 'Studio',
    imageUrl:
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1600&q=85',
    aspect: 'square',
    caption: 'Tracking lead vocals for "Oxymoron" alongside producer Danicrazytown.',
    year: '2025',
    location: 'Miami Studios',
    featured: false,
  },
  {
    id: 'gal-6',
    title: 'Backstage Quiet Moments',
    category: 'Behind the Scenes',
    imageUrl:
      'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1600&q=85',
    aspect: 'tall',
    caption: 'Moments of preparation before taking the stage in Santo Domingo.',
    year: '2025',
    location: 'Teatro Nacional',
    featured: false,
  },
  {
    id: 'gal-7',
    title: 'Sunlight & Shadows',
    category: 'Photoshoots',
    imageUrl:
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1600&q=85',
    aspect: 'wide',
    caption: 'Promotional photoshoot for the single "Lilac".',
    year: '2025',
    location: 'Santo Domingo',
    featured: false,
  },
  {
    id: 'gal-8',
    title: 'Acoustic Guitar Rehearsal',
    category: 'Behind the Scenes',
    imageUrl:
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=85',
    aspect: 'wide',
    caption: 'Arranging guitar progressions for the stripped version of "Reliquia".',
    year: '2025',
    location: 'Studio One',
    featured: false,
  },
  {
    id: 'gal-9',
    title: 'Encore Illumination',
    category: 'Live',
    imageUrl:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=85',
    aspect: 'tall',
    caption: 'Closing encore performance of "Don\'t Ask Don\'t Tell".',
    year: '2024',
    location: 'Dominican Republic',
    featured: false,
  },
  {
    id: 'gal-10',
    title: 'Handwritten Songwriting Ledger',
    category: 'Behind the Scenes',
    imageUrl:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=85',
    aspect: 'square',
    caption: 'Original lyrics journal for "Without You" and "Oxymoron".',
    year: '2024',
    location: 'Personal Studio',
    featured: false,
  },
  {
    id: 'gal-11',
    title: 'Golden Hour Reflections',
    category: 'Photoshoots',
    imageUrl:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85',
    aspect: 'square',
    caption: 'High-fashion editorial portrait.',
    year: '2025',
    location: 'Miami',
    featured: false,
  },
  {
    id: 'gal-12',
    title: 'Late Night Production Session',
    category: 'Studio',
    imageUrl:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=85',
    aspect: 'tall',
    caption: 'Mixing and mastering review session for the upcoming EP.',
    year: '2025',
    location: 'Miami Studios',
    featured: false,
  },
];

export const careerMilestones: CareerMilestone[] = [
  {
    year: '2025',
    title: 'RELIQUIA & OXYMORON RELEASES',
    subtitle: 'Collaborations with Danicrazytown & Dare Management',
    description:
      'Released the breakthrough singles "Reliquia", "Lilac", and "Oxymoron", expanding her presence across Latin America and North America.',
    tag: 'GLOBAL REACH',
  },
  {
    year: '2025',
    title: 'WOMEN WHO DARE SHOWCASE',
    subtitle: 'Miami Beach Music Festival',
    description:
      'Headlined the Women Who Dare festival in Miami, earning rave reviews for her soulful bilingual vocals and captivating stage presence.',
    tag: 'LANDMARK LIVE',
  },
  {
    year: '2024',
    title: 'RADIO #1 HIT "DON\'T ASK DON\'T TELL"',
    subtitle: 'Dominican English-Language Radio Charts',
    description:
      'Surpassed major international hits to reach the #1 chart position on Dominican radio, cementing her status as a premier pop songwriter.',
    tag: 'CHART SUCCESS',
  },
  {
    year: '2021',
    title: 'PROFESSIONAL DEBUT "WITHOUT YOU"',
    subtitle: 'Produced by Álvaro Dinzey',
    description:
      'Released her heartfelt debut single "Without You", transforming personal pain into healing pop art and capturing widespread attention.',
    tag: 'DEBUT',
  },
  {
    year: '2008',
    title: 'CLASSICAL TRAINING & MUSICAL ROOTS',
    subtitle: 'Piano, Guitar & Vocal Studies from Age 8',
    description:
      'Began rigorous conservatory and private musical training in Santo Domingo, laying the foundation for her versatile multi-instrumental craft.',
    tag: 'ORIGINS',
  },
];

export const awardsData: AwardItem[] = [
  {
    year: '2025',
    organization: 'Dominican Pop Discovery Awards',
    category: 'Best Bilingual Pop Single',
    work: 'Reliquia',
    result: 'WINNER',
  },
  {
    year: '2025',
    organization: 'Caribbean Music Vanguard',
    category: 'Songwriter of the Year',
    work: 'Oxymoron',
    result: 'NOMINATED',
  },
  {
    year: '2024',
    organization: 'Dominican Radio Music Honors',
    category: '#1 English-Language Pop Song',
    work: "Don't Ask Don't Tell",
    result: 'WINNER',
  },
  {
    year: '2024',
    organization: 'Latin Pop Showcase Miami',
    category: 'Breakthrough Emerging Female Vocalist',
    work: 'The Singles Collection',
    result: 'WINNER',
  },
  {
    year: '2021',
    organization: 'Independent Songwriters Circle',
    category: 'Best Debut Pop Ballad',
    work: 'Without You',
    result: 'WINNER',
  },
];
