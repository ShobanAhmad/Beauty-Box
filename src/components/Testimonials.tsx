import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { clientTestimonials } from '../data';

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-[#FAF6F1] py-24 sm:py-32 relative overflow-hidden">
      
      {/* Decorative floral blurs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#E8DCD0]/35 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B76E79]">
            The Luxury Standard Speaks
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-[#1A1A1A] uppercase leading-tight">
            Client <span className="font-medium text-[#1A1A1A]">Testimonials</span>
          </h2>
          <div className="h-[1px] w-16 bg-[#B76E79] mx-auto mt-4" />
          <p className="font-sans font-light text-sm text-[#1A1A1A]/70 leading-relaxed pt-2">
            Read transparent reviews from our salon guests and academy graduates who visited us at our Meerut beauty sanctuary.
          </p>
        </div>

        {/* Staggered Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {clientTestimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#FAF6F1] border border-[#1A1A1A]/10 p-8 sm:p-10 hover:border-[#B76E79]/55 transition-all duration-300 hover:shadow-xl relative flex flex-col justify-between group"
            >
              {/* Giant elegant background quotation mark */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#E8DCD0]/30 group-hover:text-[#B76E79]/10 transition-colors pointer-events-none" />

              <div className="space-y-6">
                {/* Custom Stars & Service Indicator */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#B76E79] text-[#B76E79]" />
                    ))}
                  </div>
                  <span className="inline-block bg-[#E8DCD0] text-[#1A1A1A] text-[9px] uppercase tracking-widest px-2.5 py-1 font-semibold rounded-none border border-[#1A1A1A]/5">
                    {t.service}
                  </span>
                </div>

                {/* Testimonial detailed text */}
                <p className="font-sans font-light text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              {/* Author Details Block */}
              <div className="border-t border-[#1A1A1A]/10 pt-6 mt-8 flex items-baseline justify-between">
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-[#1A1A1A]">
                    {t.name}
                  </h4>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#B76E79]">
                    Verified Guest
                  </span>
                </div>
                <span className="font-sans text-[10px] text-[#1A1A1A]/40 font-light">
                  {t.date}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Dynamic callout banner under the testimonials */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-2 bg-[#B76E79]/5 border border-[#B76E79]/20 py-3.5 px-6 rounded-none">
            <Sparkles className="w-4 h-4 text-[#B76E79]" />
            <span className="font-sans text-[11px] tracking-wide text-[#1A1A1A]/80">
              In partnership with L'Oréal Professionnel, MAC, Estée Lauder & Kryolan international brands.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
