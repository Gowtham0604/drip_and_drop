import React from 'react';
import { ArrowUpRight, MapPin, Phone, Instagram, Clock } from 'lucide-react';
import { LOCATION_DATA } from '../data/locationData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const handleNav = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#181614] text-[#F6F2EA] pt-16 pb-12 border-t border-[#2B211B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#2B211B]">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#F6F2EA] flex items-center justify-center text-[#181614]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <span className="font-sans font-bold tracking-[0.18em] text-lg text-[#F6F2EA]">
                DRIP & DROP
              </span>
            </div>

            <p className="font-serif text-xl sm:text-2xl text-[#DDD5C8] font-light leading-relaxed max-w-md">
              Specialty coffee, thoughtful food & a little time well spent in JP Nagar, Bengaluru.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 text-[11px] font-semibold tracking-widest uppercase bg-[#66705A]/20 text-[#CAD4C1] border border-[#66705A]/30 rounded-full">
                Specialty Coffee Roastery & Kitchen
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-[#66705A]">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['home', 'menu', 'coffee', 'about', 'visit', 'order'].map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => handleNav(tab)}
                    className="text-[#DDD5C8]/80 hover:text-[#F6F2EA] capitalize transition-colors"
                  >
                    {tab === 'order' ? 'Order Demo' : tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-[#66705A]">
              Visit & Contact
            </h4>
            <div className="space-y-3 text-sm text-[#DDD5C8]/90">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#66705A] shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[#F6F2EA]">Drip and Drop Coffee</p>
                  <p className="text-xs text-[#DDD5C8]/70 leading-relaxed mt-0.5">
                    289, Ground Floor, 15th Cross Road,<br />
                    5th Phase, JP Nagar Phase 5,<br />
                    Bengaluru, Karnataka 560078
                  </p>
                  <a
                    href={LOCATION_DATA.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#CAD4C1] hover:underline mt-1.5 font-medium"
                  >
                    Open in Google Maps
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Phone className="w-4 h-4 text-[#66705A] shrink-0" />
                <a
                  href={`tel:${LOCATION_DATA.phoneClean}`}
                  className="hover:text-[#F6F2EA] transition-colors"
                >
                  {LOCATION_DATA.phone}
                </a>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <Clock className="w-4 h-4 text-[#66705A] shrink-0 mt-0.5" />
                <div className="text-xs space-y-0.5">
                  <p><span className="text-[#F6F2EA] font-medium">Mon — Thu:</span> 9:00 AM — 10:00 PM</p>
                  <p><span className="text-[#F6F2EA] font-medium">Fri — Sun:</span> 8:00 AM — 11:00 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Instagram className="w-4 h-4 text-[#66705A] shrink-0" />
                <a
                  href={LOCATION_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F6F2EA] transition-colors text-xs flex items-center gap-1"
                >
                  @{LOCATION_DATA.instagram}
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#DDD5C8]/50 gap-4">
          <div>
            © {new Date().getFullYear()} Drip and Drop Coffee. All rights reserved. JP Nagar, Bengaluru.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#DDD5C8]/40">Specialty Coffee Pitch Demo</span>
            <button
              onClick={() => handleNav('visit')}
              className="text-[#CAD4C1] hover:underline"
            >
              Directions & Hours
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
