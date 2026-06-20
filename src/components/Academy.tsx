import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Award, BookOpen, Clock, Check, Star, ShieldAlert } from 'lucide-react';
import { academyTracks } from '../data';
import { TrainingTrack } from '../types';

interface AcademyProps {
  onContactClick: () => void;
}

export default function Academy({ onContactClick }: AcademyProps) {
  const [selectedTrack, setSelectedTrack] = useState<string>('track-1');

  const currentTrack = academyTracks.find(t => t.id === selectedTrack) || academyTracks[0];

  const benefits = [
    {
      title: 'Certified Competency',
      desc: 'Formally accredited and recognized certifications respectably aligned with global luxury guild metrics.'
    },
    {
      title: 'Intensive Workshops',
      desc: 'Hands-on live model execution protocols designed to cultivate absolute commercial muscle-memory.'
    },
    {
      title: 'Industry Seminars',
      desc: 'Exclusive high-profile panels with premium global hair artists and makeup digital creators.'
    },
    {
      title: 'Live Careers Placement',
      desc: 'Direct premium placement support with highest-paying luxury salon networks across UP and Delhi NCR.'
    }
  ];

  return (
    <section id="academy" className="bg-[#1A1A1A] py-24 sm:py-32 relative text-[#FAF6F1] overflow-hidden">
      
      {/* Decorative architectural background graphics */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B76E79]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8DCD0]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Academic Headings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center space-x-2 text-[#B76E79]">
              <GraduationCap className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] font-medium">
                Sovereign Professional Education
              </span>
            </div>
            <h2 className="font-sans text-3xl sm:text-5xl font-light tracking-wide uppercase leading-none">
              Beauty Box <span className="font-medium text-[#FAF6F1]">Salon Academy</span>
            </h2>
            <p className="font-sans font-light text-sm text-[#FAF6F1]/70 max-w-3xl leading-relaxed pt-2">
              Step into a prestigious, multi-disciplinary cosmetic academy in Meerut. Our courses transition beginner talents and cosmetologists into highly credentialed global beauty artists. We mandate medical-grade hygiene protocols and live aesthetic model training.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <span className="inline-block border border-[#B76E79]/40 bg-[#B76E79]/10 text-[#B76E79] font-mono text-[10px] uppercase tracking-widest px-4 py-2 mt-4 lg:mt-0 font-medium">
              ★ Meerut's Premium Cosmetology Institute
            </span>
          </div>
        </div>

        {/* Training Tracks Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Track Selection Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-sans text-xs uppercase tracking-widest text-[#FAF6F1]/50 mb-4 font-semibold">
              Select Your Certification Track
            </h3>
            <div className="space-y-3">
              {academyTracks.map((track) => (
                <button
                  key={track.id}
                  onClick={() => setSelectedTrack(track.id)}
                  className={`w-full text-left p-5 transition-all duration-300 border flex items-center justify-between cursor-pointer group ${
                    selectedTrack === track.id
                      ? 'bg-[#B76E79]/15 border-[#B76E79] text-[#FAF6F1]'
                      : 'bg-transparent border-[#FAF6F1]/10 hover:border-[#FAF6F1]/30 text-[#FAF6F1]/70 hover:text-[#FAF6F1]'
                  }`}
                >
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#B76E79]">
                      {track.duration}
                    </span>
                    <h4 className="font-sans text-sm tracking-wide font-normal uppercase leading-tight group-hover:text-[#B76E79] transition-colors">
                      {track.title}
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-right shrink-0 py-1 px-2.5 bg-[#FAF6F1]/5 border border-[#FAF6F1]/10 group-hover:border-[#B76E79]/40 group-hover:text-[#B76E79] transition-all">
                    {track.badge}
                  </span>
                </button>
              ))}
            </div>

            {/* Custom Seminars & Workshops Box */}
            <div className="bg-[#FAF6F1]/5 border border-[#FAF6F1]/10 p-6 space-y-4 mt-8">
              <h4 className="font-sans text-xs uppercase tracking-widest text-[#B76E79] font-semibold">
                Workshops & Host Seminars
              </h4>
              <p className="font-sans font-light text-xs text-[#FAF6F1]/70 leading-relaxed">
                We organize routine intensive public seminars, digital beauty influencer sessions, and specialized bridal jewelry draping workshops for students to expand their practical portfolios.
              </p>
              <button
                onClick={onContactClick}
                className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#FAF6F1] underline hover:text-[#B76E79] transition-colors cursor-pointer"
              >
                Inquire For Next Workshop Date →
              </button>
            </div>
          </div>

          {/* Syllabus Details Display Frame */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTrack.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-[#FAF6F1]/5 border border-[#FAF6F1]/15 p-8 lg:p-10 space-y-8"
              >
                {/* Track visual image & badge */}
                <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#FAF6F1]/10">
                  <img
                    src={currentTrack.image}
                    alt={currentTrack.title}
                    className="w-full h-full object-cover object-center scale-102 hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F] via-[#1F1F1F]/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-baseline justify-between">
                    <span className="bg-[#B76E79] text-[#FAF6F1] font-mono text-[9px] uppercase tracking-widest px-3 py-1 font-semibold">
                      {currentTrack.badge} SECURED
                    </span>
                    <span className="text-[#FAF6F1]/90 font-mono text-[11px] tracking-wide">
                      {currentTrack.duration}
                    </span>
                  </div>
                </div>

                {/* Scope Description */}
                <div className="space-y-3">
                  <h3 className="font-sans text-xl font-light text-[#FAF6F1] uppercase tracking-wide">
                    {currentTrack.title}
                  </h3>
                  <p className="font-sans text-xs text-[#FAF6F1]/80 leading-relaxed font-light">
                    {currentTrack.description}
                  </p>
                </div>

                {/* Comprehensive Syllabus Bullet checklist */}
                <div className="space-y-4 pt-4 border-t border-[#FAF6F1]/10">
                  <h4 className="font-sans text-xs uppercase tracking-widest text-[#B76E79] font-semibold flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-[#B76E79]" />
                    <span>Curriculum Syllabus Breakdown</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentTrack.curriculum.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-[#B76E79] mt-0.5 shrink-0" />
                        <span className="font-sans text-[11px] text-[#FAF6F1]/80 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Final Call to Academics CTA */}
                <div className="pt-6 border-t border-[#FAF6F1]/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-[#B76E79]" />
                    <span className="font-sans text-xs text-[#FAF6F1]/70 leading-snug">
                      Includes Portfolio Photoshoot & Govt-Aligned Certification
                    </span>
                  </div>
                  <button
                    onClick={onContactClick}
                    className="w-full sm:w-auto text-center bg-[#B76E79] hover:bg-[#a35e69] text-[#FAF6F1] font-sans text-xs uppercase tracking-widest px-6 py-3 transition-colors cursor-pointer"
                  >
                    Enroll / Inquire Course
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Student Experience Witness Strip */}
        <div className="mt-20 border-y border-[#FAF6F1]/10 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-4xl mx-auto text-center lg:text-left">
            <div className="flex items-center space-x-1.5 justify-center lg:justify-start">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#B76E79] text-[#B76E79]" />
              ))}
            </div>
            <p className="font-sans italic text-sm text-[#FAF6F1]/80 max-w-2xl leading-relaxed">
              "The practical training modules at Beauty Box Academy built my real styling reflexes. It is highly respectably structured. I opened my own nails shop in Meerut within 3 months of getting certified!"
            </p>
            <div className="shrink-0">
              <h5 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#FAF6F1]">
                Shruti Katyal
              </h5>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#B76E79]">
                Batch 2025 • Salon Owner
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
