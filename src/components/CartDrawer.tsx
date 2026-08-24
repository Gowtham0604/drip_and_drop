import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    tax,
    total,
    orderType,
    setOrderType,
  } = useCart();

  const [tableNumber, setTableNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckoutDemo = () => {
    setOrderPlaced(true);
  };

  const handleClose = () => {
    setIsCartOpen(false);
    if (orderPlaced) {
      clearCart();
      setOrderPlaced(false);
    }
  };

  const generateWhatsAppOrderText = () => {
    const itemsText = cart
      .map(
        (i) =>
          `• ${i.quantity}x ${i.item.name} (${i.selectedMilk || 'Regular'}${
            i.selectedGrind ? `, ${i.selectedGrind}` : ''
          }) - ₹${i.item.price * i.quantity}`
      )
      .join('%0A');

    const message = `*Drip & Drop Coffee Order*%0A%0A*Type:* ${
      orderType === 'dine-in' ? `Dine-In (Table ${tableNumber || 'N/A'})` : 'Takeaway / Pickup'
    }%0A*Customer:* ${customerName || 'Guest'}%0A%0A*Items:*%0A${itemsText}%0A%0A*Subtotal:* ₹${subtotal}%0A*Total:* ₹${total}%0A%0A_Sent via Drip & Drop Website Demo_`;

    return `https://wa.me/919538238355?text=${message}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      <div
        className="absolute inset-0 bg-[#181614]/50 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F6F2EA] shadow-2xl flex flex-col justify-between border-l border-[#DDD5C8]">
          {/* Header */}
          <div className="p-5 border-b border-[#DDD5C8] flex items-center justify-between bg-[#FAF8F5]">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-[#66705A]" />
              <h2 className="font-serif text-lg font-semibold text-[#2B211B]">
                Your Order Bag
              </h2>
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 rounded-full text-[#2B211B]/60 hover:text-[#2B211B] hover:bg-[#EFE9DE] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {orderPlaced ? (
              <div className="text-center py-12 space-y-4 animate-fade-in">
                <div className="w-14 h-14 bg-[#66705A]/15 text-[#66705A] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#2B211B]">
                  Demo Order Created
                </h3>
                <p className="text-xs sm:text-sm text-[#7A7571] max-w-xs mx-auto leading-relaxed">
                  In production, this integrates directly with the café POS, WhatsApp hotline, Swiggy, or Zomato for automated billing.
                </p>

                <div className="p-4 bg-[#FAF8F5] border border-[#DDD5C8] rounded-xl text-left text-xs space-y-2 max-w-xs mx-auto">
                  <div className="flex justify-between font-medium text-[#2B211B]">
                    <span>Order Type:</span>
                    <span className="capitalize">{orderType} {tableNumber && `(Table ${tableNumber})`}</span>
                  </div>
                  <div className="flex justify-between font-medium text-[#2B211B]">
                    <span>Estimated Prep Time:</span>
                    <span>10–12 mins</span>
                  </div>
                  <div className="flex justify-between font-bold text-[#2B211B] pt-2 border-t border-[#DDD5C8]">
                    <span>Total Amount:</span>
                    <span>₹{total}</span>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <a
                    href={generateWhatsAppOrderText()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#25D366] text-white font-semibold text-xs rounded-full uppercase tracking-wider shadow-sm hover:opacity-90 transition-opacity"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Send Order on WhatsApp Demo
                  </a>

                  <button
                    onClick={handleClose}
                    className="w-full py-2.5 px-4 bg-[#2B211B] text-[#F6F2EA] font-semibold text-xs rounded-full uppercase tracking-wider"
                  >
                    Close & Reset Order
                  </button>
                </div>
              </div>
            ) : cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#EFE9DE] flex items-center justify-center mx-auto text-[#7A7571]">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <p className="font-serif text-lg text-[#2B211B]">Your bag is currently empty</p>
                <p className="text-xs text-[#7A7571] max-w-xs mx-auto">
                  Explore our specialty coffee, fresh bakes, and breakfast kitchen to build your order.
                </p>
              </div>
            ) : (
              <>
                {/* Order Type Toggle */}
                <div className="bg-[#FAF8F5] p-1.5 rounded-xl border border-[#DDD5C8] flex">
                  <button
                    type="button"
                    onClick={() => setOrderType('dine-in')}
                    className={`flex-1 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                      orderType === 'dine-in'
                        ? 'bg-[#2B211B] text-[#F6F2EA] shadow-sm'
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
                        ? 'bg-[#2B211B] text-[#F6F2EA] shadow-sm'
                        : 'text-[#2B211B]/70 hover:text-[#2B211B]'
                    }`}
                  >
                    Takeaway / Pickup
                  </button>
                </div>

                {/* Table or Customer Info */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {orderType === 'dine-in' ? (
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#7A7571] mb-1">
                        Table Number
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 4"
                        value={tableNumber}
                        onChange={(e) => setTableNumber(e.target.value)}
                        className="w-full px-3 py-1.5 bg-[#FAF8F5] border border-[#DDD5C8] rounded-lg text-xs focus:outline-none focus:border-[#2B211B]"
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#7A7571] mb-1">
                        Pickup Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full px-3 py-1.5 bg-[#FAF8F5] border border-[#DDD5C8] rounded-lg text-xs focus:outline-none focus:border-[#2B211B]"
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#7A7571] mb-1">
                      Café Location
                    </label>
                    <div className="px-3 py-1.5 bg-[#EFE9DE] border border-[#DDD5C8] rounded-lg text-[11px] font-medium text-[#2B211B] truncate">
                      JP Nagar Phase 5
                    </div>
                  </div>
                </div>

                {/* Cart Items List */}
                <div className="divide-y divide-[#DDD5C8]/70">
                  {cart.map((cartItem) => {
                    const itemUnitPrice =
                      cartItem.item.price +
                      (cartItem.selectedMilk === 'Oat Milk' || cartItem.selectedMilk === 'Almond Milk' ? 45 : 0);

                    return (
                      <div key={cartItem.cartItemId} className="py-3.5 flex items-start gap-3">
                        <img
                          src={cartItem.item.image}
                          alt={cartItem.item.name}
                          className="w-14 h-14 rounded-lg object-cover bg-[#EFE9DE] shrink-0 border border-[#DDD5C8]"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <h4 className="text-xs font-bold text-[#2B211B] truncate pr-2">
                              {cartItem.item.name}
                            </h4>
                            <span className="text-xs font-semibold text-[#2B211B] shrink-0">
                              ₹{itemUnitPrice * cartItem.quantity}
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-1 mt-1">
                            {cartItem.selectedMilk && (
                              <span className="text-[10px] bg-[#EFE9DE] text-[#2B211B] px-1.5 py-0.5 rounded">
                                {cartItem.selectedMilk}
                              </span>
                            )}
                            {cartItem.selectedTemp && (
                              <span className="text-[10px] bg-[#EFE9DE] text-[#2B211B] px-1.5 py-0.5 rounded">
                                {cartItem.selectedTemp}
                              </span>
                            )}
                            {cartItem.selectedGrind && (
                              <span className="text-[10px] bg-[#EFE9DE] text-[#2B211B] px-1.5 py-0.5 rounded">
                                {cartItem.selectedGrind}
                              </span>
                            )}
                          </div>

                          {cartItem.specialInstructions && (
                            <p className="text-[10px] text-[#7A7571] italic mt-1">
                              Note: {cartItem.specialInstructions}
                            </p>
                          )}

                          <div className="flex items-center justify-between mt-2.5">
                            <div className="flex items-center space-x-2 bg-[#FAF8F5] border border-[#DDD5C8] rounded-full px-1 py-0.5">
                              <button
                                onClick={() => updateQuantity(cartItem.cartItemId, -1)}
                                className="w-5 h-5 rounded-full flex items-center justify-center text-[#2B211B] hover:bg-[#EFE9DE]"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs font-semibold w-4 text-center">
                                {cartItem.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(cartItem.cartItemId, 1)}
                                className="w-5 h-5 rounded-full flex items-center justify-center text-[#2B211B] hover:bg-[#EFE9DE]"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <button
                              onClick={() => removeFromCart(cartItem.cartItemId)}
                              className="text-[#7A7571] hover:text-red-700 p-1"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {/* Footer Billing Breakdown */}
          {cart.length > 0 && !orderPlaced && (
            <div className="p-5 bg-[#FAF8F5] border-t border-[#DDD5C8] space-y-3">
              <div className="space-y-1.5 text-xs text-[#2B211B]/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (5%)</span>
                  <span>₹{tax}</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-[#2B211B] pt-2 border-t border-[#DDD5C8]">
                  <span>Total Amount</span>
                  <span>₹{total}</span>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  onClick={handleCheckoutDemo}
                  className="w-full py-3 px-4 bg-[#2B211B] hover:bg-[#181614] text-[#F6F2EA] rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Place Order (Client Demo)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-center text-[10px] text-[#7A7571]">
                  Demo Mode — For pitch demonstration only
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
