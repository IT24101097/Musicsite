'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user already saw the intro in this session
    const hasSeenIntro = sessionStorage.getItem('caspire_intro_seen');
    if (hasSeenIntro) {
      setLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem('caspire_intro_seen', 'true');
          }, 350);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-[#080808] text-white"
        >
          {/* Subtle background ambient pulse */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,108,0.06)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative flex flex-col items-center text-center px-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.4em] text-[#C9A86C] mb-4 font-mono"
            >
              Official Artist Experience
            </motion.p>

            <motion.h1
              initial={{ letterSpacing: '0.4em', opacity: 0 }}
              animate={{ letterSpacing: '0.2em', opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="text-4xl md:text-6xl font-light tracking-[0.2em] font-serif uppercase text-white"
            >
              CASPIRE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xs tracking-[0.3em] uppercase text-zinc-400 mt-2"
            >
              Chronicles of Dusk
            </motion.p>

            {/* Elegant minimal progress bar */}
            <div className="mt-8 w-44 h-0.5 bg-zinc-800/80 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#C9A86C]/70 via-[#C9A86C] to-[#DFC28D]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            <span className="text-[10px] font-mono text-zinc-500 mt-3 tracking-widest">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
