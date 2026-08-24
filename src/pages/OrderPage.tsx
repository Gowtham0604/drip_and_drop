import React, { useState } from 'react';
import { ShoppingBag, Plus, Minus, Trash2, ArrowRight, MessageSquare, CheckCircle, Info } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { MenuItem, MenuCategoryType } from '../types';

export const OrderPage: React.FC = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    tax,
    total,
    setSelectedItemForModal,
    orderType,
    setOrderType,
  } = useCart();

  const [activeCategory, setActiveCategory] = useState<MenuCategoryType>('COFFEE');
  const [tableNumber, setTableNumber] = useState('4');
  const [customerName, setCustomerName] = useState('');
  const [orderCompleted, setOrderCompleted] = useState(false);

  const categoryItems = MENU_ITEMS.filter((i) => i.category === activeCategory);

  const handleItemSelect = (item: MenuItem) => {
    if (item.customizations?.milk || item.customizations?.grind) {
      setSelectedItemForModal(item);
    } else {
      addToCart(item);
    }
  };

  const generateWhatsAppLink = () => {
    const itemsText = cart
      .map((i) => `• ${i.quantity}x ${i.item.name} (${i.selectedMilk || 'Regular'}) - ₹${i.item.price * i.quantity}`)
      .join('%0A');

    const message = `*Drip & Drop Coffee Order*%0A*Type:* ${
      orderType === 'dine-in' ? `Dine-In (Table ${tableNumber || 'N/A'})` : 'Takeaway'
    }%0A*Customer:* ${customerName || 'Guest'}%0A%0A*Items:*%0A${itemsText}%0A%0A*Total:* ₹${total}`;

    return `https://wa.me/919538238355?text=${message}`;
  };

  return (
    <div className="pt-28 pb-24 bg-[#F6F2EA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Banner */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#66705A]">
              Drip & Drop · Digital Kitchen
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#2B211B] font-normal tracking-tight">
              Order Online
            </h1>
          </div>

          {/* Client Pitch Notice */}
          <div className="p-3 bg-[#EFE9DE] border border-[#DDD5C8] rounded-xl flex items-center gap-2.5 text-xs text-[#2B211B] max-w-md">
            <Info className="w-4 h-4 text-[#66705A] shrink-0" />
            <p>
              <span className="font-semibold">Demo Experience:</span> Ready to connect to WhatsApp, Swiggy, Zomato or your direct POS.
            </p>
          </div>
        </div>

        {/* 2-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Menu Navigation & Items */}
          <div className="lg:col-span-7 space-y-6">
            {/* Category Pills Bar */}
            <div className="overflow-x-auto scrollbar-none py-1 -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="flex space-x-2 min-w-max">
                {MENU_CATEGORIES.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border ${
                      activeCategory === cat.key
                        ? 'bg-[#2B211B] text-[#F6F2EA] border-[#2B211B]'
                        : 'bg-[#FAF8F5] text-[#2B211B] border-[#DDD5C8] hover:border-[#2B211B]/40'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Heading */}
            <div className="pb-2 border-b border-[#DDD5C8]">
              <h2 className="font-serif text-2xl text-[#2B211B]">
                {MENU_CATEGORIES.find((c) => c.key === activeCategory)?.label}
              </h2>
              <p className="text-xs text-[#7A7571] mt-0.5">
                {MENU_CATEGORIES.find((c) => c.key === activeCategory)?.description}
              </p>
            </div>

            {/* Item List */}
            <div className="space-y-4">
              {categoryItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItemForModal(item)}
                  className="group cursor-pointer bg-[#FAF8F5] p-4 rounded-2xl border border-[#DDD5C8]/80 hover:border-[#2B211B]/40 transition-all flex items-start justify-between gap-4 shadow-sm"
                >
                  <div className="flex items-start gap-3.5 flex-1 min-w-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-18 h-18 sm:w-20 sm:h-20 rounded-xl object-cover bg-[#EFE9DE] shrink-0 border border-[#DDD5C8]"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-base sm:text-lg font-medium text-[#2B211B] group-hover:text-[#66705A] transition-colors truncate">
                          {item.name}
                        </h3>
                        {item.tags?.includes('Signature') && (
                          <span className="w-2 h-2 rounded-full bg-[#66705A]" title="Signature" />
                        )}
                      </div>
                      <p className="text-xs text-[#2B211B]/70 line-clamp-2 leading-relaxed mt-0.5">
                        {item.description}
                      </p>
                      <div className="font-serif font-bold text-sm text-[#2B211B] mt-2">
                        ₹{item.price}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleItemSelect(item);
                    }}
                    className="px-4 py-2 bg-[#EFE9DE] hover:bg-[#2B211B] hover:text-[#F6F2EA] text-[#2B211B] text-xs font-semibold rounded-full transition-colors shrink-0 self-center"
                  >
                    + Add
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sticky Cart & Summary */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-[#DDD5C8] shadow-md space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#DDD5C8]">
                <div className="flex items-center space-x-2">
                  <ShoppingBag className="w-5 h-5 text-[#66705A]" />
                  <h3 className="font-serif text-lg font-semibold text-[#2B211B]">
                    Order Summary
                  </h3>
                </div>
                {cart.length > 0 && !orderCompleted && (
                  <button
                    onClick={clearCart}
                    className="text-xs text-[#7A7571] hover:text-red-700 transition-colors"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {orderCompleted ? (
                <div className="text-center py-8 space-y-4 animate-fade-in">
                  <div className="w-12 h-12 bg-[#66705A]/15 text-[#66705A] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-medium text-[#2B211B]">
                    Demo Order Submitted!
                  </h4>
                  <p className="text-xs text-[#7A7571] leading-relaxed">
                    This demonstrates how a patron in JP Nagar can seamlessly submit their order for in-café dining or pickup.
                  </p>
                  <div className="p-3 bg-[#EFE9DE] rounded-xl text-xs text-left space-y-1 font-mono">
                    <div className="flex justify-between">
                      <span>Type:</span>
                      <span className="font-sans font-semibold capitalize">{orderType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Prep:</span>
                      <span className="font-sans">10-12 mins</span>
                    </div>
                    <div className="flex justify-between font-bold pt-1 border-t border-[#DDD5C8]">
                      <span>Amount:</span>
                      <span className="font-sans">₹{total}</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 bg-[#25D366] text-white text-xs font-semibold rounded-full uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Test WhatsApp Order Flow
                    </a>
                    <button
                      onClick={() => {
                        clearCart();
                        setOrderCompleted(false);
                      }}
                      className="w-full py-2 bg-[#2B211B] text-[#F6F2EA] text-xs font-semibold rounded-full uppercase tracking-wider"
                    >
                      Start New Order
                    </button>
                  </div>
                </div>
              ) : cart.length === 0 ? (
                <div className="text-center py-12 space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#EFE9DE] flex items-center justify-center mx-auto text-[#7A7571]">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <p className="font-serif text-base text-[#2B211B]">No items in your bag</p>
                  <p className="text-xs text-[#7A7571]">
                    Select items from the menu categories to build your order.
                  </p>
                </div>
              ) : (
                <>
                  {/* Order Type Toggle */}
                  <div className="bg-[#EFE9DE] p-1 rounded-xl flex">
                    <button
                      type="button"
                      onClick={() => setOrderType('dine-in')}
                      className={`flex-1 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                        orderType === 'dine-in'
                          ? 'bg-[#2B211B] text-[#F6F2EA]'
                          : 'text-[#2B211B]/70 hover:text-[#2B211B]'
                      }`}
                    >
                      Dine-In
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('takeaway')}
                      className={`flex-1 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                        orderType === 'takeaway'
                          ? 'bg-[#2B211B] text-[#F6F2EA]'
                          : 'text-[#2B211B]/70 hover:text-[#2B211B]'
                      }`}
                    >
                      Takeaway
                    </button>
                  </div>

                  {/* Table / Name Inputs */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {orderType === 'dine-in' ? (
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-[#7A7571] mb-1">
                          Table No.
                        </label>
                        <input
                          type="text"
                          value={tableNumber}
                          onChange={(e) => setTableNumber(e.target.value)}
                          placeholder="e.g. 4"
                          className="w-full px-3 py-1.5 bg-[#FAF8F5] border border-[#DDD5C8] rounded-lg text-xs focus:outline-none focus:border-[#2B211B]"
                        />
                      </div>
                    ) : (
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-[#7A7571] mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder="Name for order"
                          className="w-full px-3 py-1.5 bg-[#FAF8F5] border border-[#DDD5C8] rounded-lg text-xs focus:outline-none focus:border-[#2B211B]"
                        />
                      </div>
                    )}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#7A7571] mb-1">
                        Outlet
                      </label>
                      <div className="px-3 py-1.5 bg-[#EFE9DE] border border-[#DDD5C8] rounded-lg text-[11px] font-medium text-[#2B211B] truncate">
                        JP Nagar Phase 5
                      </div>
                    </div>
                  </div>

                  {/* Cart Line Items */}
                  <div className="divide-y divide-[#DDD5C8] max-h-60 overflow-y-auto pr-1">
                    {cart.map((cartItem) => {
                      const itemUnitPrice =
                        cartItem.item.price +
                        (cartItem.selectedMilk === 'Oat Milk' || cartItem.selectedMilk === 'Almond Milk' ? 45 : 0);

                      return (
                        <div key={cartItem.cartItemId} className="py-3 flex items-start justify-between gap-3 text-xs">
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline">
                              <h4 className="font-semibold text-[#2B211B] truncate pr-2">
                                {cartItem.item.name}
                              </h4>
                              <span className="font-semibold text-[#2B211B]">
                                ₹{itemUnitPrice * cartItem.quantity}
                              </span>
                            </div>
                            <div className="flex gap-1 text-[10px] text-[#7A7571] mt-0.5">
                              {cartItem.selectedMilk && <span>{cartItem.selectedMilk}</span>}
                              {cartItem.selectedGrind && <span>• {cartItem.selectedGrind}</span>}
                            </div>
                          </div>

                          <div className="flex items-center space-x-2 shrink-0">
                            <div className="flex items-center space-x-1 bg-[#EFE9DE] rounded-full px-1 py-0.5">
                              <button
                                onClick={() => updateQuantity(cartItem.cartItemId, -1)}
                                className="w-4 h-4 rounded-full flex items-center justify-center text-[#2B211B] hover:bg-[#DDD5C8]"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-2.5 h-2.5" />
                              </button>
                              <span className="text-[11px] font-semibold w-3 text-center">
                                {cartItem.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(cartItem.cartItemId, 1)}
                                className="w-4 h-4 rounded-full flex items-center justify-center text-[#2B211B] hover:bg-[#DDD5C8]"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-2.5 h-2.5" />
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(cartItem.cartItemId)}
                              className="text-[#7A7571] hover:text-red-700 p-0.5"
                              title="Remove item"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Calculations */}
                  <div className="pt-3 border-t border-[#DDD5C8] space-y-1.5 text-xs text-[#2B211B]/80">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GST (5%)</span>
                      <span>₹{tax}</span>
                    </div>
                    <div className="flex justify-between font-bold text-sm text-[#2B211B] pt-2 border-t border-[#DDD5C8]">
                      <span>Total</span>
                      <span>₹{total}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 space-y-2">
                    <button
                      onClick={() => setOrderCompleted(true)}
                      className="w-full py-3 px-4 bg-[#2B211B] hover:bg-[#181614] text-[#F6F2EA] rounded-full text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>Complete Order (Demo)</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
