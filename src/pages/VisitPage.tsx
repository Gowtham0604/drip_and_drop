import React from 'react';
import { Phone, Clock, ArrowUpRight, Wifi, Car, Compass, Coffee } from 'lucide-react';
import { LOCATION_DATA } from '../data/locationData';

export const VisitPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 bg-[#F6F2EA]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#66705A]">
            Visit Drip & Drop
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#2B211B] font-normal tracking-tight leading-[1.1]">
            Find our café in <br />
            <span className="italic">JP Nagar Phase 5</span>.
          </h1>
          <p className="text-sm sm:text-base text-[#2B211B]/75 leading-relaxed font-normal">
            Located on 15th Cross Road, easily accessible from Ring Road and JP Nagar Metro station. Open daily from early morning till late evening.
          </p>
        </div>
      </section>

      {/* Main Grid: Location Details + Interactive Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-3xl border border-[#DDD5C8] shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#66705A]">
                  Address
                </span>
                <h3 className="font-serif text-xl font-medium text-[#2B211B]">
                  Drip And Drop Coffee
                </h3>
                <p className="text-xs sm:text-sm text-[#2B211B]/80 leading-relaxed">
                  289, Ground Floor, 15th Cross Road,<br />
                  5th Phase, JP Nagar Phase 5,<br />
                  Bengaluru, Karnataka 560078
                </p>
              </div>

              {/* Opening Hours */}
              <div className="pt-4 border-t border-[#DDD5C8] space-y-3">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#66705A] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  Opening Hours
                </span>
                <div className="space-y-1.5 text-xs text-[#2B211B]/85">
                  <div className="flex justify-between py-1 border-b border-[#DDD5C8]/40">
                    <span className="font-medium">Monday — Thursday</span>
                    <span className="font-mono">9:00 AM — 10:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#DDD5C8]/40">
                    <span className="font-medium">Friday — Sunday</span>
                    <span className="font-mono text-[#66705A] font-semibold">8:00 AM — 11:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Direct Phone & Social */}
              <div className="pt-4 border-t border-[#DDD5C8] space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#7A7571]">Phone:</span>
                  <a
                    href={`tel:${LOCATION_DATA.phoneClean}`}
                    className="font-semibold text-[#2B211B] hover:text-[#66705A] transition-colors"
                  >
                    {LOCATION_DATA.phone}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#7A7571]">Instagram:</span>
                  <a
                    href={LOCATION_DATA.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#2B211B] hover:text-[#66705A] transition-colors flex items-center gap-1"
                  >
                    @{LOCATION_DATA.instagram}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 space-y-2">
                <a
                  href={LOCATION_DATA.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#2B211B] hover:bg-[#181614] text-[#F6F2EA] rounded-full text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Compass className="w-4 h-4" />
                  Get Google Maps Directions
                </a>

                <a
                  href={`tel:${LOCATION_DATA.phoneClean}`}
                  className="w-full py-3 px-4 border border-[#2B211B]/30 hover:border-[#2B211B] text-[#2B211B] rounded-full text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Front Desk (+91 95382 38355)
                </a>
              </div>
            </div>
          </div>

          {/* Right Map & Practical Tips */}
          <div className="lg:col-span-7 space-y-6">
            {/* Embedded Google Map */}
            <div className="bg-[#FAF8F5] p-4 rounded-3xl border border-[#DDD5C8] shadow-sm">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#DDD5C8] border border-[#DDD5C8]">
                <iframe
                  title="Drip and Drop Coffee Google Map"
                  src="https://maps.google.com/maps?q=289+15th+Cross+Road+5th+Phase+JP+Nagar+Bengaluru+560078&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter grayscale-[15%] contrast-[1.05]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Practical Visiting Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#DDD5C8] space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#EFE9DE] flex items-center justify-center text-[#66705A]">
                  <Car className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-sm font-semibold text-[#2B211B]">
                  Parking
                </h4>
                <p className="text-xs text-[#7A7571] leading-relaxed">
                  Street parking available along 15th Cross Road with designated two-wheeler parking out front.
                </p>
              </div>

              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#DDD5C8] space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#EFE9DE] flex items-center justify-center text-[#66705A]">
                  <Wifi className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-sm font-semibold text-[#2B211B]">
                  Wi-Fi & Work
                </h4>
                <p className="text-xs text-[#7A7571] leading-relaxed">
                  High-speed fiber Wi-Fi and accessible power outlets at our long community oak table.
                </p>
              </div>

              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#DDD5C8] space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#EFE9DE] flex items-center justify-center text-[#66705A]">
                  <Coffee className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-sm font-semibold text-[#2B211B]">
                  Beans & Grind
                </h4>
                <p className="text-xs text-[#7A7571] leading-relaxed">
                  Fresh roasted retail coffee beans ground to order by our baristas during your visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
