export interface GalleryPhoto {
  id: string;
  image: string;
  caption: string;
  likes: string;
  category: string;
}

export const INSTAGRAM_POSTS: GalleryPhoto[] = [
  {
    id: 'post-1',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    caption: 'Morning light in JP Nagar. First shots dialed in on the house blend.',
    likes: '342',
    category: 'Espresso Bar',
  },
  {
    id: 'post-2',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    caption: 'Iced Mango Matcha. Whisked ceremonial grade green tea over sweet Alphonso reduction.',
    likes: '519',
    category: 'Matcha',
  },
  {
    id: 'post-3',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    caption: 'Fresh batch of Korean garlic cream cheese buns out of the oven.',
    likes: '614',
    category: 'Fresh Bakes',
  },
  {
    id: 'post-4',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    caption: 'Slow pour V60 with 100% Washed Arabica from Baba Budangiri.',
    likes: '288',
    category: 'Hand Brew',
  },
  {
    id: 'post-5',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    caption: 'A quiet corner, a warm flat white, and a little time well spent.',
    likes: '450',
    category: 'The Space',
  },
  {
    id: 'post-6',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    caption: 'Crisp-edged smashed burger with melted cheddar & house pickle relish.',
    likes: '407',
    category: 'Kitchen',
  },
];

export const SPACE_PHOTOS = [
  {
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    title: 'The Counter & Brew Bar',
    subtitle: 'Where conversations and extractions happen side-by-side.',
  },
  {
    image: 'https://images.unsplash.com/photo-1445116572660-2384398880bc?auto=format&fit=crop&w=1200&q=80',
    title: 'Natural Light & Oak Wood',
    subtitle: 'Clean lines, comfortable seating, and an uncluttered atmosphere.',
  },
  {
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80',
    title: 'Work & Linger',
    subtitle: 'Quiet morning hours with power access and high-speed Wi-Fi.',
  }
];
