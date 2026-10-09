'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Camera } from 'lucide-react';
import { galleryPhotosData } from '@/data/artistData';

export default function GalleryPreviewSection() {
  const previewPhotos = galleryPhotosData.slice(0, 5);

  return (
    <section className="relative py-28 md:py-36 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#C9A86C] font-mono mb-2 flex items-center space-x-2">
              <Camera className="w-3.5 h-3.5" />
              <span>Editorial Archives</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light tracking-[0.08em] uppercase text-white">
              VISUAL CHRONICLES
            </h2>
          </div>

          <Link
            href="/gallery"
            className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#C9A86C] hover:text-[#DFC28D] mt-4 md:mt-0 font-medium"
          >
            <span>VIEW FULL GALLERY</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Large Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 group relative aspect-[16/10] md:aspect-auto md:h-[480px] rounded-3xl overflow-hidden bg-[#161616] border border-white/10"
          >
            <Image
              src={previewPhotos[0].imageUrl}
              alt={previewPhotos[0].title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A86C] font-mono">
                {previewPhotos[0].category} &bull; {previewPhotos[0].location}
              </span>
              <h3 className="font-serif text-2xl font-light text-white mt-1">
                {previewPhotos[0].title}
              </h3>
            </div>
          </motion.div>

          {/* Tall Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 group relative aspect-[3/4] md:aspect-auto md:h-[480px] rounded-3xl overflow-hidden bg-[#161616] border border-white/10"
          >
            <Image
              src={previewPhotos[1].imageUrl}
              alt={previewPhotos[1].title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A86C] font-mono">
                {previewPhotos[1].category} &bull; {previewPhotos[1].year}
              </span>
              <h3 className="font-serif text-xl font-light text-white mt-1">
                {previewPhotos[1].title}
              </h3>
            </div>
          </motion.div>

          {/* Three Bottom Cards */}
          {previewPhotos.slice(2, 5).map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="md:col-span-4 group relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#161616] border border-white/10"
            >
              <Image
                src={photo.imageUrl}
                alt={photo.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#C9A86C] font-mono">
                  {photo.category}
                </span>
                <h4 className="font-serif text-lg font-light text-white mt-0.5">
                  {photo.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
