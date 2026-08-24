import React from 'react';
import { MapPin, Clock, ArrowUpRight, Phone } from 'lucide-react';
import { LOCATION_DATA } from '../data/locationData';

export const QuickInfoBar: React.FC = () => {
  return (
    <section className="bg-[#FAF8F5] border-y border-[#DDD5C8]/80 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-[#DDD5C8]/60">
          {/* Location */}
          <div className="flex items-center space-x-3.5 pt-2 md:pt-0">
            <div className="w-9 h-9 rounded-full bg-[#EFE9DE] flex items-center justify-center shrink-0 text-[#2B211B]">
              <MapPin className="w-4 h-4 text-[#66705A]" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#66705A]">
                Location
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#2B211B] tracking-tight">
                JP Nagar · Bengaluru
              </div>
              <div className="text-[11px] text-[#7A7571] truncate max-w-[200px]">
                15th Cross Road, 5th Phase
              </div>
            </div>
          </div>

          {/* Today's Hours */}
          <div className="flex items-center space-x-3.5 pt-3 md:pt-0 md:pl-6">
            <div className="w-9 h-9 rounded-full bg-[#EFE9DE] flex items-center justify-center shrink-0 text-[#2B211B]">
              <Clock className="w-4 h-4 text-[#66705A]" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#66705A] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                Open Today
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#2B211B]">
                9:00 AM — 10:00 PM
              </div>
              <div className="text-[11px] text-[#7A7571]">
                Mon — Thu Schedule
              </div>
            </div>
          </div>

          {/* Weekend Hours */}
          <div className="flex items-center space-x-3.5 pt-3 md:pt-0 md:pl-6">
            <div className="w-9 h-9 rounded-full bg-[#EFE9DE] flex items-center justify-center shrink-0 text-[#2B211B]">
              <Clock className="w-4 h-4 text-[#66705A]" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#66705A]">
                Fri — Sun Extended
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#2B211B]">
                8:00 AM — 11:00 PM
              </div>
              <div className="text-[11px] text-[#7A7571]">
                Weekend Brews & Food
              </div>
            </div>
          </div>

          {/* Direction & Call CTA */}
          <div className="flex items-center justify-start md:justify-end gap-3 pt-3 md:pt-0 md:pl-6">
            <a
              href={LOCATION_DATA.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2B211B] hover:bg-[#181614] text-[#F6F2EA] text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 shadow-sm"
            >
              <span>Get Directions</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={`tel:${LOCATION_DATA.phoneClean}`}
              className="inline-flex items-center justify-center p-2 rounded-full border border-[#2B211B]/20 text-[#2B211B] hover:bg-[#EFE9DE] transition-colors"
              title="Call café"
              aria-label="Call Café"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
