import React, { useState, useEffect } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ItemDetailModal } from './components/ItemDetailModal';
import { Toast } from './components/Toast';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { CoffeePage } from './pages/CoffeePage';
import { AboutPage } from './pages/AboutPage';
import { VisitPage } from './pages/VisitPage';
import { OrderPage } from './pages/OrderPage';

const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '');
    return ['home', 'menu', 'coffee', 'about', 'visit', 'order'].includes(hash) ? hash : 'home';
  });

  const { selectedItemForModal, setSelectedItemForModal } = useCart();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'menu', 'coffee', 'about', 'visit', 'order'].includes(hash)) {
        setActiveTab(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = tab;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F2EA] text-[#2B211B]">
      {/* Top Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activeTab === 'home' && <HomePage setActiveTab={handleTabChange} />}
        {activeTab === 'menu' && <MenuPage />}
        {activeTab === 'coffee' && <CoffeePage />}
        {activeTab === 'about' && <AboutPage setActiveTab={handleTabChange} />}
        {activeTab === 'visit' && <VisitPage />}
        {activeTab === 'order' && <OrderPage />}
      </main>

      {/* Customization Modal */}
      {selectedItemForModal && (
        <ItemDetailModal
          item={selectedItemForModal}
          onClose={() => setSelectedItemForModal(null)}
        />
      )}

      {/* Slide-in Order Drawer */}
      <CartDrawer />

      {/* Floating Notifications */}
      <Toast />

      {/* Footer */}
      <Footer setActiveTab={handleTabChange} />
    </div>
  );
};

export function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
