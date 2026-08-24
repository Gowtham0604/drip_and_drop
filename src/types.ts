export type MenuCategoryType =
  | 'COFFEE'
  | 'COLD COFFEE'
  | 'MATCHA'
  | 'MOCHA'
  | 'BEAN DROP'
  | 'HOT CHOCOLATE'
  | 'NON-COFFEE'
  | 'DESSERTS & BAKES'
  | 'BREAKFAST'
  | 'SALADS'
  | 'FRIES'
  | 'KOREAN BUNS'
  | 'GOURMET';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategoryType;
  price: number;
  description: string;
  image: string;
  tags?: ('Signature' | 'Specialty' | 'Vegan' | 'Vegetarian' | 'Iced' | 'Hot' | 'Single Origin' | 'House Special')[];
  customizations?: {
    milk?: boolean;
    temperature?: ('Hot' | 'Iced')[];
    grind?: ('Whole Bean' | 'French Press' | 'Pour Over / V60' | 'Aeropress' | 'Espresso' | 'Moka Pot')[];
    sweetness?: ('Standard' | 'Less Sweet' | 'Unsweetened')[];
  };
  featured?: boolean;
  notes?: string; // e.g. "Tasting notes: Dark Chocolate, Hazelnut, Molasses"
}

export interface CartItem {
  cartItemId: string;
  item: MenuItem;
  quantity: number;
  selectedMilk?: string;
  selectedTemp?: string;
  selectedGrind?: string;
  selectedSweetness?: string;
  specialInstructions?: string;
}

export interface CoffeeBean {
  id: string;
  name: string;
  subtitle: string;
  ratio: string;
  process: string;
  roastLevel: 'Light' | 'Medium' | 'Medium-Dark' | 'Dark';
  notes: string[];
  elevation: string;
  origin: string;
  recommendedBrews: string[];
  price250g: number;
  price500g: number;
  description: string;
  image: string;
}
