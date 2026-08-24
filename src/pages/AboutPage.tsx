import React from 'react';
import { Coffee, Utensils, Users, Sparkles } from 'lucide-react';

interface AboutPageProps {
  setActiveTab: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setActiveTab }) => {
  return (
    <div className="pt-28 pb-24 bg-[#F6F2EA]">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#66705A]">
            About Drip & Drop
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#2B211B] font-normal tracking-tight leading-[1.1]">
            A neighborhood café <br />
            <span className="italic">built for slowing down</span>.
          </h1>
          <p className="text-sm sm:text-base text-[#2B211B]/80 leading-relaxed font-normal">
            Drip and Drop Coffee was started with a simple intention: to bring specialty coffee, genuine hospitality, and thoughtful kitchen cooking together under one unhurried roof in JP Nagar, Bengaluru.
          </p>
        </div>
      </section>

      {/* Main Story & Image Split */}
      <section className="py-12 bg-[#FAF8F5] border-y border-[#DDD5C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2B211B] font-medium">
                The Space on 15th Cross Road
              </h2>
              <p className="text-xs sm:text-sm text-[#2B211B]/80 leading-relaxed">
                Situated on the ground floor along 15th Cross Road in JP Nagar Phase 5, the café is conceived as a quiet respite from Bengaluru’s bustle. We chose warm oak wood, textured plaster, and generous window seating to make it a place where you can comfortably read a book, work on a notebook, or catch up over a slow hand brew.
              </p>
              <p className="text-xs sm:text-sm text-[#2B211B]/80 leading-relaxed">
                We believe a great neighborhood café shouldn’t be intimidating. Whether you want to discuss origin elevation and TDS extraction with the barista, or simply want a comforting hot cappuccino and a warm garlic bun, you are equally welcome.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#DDD5C8] image-zoom-container">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
                  alt="Drip and Drop Coffee seating and warm counter"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of the Brand */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#66705A]">
            Our Foundation
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211B] font-normal">
            What Guides Our Bar & Kitchen
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#DDD5C8] space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#EFE9DE] flex items-center justify-center text-[#66705A]">
              <Coffee className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-medium text-[#2B211B]">
              Specialty Coffee
            </h3>
            <p className="text-xs text-[#2B211B]/75 leading-relaxed">
              Sourcing washed Arabicas and selected Robustas from Chikmagalur and Coorg, dialed daily for clarity and balance.
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#DDD5C8] space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#EFE9DE] flex items-center justify-center text-[#66705A]">
              <Utensils className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-medium text-[#2B211B]">
              Real Kitchen
            </h3>
            <p className="text-xs text-[#2B211B]/75 leading-relaxed">
              Not reheated food. We bake Korean buns, grill smash burgers, and assemble crisp salads fresh in our kitchen.
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#DDD5C8] space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#EFE9DE] flex items-center justify-center text-[#66705A]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-medium text-[#2B211B]">
              Uji Matcha & Cocoa
            </h3>
            <p className="text-xs text-[#2B211B]/75 leading-relaxed">
              Ceremonial-grade Japanese green tea and single-origin chocolate melted in-house for non-coffee drinkers.
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#DDD5C8] space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#EFE9DE] flex items-center justify-center text-[#66705A]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-medium text-[#2B211B]">
              Neighborhood Table
            </h3>
            <p className="text-xs text-[#2B211B]/75 leading-relaxed">
              A community space where regulars, remote workers, and friends can meet, converse, and linger at their own pace.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#EFE9DE] rounded-3xl p-8 sm:p-12 border border-[#DDD5C8] text-center space-y-6">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#2B211B] font-medium">
            Join us on 15th Cross Road
          </h3>
          <p className="text-xs sm:text-sm text-[#2B211B]/80 max-w-lg mx-auto">
            Open daily from 9 AM (8 AM on weekends). Stop by for a cup, a bite, or a bag of freshly roasted beans.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={() => setActiveTab('menu')}
              className="px-6 py-3 bg-[#2B211B] text-[#F6F2EA] rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#181614] transition-colors"
            >
              Browse Menu
            </button>
            <button
              onClick={() => setActiveTab('visit')}
              className="px-6 py-3 border border-[#2B211B]/30 text-[#2B211B] rounded-full text-xs font-bold uppercase tracking-wider hover:border-[#2B211B] transition-colors"
            >
              Get Directions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
