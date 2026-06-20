import React, { useState, useEffect } from 'react';
import { MessageCircle, Calendar, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { contactDetails } from '../data';

interface FloatersProps {
  onBookClick: () => void;
}

export default function Floaters({ onBookClick }: FloatersProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissWhatsApp, setDismissWhatsApp] = useState(false);
  const [dismissBook, setDismissBook] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-x-0 bottom-0 pointer-events-none z-50 p-6 flex justify-between items-center">
          
          {/* Floating WhatsApp Action Pill (Bottom-Left) */}
          <AnimatePresence>
            {!dismissWhatsApp && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="pointer-events-auto flex items-center bg-[#25D366] text-[#FAF6F1] shadow-xl p-3 sm:p-4 border border-[#25D366]/20 relative group hover:scale-105 transition-transform"
              >
                <a
                  href={`https://wa.me/${contactDetails.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Beauty%20Box%2C%20I%20would%20like%20to%20reserve%20a%20priority%20beauty%20appointment.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 mr-6 text-sm font-sans font-medium uppercase tracking-widest leading-none text-[#FAF6F1]"
                >
                  <MessageCircle className="w-5 h-5 fill-[#FAF6F1]" />
                  <span className="hidden sm:inline">WhatsApp us</span>
                </a>
                <button
                  onClick={() => setDismissWhatsApp(true)}
                  className="text-[#FAF6F1]/80 hover:text-[#FAF6F1] transition-colors focus:outline-none cursor-pointer"
                  aria-label="Dismiss WhatsApp tracker"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Book Appointment Action Pill (Bottom-Right) */}
          <AnimatePresence>
            {!dismissBook && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                className="pointer-events-auto flex items-center bg-[#B76E79] hover:bg-[#a35e69] text-[#FAF6F1] shadow-xl p-3 sm:p-4 border border-[#B76E79]/30 relative group hover:scale-105 transition-transform"
              >
                <button
                  onClick={onBookClick}
                  className="flex items-center space-x-2 mr-6 text-sm font-sans font-semibold uppercase tracking-widest leading-none text-[#FAF6F1] cursor-pointer focus:outline-none"
                >
                  <Calendar className="w-5 h-5 text-[#FAF6F1]" />
                  <span>Book Slot</span>
                </button>
                <button
                  onClick={() => setDismissBook(true)}
                  className="text-[#FAF6F1]/80 hover:text-[#FAF6F1] transition-colors focus:outline-none cursor-pointer"
                  aria-label="Dismiss Book Slot tracker"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      )}
    </AnimatePresence>
  );
}
