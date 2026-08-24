import React, { useState } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';

interface ItemDetailModalProps {
  item: MenuItem;
  onClose: () => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({ item, onClose }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedMilk, setSelectedMilk] = useState<string>(
    item.customizations?.milk ? 'Whole Milk' : ''
  );
  const [selectedTemp, setSelectedTemp] = useState<string>(
    item.customizations?.temperature ? item.customizations.temperature[0] : ''
  );
  const [selectedGrind, setSelectedGrind] = useState<string>(
    item.customizations?.grind ? item.customizations.grind[0] : ''
  );
  const [selectedSweetness, setSelectedSweetness] = useState<string>(
    item.customizations?.sweetness ? item.customizations.sweetness[0] : ''
  );
  const [specialInstructions, setSpecialInstructions] = useState('');

  const milkOptions = [
    { label: 'Standard Dairy (Whole Milk)', value: 'Whole Milk', extra: 0 },
    { label: 'Oat Milk (Plant-based)', value: 'Oat Milk', extra: 45 },
    { label: 'Almond Milk (Plant-based)', value: 'Almond Milk', extra: 45 },
  ];

  const calculateUnitTotal = () => {
    let price = item.price;
    if (selectedMilk === 'Oat Milk' || selectedMilk === 'Almond Milk') {
      price += 45;
    }
    return price;
  };

  const handleAdd = () => {
    addToCart(item, {
      quantity,
      selectedMilk: selectedMilk || undefined,
      selectedTemp: selectedTemp || undefined,
      selectedGrind: selectedGrind || undefined,
      selectedSweetness: selectedSweetness || undefined,
      specialInstructions,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#181614]/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-[#F6F2EA] rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#DDD5C8] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#181614]/60 text-white flex items-center justify-center hover:bg-[#181614] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Item Image Banner */}
        <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-[#EFE9DE]">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B211B]/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#CAD4C1]">
              {item.category}
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-medium tracking-tight">
              {item.name}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-5 max-h-[60vh] overflow-y-auto">
          {/* Description & Price */}
          <div className="flex justify-between items-start gap-4">
            <p className="text-xs sm:text-sm text-[#2B211B]/80 leading-relaxed">
              {item.description}
            </p>
            <div className="text-base sm:text-lg font-bold font-serif text-[#2B211B] shrink-0">
              ₹{calculateUnitTotal()}
            </div>
          </div>

          {item.notes && (
            <div className="p-3 bg-[#EFE9DE]/80 rounded-lg text-xs text-[#2B211B]/85 border border-[#DDD5C8]">
              <span className="font-semibold text-[#66705A]">Detail:</span> {item.notes}
            </div>
          )}

          {/* Milk Options */}
          {item.customizations?.milk && (
            <div className="space-y-2 pt-2 border-t border-[#DDD5C8]/80">
              <label className="text-xs font-bold tracking-wider uppercase text-[#2B211B]">
                Choice of Milk
              </label>
              <div className="grid grid-cols-1 gap-2">
                {milkOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setSelectedMilk(opt.value)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium border transition-all ${
                      selectedMilk === opt.value
                        ? 'border-[#2B211B] bg-[#2B211B] text-[#F6F2EA]'
                        : 'border-[#DDD5C8] bg-[#FAF8F5] text-[#2B211B] hover:border-[#2B211B]/40'
                    }`}
                  >
                    <span>{opt.label}</span>
                    <span className="text-[11px] opacity-80">
                      {opt.extra > 0 ? `+₹${opt.extra}` : 'Included'}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Temperature Options */}
          {item.customizations?.temperature && (
            <div className="space-y-2 pt-2 border-t border-[#DDD5C8]/80">
              <label className="text-xs font-bold tracking-wider uppercase text-[#2B211B]">
                Served As
              </label>
              <div className="grid grid-cols-2 gap-2">
                {item.customizations.temperature.map((temp) => (
                  <button
                    key={temp}
                    type="button"
                    onClick={() => setSelectedTemp(temp)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium border text-center transition-all ${
                      selectedTemp === temp
                        ? 'border-[#2B211B] bg-[#2B211B] text-[#F6F2EA]'
                        : 'border-[#DDD5C8] bg-[#FAF8F5] text-[#2B211B] hover:border-[#2B211B]/40'
                    }`}
                  >
                    {temp}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Bean Grind Options */}
          {item.customizations?.grind && (
            <div className="space-y-2 pt-2 border-t border-[#DDD5C8]/80">
              <label className="text-xs font-bold tracking-wider uppercase text-[#2B211B]">
                Grind Preference (Roasted to Order)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {item.customizations.grind.map((grind) => (
                  <button
                    key={grind}
                    type="button"
                    onClick={() => setSelectedGrind(grind)}
                    className={`px-2.5 py-2 rounded-xl text-[11px] font-medium border text-center transition-all ${
                      selectedGrind === grind
                        ? 'border-[#2B211B] bg-[#2B211B] text-[#F6F2EA]'
                        : 'border-[#DDD5C8] bg-[#FAF8F5] text-[#2B211B] hover:border-[#2B211B]/40'
                    }`}
                  >
                    {grind}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sweetness */}
          {item.customizations?.sweetness && (
            <div className="space-y-2 pt-2 border-t border-[#DDD5C8]/80">
              <label className="text-xs font-bold tracking-wider uppercase text-[#2B211B]">
                Sweetness Level
              </label>
              <div className="flex gap-2">
                {item.customizations.sweetness.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSweetness(s)}
                    className={`flex-1 px-3 py-2 rounded-xl text-xs font-medium border text-center transition-all ${
                      selectedSweetness === s
                        ? 'border-[#2B211B] bg-[#2B211B] text-[#F6F2EA]'
                        : 'border-[#DDD5C8] bg-[#FAF8F5] text-[#2B211B] hover:border-[#2B211B]/40'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Special Requests */}
          <div className="space-y-2 pt-2 border-t border-[#DDD5C8]/80">
            <label className="text-xs font-bold tracking-wider uppercase text-[#2B211B]">
              Kitchen Note (Optional)
            </label>
            <input
              type="text"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="e.g. Extra hot, ice on the side, no lid..."
              className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-[#DDD5C8] rounded-xl text-xs focus:outline-none focus:border-[#2B211B] placeholder-[#7A7571]/60"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-[#EFE9DE] border-t border-[#DDD5C8] flex items-center justify-between gap-4">
          <div className="flex items-center space-x-3 bg-[#FAF8F5] border border-[#DDD5C8] rounded-full p-1">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-7 h-7 rounded-full flex items-center justify-center text-[#2B211B] hover:bg-[#EFE9DE]"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="text-xs font-bold w-4 text-center text-[#2B211B]">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-7 h-7 rounded-full flex items-center justify-center text-[#2B211B] hover:bg-[#EFE9DE]"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={handleAdd}
            className="flex-1 py-3 px-5 bg-[#2B211B] hover:bg-[#181614] text-[#F6F2EA] rounded-full text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Add to Order</span>
            <span>•</span>
            <span>₹{calculateUnitTotal() * quantity}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
