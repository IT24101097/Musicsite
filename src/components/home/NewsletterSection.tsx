'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(true);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (!consent) {
      setStatus('error');
      setErrorMessage('Please consent to receiving artist announcements.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 800);
  };

  return (
    <section className="relative py-28 md:py-36 bg-[#080808] overflow-hidden">
      {/* Radial Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(201,168,108,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <span className="text-[11px] uppercase tracking-[0.35em] text-[#C9A86C] font-mono mb-2 inline-block">
          Official Dispatch
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light tracking-[0.08em] uppercase text-white mb-4">
          BE THE FIRST TO KNOW
        </h2>

        <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed mb-10">
          Get updates about new music, upcoming shows, and exclusive announcements directly from Caspire’s inner circle.
        </p>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="p-8 rounded-3xl bg-[#141414] border border-[#C9A86C]/40 max-w-md mx-auto flex flex-col items-center"
            >
              <CheckCircle2 className="w-12 h-12 text-[#C9A86C] mb-3" />
              <h3 className="font-serif text-2xl font-light text-white mb-1">
                You&apos;re On The List
              </h3>
              <p className="text-xs text-zinc-400 text-center leading-relaxed">
                Thank you for subscribing. A confirmation link has been dispatched to your inbox. You can unsubscribe at any time with one click.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-xs text-[#C9A86C] uppercase tracking-widest font-mono hover:underline"
              >
                Subscribe another email
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="relative flex flex-col sm:flex-row items-center gap-3">
                <div className="relative w-full">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="Enter your email address"
                    className="w-full pl-11 pr-4 py-4 rounded-full bg-[#141414] border border-white/15 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#C9A86C] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C9A86C] hover:bg-[#DFC28D] text-black font-semibold text-xs uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#C9A86C]/20 shrink-0 flex items-center justify-center space-x-2"
                >
                  <span>{status === 'loading' ? 'JOINING...' : 'SUBSCRIBE'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Consent Checkbox */}
              <div className="mt-4 flex items-center justify-center space-x-2 text-[11px] text-zinc-500">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="rounded border-zinc-700 bg-zinc-900 text-[#C9A86C] focus:ring-0 cursor-pointer"
                />
                <label htmlFor="consent" className="cursor-pointer select-none">
                  I agree to receive official tour & release notifications. No spam.
                </label>
              </div>

              {status === 'error' && (
                <p className="text-xs text-red-400 mt-2 font-mono">
                  {errorMessage}
                </p>
              )}

              <div className="mt-6 flex items-center justify-center space-x-2 text-[10px] text-zinc-500 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A86C]" />
                <span>Double opt-in verification. Unsubscribe at any time.</span>
              </div>
            </form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
