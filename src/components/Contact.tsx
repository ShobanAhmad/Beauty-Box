import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Sparkles, MessageCircle, AlertCircle } from 'lucide-react';
import { contactDetails } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#1A1A1A] py-24 sm:py-32 relative text-[#FAF6F1]\">
      
      {/* Absolute decorative ambient light */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#B76E79]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B76E79]">
            Begin Your Experience
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-light tracking-wide uppercase leading-tight">
            Connect <span className="font-medium text-[#FAF6F1]">With Us</span>
          </h2>
          <div className="h-[1px] w-16 bg-[#B76E79] mx-auto mt-4" />
          <p className="font-sans font-light text-sm text-[#FAF6F1]/70 leading-relaxed pt-2">
            Have questions about our couture bridal makeup or academy course terms? Message or dial our concierge lines. Enjoy abundant free valet parking safely.
          </p>
        </div>

        {/* Contact Coordinates Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column - Details */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-sans text-2xl font-light text-[#FAF6F1] uppercase tracking-wide">
                Beauty Box <br />
                <span className="font-medium">Sanctuary Suite</span>
              </h3>
              
              {/* Address details row */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#FAF6F1]/5 border border-[#FAF6F1]/10 text-[#B76E79] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest text-[#B76E79] font-semibold">
                    Our Location
                  </h4>
                  <p className="font-sans text-xs text-[#FAF6F1]/80 leading-relaxed font-light mt-1 max-w-sm">
                    {contactDetails.address}
                  </p>
                </div>
              </div>

              {/* Hours of operation row */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#FAF6F1]/5 border border-[#FAF6F1]/10 text-[#B76E79] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest text-[#B76E79] font-semibold">
                    Concierge Hours
                  </h4>
                  <p className="font-sans text-xs text-[#FAF6F1]/80 font-light mt-1">
                    {contactDetails.hours}
                  </p>
                  <p className="font-sans text-[10px] text-[#FAF6F1]/40 mt-0.5">
                    Appointments requested 24h prior are highly recommended
                  </p>
                </div>
              </div>

              {/* Telephone concierge row */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#FAF6F1]/5 border border-[#FAF6F1]/10 text-[#B76E79] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest text-[#B76E79] font-semibold">
                    Concierge Line
                  </h4>
                  <p className="font-sans text-xs text-[#FAF6F1]/80 font-light mt-1">
                    {contactDetails.phone}
                  </p>
                  <p className="font-sans text-[10px] text-[#FAF6F1]/40 mt-0.5">
                    For direct bookings and commercial academic details
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Interaction Buttons */}
            <div className="space-y-4 pt-6 border-t border-[#FAF6F1]/10">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${contactDetails.formattedPhone}`}
                  className="flex-1 flex items-center justify-center space-x-2 bg-[#B76E79] hover:bg-[#a35e69] text-[#FAF6F1] font-sans text-xs uppercase tracking-widest py-4 transition-all duration-300 font-medium text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Concierge NOW</span>
                </a>
                <a
                  href={`https://wa.me/${contactDetails.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Beauty%20Box%2C%20I%20would%20like%20to%20inquire%20about%20booking%20salon%20services%20or%20academy%20courses.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20b858] text-white font-sans text-xs uppercase tracking-widest py-4 transition-all duration-300 font-medium text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Interactive WhatsApp</span>
                </a>
              </div>
              <div className="flex items-center space-x-2 text-[#FAF6F1]/40 text-[10px] font-sans leading-none justify-center lg:justify-start">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Zero reservation cancellation or rescheduling charges applies.</span>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Google Maps */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative w-full h-full min-h-[350px] border border-[#FAF6F1]/15 p-2 bg-[#FAF6F1]/5 group overflow-hidden">
              <iframe
                title="Beauty Box Meerut Location Map"
                src={contactDetails.mapIframeUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 min-h-[350px]"
              />
              {/* Absolutes Map framing lines */}
              <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#B76E79]" />
              <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#B76E79]" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
