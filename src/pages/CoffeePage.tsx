import React from 'react';
import { Flame, Droplet, Coffee, Sparkles, ArrowRight } from 'lucide-react';
import { COFFEE_BEANS, BREWING_METHODS } from '../data/coffeeData';
import { useCart } from '../context/CartContext';
import { MENU_ITEMS } from '../data/menuData';

export const CoffeePage: React.FC = () => {
  const { setSelectedItemForModal } = useCart();

  const getBrewIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee':
        return <Coffee className="w-5 h-5" />;
      case 'Flame':
        return <Flame className="w-5 h-5" />;
      case 'Droplet':
        return <Droplet className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const handleSelectBean = (beanId: string) => {
    const item = MENU_ITEMS.find((m) => m.category === 'BEAN DROP' && m.id.includes(beanId));
    if (item) {
      setSelectedItemForModal(item);
    }
  };

  return (
    <div className="pt-28 pb-24 bg-[#F6F2EA]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#66705A]">
            The Coffee Program
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#2B211B] font-normal tracking-tight leading-[1.1]">
            Origin, extraction & <br />
            <span className="italic">clean craft</span>.
          </h1>
          <p className="text-sm sm:text-base text-[#2B211B]/75 leading-relaxed font-normal">
            We partner with high-elevation estates in the Western Ghats of Karnataka to source shade-grown Arabicas and hand-sorted Washed Robustas. Every batch is roasted with precision and dialed daily on our espresso bar.
          </p>
        </div>
      </section>

      {/* 1. EXTRACTION METHODS GRID */}
      <section className="py-16 bg-[#FAF8F5] border-y border-[#DDD5C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#66705A] mb-2">
              Four Core Expressions
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211B] font-normal tracking-tight">
              The Brew Methods
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BREWING_METHODS.map((brew) => (
              <div
                key={brew.id}
                className="bg-[#F6F2EA] rounded-2xl p-6 border border-[#DDD5C8] hover:border-[#2B211B]/40 transition-all flex flex-col justify-between shadow-sm space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-[#EFE9DE] flex items-center justify-center text-[#66705A]">
                    {getBrewIcon(brew.icon)}
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#66705A]">
                      {brew.descriptor}
                    </span>
                    <h3 className="font-serif text-xl font-medium text-[#2B211B] mt-0.5">
                      {brew.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#2B211B]/75 leading-relaxed">
                    {brew.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-[#DDD5C8] text-xs text-[#2B211B]/80 font-mono">
                  <div className="flex justify-between">
                    <span className="text-[#7A7571] font-sans">Ratio:</span>
                    <span>{brew.ratio}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7A7571] font-sans">Water Temp:</span>
                    <span>{brew.temp}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7A7571] font-sans">Grind:</span>
                    <span>{brew.grind}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. THE BEAN DROP — RETAIL COFFEE BAGS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 space-y-2">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#66705A]">
            Fresh Whole Bean & Custom Grind
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#2B211B] font-normal tracking-tight">
            The Bean Drop Series
          </h2>
          <p className="text-xs sm:text-sm text-[#7A7571]">
            Packaged fresh in valved 250g bags with degas valves. Ground to order for your home brew setup.
          </p>
        </div>

        <div className="space-y-12">
          {COFFEE_BEANS.map((bean, idx) => (
            <div
              key={bean.id}
              className={`bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#DDD5C8] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:col-span-5">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#EFE9DE] border border-[#DDD5C8] image-zoom-container">
                  <img
                    src={bean.image}
                    alt={bean.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#181614]/80 backdrop-blur-sm text-white text-[11px] font-semibold uppercase tracking-wider rounded-full">
                    {bean.roastLevel} Roast
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold tracking-widest text-[#66705A] uppercase">
                    {bean.ratio}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-4xl text-[#2B211B] font-medium tracking-tight mt-1">
                    {bean.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7A7571] mt-0.5">{bean.subtitle}</p>
                </div>

                <p className="text-xs sm:text-sm text-[#2B211B]/80 leading-relaxed font-normal">
                  {bean.description}
                </p>

                {/* Flavor Notes Pills */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A7571]">
                    Tasting Notes:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {bean.notes.map((note) => (
                      <span
                        key={note}
                        className="px-3 py-1 rounded-full bg-[#EFE9DE] text-[#2B211B] text-xs font-medium border border-[#DDD5C8]"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Origin details */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#DDD5C8] text-xs">
                  <div>
                    <span className="text-[10px] text-[#7A7571] uppercase block">Origin</span>
                    <span className="font-semibold text-[#2B211B]">{bean.origin}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#7A7571] uppercase block">Elevation</span>
                    <span className="font-semibold text-[#2B211B]">{bean.elevation}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#7A7571] uppercase block">Process</span>
                    <span className="font-semibold text-[#2B211B]">{bean.process}</span>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="pt-4 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-[#7A7571]">Price: </span>
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#2B211B]">
                      ₹{bean.price250g}
                    </span>
                    <span className="text-[11px] text-[#7A7571] ml-1">/ 250g bag</span>
                  </div>

                  <button
                    onClick={() => handleSelectBean(bean.id)}
                    className="px-6 py-3 bg-[#2B211B] hover:bg-[#181614] text-[#F6F2EA] rounded-full text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                  >
                    <span>Order Bag</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WATER & STANDARDS EDITORIAL NOTE */}
      <section className="py-16 bg-[#EFE9DE] border-t border-[#DDD5C8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#66705A]">
            The Hidden Element
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#2B211B] font-medium">
            Calibrated Water Chemistry
          </h3>
          <p className="text-xs sm:text-sm text-[#2B211B]/80 leading-relaxed max-w-2xl mx-auto">
            98% of your brewed cup is water. In our JP Nagar café, all brewing water is reverse-osmosis filtered and remineralized to an exact balance of magnesium and calcium for sweetness and clarity.
          </p>
        </div>
      </section>
    </div>
  );
};
