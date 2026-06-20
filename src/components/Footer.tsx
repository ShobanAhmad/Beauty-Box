import React from 'react';
import { ArrowUp, Sparkles, MessageCircle, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { contactDetails } from '../data';

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#1A1A1A] border-t border-[#FAF6F1]/10 text-[#FAF6F1] pt-16 pb-12 relative overflow-hidden">
      
      {/* Footer framing coordinates layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-[#FAF6F1]/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex flex-col">
              <span className="font-sans text-lg tracking-[0.25em] text-[#FAF6F1] font-medium leading-none uppercase">
                BEAUTY <span className="text-[#B76E79]">BOX</span>
              </span>
              <span className="text-[8px] uppercase tracking-[0.4em] text-[#FAF6F1]/50 mt-1">
                Luxury Salon & Beauty Academy
              </span>
            </div>
            <p className="font-sans font-light text-xs text-[#FAF6F1]/60 leading-relaxed max-w-sm">
              Meerut's premium sanctuary dedicated directly to exquisite hair treatments, clinical skincare, editorial bridal cosmetics, and govt-respected professional beauty tuition.
            </p>
            {/* Social networks handles */}
            <div className="flex items-center space-x-3.5 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-[#FAF6F1]/5 border border-[#FAF6F1]/10 text-[#FAF6F1] hover:text-[#B76E79] hover:border-[#B76E79] rounded-none transition-colors"
                aria-label="Instagram Link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-[#FAF6F1]/5 border border-[#FAF6F1]/10 text-[#FAF6F1] hover:text-[#B76E79] hover:border-[#B76E79] rounded-none transition-colors"
                aria-label="Facebook Link"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${contactDetails.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-[#FAF6F1]/5 border border-[#FAF6F1]/10 text-[#FAF6F1] hover:text-[#25D366] hover:border-[#25D366] rounded-none transition-colors"
                aria-label="WhatsApp Link"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Timings and details Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-widest text-[#B76E79] font-semibold">
              The Sanctuary Timings
            </h4>
            <div className="space-y-2 font-sans text-xs text-[#FAF6F1]/75 font-light leading-relaxed">
              <p>Opening Schedule:</p>
              <p className="text-[#FAF6F1] font-medium">{contactDetails.hours}</p>
              <p className="pt-2 text-[10px] text-[#FAF6F1]/40 leading-relaxed">
                Prior reservations are highly recommended for bridal transformations, academy diagnostics, and weekend hours.
              </p>
            </div>
          </div>

          {/* Quick links Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-widest text-[#B76E79] font-semibold">
              Contact Concierge
            </h4>
            <ul className="space-y-3 font-sans text-xs text-[#FAF6F1]/75 font-light">
              <li className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#B76E79]" />
                <a href={`tel:${contactDetails.formattedPhone}`} className="hover:text-[#B76E79] transition-colors">{contactDetails.phone}</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#B76E79]" />
                <a href={`mailto:${contactDetails.email}`} className="hover:text-[#B76E79] transition-colors">{contactDetails.email}</a>
              </li>
              <li className="flex items-start space-x-2 pt-1 line-clamp-3">
                <span className="font-semibold text-[#B76E79] text-[9px] uppercase tracking-wider block mt-0.5">LOCATION</span>
                <span className="text-[11px] leading-relaxed text-[#FAF6F1]/60">Meerut 250001, Uttar Pradesh, India</span>
              </li>
            </ul>
          </div>

          {/* Quick Back to top widget Col */}
          <div className="lg:col-span-2 flex flex-col md:items-start lg:items-end justify-between">
            <div className="flex items-center space-x-1 font-mono text-[9px] uppercase tracking-[0.25em] text-[#FAF6F1]/40">
              <Sparkles className="w-3 h-3 text-[#B76E79]" />
              <span>STRICT HYGIENE</span>
            </div>
            <button
              onClick={scrollUp}
              className="mt-6 lg:mt-0 p-3 bg-[#FAF6F1]/5 hover:bg-[#B76E79] text-[#B76E79] hover:text-[#FAF6F1] border border-[#FAF6F1]/10 rounded-none transition-all duration-300 flex items-center justify-center cursor-pointer shadow focus:outline-none"
              aria-label="Scroll back layout to top"
            >
              <ArrowUp className="w-4 h-4 font-bold" />
            </button>
          </div>

        </div>

        {/* Lower section copyrights */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#FAF6F1]/40 font-sans font-light">
          <p>© {new Date().getFullYear()} Beauty Box Meerut. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0 uppercase tracking-widest text-[9px] text-[#FAF6F1]/30">
            Premium Beauty & Aesthetic Academy Experience
          </p>
        </div>

      </div>
    </footer>
  );
}
