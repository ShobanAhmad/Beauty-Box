import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, UserCheck, Scissors, Crown, ShieldAlert, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const values = [
    {
      id: 'val-1',
      icon: <Sparkles className="w-6 h-6 text-[#B76E79]" />,
      title: 'State-of-the-Art Equipment',
      description: 'Implementing ultrasonic clarifiers, damage-preventive infrared processors, and digital dermal mapping analyzers.'
    },
    {
      id: 'val-2',
      icon: <UserCheck className="w-6 h-6 text-[#B76E79]" />,
      title: 'Experienced Instructors',
      description: 'Our senior academy trainers hold certifications from elite international cosmetic and hair academies.'
    },
    {
      id: 'val-3',
      icon: <Scissors className="w-6 h-6 text-[#B76E79]" />,
      title: 'Professional Stylists',
      description: 'Highly trained professionals who perform meticulous facial framing cuts and customized high-glam paint melts.'
    },
    {
      id: 'val-4',
      icon: <Crown className="w-6 h-6 text-[#B76E79]" />,
      title: 'Premium Environment',
      description: 'A sensory-soothing, acoustically treated layout with deep velvet chairs, warm task lighting, and fresh botanicals.'
    },
    {
      id: 'val-5',
      icon: <ShieldAlert className="w-6 h-6 text-[#B76E79]" />,
      title: 'Strict Hygiene Standards',
      description: 'Medical autoclave sanitization of tools; single-use disposables, sealed linens, and strict air filtration cycles.'
    },
    {
      id: 'val-6',
      icon: <HeartHandshake className="w-6 h-6 text-[#B76E79]" />,
      title: 'Personalized Care',
      description: 'We never rush. Every slot begins with an in-depth botanical diagnostic of your hair density or skin sebum state.'
    }
  ];

  return (
    <section className="bg-[#FAF6F1] py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B76E79]">
            The Luxury Difference
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-[#1A1A1A] uppercase leading-tight">
            Why Choose <span className="font-medium text-[#1A1A1A]">Beauty Box</span>
          </h2>
          <div className="h-[1px] w-16 bg-[#B76E79] mx-auto mt-4" />
          <p className="font-sans font-light text-sm text-[#1A1A1A]/70 leading-relaxed pt-2">
            We reject templated salon shortcuts. Our commitment to deep anatomical analysis, state-registered hygiene guidelines, and elite tools ensures a trustworthy, luxurious experience.
          </p>
        </div>

        {/* Minimal Grid of Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={val.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#FAF6F1] border border-[#1A1A1A]/10 p-8 hover:border-[#B76E79]/50 transition-all duration-300 hover:shadow-lg group relative"
            >
              {/* Inner subtle glow line on hover */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-[#B76E79] group-hover:h-full transition-all duration-300" />
              
              <div className="space-y-4">
                <div className="p-3 inline-block bg-[#E8DCD0]/40 group-hover:bg-[#B76E79]/10 transition-colors">
                  {val.icon}
                </div>
                <h3 className="font-sans text-base uppercase tracking-wider font-semibold text-[#1A1A1A] group-hover:text-[#B76E79] transition-colors leading-tight">
                  {val.title}
                </h3>
                <p className="font-sans text-xs font-light text-[#1A1A1A]/70 leading-relaxed">
                  {val.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
