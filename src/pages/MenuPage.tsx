import React, { useState, useMemo } from 'react';
import { Search, Plus, LayoutGrid, ListFilter } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { MenuItem, MenuCategoryType } from '../types';

export const MenuPage: React.FC = () => {
  const { setSelectedItemForModal, addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryType | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'ALL' | 'Signature' | 'Specialty' | 'Vegetarian' | 'Vegan'>('ALL');
  const [viewMode, setViewMode] = useState<'editorial' | 'cards'>('editorial');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'ALL' && item.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesCat = item.category.toLowerCase().includes(q);
        const matchesNotes = item.notes?.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesCat && !matchesNotes) {
          return false;
        }
      }
      // Dietary tag filter
      if (dietaryFilter !== 'ALL') {
        if (!item.tags?.includes(dietaryFilter as any)) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchQuery, dietaryFilter]);

  // Group items by category for structured layout
  const categoriesToDisplay = useMemo(() => {
    if (selectedCategory !== 'ALL') {
      return MENU_CATEGORIES.filter((cat) => cat.key === selectedCategory);
    }
    return MENU_CATEGORIES;
  }, [selectedCategory]);

  const handleItemClick = (item: MenuItem) => {
    setSelectedItemForModal(item);
  };

  const handleQuickAdd = (e: React.MouseEvent, item: MenuItem) => {
    e.stopPropagation();
    // If it has complex options, open modal; else add directly
    if (item.customizations?.milk || item.customizations?.grind) {
      setSelectedItemForModal(item);
    } else {
      addToCart(item);
    }
  };

  return (
    <div className="pt-28 pb-24 bg-[#F6F2EA] min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#66705A]">
            Drip & Drop · Menu
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2B211B] tracking-tight">
            Our Menu
          </h1>
          <p className="text-xs sm:text-sm text-[#7A7571] leading-relaxed font-normal">
            Specialty coffee, slow-steeped cold brews, whisked ceremonial matcha, and fresh bakes from our JP Nagar kitchen.
          </p>
        </div>

        {/* Controls Bar: Search + Dietary Filters + View Toggle */}
        <div className="mt-8 pt-6 border-t border-[#DDD5C8] space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#7A7571] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search coffee, matcha, buns, bagels..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#FAF8F5] border border-[#DDD5C8] rounded-full text-xs text-[#2B211B] focus:outline-none focus:border-[#2B211B] placeholder-[#7A7571]/70"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#7A7571] hover:text-[#2B211B]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Right Controls: Dietary & View Toggle */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center space-x-1 bg-[#FAF8F5] p-1 rounded-full border border-[#DDD5C8]">
                {(['ALL', 'Signature', 'Specialty', 'Vegetarian', 'Vegan'] as const).map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setDietaryFilter(tag)}
                    className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
                      dietaryFilter === tag
                        ? 'bg-[#2B211B] text-[#F6F2EA]'
                        : 'text-[#7A7571] hover:text-[#2B211B]'
                    }`}
                  >
                    {tag === 'ALL' ? 'All Items' : tag}
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="hidden sm:flex items-center space-x-1 bg-[#FAF8F5] p-1 rounded-full border border-[#DDD5C8]">
                <button
                  onClick={() => setViewMode('editorial')}
                  className={`p-1.5 rounded-full transition-all ${
                    viewMode === 'editorial'
                      ? 'bg-[#2B211B] text-[#F6F2EA]'
                      : 'text-[#7A7571] hover:text-[#2B211B]'
                  }`}
                  title="Café Magazine Layout"
                  aria-label="Magazine List View"
                >
                  <ListFilter className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('cards')}
                  className={`p-1.5 rounded-full transition-all ${
                    viewMode === 'cards'
                      ? 'bg-[#2B211B] text-[#F6F2EA]'
                      : 'text-[#7A7571] hover:text-[#2B211B]'
                  }`}
                  title="Visual Card Layout"
                  aria-label="Card Grid View"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Sticky Category Pills */}
          <div className="overflow-x-auto scrollbar-none py-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex space-x-2 min-w-max">
              <button
                onClick={() => setSelectedCategory('ALL')}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border ${
                  selectedCategory === 'ALL'
                    ? 'bg-[#66705A] text-[#FAF8F5] border-[#66705A]'
                    : 'bg-[#FAF8F5] text-[#2B211B] border-[#DDD5C8] hover:border-[#2B211B]/40'
                }`}
              >
                All Categories ({MENU_ITEMS.length})
              </button>
              {MENU_CATEGORIES.map((cat) => {
                const count = MENU_ITEMS.filter((i) => i.category === cat.key).length;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setSelectedCategory(cat.key)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border ${
                      selectedCategory === cat.key
                        ? 'bg-[#66705A] text-[#FAF8F5] border-[#66705A]'
                        : 'bg-[#FAF8F5] text-[#2B211B] border-[#DDD5C8] hover:border-[#2B211B]/40'
                    }`}
                  >
                    {cat.label} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 space-y-3">
            <p className="font-serif text-2xl text-[#2B211B]">No items match your filter</p>
            <p className="text-xs text-[#7A7571]">
              Try resetting your search query or selecting "All Categories".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                setSearchQuery('');
                setDietaryFilter('ALL');
              }}
              className="mt-2 px-5 py-2 rounded-full bg-[#2B211B] text-[#F6F2EA] text-xs font-semibold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          categoriesToDisplay.map((cat) => {
            const catItems = filteredItems.filter((i) => i.category === cat.key);
            if (catItems.length === 0) return null;

            return (
              <section key={cat.key} className="space-y-6 pt-4">
                {/* Category Title & Descriptor */}
                <div className="pb-3 border-b-2 border-[#2B211B]/80 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#2B211B] font-medium tracking-tight">
                    {cat.label}
                  </h2>
                  <span className="text-xs text-[#66705A] font-medium tracking-wide">
                    {cat.description}
                  </span>
                </div>

                {/* Switchable View: Editorial List or Visual Cards */}
                {viewMode === 'editorial' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {catItems.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleItemClick(item)}
                        className="group cursor-pointer py-3 border-b border-[#DDD5C8]/70 hover:border-[#2B211B]/40 transition-colors flex items-start gap-4"
                      >
                        {/* Compact thumbnail for subtle visual recognition */}
                        <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden bg-[#EFE9DE] shrink-0 border border-[#DDD5C8] image-zoom-container">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <h3 className="font-serif text-base sm:text-lg font-medium text-[#2B211B] group-hover:text-[#66705A] transition-colors truncate">
                                {item.name}
                              </h3>
                              {item.tags?.includes('Signature') && (
                                <span className="w-2 h-2 rounded-full bg-[#66705A] shrink-0" title="Signature" />
                              )}
                            </div>
                            <div className="font-serif font-bold text-sm sm:text-base text-[#2B211B] shrink-0">
                              ₹{item.price}
                            </div>
                          </div>

                          <p className="text-xs text-[#2B211B]/70 line-clamp-2 leading-relaxed mt-1">
                            {item.description}
                          </p>

                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-1.5">
                              {item.tags?.map((t) => (
                                <span
                                  key={t}
                                  className="text-[10px] uppercase font-semibold text-[#7A7571] bg-[#EFE9DE] px-1.5 py-0.5 rounded"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>

                            <button
                              onClick={(e) => handleQuickAdd(e, item)}
                              className="text-[11px] font-bold uppercase tracking-wider text-[#2B211B] hover:text-[#66705A] flex items-center gap-0.5 py-0.5"
                            >
                              <Plus className="w-3.5 h-3.5" />
                              <span>Order</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Visual Grid Layout */
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {catItems.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleItemClick(item)}
                        className="group cursor-pointer bg-[#FAF8F5] rounded-2xl p-4 border border-[#DDD5C8]/80 hover:border-[#2B211B]/40 transition-all shadow-sm flex flex-col justify-between"
                      >
                        <div>
                          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#EFE9DE] mb-3 image-zoom-container">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                            {item.tags && item.tags.length > 0 && (
                              <div className="absolute top-2 left-2 flex gap-1">
                                {item.tags.slice(0, 2).map((t) => (
                                  <span
                                    key={t}
                                    className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#181614]/75 text-white backdrop-blur-sm"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>

                          <div className="flex justify-between items-baseline gap-2 mb-1">
                            <h3 className="font-serif text-base font-medium text-[#2B211B] group-hover:text-[#66705A] transition-colors">
                              {item.name}
                            </h3>
                            <span className="font-serif font-bold text-sm text-[#2B211B] shrink-0">
                              ₹{item.price}
                            </span>
                          </div>

                          <p className="text-xs text-[#2B211B]/70 line-clamp-2 leading-relaxed mb-3">
                            {item.description}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-[#DDD5C8]/60 flex items-center justify-between">
                          <span className="text-[10px] font-medium text-[#66705A] uppercase tracking-wider">
                            Customizable
                          </span>
                          <button
                            onClick={(e) => handleQuickAdd(e, item)}
                            className="px-3 py-1 bg-[#EFE9DE] hover:bg-[#2B211B] hover:text-white text-[#2B211B] text-xs font-semibold rounded-full transition-colors"
                          >
                            + Add
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            );
          })
        )}
      </div>

      {/* Sticky Bottom Quick Order Bar for Mobile */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-30">
        <div className="bg-[#181614] text-[#F6F2EA] p-3.5 rounded-2xl shadow-2xl border border-[#DDD5C8]/20 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold font-serif">Drip & Drop Kitchen</p>
            <p className="text-[10px] text-[#CAD4C1]">Dialed in fresh in JP Nagar</p>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-4 py-1.5 bg-[#F6F2EA] text-[#181614] text-xs font-bold uppercase rounded-full tracking-wider"
          >
            Back to Top
          </button>
        </div>
      </div>
    </div>
  );
};
