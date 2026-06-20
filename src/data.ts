import { ServiceItem, TrainingTrack, TestimonialItem, GalleryItem, BeforeAfterPair } from './types';

export const salonServices: ServiceItem[] = [
  {
    id: 'hair-1',
    name: 'Artisanal Haircuts',
    category: 'hair',
    description: 'Precision mapping and custom structural cutting tailored to your facial geometry and hair density.',
    duration: '45-60 mins',
    price: 'Starting from ₹850'
  },
  {
    id: 'hair-2',
    name: 'Red-Carpet Hair Styling',
    category: 'hair',
    description: 'Glamorous blowouts, editorial waves, and couture updos designed for high-profile galas or bridal celebrations.',
    duration: '45-90 mins',
    price: 'Starting from ₹1,200'
  },
  {
    id: 'hair-3',
    name: 'Balayage & Couture Hair Coloring',
    category: 'hair',
    description: 'French hand-painted dimensional highlights, premium glossing, and high-shine damage-free color restoration.',
    duration: '120-185 mins',
    price: 'Starting from ₹4,500'
  },
  {
    id: 'hair-4',
    name: 'Premium Hair Extensions',
    category: 'hair',
    description: 'Seamless 100% Remy human hair extensions for unmatched volume, natural length, and absolute structural safety.',
    duration: '120-240 mins',
    price: 'On consultation'
  },
  {
    id: 'skin-1',
    name: 'Revitalizing Luxury Facials',
    category: 'skin',
    description: 'Premium tailored facial infusions with cold-compressed botanical extracts and oxygenating masks.',
    duration: '60 mins',
    price: 'Starting from ₹2,200'
  },
  {
    id: 'skin-2',
    name: 'Intensive Skin Clean-ups',
    category: 'skin',
    description: 'Deep pore extraction, ultrasonic cleansing, and clarifying lymphatic drainage to remove everyday impurities.',
    duration: '45 mins',
    price: 'Starting from ₹1,200'
  },
  {
    id: 'skin-3',
    name: 'Couture Skin Polishing & Glow',
    category: 'skin',
    description: 'Premium microdermabrasion exfoliation coupled with radiance-inducing multi-vitamin serums for an angelic sheen.',
    duration: '75 mins',
    price: 'Starting from ₹3,500'
  },
  {
    id: 'makeup-1',
    name: 'Signature Celebrity & Special Occasion Makeup',
    category: 'makeup',
    description: 'Ultra-high-definition, long-wear airbrush or luxury hand-layered makeup crafted for high-end events.',
    duration: '90 mins',
    price: 'Starting from ₹6,500'
  },
  {
    id: 'makeup-2',
    name: 'Premium Bridal Makeup Couture',
    category: 'makeup',
    description: 'Award-winning bridal cosmetic transformation incorporating elite global brands, jewelry draping, and meticulous lash styling.',
    duration: '180 mins',
    price: 'On consultation'
  },
  {
    id: 'spa-1',
    name: 'Deep Tissue Muscle Melting Massage',
    category: 'spa',
    description: 'Focused physical tension release utilizing organic rose and sandalwood luxury oils to reset body and mind.',
    duration: '60-90 mins',
    price: 'Starting from ₹2,500'
  },
  {
    id: 'spa-2',
    name: 'Royal Sanctuary Spa Treatments',
    category: 'spa',
    description: 'Full body hydration, luxury floral exfoliation, and hot stone therapies in a quiet sensory-isolated suite.',
    duration: '120 mins',
    price: 'Starting from ₹4,000'
  },
  {
    id: 'grooming-1',
    name: 'Artisan Grooming & Waxing',
    category: 'grooming',
    description: 'Ultra-gentle strip and peelable organic wax loaded with chamomile and honey, minimizing redness.',
    duration: '30-60 mins',
    price: 'Starting from ₹600'
  },
  {
    id: 'grooming-2',
    name: 'Symmetrical Threading & Brow Architecture',
    category: 'grooming',
    description: 'Precision threading focused on frame mapping and custom organic-cotton brow defining.',
    duration: '15 mins',
    price: 'Starting from ₹150'
  },
  {
    id: 'grooming-3',
    name: 'Royal Gel & Luxe Nail Care',
    category: 'grooming',
    description: 'Premium nail shaping, cuticle nourishment, elegant hand massage, and long-lasting glass-shine gel lacquer.',
    duration: '60 mins',
    price: 'Starting from ₹1,500'
  }
];

export const academyTracks: TrainingTrack[] = [
  {
    id: 'track-1',
    title: 'Master Class in Couture Hairstyling',
    duration: '12 Weeks (Advance Certification)',
    badge: 'Elite Academy',
    description: 'Comprehensive technical grounding in high-precision structural cutting, chemical texture alteration, balayage master techniques, and salon management.',
    curriculum: [
      'Advanced Facets of Structural Geometries & Hair Mapping',
      'French Balayage & Foil Highlights Distribution',
      'Keratin, Botox, & Plex Chemical Bonds Restructure',
      'Client Consultant Communication & Business Scalability'
    ],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'track-2',
    title: 'Advanced Professional Aesthetician & Beautician',
    duration: '10 Weeks (Professional Diplomas)',
    badge: 'Clinical Mastery',
    description: 'Deep mechanical and chemical study of skin structures, customized facial therapies, skin polishing techniques, and organic peel processes.',
    curriculum: [
      'Anatomical Science of Skin & Epidermal Analysis',
      'Aerosolized Oxygen & Microcurrent Technology Usage',
      'Organic Skin Peel and Microdermabrasion Methodologies',
      'Sanitization Protocols to Sovereign Luxury Standards'
    ],
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'track-3',
    title: 'Pro Makeup Artist & Couture Bridal Makeup',
    duration: '8 Weeks (Couture Certification)',
    badge: 'Global Standards',
    description: 'High-definition bridal makeup, editorial close-up aesthetics, flawless base baking, color theory, and camera-ready lighting mechanics.',
    curriculum: [
      'Flawless Foundation Matching & HD Airbrush Techniques',
      'Traditional, Royal, and Modern Indian Bridal Couture Makeup',
      'Subtle High-Glam Eye Draping & Lash Grafting Mechanics',
      'Building a Premium Social Profile & Editorial Photoshops'
    ],
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'track-4',
    title: 'Nail Artistry, Sculpting, and Gel Architecture',
    duration: '4 Weeks (Master Guild)',
    badge: 'Artisanal Craft',
    description: 'Nail extension sculpts with acrylics and UV builder gels, intricate hand-painted nail designs, chrome overlays, and high-shine crystal application.',
    curriculum: [
      'Dual Form Acrylic & UV Gel Structural Extensions',
      'Hand-painted Fine Line Art, Ombré, and Marbling',
      'Precision E-File Cuticle Prep & Salon Ergonomics',
      'Product Chemistry, Sanitation, and Maintenance Cycles'
    ],
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'track-5',
    title: 'Premium Waxing & Advanced Aesthetic Grooming',
    duration: '3 Weeks (Specialized Cert)',
    badge: 'Fast Track',
    description: 'Painless hot wax application, hair follicle anatomy, body peeling processes, and clean, fast-handling techniques.',
    curriculum: [
      'Peelable Hard Wax and Cream Soft Wax Techniques',
      'Follicular Anatomy & Hair Growth Cycle Mitigation',
      'Soothing Pre-Oil and Post-Lotion Hydrating Barriers',
      'Hygienic Disposable Application & Quick Cabin Turnovers'
    ],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
  }
];

export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    id: 'ba-1',
    category: 'hair',
    title: 'Dimensional Balayage & Blowout',
    beforeImg: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    description: 'Rescued dry, un-dimensional hair with a seamless, hand-painted toasted caramel balayage and standard silk blowout.'
  },
  {
    id: 'ba-2',
    category: 'makeup',
    title: 'Couture Bridal Glow Transformation',
    beforeImg: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
    afterImg: '/src/assets/images/bridal_makeup_1781943338403.jpg', // Our generated premium bridal image
    description: 'Designed a royal heritage bridal aesthetic utilizing exquisite radiant soft-focus gold shadows, velvet base construction, and traditional jewel layout mapping.'
  },
  {
    id: 'ba-3',
    category: 'skin',
    title: 'Multivitamin Hydrafacial & Skin Polishing',
    beforeImg: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80&sat=-50&brightness=90',
    afterImg: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80',
    description: 'Cleared environmental congestion and skin flakiness with rich dermaplaning and micro-current hydration locks, resulting in standard glowing elasticity.'
  },
  {
    id: 'ba-4',
    category: 'nails',
    title: 'Executive Glass-Shine Gel Extension',
    beforeImg: 'https://images.unsplash.com/photo-1605497746445-97d1b0a9eead?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    description: 'Sculpted stubby, brittle nails with premium UV builder gel and handcrafted champagne chrome accent lines.'
  }
];

export const clientGallery: GalleryItem[] = [
  {
    id: 'gal-1',
    imageUrl: '/src/assets/images/bridal_makeup_1781943338403.jpg',
    category: 'makeup',
    title: 'Royal Indian Bridal Couture',
    description: 'Hand-layered soft glow cosmetics for a spectacular traditional morning wedding in Meerut.'
  },
  {
    id: 'gal-2',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    category: 'interior',
    title: 'Beauty Box Luxury Main Lounge',
    description: 'Our modern spatial architectural layout with premium rose gold framing and velvet lounge seating.'
  },
  {
    id: 'gal-3',
    imageUrl: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    category: 'hair',
    title: 'Toasted Caramel Balayage',
    description: 'Deep dimensional luxury color melt transitioning from dark root melts to creamy warm highlights.'
  },
  {
    id: 'gal-4',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    category: 'academy',
    title: 'Masterclass Hair Geometry',
    description: 'Academy Senior Trainer instructing dynamic slicing angles to standard certification aspirants.'
  },
  {
    id: 'gal-5',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    category: 'nails',
    title: 'Champagne Chrome French Gel',
    description: 'High-gloss structural nail enhancements curated for editorial photoshoots.'
  },
  {
    id: 'gal-6',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    category: 'makeup',
    title: 'Flawless Editorial High Glam',
    description: 'Precision contouring and spotlight eyes on a prominent digital creator guest.'
  }
];

export const clientTestimonials: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Anjali Sharma',
    service: 'Premium Bridal Makeup Couture',
    rating: 5,
    text: 'I booked Beauty Box for my bridal makeup in Meerut. The makeup looked entirely flawless, lightweight, and lasted over 12 hours from the pheras to the reception. The stylists also crafted my heavy dupatta draping flawlessly!',
    date: 'February 14, 2026'
  },
  {
    id: 'test-2',
    name: 'Priya Rastogi',
    service: 'Balayage & Couture Hair Coloring',
    rating: 5,
    text: 'Excellent dimensional balayage hair work! I was terrified of bleach damage, but their senior hair colorist used a damage-free bond rebuilding formula that left my hair feeling healthier and silkier than before.',
    date: 'March 28, 2026'
  },
  {
    id: 'test-3',
    name: 'Meenakshi Singh',
    service: 'Couture Skin Polishing & Glow',
    rating: 5,
    text: 'Beauty Box sets a standard for absolute elite cleanliness and luxury in Meerut. Their skin polishing facial took away all my dullness, and the personalized, gentle treatment room feels like an peaceful escape.',
    date: 'June 10, 2026'
  },
  {
    id: 'test-4',
    name: 'Ritika Goel',
    service: 'Master Class in Couture Hairstyling',
    rating: 5,
    text: 'Enrolling in the Beauty Box Salon Academy is the most rewarding choice I have made. The certification is extremely respected, and the intensive hand-holding workshops gave me deep confidence. Highly recommend!',
    date: 'May 04, 2026'
  }
];

export const contactDetails = {
  address: 'Saray Lal ji, Near Subhash Bazar Rd, Meerut 250001, Uttar Pradesh, India',
  phone: '+91 98765 43210',
  formattedPhone: '+919876543210',
  whatsapp: '+919876543210',
  email: 'appointments@beautyboxmeerut.com',
  hours: 'Open Daily, 10:00 AM – 9:00 PM',
  mapIframeUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27974.77490333216!2d77.68307398188165!3d28.984461530349884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6411037d045d%3A0xc3012b1b36952e42!2sMeerut%2C%20Uttar%20Pradesh%20250001!5e0!3m2!1sen!2sin!4v1718873000000!5m2!1sen!2sin'
};
