import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { LOCATION_DATA } from '../data/locationData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'about', label: 'About' },
    { id: 'visit', label: 'Visit' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F6F2EA]/95 backdrop-blur-md border-b border-[#DDD5C8]/80 py-3 shadow-[0_4px_20px_-10px_rgba(43,33,27,0.05)]'
            : 'bg-[#F6F2EA]/90 backdrop-blur-sm border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2.5 text-left group focus:outline-none"
            aria-label="Drip & Drop Coffee Homepage"
          >
            <div className="w-8 h-8 rounded-full bg-[#2B211B] flex items-center justify-center text-[#F6F2EA] transition-transform duration-300 group-hover:scale-105">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold tracking-[0.15em] text-sm sm:text-base text-[#2B211B] leading-none">
                DRIP & DROP
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[#66705A] uppercase font-medium mt-0.5">
                Coffee & Kitchen
              </span>
            </div>
          </button>

          {/* Desktop Center Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-xs font-semibold tracking-[0.14em] uppercase transition-colors duration-200 py-1 relative ${
                  activeTab === link.id
                    ? 'text-[#2B211B]'
                    : 'text-[#2B211B]/60 hover:text-[#2B211B]'
                }`}
              >
                {link.label}
                {activeTab === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#66705A] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-5">
            <a
              href={LOCATION_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold tracking-[0.14em] uppercase text-[#2B211B]/70 hover:text-[#2B211B] flex items-center gap-1 transition-colors"
            >
              Instagram
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <button
              onClick={() => handleNavClick('order')}
              className={`px-4 py-2 text-xs font-bold tracking-[0.14em] uppercase rounded-full transition-all duration-200 border ${
                activeTab === 'order'
                  ? 'bg-[#2B211B] text-[#F6F2EA] border-[#2B211B]'
                  : 'bg-transparent text-[#2B211B] border-[#2B211B]/30 hover:border-[#2B211B] hover:bg-[#2B211B]/5'
              }`}
            >
              Order Online
            </button>

            {/* Cart Bag Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-[#EFE9DE] hover:bg-[#DDD5C8] text-[#2B211B] transition-colors focus:outline-none"
              aria-label="Open Order Bag"
            >
              <ShoppingBag className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#66705A] text-[#FAF8F5] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-full bg-[#EFE9DE] text-[#2B211B] focus:outline-none"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#66705A] text-[#FAF8F5] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2B211B] rounded-md focus:outline-none hover:bg-[#EFE9DE]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#181614]/40 backdrop-blur-sm md:hidden animate-fade-in">
          <div className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-[#F6F2EA] shadow-2xl p-6 flex flex-col justify-between pt-24 border-l border-[#DDD5C8]">
            <div className="space-y-6">
              <div className="pb-4 border-b border-[#DDD5C8]">
                <div className="text-[11px] uppercase tracking-[0.2em] text-[#66705A] font-semibold mb-1">
                  JP Nagar · Bengaluru
                </div>
                <div className="text-xl font-bold font-serif text-[#2B211B]">
                  Drip & Drop Coffee
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-left text-base font-semibold tracking-wider uppercase py-1 transition-colors ${
                      activeTab === link.id ? 'text-[#66705A]' : 'text-[#2B211B]'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => handleNavClick('order')}
                  className="text-left text-base font-semibold tracking-wider uppercase py-1 text-[#2B211B] flex items-center justify-between"
                >
                  <span>Order (Demo)</span>
                  <span className="text-xs bg-[#2B211B] text-[#F6F2EA] px-2 py-0.5 rounded">Digital Bag</span>
                </button>
              </div>
            </div>

            {/* Mobile Footer Shortcuts */}
            <div className="space-y-4 pt-6 border-t border-[#DDD5C8]">
              <a
                href={LOCATION_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-full bg-[#2B211B] text-[#F6F2EA] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5" />
                Directions to Café
              </a>

              <a
                href={`tel:${LOCATION_DATA.phoneClean}`}
                className="w-full py-2.5 px-4 rounded-full border border-[#2B211B]/30 text-[#2B211B] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                Call +91 95382 38355
              </a>

              <div className="text-center text-[11px] text-[#7A7571] pt-2">
                Open Daily: 9 AM — 10 PM (Fri-Sun till 11 PM)
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
