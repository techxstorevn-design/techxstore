
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import { CATEGORIES, PRODUCTS } from './data';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />

        {/* Catalog Section */}
        <section id="catalog" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Danh mục deal hot</h2>
                <p className="text-gray-500">Sản phẩm chất lượng cao, giá thành hợp lý.</p>
              </div>
              
              {/* Category Filter */}
              <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 space-x-2 scrollbar-hide no-scrollbar">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                      activeCategory === cat.id
                        ? 'bg-[#EE4D2D] text-white shadow-md shadow-orange-100'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <span>{cat.icon}</span>
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Chưa có sản phẩm nào</h3>
                <p className="text-gray-500">Hãy thử chọn danh mục khác nhé!</p>
              </div>
            )}
            
            {/* View More Placeholder */}
            {filteredProducts.length > 0 && (
              <div className="mt-16 text-center">
                <button className="px-8 py-3 rounded-xl border-2 border-gray-100 text-gray-500 font-bold hover:border-[#EE4D2D] hover:text-[#EE4D2D] transition-all">
                  Tải thêm deal mới
                </button>
              </div>
            )}
          </div>
        </section>

        <WhyUs />
      </main>

      <Footer />
      
      {/* Scroll to top button - Hidden by default, simple implementation */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 p-3 bg-[#EE4D2D] text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all md:hidden"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default App;
