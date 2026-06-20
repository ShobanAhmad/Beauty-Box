import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeftRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { beforeAfterPairs } from '../data';

export default function ComparisonSlider() {
  const [activeCategory, setActiveCategory] = useState<'hair' | 'skin' | 'makeup' | 'nails'>('hair');
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);

  // Find the active pair based on selected category tab
  const currentPair = beforeAfterPairs.find(p => p.category === activeCategory) || beforeAfterPairs[0];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    handleMove(clientX);
  };

  const tabs = [
    { id: 'hair', label: 'Hair Transformation' },
    { id: 'makeup', label: 'Bridal Makeup' },
    { id: 'skin', label: 'Skin Glow' },
    { id: 'nails', label: 'Salon Styling' },
  ] as const;

  return (
    <section id="transformations" className="bg-[#FAF6F1] py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B76E79]">
            The Magic of Technique
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-[#1A1A1A] uppercase leading-tight">
            Before & After <span className="font-medium text-[#1A1A1A]">Transformations</span>
          </h2>
          <div className="h-[1px] w-16 bg-[#B76E79] mx-auto mt-4" />
          <p className="font-sans font-light text-sm text-[#1A1A1A]/70 leading-relaxed pt-2">
            Witness the signature differences customized specifically for each client. Drag the slider to visually evaluate our professional hair alignment, skin resurfacing, and elite makeovers.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-2xl mx-auto border-b border-[#1A1A1A]/10 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveCategory(tab.id);
                setSliderPosition(50); // reset slider to middle on tab index change
              }}
              className={`font-sans text-xs uppercase tracking-widest px-4 py-2.5 transition-all duration-300 relative cursor-pointer ${
                activeCategory === tab.id
                  ? 'text-[#B76E79] font-medium'
                  : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
              }`}
            >
              {tab.label}
              {activeCategory === tab.id && (
                <motion.div
                  layoutId="activeTransformTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B76E79]"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Detail Description Box */}
          <div className="lg:col-span-4 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPair.id}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2 text-[#B76E79]">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                    Signature Treatment
                  </span>
                </div>
                <h3 className="font-sans text-2xl font-light text-[#1A1A1A] uppercase tracking-wide">
                  {currentPair.title}
                </h3>
                <p className="font-sans font-light text-sm text-[#1A1A1A]/80 leading-relaxed">
                  {currentPair.description}
                </p>

                {/* Bullet details */}
                <div className="pt-4 space-y-3">
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B76E79] mt-0.5 shrink-0" />
                    <span className="font-sans text-xs text-[#1A1A1A]/70">Premium organic bond protectors and serum locks applied.</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B76E79] mt-0.5 shrink-0" />
                    <span className="font-sans text-xs text-[#1A1A1A]/70">Tailored to the client's individual tissue integrity.</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="bg-[#E8DCD0]/35 border border-[#1A1A1A]/5 p-5">
              <p className="font-sans italic text-xs text-[#1A1A1A]/70 leading-relaxed">
                "We operate with modern sterilizations and standard premium chemicals (L'Oréal Professionnel, MAC, Estée Lauder, Kryolan) to achieve durable elegance safely."
              </p>
              <p className="font-sans text-[10px] uppercase tracking-wider font-semibold text-[#1A1A1A] mt-3">
                — BEAUTY BOX ARTISAN TEAM
              </p>
            </div>
          </div>

          {/* Right Comparison Slider Box */}
          <div className="lg:col-span-8 flex justify-center">
            <div
              ref={containerRef}
              onMouseDown={startDrag}
              onTouchStart={startDrag}
              className="relative w-full max-w-[680px] aspect-[4/3] overflow-hidden border border-[#1A1A1A]/10 select-none cursor-ew-resize bg-[#E8DCD0]/20"
            >
              {/* After Image (Background) */}
              <img
                src={currentPair.afterImg}
                alt={`${currentPair.title} - After`}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-4 right-4 z-10 bg-[#1A1A1A]/80 backdrop-blur text-[#FAF6F1] font-mono text-[10px] uppercase tracking-widest px-3 py-1 border border-[#FAF6F1]/10">
                After Look
              </span>

              {/* Before Image (Foreground, clipped based on slider position) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={currentPair.beforeImg}
                  alt={`${currentPair.title} - Before`}
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: containerRef.current?.getBoundingClientRect().width || '680px', height: '100%' }}
                  referrerPolicy="no-referrer"
                />
                
              </div>
              <span className="absolute bottom-4 left-4 z-10 bg-[#FAF6F1]/95 text-[#1A1A1A] font-mono text-[10px] uppercase tracking-widest px-3 py-1 border border-[#1A1A1A]/15 pointer-events-none">
                Before State
              </span>

              {/* Drag Handle element line */}
              <div
                className="absolute top-0 bottom-0 z-20 w-[1px] bg-[#B76E79] shadow-lg pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Circular Handle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#B76E79] hover:bg-[#a35e69] text-[#FAF6F1] shadow-2xl rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95">
                  <ArrowLeftRight className="w-4 h-4 text-[#FAF6F1]" />
                </div>
              </div>

              {/* Drag gesture prompt on initial visual feel */}
              {sliderPosition === 50 && !isDragging && (
                <motion.div
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: [0.8, 0.2, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 bg-[#1A1A1A]/85 text-[#FAF6F1] font-sans text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full pointer-events-none flex items-center space-x-1.5"
                >
                  <span>Drag Handle to Compare</span>
                </motion.div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
