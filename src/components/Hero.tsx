import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onBookClick, onExploreClick }: HeroProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
      {/* Background Cinematic Image with custom zoom transition */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.06] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="h-full w-full"
        >
          <img
            src="/src/assets/images/beauty_box_hero_1781943323048.jpg"
            alt="Beauty Box Luxury Salon Interior"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        {/* Soft, rich editorial overlay (Warm dark vignette) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/70 via-[#1A1A1A]/50 to-[#1A1A1A]/95 z-10" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle elite label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center space-x-2 bg-[#B76E79]/10 border border-[#B76E79]/20 backdrop-blur-md px-4 py-1.5 rounded-full mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#B76E79]" />
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#FAF6F1]/90">
            Premium Salon & Beauty Academy Destination
          </span>
        </motion.div>

        {/* Primary Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-sans text-4xl sm:text-5xl md:text-7xl font-light tracking-[0.08em] text-[#FAF6F1] uppercase mb-6 leading-tight select-none"
        >
          Reveal Your <br />
          <span className="font-medium text-[#FAF6F1] font-sans relative">
            Best Beauty
            <span className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-[#B76E79]/50"></span>
          </span>
        </motion.h1>

        {/* Supporting Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl text-[#FAF6F1]/80 text-sm sm:text-base md:text-lg font-sans font-light tracking-wide leading-relaxed mb-10 text-center"
        >
          Luxury beauty experiences designed to make you feel confident and beautiful. Experience world-class hair, skin, and makeup artistry right in Meerut.
        </motion.p>

        {/* Responsive Dual Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto bg-[#B76E79] hover:bg-[#a35e69] text-[#FAF6F1] font-sans text-xs uppercase tracking-widest px-8 py-4 transition-all duration-300 border border-[#B76E79] hover:border-[#a35e69] font-medium shadow-lg hover:shadow-[#B76E79]/30 hover:scale-[1.02] cursor-pointer"
          >
            Book Appointment
          </button>
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto bg-transparent hover:bg-[#FAF6F1]/5 text-[#FAF6F1] font-sans text-xs uppercase tracking-widest px-8 py-4 transition-all duration-300 border border-[#FAF6F1]/30 hover:border-[#FAF6F1]/80 font-medium hover:scale-[1.02] cursor-pointer"
          >
            Explore Services
          </button>
        </motion.div>
      </div>

      {/* Subtle floating down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer"
        onClick={onExploreClick}
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#FAF6F1]/40 mb-2">
          Discover More
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-[#B76E79]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
