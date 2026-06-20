import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, HeartHandshake } from 'lucide-react';

export default function About() {
  const stats = [
    {
      id: 'stat-1',
      number: '12+',
      label: 'Years of Excellence',
      sub: 'Pioneering trends in UP'
    },
    {
      id: 'stat-2',
      number: '25,000+',
      label: 'Clients Transformed',
      sub: 'Including luxury brides'
    },
    {
      id: 'stat-3',
      number: '100%',
      label: 'Hygienic Guarantee',
      sub: 'Sovereign-grade safety'
    },
    {
      id: 'stat-4',
      number: '300+',
      label: 'Academy Graduates',
      sub: 'Now professional artists'
    },
  ];

  return (
    <section id="about" className="bg-[#FAF6F1] py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Text Narrative Section */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B76E79]">
                Since 2014 • Meerut's Premier Destination
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-[#1A1A1A] uppercase leading-tight">
                Where Elite Technique <br />
                <span className="font-medium text-[#1A1A1A]">Meets Pure Artistry</span>
              </h2>
            </div>

            <p className="font-sans font-light text-base text-[#1A1A1A]/80 leading-relaxed max-w-2xl">
              Beauty Box is a luxury institute operating at the intersection of professional salon services and high-end beauty education. Designed as a sanctuary for self-care in Meerut, we deliver unmatched beauty therapy built on modern global techniques, uncompromising hygiene guidelines, and deeply personalized attention.
            </p>

            <p className="font-sans font-light text-sm text-[#1A1A1A]/70 leading-relaxed max-w-2xl">
              Whether you are seeking your dream wedding glow or training to launch a global professional beauty career at our signature Academy, our certified artisans and industry-leading educators empower you through certified premium expertise and globally sourced cosmetics.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-[#E8DCD0] rounded text-[#B76E79]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-[#1A1A1A]">
                    Expert Artisans
                  </h4>
                  <p className="font-sans text-[11px] text-[#1A1A1A]/60 mt-1">
                    Certified stylists & trainers
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-[#E8DCD0] rounded text-[#B76E79]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-[#1A1A1A]">
                    Strict Hygiene
                  </h4>
                  <p className="font-sans text-[11px] text-[#1A1A1A]/60 mt-1">
                    100% autocalved & sealed tools
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-[#E8DCD0] rounded text-[#B76E79]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-[#1A1A1A]">
                    Personalized Care
                  </h4>
                  <p className="font-sans text-[11px] text-[#1A1A1A]/60 mt-1">
                    Anatomical consultation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Supporting Visual Area */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Main Visual Image frame */}
            <div className="relative z-10 overflow-hidden border border-[#1A1A1A]/10 p-2.5 bg-[#FAF6F1]">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
                alt="Beauty Box Treatment Salon"
                className="w-full object-cover aspect-[4/5] object-center grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Elegant asymmetrical background block */}
            <div className="absolute top-8 -left-8 w-full h-full border border-[#B76E79]/30 -z-0 pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#E8DCD0]/40 -z-0 pointer-events-none rounded-full blur-xl" />
          </div>

        </div>

        {/* Minimalized Stat Multi-columns row */}
        <div className="border-t border-[#1A1A1A]/10 mt-20 pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center md:text-left flex flex-col space-y-1"
            >
              <span className="font-sans text-3xl sm:text-4xl md:text-5xl font-light text-[#B76E79]">
                {stat.number}
              </span>
              <span className="font-sans text-xs tracking-wider uppercase font-semibold text-[#1A1A1A]">
                {stat.label}
              </span>
              <span className="font-sans text-[11px] text-[#1A1A1A]/50 font-light">
                {stat.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
