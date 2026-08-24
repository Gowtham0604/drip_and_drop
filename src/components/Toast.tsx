import React from 'react';
import { Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Toast: React.FC = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
      <div className="bg-[#181614] text-[#F6F2EA] px-5 py-3 rounded-full shadow-xl flex items-center gap-3 border border-[#DDD5C8]/20 text-xs sm:text-sm font-medium tracking-wide">
        <span className="w-5 h-5 rounded-full bg-[#66705A] flex items-center justify-center text-white shrink-0">
          <Check className="w-3 h-3" />
        </span>
        <span>{toastMessage}</span>
      </div>
    </div>
  );
};
