export type PageType = 
  | 'home'
  | 'about'
  | 'services'
  | 'service-gathering'
  | 'service-teambuilding'
  | 'service-adventure'
  | 'service-production'
  | 'portfolio'
  | 'gallery'
  | 'contact';

export interface SubmenuItem {
  id: PageType;
  title: string;
  tagline: string;
  category: string;
  badge?: string;
  iconName: string;
  image?: string;
}

export interface ServiceDetail {
  id: PageType;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  heroImage: string;
  galleryImages: { url: string; caption: string }[];
  highlights: string[];
  activities: string[];
  sampleItinerary: { time: string; activity: string; notes: string }[];
  inclusions: string[];
  idealFor: string[];
  startingPrice: string;
  minParticipants: number;
  duration: string;
  imageCaption: string;
  faqs: { q: string; a: string }[];
}

export interface PortfolioProject {
  id: string;
  client: string;
  title: string;
  category: string;
  location: string;
  participants: number;
  year: string;
  challenge: string;
  solution: string;
  outcome: string;
  deliverables: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'gathering' | 'teambuilding' | 'adventure' | 'production';
  location: string;
  aspect: 'wide' | 'tall' | 'square';
  imageUrl: string;
}
