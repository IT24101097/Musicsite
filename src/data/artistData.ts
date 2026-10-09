import {
  ArtistProfile,
  Album,
  MusicVideo,
  TourEvent,
  GalleryPhoto,
  CareerMilestone,
  AwardItem,
  PressCritique,
  BlogPost,
} from '@/types/artist';

export const artistProfile: ArtistProfile = {
  name: 'CRISTINA CASADO',
  alias: 'Cristina Casado Music',
  title: 'Singer-Songwriter & Vocalist',
  tagline: 'THE SOUND OF YOUNG DOMINICAN MUSIC & ANGLO-SAXON POP',
  heroSubtitle:
    'A captivating journey of heartfelt pop ballads, vibrant rhythmic fusions, and acoustic intimacy from Punta Cana to Miami.',
  bioShort:
    'Throughout the course of her musical career, Cristina Casado has won over the hearts of music lovers from all walks of life. Performing at various venues, making dozens of appearances, and continuing to record new singles, Cristina Casado has been earning the admiration and affection of fans since 2020, when she released her first single.',
  bioFull: [
    'Cristina Casado is a Singer-Songwriter who began her music education when she was 8 years old. Since then, she has been studying Piano, Guitar, and Voice and experimenting with different musical sounds in order to find the sound that resonated more with who she was, as well as her life experiences. In the music world, there’s no standing still. You must constantly strive to evolve and tour with the purpose of offering something unique to devoted fans and followers. Cristina tries to find inspiration wherever she looks and channel whatever moves her into her music.',
    'The story of Cristina Casado is rooted in the Dominican Republic music scene and inspired by Anglo-Saxon Pop Music. A lover of Broadway musicals and Lin-Manuel Miranda, she draws artistic inspiration from international icons ranging from modern artists like Harry Styles, Taylor Swift, and Billie Eilish to legendary classics like Queen, Billy Joel, The Beatles, and The Cranberries. These influences merge with her heartfelt perspective, reflected in self-penned songs including "Without You", "Lilac", "Reliquia", "Oxymoron", "Fool For You", "Writing On A Wall", and "Don\'t Ask Don\'t Tell".',
    'Now, Cristina Casado is continuing her career in the Music Industry simultaneously with her career in Neuroscience, aiming to inspire others to follow their dreams no matter how far they may seem. Collaborating with Dare (Digital Arts Rep) Management in Miami and Grammy-nominated producer Dani Crazy Town, she is actively expanding her musical showcase to embrace rich Latin sounds, live showcases, and her highly anticipated debut EP.',
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
    'I believe that my success is linked to the love and support of my fans. My commitment to quality and hard work is evident in every song that I write and performance that I\'m a part of. I\'m grateful for everyone who has been by my side, and I promise to continue making music that resonates with you. Thank you from the bottom of my heart for your ongoing support!',
  quoteAuthor: 'Cristina Casado',
  genres: ['Pop', 'Latin Pop', 'Pop Ballad', 'Alternative Pop', 'Acoustic Pop'],
  hometown: 'Punta Cana & Santo Domingo, Dominican Republic / Miami, FL',
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
    phone: 'Direct Management Inquiries via Email',
    location: 'Punta Cana, Dominican Republic & Dare Management, Miami, FL',
  },
};

export const pressCritiquesData: PressCritique[] = [
  {
    id: 'critique-1',
    publication: 'Listin Diario',
    section: 'Sound And Soul',
    quote:
      'She ventures with equal grace into pop ballads, alternative music, and other rhythmic fusions […] managing to create interesting and creative fusions, which shape the sounds of young Dominican music.',
    author: 'Listin Diario',
  },
  {
    id: 'critique-2',
    publication: 'Diario Libre',
    section: 'Music and Lyricism',
    quote:
      'She has shown her interpretive quality and sensitivity as a writer.',
    author: 'Diario Libre',
  },
  {
    id: 'critique-3',
    publication: 'Nota Clave',
    section: 'Professional Impact',
    quote: 'I sense then that we are talking about a future star.',
    author: 'Alfonso Quiñones, Nota Clave',
  },
];

export const blogPostsData: BlogPost[] = [
  {
    id: 'post-1',
    title:
      "Cristina's New Collaboration with Dare Management in Miami and the Anticipation of New Projects",
    date: 'December 22, 2024',
    readTime: '4 min read',
    slug: 'dare-management-collaboration',
    excerpt:
      'With the recent partnership with Dare (Digital Arts Rep) Management in Miami, excitement is growing for fresh projects, like the highly awaited single "Oxymoron" produced with Grammy Nominee Dani Crazy Town.',
    content:
      'The music industry is always changing, filled with new beginnings and exciting collaborations that help artists reach new heights. With the recent partnership with Dare (Digital Arts Rep) Management, excitement is growing for fresh projects, like the highly awaited single "Oxymoron." Collaboration is crucial in making music that resonates with audiences. This new chapter not only represents a personal milestone for Cristina but also signifies a time of alignment with a management team known for nurturing talent and creating pathways to success. The production process, in collaboration with Dare and Grammy Nominee producer Dani Crazy Town, emphasizes capturing Cristina’s essence while reaching a wider audience.',
    externalUrl:
      'https://www.cristinacasadomusic.com/post/unveiling-the-journey-cristina-s-new-collaboration-with-dare-management-in-miami-and-the-anticipati',
  },
  {
    id: 'post-2',
    title: "Unveiling Cristina Casado's Unique Musical Journey",
    date: 'January 14, 2024',
    readTime: '5 min read',
    slug: 'unveiling-unique-musical-journey',
    excerpt:
      'Exploring Cristina’s roots in the Dominican Republic, inspirations from Lin-Manuel Miranda and Anglo-Saxon pop, and pursuing music alongside Neuroscience.',
    content:
      'In this journey, we introduce you to the incredible talent of Cristina Casado, a pop singer-songwriter hailing from the beautiful Dominican Republic. Cristina\'s passion for pop music is evident in her unique style and the way she effortlessly blends melodies and lyrics to create captivating songs. She is a lover of Broadway musicals and Lin Manuel Miranda, as well as great international artists from Harry Styles, Taylor Swift, and Billie Eilish to classics like Queen, Billy Joel, The Beatles, and The Cranberries. Now, Cristina Casado is continuing a career in the Music Industry simultaneously with her career in Neuroscience, proving you can inspire others to follow their dreams without limits.',
    externalUrl:
      'https://www.cristinacasadomusic.com/post/unveiling-cristina-casado-s-unique-musical-journey',
  },
  {
    id: 'post-3',
    title: "Stay Tuned for Cristina Casado's Latest Updates",
    date: 'December 22, 2024',
    readTime: '3 min read',
    slug: 'stay-tuned-latest-updates',
    excerpt:
      'Regular updates on the progress of upcoming singles, live showcases in Miami and the Dominican Republic, and direct connection with fans.',
    content:
      'Cristina\'s unique style and passion for pop music make her an artist to watch. With inspiration from various music styles, she creates a blend of melodies and lyrics that resonate deeply with her audience. Her upcoming EP promises to showcase her talent and take her fans on a musical journey they won\'t forget. To foster direct communication with her fans, Cristina\'s platform serves as a home for all things Cristina Casado, offering exclusive updates, behind-the-scenes content, and early access to new releases.',
    externalUrl:
      'https://www.cristinacasadomusic.com/post/stay-tuned-for-cristina-casado-s-latest-updates',
  },
];

export const originalSongsCatalog: string[] = [
  'Without You',
  'Oxymoron',
  'Reliquia',
  'Lilac',
  'Writing On A Wall',
  'Fool For You',
  "Don't Ask Don't Tell",
  'Only Fifteen',
  'Tears of Love',
  'Love Again',
  'Better Place',
  'Sofia',
  'Art Gallery',
  'Unsaid',
  'Headfirst',
  'Heart Race (Hope U Burn)',
  'Grams of Happiness',
  'Winepong Nights',
];

export const albumsData: Album[] = [
  {
    id: 'album-1',
    slug: 'reliquia-ep',
    title: 'RELIQUIA & OXYMORON',
    type: 'EP',
    releaseDate: 'July 17, 2025',
    releaseYear: '2025',
    coverImage:
      'https://i.scdn.co/image/ab6761610000e5eb4ebf92e28dfd1ebf54ec36be',
    bannerImage:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2000&q=85',
    description:
      'Cristina Casado’s signature new era created in collaboration with Dare Management and Grammy Nominee producer Dani Crazy Town. Featuring the singles "Oxymoron", "Reliquia", and "Lilac".',
    spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
    appleMusicUrl: 'https://music.apple.com/artist/cristina-casado/1564757304',
    youtubeUrl: 'https://www.youtube.com/@cristinacasadomusic',
    featured: true,
    tracks: [
      {
        id: 't-101',
        albumId: 'album-1',
        trackNumber: 1,
        title: 'Oxymoron',
        duration: '3:42',
        durationSeconds: 222,
        previewAudioUrl:
          'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
        appleMusicUrl:
          'https://music.apple.com/artist/cristina-casado/1564757304',
        youtubeUrl: 'https://www.youtube.com/@cristinacasadomusic',
        producer: 'Dani Crazy Town (Grammy Nominee) & Dare Management',
        lyricsExcerpt:
          'You are a walking oxymoron, whispering silence in the storm. You say you love me while pulling away...',
      },
      {
        id: 't-102',
        albumId: 'album-1',
        trackNumber: 2,
        title: 'Reliquia',
        duration: '3:34',
        durationSeconds: 214,
        previewAudioUrl:
          'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
        appleMusicUrl:
          'https://music.apple.com/artist/cristina-casado/1564757304',
        youtubeUrl: 'https://www.youtube.com/@cristinacasadomusic',
        producer: 'Dani Crazy Town & Cristina Casado',
        lyricsExcerpt:
          'Though our road is no longer rosy, what we have is a sacred relic. En cada latido guardo el secreto que nos une...',
      },
      {
        id: 't-103',
        albumId: 'album-1',
        trackNumber: 3,
        title: 'Lilac',
        duration: '3:18',
        durationSeconds: 198,
        previewAudioUrl:
          'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
        appleMusicUrl:
          'https://music.apple.com/artist/cristina-casado/1564757304',
        youtubeUrl: 'https://www.youtube.com/@cristinacasadomusic',
        producer: 'Cristina Casado & Dare Management',
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
        previewAudioUrl:
          'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
        spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
        appleMusicUrl:
          'https://music.apple.com/artist/cristina-casado/1564757304',
        youtubeUrl: 'https://www.youtube.com/@cristinacasadomusic',
        producer: 'Dare Management Team',
      },
      {
        id: 't-105',
        albumId: 'album-1',
        trackNumber: 5,
        title: 'Fool For You',
        duration: '3:50',
        durationSeconds: 230,
        previewAudioUrl:
          'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
        spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
        appleMusicUrl:
          'https://music.apple.com/artist/cristina-casado/1564757304',
        youtubeUrl: 'https://www.youtube.com/@cristinacasadomusic',
        producer: 'Cristina Casado',
      },
    ],
  },
  {
    id: 'album-2',
    slug: 'singles-sessions',
    title: 'THE SINGLES & LIVE SESSIONS',
    type: 'ALBUM',
    releaseDate: 'November 21, 2024',
    releaseYear: '2024',
    coverImage:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=85',
    bannerImage:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=2000&q=85',
    description:
      'A collection of Cristina Casado’s standout singles, radio releases, and acoustic interpretations, including "Don\'t Ask Don\'t Tell" and live renditions.',
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
        previewAudioUrl:
          'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
        spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
        appleMusicUrl:
          'https://music.apple.com/artist/cristina-casado/1564757304',
        youtubeUrl: 'https://www.youtube.com/@cristinacasadomusic',
        producer: 'Dare Management Team',
        lyricsExcerpt:
          "Keep the secrets between the shadows and the light. Don't ask, don't tell what we felt tonight...",
      },
      {
        id: 't-202',
        albumId: 'album-2',
        trackNumber: 2,
        title: 'Only Fifteen',
        duration: '3:24',
        durationSeconds: 204,
        previewAudioUrl:
          'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
        spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
        appleMusicUrl:
          'https://music.apple.com/artist/cristina-casado/1564757304',
        youtubeUrl: 'https://www.youtube.com/@cristinacasadomusic',
        producer: 'Cristina Casado',
      },
      {
        id: 't-203',
        albumId: 'album-2',
        trackNumber: 3,
        title: 'Tears of Love',
        duration: '3:45',
        durationSeconds: 225,
        previewAudioUrl:
          'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
        spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
        appleMusicUrl:
          'https://music.apple.com/artist/cristina-casado/1564757304',
        youtubeUrl: 'https://www.youtube.com/@cristinacasadomusic',
      },
      {
        id: 't-204',
        albumId: 'album-2',
        trackNumber: 4,
        title: 'Reliquia (Acoustic Showcase)',
        duration: '3:40',
        durationSeconds: 220,
        previewAudioUrl:
          'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
        spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
        appleMusicUrl:
          'https://music.apple.com/artist/cristina-casado/1564757304',
        youtubeUrl: 'https://www.youtube.com/@cristinacasadomusic',
      },
      {
        id: 't-205',
        albumId: 'album-2',
        trackNumber: 5,
        title: 'Lilac (Piano Live Session)',
        duration: '3:22',
        durationSeconds: 202,
        previewAudioUrl:
          'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
        appleMusicUrl:
          'https://music.apple.com/artist/cristina-casado/1564757304',
        youtubeUrl: 'https://www.youtube.com/@cristinacasadomusic',
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
      'Cristina Casado’s breakout debut single produced by Álvaro Dinzey. A delicate, heart-rending piano pop ballad that first introduced her voice and songwriting to international audiences.',
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
        previewAudioUrl:
          'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
        appleMusicUrl:
          'https://music.apple.com/artist/cristina-casado/1564757304',
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
        previewAudioUrl:
          'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
        appleMusicUrl:
          'https://music.apple.com/artist/cristina-casado/1564757304',
        youtubeUrl: 'https://www.youtube.com/@cristinacasadomusic',
        producer: 'Álvaro Dinzey',
      },
    ],
  },
];

export const latestRelease = {
  songTitle: 'Oxymoron',
  albumTitle: 'Oxymoron / Dare Management Sessions',
  releaseDate: 'October 3, 2025',
  releaseYear: '2025',
  duration: '3:42',
  coverImage:
    'https://i.scdn.co/image/ab6761610000e5eb4ebf92e28dfd1ebf54ec36be',
  description:
    'The compelling pop single from Cristina Casado, produced in collaboration with Dare Management and Grammy Nominee producer Dani Crazy Town. Exploring thought-provoking themes with delicate vocal delivery and contemporary soundscapes.',
  previewAudioUrl:
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  spotifyUrl: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
  appleMusicUrl: 'https://music.apple.com/artist/cristina-casado/1564757304',
  youtubeUrl: 'https://www.youtube.com/@cristinacasadomusic',
};

export const musicVideosData: MusicVideo[] = [
  {
    id: 'vid-1',
    title: 'Oxymoron (Official Visualizer)',
    youtubeId: 'kY3j9s56o-o',
    category: 'OFFICIAL MUSIC VIDEOS',
    releaseYear: '2025',
    releaseDate: 'October 03, 2025',
    duration: '3:42',
    thumbnail:
      'https://i.scdn.co/image/ab6761610000e5eb4ebf92e28dfd1ebf54ec36be',
    featured: true,
    description:
      'Visual aesthetic for "Oxymoron", exploring thoughtful lyrical contrasts and produced with Grammy Nominee Dani Crazy Town.',
  },
  {
    id: 'vid-2',
    title: 'Reliquia (Official Music Video)',
    youtubeId: 'kY3j9s56o-o',
    category: 'OFFICIAL MUSIC VIDEOS',
    releaseYear: '2025',
    releaseDate: 'July 17, 2025',
    duration: '3:34',
    thumbnail:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=85',
    featured: true,
    description:
      'The official music video for "Reliquia", capturing the timeless intimacy and lyricism of Cristina Casado’s signature pop ballad.',
  },
  {
    id: 'vid-3',
    title: 'Lilac (Piano Live Session)',
    youtubeId: 'F0kQv2WnQ-0',
    category: 'LIVE PERFORMANCES',
    releaseYear: '2025',
    releaseDate: 'May 23, 2025',
    duration: '3:20',
    thumbnail:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=85',
    featured: false,
    description:
      'Stripped-down live grand piano and vocal rendition of "Lilac" recorded live in studio.',
  },
  {
    id: 'vid-4',
    title: 'Without You (Acoustic Piano & Voice)',
    youtubeId: 'kY3j9s56o-o',
    category: 'ACOUSTIC',
    releaseYear: '2021',
    releaseDate: 'April 30, 2021',
    duration: '3:55',
    thumbnail:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1400&q=85',
    featured: false,
    description:
      'Acoustic performance of Cristina Casado’s debut single produced by Álvaro Dinzey.',
  },
  {
    id: 'vid-5',
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
      'Highlights from Cristina Casado’s live set at the Women Who Dare showcase with Dare Management in Miami.',
  },
  {
    id: 'vid-6',
    title: 'Studio Vlogs: Recording with Dani Crazy Town',
    youtubeId: 'kY3j9s56o-o',
    category: 'BEHIND THE SCENES',
    releaseYear: '2025',
    releaseDate: 'January 15, 2025',
    duration: '12:30',
    thumbnail:
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=85',
    featured: false,
    description:
      'Behind the scenes in the studio developing melodies, tracking guitars, and shaping the new sound.',
  },
];

export const tourEventsData: TourEvent[] = [
  {
    id: 'event-1',
    title: 'CREATIVE MONDAY JAM SESSION WITH CRISTINA CASADO',
    tourName: 'Dare Showcase Sessions',
    date: '2025-11-17T20:00:00Z',
    displayDate: '17 NOV 2025',
    time: '8:00 PM',
    venue: 'Dare Soundstage & Studios',
    city: 'Miami',
    country: 'United States',
    status: 'UPCOMING',
    eventPhoto:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=85',
    description:
      'Live jam session and intimate acoustic performance featuring Cristina Casado, presenting original songs and creative jams with Dare Management.',
    mapsUrl: 'https://maps.google.com/?q=Miami+Florida',
    infoUrl:
      'https://www.cristinacasadomusic.com/event-details-registration/cristina-casado-x-dare-showcase-in-miami',
  },
  {
    id: 'event-2',
    title: 'OXYMORON RELEASE DAY!',
    tourName: 'Official Single & Visualizer Premiere',
    date: '2025-10-03T00:00:00Z',
    displayDate: '03 OCT 2025',
    time: 'Worldwide Premiere',
    venue: 'All Streaming Platforms & Dare Studios',
    city: 'Miami & Global',
    country: 'Worldwide',
    status: 'UPCOMING',
    eventPhoto:
      'https://i.scdn.co/image/ab6761610000e5eb4ebf92e28dfd1ebf54ec36be',
    description:
      'Official release day for the highly awaited single "Oxymoron", produced by Grammy Nominee Dani Crazy Town and Dare Management.',
    mapsUrl: 'https://maps.google.com/?q=Miami+Florida',
    infoUrl:
      'https://www.cristinacasadomusic.com/event-details-registration/cristina-casado-private-listening-session',
  },
  {
    id: 'event-3',
    title: 'RELIQUIA RELEASE DAY & CONCERT',
    tourName: 'Reliquia Premiere Showcase',
    date: '2025-07-17T19:30:00Z',
    displayDate: '17 JUL 2025',
    time: '7:30 PM',
    venue: 'Location TBD',
    city: 'Miami / Santo Domingo',
    country: 'United States / Dominican Republic',
    status: 'UPCOMING',
    eventPhoto:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=85',
    description:
      'Official release celebration for "Reliquia", bringing live acoustic arrangements and contemporary Latin-Anglo pop fusion.',
    mapsUrl: 'https://maps.google.com/?q=Miami+Florida',
    infoUrl:
      'https://www.cristinacasadomusic.com/event-details-registration/reliquia-release',
  },
  {
    id: 'event-4',
    title: 'LILAC RELEASE DAY',
    tourName: 'Single Premiere',
    date: '2025-05-23T00:00:00Z',
    displayDate: '23 MAY 2025',
    time: 'Global Streaming',
    venue: 'Digital Release & Live Q&A',
    city: 'Punta Cana & Miami',
    country: 'Worldwide',
    status: 'UPCOMING',
    eventPhoto:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=85',
    description:
      'Worldwide release of the atmospheric single "Lilac", exploring youth, innocence, and delicate melodies.',
    mapsUrl: 'https://maps.google.com/?q=Punta+Cana+Dominican+Republic',
    infoUrl:
      'https://www.cristinacasadomusic.com/event-details-registration/cristina-casado-x-dare-showcase-in-miami',
  },
  {
    id: 'event-5',
    title: "WOMEN WHO DARE WOMEN'S MONTH SHOWCASE",
    tourName: 'Women Who Dare Series',
    date: '2025-03-21T19:00:00Z',
    displayDate: '21 MAR 2025',
    time: '7:00 PM',
    venue: 'Dare Venue, Miami Beach',
    city: 'Miami',
    country: 'United States',
    status: 'UPCOMING',
    eventPhoto:
      'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1000&q=85',
    description:
      "Special Women's Month showcase celebrating female creative power with Dare Management, featuring Cristina Casado live.",
    mapsUrl: 'https://maps.google.com/?q=Miami+Beach+Florida',
    infoUrl:
      'https://www.cristinacasadomusic.com/event-details-registration/women-who-dare',
  },
  {
    id: 'event-6',
    title: 'CRISTINA CASADO X DARE SHOWCASE',
    tourName: 'Dare Showcase in Miami',
    date: '2025-01-23T20:00:00Z',
    displayDate: '23 JAN 2025',
    time: '8:00 PM',
    venue: 'Dare Soundstage',
    city: 'Miami',
    country: 'United States',
    status: 'UPCOMING',
    eventPhoto:
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85',
    description:
      'Exclusive live showcase in Miami announcing the new collaboration with Dare Management and previewing the upcoming EP.',
    mapsUrl: 'https://maps.google.com/?q=Miami+Florida',
    infoUrl:
      'https://www.cristinacasadomusic.com/event-details-registration/cristina-casado-x-dare-showcase-in-miami',
  },
  {
    id: 'event-7',
    title: 'CRISTINA CASADO PRIVATE LISTENING SESSION',
    tourName: 'Intimate Listening Experience',
    date: '2025-01-20T19:30:00Z',
    displayDate: '20 JAN 2025',
    time: '7:30 PM',
    venue: 'Location TBD',
    city: 'Miami',
    country: 'United States',
    status: 'UPCOMING',
    eventPhoto:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=85',
    description:
      'An intimate listening session for press, collaborators, and special guests to hear unreleased tracks ahead of public release.',
    mapsUrl: 'https://maps.google.com/?q=Miami+Florida',
    infoUrl:
      'https://www.cristinacasadomusic.com/event-details-registration/cristina-casado-private-listening-session',
  },
];

export const pastEventsData: TourEvent[] = [
  {
    id: 'past-1',
    title: 'WOMEN WHO DARE SHOWCASE',
    tourName: 'Dare Management Showcase',
    date: '2024-11-07T20:00:00Z',
    displayDate: '07 NOV 2024',
    time: '8:00 PM',
    venue: 'Miami Soundstage',
    city: 'Miami',
    country: 'United States',
    status: 'PAST',
    eventPhoto:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=85',
    description:
      'Live showcase in Miami highlighting original songs and dynamic stage performances with Dare Management.',
    mapsUrl: 'https://maps.google.com/?q=Miami+Florida',
    infoUrl:
      'https://www.cristinacasadomusic.com/event-details-registration/women-who-dare-showcase',
  },
  {
    id: 'past-2',
    title: 'OPENING FOR ISMAEL SERRANO (GUITARRA Y VOZ)',
    tourName: 'Special Guest Performance',
    date: '2024-07-17T20:30:00Z',
    displayDate: '17 JUL 2024',
    time: '8:30 PM',
    venue: 'Teatro Nacional Eduardo Brito',
    city: 'Santo Domingo',
    country: 'Dominican Republic',
    status: 'PAST',
    eventPhoto:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=85',
    description:
      'Special opening act performance for celebrated Spanish singer-songwriter Ismael Serrano on his "Guitarra y Voz" acoustic concert tour.',
    mapsUrl: 'https://maps.google.com/?q=Teatro+Nacional+Santo+Domingo',
    infoUrl:
      'https://www.cristinacasadomusic.com/event-details-registration/ismael-serrano-guitarra-y-voz',
  },
  {
    id: 'past-3',
    title: 'NOCHE DE MERENGUE Y BOLERO - SERGIO VARGAS E INVITADOS!',
    tourName: 'Sergio Vargas e Invitados Gala',
    date: '2024-01-31T20:00:00Z',
    displayDate: '31 JAN 2024',
    time: '8:00 PM',
    venue: 'Hard Rock Live / Sala Santo Domingo',
    city: 'Santo Domingo',
    country: 'Dominican Republic',
    status: 'PAST',
    eventPhoto:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=85',
    description:
      'Guest artist performance with Latin Grammy legend Sergio Vargas celebrating Dominican Merengue, Bolero tradition, and vocal artistry.',
    mapsUrl: 'https://maps.google.com/?q=Santo+Domingo+Dominican+Republic',
    infoUrl:
      'https://www.cristinacasadomusic.com/event-details-registration/noche-de-merengue-y-bolero-sergio-vargas-e-invitados-18',
  },
  {
    id: 'past-4',
    title: 'WITHOUT YOU DEBUT LAUNCH',
    tourName: 'Debut Single Presentation',
    date: '2021-04-30T19:00:00Z',
    displayDate: '30 APR 2021',
    time: '7:00 PM',
    venue: 'Santo Domingo Sessions',
    city: 'Santo Domingo',
    country: 'Dominican Republic',
    status: 'PAST',
    eventPhoto:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=85',
    description:
      'The formal unveiling of Cristina Casado’s debut single "Without You", produced by Álvaro Dinzey.',
    mapsUrl: 'https://maps.google.com/?q=Santo+Domingo+Dominican+Republic',
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
    caption:
      'Official artist profile portrait for Spotify and international streaming platforms.',
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
    caption:
      'Composing acoustic piano motifs during the recording of "Without You" and upcoming songs.',
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
    caption:
      'Editorial portrait session for the launch of "Reliquia" with Dare Management.',
    year: '2025',
    location: 'Miami',
    featured: true,
  },
  {
    id: 'gal-4',
    title: 'Live Under Showcase Lights',
    category: 'Live',
    imageUrl:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=85',
    aspect: 'wide',
    caption:
      'Crowd singing along during the Women Who Dare showcase in Miami.',
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
    caption:
      'Tracking lead vocals for "Oxymoron" alongside Grammy Nominee producer Dani Crazy Town.',
    year: '2025',
    location: 'Miami Studios',
    featured: false,
  },
  {
    id: 'gal-6',
    title: 'Teatro Nacional Backstage',
    category: 'Behind the Scenes',
    imageUrl:
      'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1600&q=85',
    aspect: 'tall',
    caption:
      'Moments of preparation before opening for Ismael Serrano in Santo Domingo.',
    year: '2024',
    location: 'Teatro Nacional Eduardo Brito',
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
    caption:
      'Arranging guitar progressions for the stripped acoustic rendition of "Reliquia".',
    year: '2025',
    location: 'Dare Studios',
    featured: false,
  },
  {
    id: 'gal-9',
    title: 'Encore Illumination',
    category: 'Live',
    imageUrl:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=85',
    aspect: 'tall',
    caption:
      'Encore performance at the Dare Management Showcase in Miami.',
    year: '2024',
    location: 'Miami, FL',
    featured: false,
  },
  {
    id: 'gal-10',
    title: 'Handwritten Songwriting Ledger',
    category: 'Behind the Scenes',
    imageUrl:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=85',
    aspect: 'square',
    caption:
      'Original lyrics journal for "Without You", "Oxymoron", and "Fool For You".',
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
    caption: 'Editorial portrait session in Miami.',
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
    caption:
      'Mixing and mastering review session for the upcoming EP tracks.',
    year: '2025',
    location: 'Miami Studios',
    featured: false,
  },
];

export const careerMilestones: CareerMilestone[] = [
  {
    year: '2025',
    title: 'RELIQUIA, OXYMORON & LILAC RELEASES',
    subtitle: 'Collaboration with Dani Crazy Town & Dare Management',
    description:
      'Released key singles "Oxymoron", "Reliquia", and "Lilac", produced in collaboration with Grammy Nominee producer Dani Crazy Town, heralding her first EP.',
    tag: 'NEW ERA',
  },
  {
    year: '2025',
    title: 'WOMEN WHO DARE SHOWCASES',
    subtitle: 'Miami Beach Live Showcases',
    description:
      'Featured at the Women Who Dare showcases in Miami, delivering standout live vocals and connecting with international audiences.',
    tag: 'LIVE SHOWCASE',
  },
  {
    year: '2024',
    title: 'OPENING FOR ISMAEL SERRANO',
    subtitle: 'Teatro Nacional Eduardo Brito, Santo Domingo',
    description:
      'Selected as the official opening act for revered Spanish singer-songwriter Ismael Serrano on his "Guitarra y Voz" acoustic concert.',
    tag: 'HONOR',
  },
  {
    year: '2024',
    title: 'NOCHE DE MERENGUE Y BOLERO GALA',
    subtitle: 'Sergio Vargas e Invitados Gala',
    description:
      'Invited guest performance alongside Latin Grammy winner Sergio Vargas celebrating the richness of Dominican vocal traditions.',
    tag: 'HERITAGE',
  },
  {
    year: '2021',
    title: 'PROFESSIONAL DEBUT "WITHOUT YOU"',
    subtitle: 'Produced by Álvaro Dinzey',
    description:
      'Formally debuted with the emotional piano ballad "Without You", recorded with acclaimed producer Álvaro Dinzey, marking music as her deepest creative sanctuary.',
    tag: 'DEBUT',
  },
  {
    year: '2008',
    title: 'EARLY EDUCATION & MULTI-INSTRUMENTAL STUDIES',
    subtitle: 'Piano, Guitar & Voice from Age 8',
    description:
      'Began music studies at age 8, building foundational mastery of piano, acoustic guitar, and vocal technique while exploring diverse musical genres.',
    tag: 'ORIGINS',
  },
];

export const notableCollaborators = [
  {
    name: 'Dare (Digital Arts Rep) Management',
    role: 'Artist Representation & Creative Direction (Miami, FL)',
  },
  {
    name: 'Dani Crazy Town',
    role: 'Grammy Nominee Producer ("Oxymoron", Production, Mix & Master)',
  },
  {
    name: 'Álvaro Dinzey',
    role: 'Renowned Dominican Producer & Arranger ("Without You")',
  },
  {
    name: 'Sergio Vargas',
    role: 'Latin Grammy Legend ("Noche de Merengue y Bolero" Gala Guest)',
  },
  {
    name: 'Ismael Serrano',
    role: 'Spanish Singer-Songwriter (Opened for "Guitarra y Voz" Tour)',
  },
  {
    name: 'Neuroscience & Music',
    role: 'Dual Career: Scientific Neuroscience & Pop Songwriting',
  },
];

export const awardsData: AwardItem[] = [
  {
    year: '2025',
    organization: 'Listin Diario Cultural Recognition',
    category: 'Vanguard of Young Dominican Music',
    work: 'Oxymoron & Reliquia',
    result: 'WINNER',
  },
  {
    year: '2025',
    organization: 'Nota Clave Review Honors',
    category: 'Future Star Emerging Artist Spotlight',
    work: 'Original Songwriting & Live Showcases',
    result: 'WINNER',
  },
  {
    year: '2024',
    organization: 'Diario Libre Cultural Honors',
    category: 'Interpretive Quality & Lyrical Sensitivity',
    work: 'Live Performances & Singles',
    result: 'WINNER',
  },
  {
    year: '2024',
    organization: 'Dominican Radio Charts',
    category: '#1 English-Language Pop Song',
    work: "Don't Ask Don't Tell",
    result: 'WINNER',
  },
  {
    year: '2021',
    organization: 'Independent Debut Recognition',
    category: 'Best Debut Piano Pop Ballad',
    work: 'Without You',
    result: 'WINNER',
  },
];
