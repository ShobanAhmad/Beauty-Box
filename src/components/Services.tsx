import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scissors, Sparkles, Wand2, Flower2, Scissors as Razor, Gem, ChevronRight, Clock, ShieldCheck } from 'lucide-react';
import { salonServices } from '../data';
import { ServiceItem } from '../types';

interface ServicesProps {
  onBookClick: (preselectedService?: string) => void;
}

export default function Services({ onBookClick }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'hair' | 'skin' | 'makeup' | 'spa' | 'grooming'>('all');

  const tabs = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair Cuts & Color' },
    { id: 'skin', label: 'Advanced Skin' },
    { id: 'makeup', label: 'Art of Makeup' },
    { id: 'spa', label: 'Holistic Spa' },
    { id: 'grooming', label: 'Nails & Grooming' },
  ] as const;

  const filteredServices = activeTab === 'all'
    ? salonServices
    : salonServices.filter(s => s.category === activeTab);

  const getServiceIcon = (service: ServiceItem) => {
    switch (service.category) {
      case 'hair':
        return <Scissors className="w-5 h-5 text-[#B76E79]" />;
      case 'skin':
        return <Sparkles className="w-5 h-5 text-[#B76E79]" />;
      case 'makeup':
        return <Wand2 className="w-5 h-5 text-[#B76E79]" />;
      case 'spa':
        return <Flower2 className="w-5 h-5 text-[#B76E79]" />;
      case 'grooming':
        if (service.name.toLowerCase().includes('nail')) {
          return <Gem className="w-5 h-5 text-[#B76E79]" />;
        }
        return <Razor className="w-5 h-5 text-[#B76E79]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#B76E79]" />;
    }
  };

  return (
    <section id="services" className="bg-[#1A1A1A] py-24 sm:py-32 relative text-[#FAF6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B76E79]">
            Curated Treatment Collection
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-light tracking-wide uppercase leading-tight">
            Salon Services & <span className="font-medium text-[#FAF6F1]">Rituals</span>
          </h2>
          <div className="h-[1px] w-16 bg-[#B76E79] mx-auto mt-4" />
          <p className="font-sans font-light text-sm text-[#FAF6F1]/70 leading-relaxed pt-2">
            Explore our comprehensive menu of high-end clinical and holistic beauty rituals. Every service includes an in-depth botanical consultation and standard sterile diagnostic practices.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-[#FAF6F1]/10 pb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-sans text-xs uppercase tracking-widest px-5 py-3 transition-all duration-300 relative cursor-pointer ${
                activeTab === tab.id
                  ? 'text-[#B76E79] font-medium'
                  : 'text-[#FAF6F1]/60 hover:text-[#FAF6F1]'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeServiceTabBorder"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B76E79]"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid of Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                key={service.id}
                className="group relative bg-[#FAF6F1]/5 border border-[#FAF6F1]/10 hover:border-[#B76E79]/50 p-8 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#1A1A1A]"
              >
                {/* Accent corner line */}
                <span className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-[#B76E79] group-hover:w-4 group-hover:h-4 transition-all duration-300" />
                
                <div>
                  {/* Icon & Category Indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-[#FAF6F1]/5 border border-[#FAF6F1]/10 group-hover:bg-[#B76E79]/10 group-hover:border-[#B76E79]/30 transition-all duration-300">
                      {getServiceIcon(service)}
                    </div>
                    {service.duration && (
                      <div className="flex items-center space-x-1.5 text-[#FAF6F1]/40 group-hover:text-[#B76E79]/80 transition-colors">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="font-mono text-[10px] uppercase tracking-wider">{service.duration}</span>
                      </div>
                    )}
                  </div>

                  {/* Name and description */}
                  <h3 className="font-sans text-lg font-light tracking-wide text-[#FAF6F1] group-hover:text-[#B76E79] transition-colors mb-3">
                    {service.name}
                  </h3>
                  <p className="font-sans text-xs text-[#FAF6F1]/70 leading-relaxed font-light mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Pricing & Booking Trigger */}
                <div className="border-t border-[#FAF6F1]/10 pt-4 mt-6 flex items-center justify-between">
                  {service.price && (
                    <span className="font-mono text-xs text-[#FAF6F1]/60 group-hover:text-[#FAF6F1] transition-colors tracking-wide">
                      {service.price}
                    </span>
                  )}
                  <button
                    onClick={() => onBookClick(service.name)}
                    className="flex items-center space-x-1 font-sans text-[11px] uppercase tracking-[0.2em] text-[#B76E79] group-hover:text-[#FAF6F1] hover:underline transition-all duration-300 cursor-pointer focus:outline-none"
                  >
                    <span>Reserve</span>
                    <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Trust bar */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 py-4 px-8 border border-[#FAF6F1]/10 bg-[#FAF6F1]/5">
            <span className="flex items-center space-x-2 text-xs font-sans tracking-wider text-[#FAF6F1]/80">
              <ShieldCheck className="w-4 h-4 text-[#B76E79]" />
              <span>Sovereign Hygiene Standard Certified</span>
            </span>
            <span className="hidden sm:inline text-[#FAF6F1]/35">•</span>
            <span className="text-xs font-sans tracking-wider text-[#FAF6F1]/80">
              Personal consults provided prior to every procedure.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
