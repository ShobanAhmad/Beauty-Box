export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'skin' | 'makeup' | 'spa' | 'grooming';
  description: string;
  duration?: string;
  price?: string; // Optional price range/starting price for elite feel e.g., "Starting from ₹1,200"
}

export interface TrainingTrack {
  id: string;
  title: string;
  duration: string;
  badge: string;
  description: string;
  curriculum: string[];
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  service: string;
  rating: number;
  text: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  category: 'hair' | 'makeup' | 'interior' | 'nails' | 'academy';
  title: string;
  description: string;
}

export interface BeforeAfterPair {
  id: string;
  category: 'hair' | 'skin' | 'makeup' | 'nails';
  title: string;
  beforeImg: string;
  afterImg: string;
  description: string;
}
