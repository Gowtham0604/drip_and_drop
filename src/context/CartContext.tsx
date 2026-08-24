import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, CartItem } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem, options?: Partial<CartItem>) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalItems: number;
  subtotal: number;
  tax: number;
  total: number;
  selectedItemForModal: MenuItem | null;
  setSelectedItemForModal: (item: MenuItem | null) => void;
  orderType: 'dine-in' | 'takeaway';
  setOrderType: (type: 'dine-in' | 'takeaway') => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('drip_and_drop_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('dine-in');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('drip_and_drop_cart', JSON.stringify(cart));
    } catch {
      // Ignore
    }
  }, [cart]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const addToCart = (item: MenuItem, options?: Partial<CartItem>) => {
    const selectedMilk = options?.selectedMilk || (item.customizations?.milk ? 'Whole Milk' : undefined);
    const selectedTemp = options?.selectedTemp || (item.customizations?.temperature ? item.customizations.temperature[0] : undefined);
    const selectedGrind = options?.selectedGrind || (item.customizations?.grind ? item.customizations.grind[0] : undefined);
    const selectedSweetness = options?.selectedSweetness || (item.customizations?.sweetness ? item.customizations.sweetness[0] : undefined);
    const specialInstructions = options?.specialInstructions || '';

    // Generate unique ID for this variation
    const cartItemId = `${item.id}-${selectedMilk || 'none'}-${selectedTemp || 'none'}-${selectedGrind || 'none'}-${selectedSweetness || 'none'}-${specialInstructions.slice(0, 10)}`;

    setCart((prev) => {
      const existing = prev.find((i) => i.cartItemId === cartItemId);
      if (existing) {
        return prev.map((i) =>
          i.cartItemId === cartItemId ? { ...i, quantity: i.quantity + (options?.quantity || 1) } : i
        );
      }
      return [
        ...prev,
        {
          cartItemId,
          item,
          quantity: options?.quantity || 1,
          selectedMilk,
          selectedTemp,
          selectedGrind,
          selectedSweetness,
          specialInstructions,
        },
      ];
    });

    showToast(`Added "${item.name}" to order`);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((i) => i.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => {
          if (i.cartItemId === cartItemId) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cart.reduce((sum, item) => {
    let itemPrice = item.item.price;
    // Alternative milk extra
    if (item.selectedMilk === 'Oat Milk' || item.selectedMilk === 'Almond Milk') {
      itemPrice += 45;
    }
    return sum + itemPrice * item.quantity;
  }, 0);

  const tax = Math.round(subtotal * 0.05); // 5% GST
  const total = subtotal + tax;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        subtotal,
        tax,
        total,
        selectedItemForModal,
        setSelectedItemForModal,
        orderType,
        setOrderType,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
