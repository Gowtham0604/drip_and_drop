import React from 'react';
import { ArrowRight, ArrowUpRight, MapPin, Phone, Clock } from 'lucide-react';
import { QuickInfoBar } from '../components/QuickInfoBar';
import { MENU_ITEMS } from '../data/menuData';
import { COFFEE_BEANS } from '../data/coffeeData';
import { INSTAGRAM_POSTS, SPACE_PHOTOS } from '../data/galleryData';
import { LOCATION_DATA } from '../data/locationData';
import { useCart } from '../context/CartContext';
import { MenuItem } from '../types';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab }) => {
  const { setSelectedItemForModal, addToCart } = useCart();

  // Pick the 4-6 featured items requested
  const featuredMenu = [
    MENU_ITEMS.find((i) => i.id === 'cappuccino-classic'),
    MENU_ITEMS.find((i) => i.id === 'og-cold-coffee'),
    MENU_ITEMS.find((i) => i.id === 'salted-caramel-iced-latte'),
    MENU_ITEMS.find((i) => i.id === 'iced-mango-matcha'),
    MENU_ITEMS.find((i) => i.id === 'hand-brewed-v60'),
    MENU_ITEMS.find((i) => i.id === 'korean-cream-cheese-bun'),
  ].filter(Boolean) as MenuItem[];

  const handleItemClick = (item: MenuItem) => {
    setSelectedItemForModal(item);
  };

  const handleQuickAdd = (e: React.MouseEvent, item: MenuItem) => {
    e.stopPropagation();
    addToCart(item);
  };

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DE] border border-[#DDD5C8] text-[#66705A] text-xs font-semibold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#66705A]" />
                JP Nagar Phase 5 · Bengaluru
              </div>

              <div className="space-y-4">
                <h2 className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#7A7571] uppercase">
                  Drip & Drop
                </h2>
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#2B211B] leading-[1.08] tracking-tight">
                  Coffee, food & <br />
                  <span className="italic font-normal">a little time</span> well spent.
                </h1>
              </div>

              <p className="font-sans text-sm sm:text-base text-[#2B211B]/75 leading-relaxed max-w-xl font-normal">
                Specialty coffee, thoughtful food and good things to linger over in JP Nagar, Bengaluru.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setActiveTab('menu')}
                  className="px-7 py-3.5 rounded-full bg-[#2B211B] hover:bg-[#181614] text-[#F6F2EA] text-xs font-bold uppercase tracking-[0.14em] transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2.5"
                >
                  <span>View Menu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setActiveTab('visit')}
                  className="px-7 py-3.5 rounded-full border border-[#2B211B]/30 hover:border-[#2B211B] bg-transparent text-[#2B211B] text-xs font-bold uppercase tracking-[0.14em] transition-colors"
                >
                  Find Us
                </button>
              </div>
            </div>

            {/* Right Editorial Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-[#EFE9DE] border border-[#DDD5C8]/80 image-zoom-container">
                  <img
                    src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85"
                    alt="Drip and Drop Coffee interior in JP Nagar"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle Badge Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[#FAF8F5]/90 backdrop-blur-md rounded-xl border border-[#DDD5C8]/80 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-serif font-medium text-[#2B211B]">Washed Arabica & House Bakes</p>
                      <p className="text-[10px] text-[#66705A] tracking-wider uppercase">Extracted Fresh Daily</p>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK INFO BAR */}
      <QuickInfoBar />

      {/* 3. FEATURED MENU — "WHAT'S BREWING" */}
      <section className="py-20 md:py-28 bg-[#F6F2EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
            <div>
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#66705A] mb-2">
                Featured Selections
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B211B] font-normal tracking-tight">
                What’s Brewing
              </h2>
            </div>
            <button
              onClick={() => setActiveTab('menu')}
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.14em] uppercase text-[#2B211B] hover:text-[#66705A] transition-colors border-b border-[#2B211B]/40 pb-1 self-start md:self-auto"
            >
              <span>View Full Menu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 4–6 Visually Strong Menu Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredMenu.map((item) => (
              <div
                key={item.id}
                onClick={() => handleItemClick(item)}
                className="group cursor-pointer bg-[#FAF8F5] rounded-2xl p-4 border border-[#DDD5C8]/80 hover:border-[#2B211B]/40 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#EFE9DE] mb-4 image-zoom-container">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      {item.tags?.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#181614]/75 text-[#FAF8F5] backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-baseline gap-2 mb-1.5">
                    <h3 className="font-serif text-lg font-medium text-[#2B211B] group-hover:text-[#66705A] transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-serif font-semibold text-base text-[#2B211B] shrink-0">
                      ₹{item.price}
                    </span>
                  </div>

                  <p className="text-xs text-[#2B211B]/70 line-clamp-2 leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#DDD5C8]/60 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#66705A] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <button
                    onClick={(e) => handleQuickAdd(e, item)}
                    className="px-3 py-1.5 bg-[#EFE9DE] hover:bg-[#2B211B] hover:text-[#F6F2EA] text-[#2B211B] text-xs font-semibold rounded-full transition-colors"
                  >
                    + Add to Bag
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setActiveTab('menu')}
              className="px-8 py-3.5 rounded-full bg-[#2B211B] hover:bg-[#181614] text-[#F6F2EA] text-xs font-bold uppercase tracking-[0.15em] transition-all"
            >
              Explore Full Food & Drinks Menu
            </button>
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL ASYMMETRIC SECTION — "COFFEE, WITHOUT THE CEREMONY" */}
      <section className="py-20 md:py-32 bg-[#EFE9DE] border-y border-[#DDD5C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Big Image */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-[#DDD5C8] image-zoom-container">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
                  alt="Specialty hand poured coffee at Drip and Drop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Editorial Copy */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#66705A]">
                The Craft & Philosophy
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-[#2B211B] font-normal leading-[1.12] tracking-tight">
                Coffee, <br />
                without <br />
                the ceremony.
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#2B211B]/80 leading-relaxed font-normal">
                From espresso and slow brews to cold coffee, matcha and everything in between. We focus on dialed-in extractions, clean water chemistry, and approachable hospitality that lets great beans speak for themselves.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setActiveTab('coffee')}
                  className="px-6 py-3 rounded-full bg-[#2B211B] text-[#F6F2EA] text-xs font-bold uppercase tracking-wider hover:bg-[#181614] transition-colors self-start"
                >
                  Discover Our Roasts
                </button>
                <button
                  onClick={() => setActiveTab('about')}
                  className="px-6 py-3 rounded-full border border-[#2B211B]/30 text-[#2B211B] text-xs font-bold uppercase tracking-wider hover:border-[#2B211B] transition-colors self-start"
                >
                  Our Approach
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOD SECTION — "MORE THAN COFFEE." */}
      <section className="py-20 md:py-28 bg-[#F6F2EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#66705A] mb-2">
                All-Day Kitchen
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B211B] font-normal tracking-tight">
                More Than Coffee.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#7A7571] max-w-md">
              Fresh bakes, stuffed Korean brioche buns, smashed burgers, and hearty breakfast plates made in-house.
            </p>
          </div>

          {/* Editorial Food Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Big Feature Item */}
            <div
              onClick={() => setActiveTab('menu')}
              className="group cursor-pointer md:col-span-7 bg-[#FAF8F5] rounded-2xl p-6 border border-[#DDD5C8]/80 hover:border-[#2B211B]/40 transition-all shadow-sm flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#EFE9DE] mb-5 image-zoom-container">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80"
                  alt="Korean cream cheese buns"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#2B211B] text-[#F6F2EA] text-[10px] font-bold uppercase tracking-wider rounded-full">
                  Signature Bake
                </span>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-serif text-2xl font-medium text-[#2B211B] group-hover:text-[#66705A] transition-colors">
                    Korean Cream Cheese Garlic Buns
                  </h3>
                  <span className="font-serif text-lg font-bold text-[#2B211B]">₹249</span>
                </div>
                <p className="text-xs sm:text-sm text-[#2B211B]/70 leading-relaxed">
                  Pillowy brioche stuffed with sweetened cream cheese, submerged in roasted garlic herb butter, and baked till golden crisp.
                </p>
              </div>
            </div>

            {/* Right 2 Stacked Items */}
            <div className="md:col-span-5 flex flex-col gap-6">
              <div
                onClick={() => setActiveTab('menu')}
                className="group cursor-pointer bg-[#FAF8F5] rounded-2xl p-5 border border-[#DDD5C8]/80 hover:border-[#2B211B]/40 transition-all shadow-sm flex-1 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#EFE9DE] mb-3 image-zoom-container">
                  <img
                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
                    alt="House smashed burger"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-serif text-lg font-medium text-[#2B211B]">
                      House Smashed Gourmet Burger
                    </h3>
                    <span className="font-serif text-base font-bold text-[#2B211B]">₹389</span>
                  </div>
                  <p className="text-xs text-[#2B211B]/70">
                    Crispy seared patty with melted cheddar, house relish, and caramelized onions on brioche.
                  </p>
                </div>
              </div>

              <div
                onClick={() => setActiveTab('menu')}
                className="group cursor-pointer bg-[#FAF8F5] rounded-2xl p-5 border border-[#DDD5C8]/80 hover:border-[#2B211B]/40 transition-all shadow-sm flex-1 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#EFE9DE] mb-3 image-zoom-container">
                  <img
                    src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80"
                    alt="French butter croissants and honey butter buns"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-serif text-lg font-medium text-[#2B211B]">
                      Honey Butter Buns & Croissants
                    </h3>
                    <span className="font-serif text-base font-bold text-[#2B211B]">From ₹199</span>
                  </div>
                  <p className="text-xs text-[#2B211B]/70">
                    Laminated French butter pastries and wild honey glazed buns baked every morning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SPECIALTY COFFEE — "THE BEAN DROP" */}
      <section className="py-20 md:py-28 bg-[#FAF8F5] border-y border-[#DDD5C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#66705A] mb-2">
                Specialty Coffee Roastery
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B211B] font-normal tracking-tight">
                The Bean Drop
              </h2>
            </div>
            <button
              onClick={() => setActiveTab('coffee')}
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.14em] uppercase text-[#2B211B] hover:text-[#66705A] transition-colors border-b border-[#2B211B]/40 pb-1 self-start md:self-auto"
            >
              <span>Explore All Roasts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 3 Coffee Beans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COFFEE_BEANS.map((bean) => (
              <div
                key={bean.id}
                className="bg-[#F6F2EA] rounded-2xl p-6 border border-[#DDD5C8] hover:border-[#2B211B]/40 transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-[#EFE9DE] mb-5 image-zoom-container">
                    <img
                      src={bean.image}
                      alt={bean.name}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#181614]/80 text-[#FAF8F5] text-[10px] font-semibold tracking-wider uppercase rounded-full">
                      {bean.roastLevel} Roast
                    </span>
                  </div>

                  <div className="text-[11px] font-semibold text-[#66705A] uppercase tracking-wider mb-1">
                    {bean.ratio}
                  </div>

                  <h3 className="font-serif text-xl font-medium text-[#2B211B] mb-2">
                    {bean.name}
                  </h3>

                  <p className="text-xs text-[#2B211B]/75 leading-relaxed mb-4">
                    {bean.description}
                  </p>

                  <div className="space-y-1.5 text-xs text-[#2B211B]/90 pt-3 border-t border-[#DDD5C8]/80">
                    <p><span className="font-semibold text-[#2B211B]">Origin:</span> {bean.origin}</p>
                    <p><span className="font-semibold text-[#2B211B]">Elevation:</span> {bean.elevation}</p>
                    <p className="text-[11px] text-[#66705A] font-medium pt-1">
                      Notes: {bean.notes.join(' • ')}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-[#DDD5C8] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-[#7A7571] block">250g Retail Bag</span>
                    <span className="font-serif text-base font-bold text-[#2B211B]">₹{bean.price250g}</span>
                  </div>
                  <button
                    onClick={() => {
                      const menuItem = MENU_ITEMS.find((m) => m.name.toLowerCase().includes(bean.name.toLowerCase().split(' ')[0]));
                      if (menuItem) setSelectedItemForModal(menuItem);
                      else setActiveTab('coffee');
                    }}
                    className="px-4 py-2 bg-[#2B211B] text-[#F6F2EA] rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#181614] transition-colors"
                  >
                    Select Grind
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. THE SPACE — "COME FOR THE COFFEE. STAY FOR THE SPACE." */}
      <section className="py-20 md:py-28 bg-[#F6F2EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#66705A]">
              The Atmosphere
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B211B] font-normal tracking-tight">
              Come for the coffee. <br />
              <span className="italic">Stay for the space.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#7A7571] leading-relaxed">
              Designed with warm oak wood, natural light, and quiet corners in JP Nagar Phase 5.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPACE_PHOTOS.map((space, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#DDD5C8]/80 shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden image-zoom-container">
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-medium text-[#2B211B] mb-1">
                    {space.title}
                  </h3>
                  <p className="text-xs text-[#7A7571] leading-relaxed">
                    {space.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ABOUT SHORT BRAND SECTION */}
      <section className="py-20 bg-[#EFE9DE] border-y border-[#DDD5C8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#66705A]">
            Neighborhood Café
          </div>
          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2B211B] font-light leading-relaxed">
            “Drip And Drop Coffee brings together carefully prepared coffee, thoughtful food and a space designed for slowing down.”
          </p>
          <div className="pt-2">
            <button
              onClick={() => setActiveTab('about')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#2B211B] hover:text-[#66705A] transition-colors border-b border-[#2B211B]/40 pb-1"
            >
              <span>Our Story</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 9. INSTAGRAM SECTION — 6-IMAGE GRID */}
      <section className="py-20 md:py-28 bg-[#F6F2EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#66705A] mb-1.5">
                Social Feed
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2B211B] font-normal">
                See What’s Happening At <span className="font-medium">@{LOCATION_DATA.instagram}</span>
              </h2>
            </div>
            <a
              href={LOCATION_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FAF8F5] border border-[#DDD5C8] hover:border-[#2B211B] rounded-full text-xs font-semibold uppercase tracking-wider text-[#2B211B] transition-colors"
            >
              <span>Follow on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {INSTAGRAM_POSTS.map((post) => (
              <a
                key={post.id}
                href={LOCATION_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden bg-[#EFE9DE] border border-[#DDD5C8] image-zoom-container"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#181614]/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 text-white text-[11px]">
                  <p className="line-clamp-2 leading-tight mb-1">{post.caption}</p>
                  <span className="text-[10px] text-[#CAD4C1] uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 10. LOCATION SECTION */}
      <section className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#DDD5C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Info Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#66705A]">
                Find Us in Bengaluru
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211B] font-normal tracking-tight">
                Drip and Drop Coffee
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#2B211B]/85">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#66705A] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#2B211B]">289, Ground Floor, 15th Cross Road,</p>
                    <p>5th Phase, JP Nagar Phase 5,</p>
                    <p>Bengaluru, Karnataka 560078</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#66705A] shrink-0" />
                  <a
                    href={`tel:${LOCATION_DATA.phoneClean}`}
                    className="font-medium hover:text-[#66705A] transition-colors"
                  >
                    {LOCATION_DATA.phone}
                  </a>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Clock className="w-5 h-5 text-[#66705A] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p><span className="font-semibold text-[#2B211B]">Monday — Thursday:</span> 9:00 AM — 10:00 PM</p>
                    <p><span className="font-semibold text-[#2B211B]">Friday — Sunday:</span> 8:00 AM — 11:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href={LOCATION_DATA.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#2B211B] hover:bg-[#181614] text-[#F6F2EA] text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-sm"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Get Directions
                </a>

                <a
                  href={`tel:${LOCATION_DATA.phoneClean}`}
                  className="px-6 py-3 rounded-full border border-[#2B211B]/30 hover:border-[#2B211B] text-[#2B211B] text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Us
                </a>
              </div>
            </div>

            {/* Clean Map Preview Panel */}
            <div className="lg:col-span-7">
              <div className="bg-[#EFE9DE] rounded-2xl p-6 border border-[#DDD5C8] shadow-md space-y-4">
                <div className="flex items-center justify-between text-xs pb-3 border-b border-[#DDD5C8]">
                  <span className="font-semibold text-[#2B211B]">Interactive Location Guide</span>
                  <span className="text-[11px] text-[#66705A] font-medium uppercase tracking-wider">JP Nagar 5th Phase</span>
                </div>

                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#DDD5C8] border border-[#DDD5C8]/80">
                  {/* Subtle map visual iframe / overlay */}
                  <iframe
                    title="Drip and Drop Coffee Location Map"
                    src="https://maps.google.com/maps?q=289+15th+Cross+Road+5th+Phase+JP+Nagar+Bengaluru+560078&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 filter grayscale-[20%] contrast-[1.05]"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-[#7A7571] pt-1">
                  <span>Street parking available nearby on 15th Cross</span>
                  <a
                    href={LOCATION_DATA.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2B211B] font-semibold underline inline-flex items-center gap-1"
                  >
                    Open Full Map
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA SECTION — "YOUR NEXT COFFEE IS HERE." */}
      <section className="py-24 md:py-36 bg-[#181614] text-[#F6F2EA] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
          <div className="text-xs font-bold tracking-[0.25em] uppercase text-[#66705A]">
            Drip & Drop · JP Nagar, Bengaluru
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight">
            Your next <br />
            <span className="italic">coffee</span> is here.
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#DDD5C8]/80 max-w-md mx-auto leading-relaxed">
            Visit us on 15th Cross Road, JP Nagar Phase 5, or explore our full café menu online.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setActiveTab('menu')}
              className="px-8 py-3.5 rounded-full bg-[#F6F2EA] hover:bg-white text-[#181614] text-xs font-bold uppercase tracking-[0.16em] transition-all shadow-lg"
            >
              View Menu
            </button>

            <a
              href={LOCATION_DATA.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border border-[#DDD5C8]/40 hover:border-[#F6F2EA] text-[#F6F2EA] text-xs font-bold uppercase tracking-[0.16em] transition-colors inline-flex items-center gap-2"
            >
              <span>Get Directions</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
