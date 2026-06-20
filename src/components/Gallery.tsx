import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { clientGallery } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<'all' | 'hair' | 'makeup' | 'interior' | 'nails' | 'academy'>('all');
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

  const tabs = [
    { id: 'all', label: 'View All' },
    { id: 'hair', label: 'Hair Portfolio' },
    { id: 'makeup', label: 'Elite Makeup' },
    { id: 'nails', label: 'Gel & Nails' },
    { id: 'interior', label: 'The Salon Suite' },
    { id: 'academy', label: 'Academy Life' },
  ] as const;

  // Filter gallery items
  const filteredGallery = activeTab === 'all'
    ? clientGallery
    : clientGallery.filter(item => item.category === activeTab);

  const openLightbox = (id: string) => {
    // find index in the filtered gallery list
    const idx = filteredGallery.findIndex(item => item.id === id);
    if (idx !== -1) {
      setSelectedImageIdx(idx);
    }
  };

  const closeLightbox = () => {
    setSelectedImageIdx(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIdx === null) return;
    const newIdx = selectedImageIdx === 0 ? filteredGallery.length - 1 : selectedImageIdx - 1;
    setSelectedImageIdx(newIdx);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIdx === null) return;
    const newIdx = selectedImageIdx === filteredGallery.length - 1 ? 0 : selectedImageIdx + 1;
    setSelectedImageIdx(newIdx);
  };

  const lightboxItem = selectedImageIdx !== null ? filteredGallery[selectedImageIdx] : null;

  return (
    <section id="gallery" className="bg-[#1A1A1A] py-24 sm:py-32 relative text-[#FAF6F1] overflow-hidden">
      
      {/* Absolute ambient lights */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#B76E79]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B76E79]">
            The Studio Showcase
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-light tracking-wide uppercase leading-tight">
            Our Premium <span className="font-medium text-[#FAF6F1]">Gallery</span>
          </h2>
          <div className="h-[1px] w-16 bg-[#B76E79] mx-auto mt-4" />
          <p className="font-sans font-light text-sm text-[#FAF6F1]/70 leading-relaxed pt-2">
            Browse real, unfiltered photographs of our premium hair cuts, celebrity makeovers, student training workshops, and luxury Meerut salon interior.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-3xl mx-auto border-b border-[#FAF6F1]/10 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setSelectedImageIdx(null); // safely invalidate lightbox indices
              }}
              className={`font-sans text-xs uppercase tracking-widest px-4 py-2.5 transition-all duration-300 relative cursor-pointer ${
                activeTab === tab.id
                  ? 'text-[#B76E79] font-medium'
                  : 'text-[#FAF6F1]/60 hover:text-[#FAF6F1]'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeGalleryTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B76E79]"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Asymmetric Masonry Columns (vibrant masonry visual flow) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => openLightbox(item.id)}
                className="break-inside-avoid relative overflow-hidden border border-[#FAF6F1]/15 group cursor-pointer bg-[#FAF6F1]/5 p-2.5 transition-all duration-300 hover:border-[#B76E79]/60 hover:shadow-2xl"
              >
                {/* Images with custom zoom transition */}
                <div className="overflow-hidden relative aspect-auto">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full object-cover h-auto scale-100 group-hover:scale-104 transition-transform duration-700 select-none grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  {/* Luxury editorial overlay card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/95 via-[#1A1A1A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10" />
                  
                  {/* Subtle info card */}
                  <div className="absolute bottom-4 left-4 right-4 z-15 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#B76E79] font-semibold bg-[#FAF6F1] px-2.5 py-1 inline-block mb-2">
                      {item.category}
                    </span>
                    <h4 className="font-sans text-sm font-medium tracking-wide text-[#FAF6F1] uppercase">
                      {item.title}
                    </h4>
                    <p className="font-sans text-[10px] text-[#FAF6F1]/70 leading-relaxed font-light mt-1">
                      {item.description}
                    </p>
                  </div>

                  {/* Elite Maximize Icon */}
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all bg-[#1A1A1A]/85 p-2 rounded-full border border-[#FAF6F1]/20">
                    <Maximize2 className="w-3.5 h-3.5 text-[#B76E79]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImageIdx !== null && lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-[#1A1A1A]/98 z-50 flex flex-col items-center justify-center p-4 sm:p-8 backdrop-blur-md"
          >
            {/* Close Lightbox Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-[#FAF6F1]/60 hover:text-[#B76E79] transition-colors focus:outline-none p-3 select-none cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left/Right Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-[#FAF6F1]/60 hover:text-[#B76E79] bg-[#FAF6F1]/5 hover:bg-[#FAF6F1]/10 p-3 rounded-full border border-[#FAF6F1]/15 transition-all select-none cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-[#FAF6F1]/60 hover:text-[#B76E79] bg-[#FAF6F1]/5 hover:bg-[#FAF6F1]/10 p-3 rounded-full border border-[#FAF6F1]/15 transition-all select-none cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Layout */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative border border-[#FAF6F1]/20 p-2 bg-[#FAF6F1]/5">
                <img
                  src={lightboxItem.imageUrl}
                  alt={lightboxItem.title}
                  className="max-h-[70vh] w-auto max-w-full object-contain pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Sub-details on slide photo */}
              <div className="text-center mt-6 space-y-2 max-w-xl mx-auto px-4">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#B76E79] font-semibold flex items-center justify-center gap-1.5 string">
                  <Sparkles className="w-3 h-3" />
                  <span>Category: {lightboxItem.category}</span>
                </span>
                <h3 className="font-sans text-lg font-medium uppercase tracking-wide text-[#FAF6F1]">
                  {lightboxItem.title}
                </h3>
                <p className="font-sans text-xs text-[#FAF6F1]/70 font-light leading-relaxed">
                  {lightboxItem.description}
                </p>
                <div className="text-[10px] text-[#FAF6F1]/40 font-mono pt-1">
                  Image {selectedImageIdx + 1} of {filteredGallery.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
