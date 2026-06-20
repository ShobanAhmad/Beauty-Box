import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { label: 'The Salon', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Transformations', target: 'transformations' },
    { label: 'Academy', target: 'academy' },
    { label: 'Portfolios', target: 'gallery' },
    { label: 'Reviews', target: 'reviews' },
    { label: 'Connect', target: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1A1A1A]/95 backdrop-blur-md border-b border-[#FAF6F1]/10 py-4 shadow-lg'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex flex-col items-start"
            >
              <div className="flex items-baseline space-x-1">
                <span className="text-xl font-sans tracking-[0.25em] text-[#FAF6F1] font-medium leading-none uppercase group-hover:text-[#B76E79] transition-all duration-300">
                  BEAUTY
                </span>
                <span className="text-xl font-sans tracking-[0.25em] text-[#B76E79] font-medium leading-none uppercase">
                  BOX
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.4em] text-[#FAF6F1]/50 mt-1">
                SALON & ACADEMY • MEERUT
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => scrollToSection(item.target)}
                  className="font-sans text-xs tracking-widest text-[#FAF6F1]/80 hover:text-[#B76E79] uppercase transition-colors duration-300 relative py-1 group cursor-pointer"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#B76E79] group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </nav>

            {/* Booking CTA Button (Desktop) */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+919876543210"
                className="flex items-center space-x-2 text-[#FAF6F1]/80 hover:text-[#B76E79] transition-colors focus:outline-none"
              >
                <Phone className="w-4 h-4 text-[#B76E79]" />
                <span className="font-mono text-xs tracking-wider">+91 98765 43210</span>
              </a>
              <button
                onClick={onBookClick}
                className="bg-[#B76E79] hover:bg-[#a35e69] text-[#FAF6F1] font-sans text-xs uppercase tracking-widest px-6 py-2.5 transition-all duration-300 border border-[#B76E79] hover:border-[#a35e69] cursor-pointer font-medium hover:shadow-md hover:shadow-[#B76E79]/20"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={onBookClick}
                aria-label="Book appointment"
                className="p-2 text-[#B76E79]"
              >
                <Calendar className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-[#FAF6F1] hover:text-[#B76E79] focus:outline-none cursor-pointer"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 w-full z-30 bg-[#1A1A1A]/98 border-b border-[#FAF6F1]/10 backdrop-blur-lg lg:hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => scrollToSection(item.target)}
                  className="block w-full text-left py-2 px-3 font-sans text-xs uppercase tracking-widest text-[#FAF6F1] hover:bg-[#FAF6F1]/5 hover:text-[#B76E79] rounded transition-all cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t border-[#FAF6F1]/10 pt-4 mt-2 px-3 space-y-4">
                <a
                  href="tel:+919876543210"
                  className="flex items-center space-x-3 text-[#FAF6F1] hover:text-[#B76E79] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#B76E79]" />
                  <span className="font-mono text-sm">+91 98765 43210</span>
                </a>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onBookClick();
                  }}
                  className="w-full bg-[#B76E79] hover:bg-[#a35e69] text-[#FAF6F1] text-xs uppercase tracking-widest py-3 text-center transition-all duration-300 font-medium font-sans"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
