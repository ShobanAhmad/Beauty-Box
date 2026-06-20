import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ComparisonSlider from './components/ComparisonSlider';
import Academy from './components/Academy';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Floaters from './components/Floaters';

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // offset for the luxury sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectServiceAndScroll = (serviceName: string) => {
    setPreselectedService(serviceName);
    scrollToSection('booking');
  };

  const handleBookAppointmentClick = () => {
    scrollToSection('booking');
  };

  const handleExploreServicesClick = () => {
    scrollToSection('services');
  };

  const handleContactClick = () => {
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#FAF6F1] font-sans antialiased text-[#1A1A1A] selection:bg-[#B76E79]/20 selection:text-[#1A1A1A]">
      {/* Sticky header navigation */}
      <Navbar onBookClick={handleBookAppointmentClick} />

      {/* Main viewport segments */}
      <main>
        {/* 1. Hero Cover */}
        <Hero
          onBookClick={handleBookAppointmentClick}
          onExploreClick={handleExploreServicesClick}
        />

        {/* 2. Editorial Narrative About Us */}
        <About />

        {/* 3. Services List Collection */}
        <Services onBookClick={handleSelectServiceAndScroll} />

        {/* 4. Interactive Drag before & after transformations */}
        <ComparisonSlider />

        {/* 5. Cosmetology Professional & Bridal Academy */}
        <Academy onContactClick={handleContactClick} />

        {/* 6. Why Choose Us Premium Standards */}
        <WhyChooseUs />

        {/* 7. Asymmetrical Masonry Portfolio Gallery */}
        <Gallery />

        {/* 8. Verified Staggered testimonial reviews */}
        <Testimonials />

        {/* 9. Booking reservation engine */}
        <Booking
          preselectedService={preselectedService}
          onClearPreselect={() => setPreselectedService(undefined)}
        />

        {/* 10. Contact coordinates, hotline buttons & map iframe panels */}
        <Contact />
      </main>

      {/* Footer component */}
      <Footer />

      {/* 11 & 12. Floor dismissible action buttons */}
      <Floaters onBookClick={handleBookAppointmentClick} />
    </div>
  );
}
