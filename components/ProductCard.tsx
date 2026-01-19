
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const getLabelStyles = (label: string) => {
    switch (label) {
      case 'Deal hot': return 'bg-red-500';
      case 'Bán chạy': return 'bg-orange-500';
      case 'Giảm sâu': return 'bg-purple-600';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          decoding="async"
          width="500"
          height="500"
        />
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider z-10 ${getLabelStyles(product.label)}`}>
          {product.label}
        </div>
        {/* Overlay hiệu ứng khi hover trên desktop */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      </div>

      {/* Content Container */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-3 h-10 group-hover:text-[#EE4D2D] transition-colors">
          {product.name}
        </h3>
        
        <div className="mt-auto">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
            <span className="text-xs font-bold text-[#EE4D2D] bg-orange-50 px-1.5 py-0.5 rounded">
              -{Math.round((1 - product.discountPrice / product.originalPrice) * 100)}%
            </span>
          </div>
          <div className="text-lg font-bold text-[#EE4D2D] mb-4">
            {formatPrice(product.discountPrice)}
          </div>
          
          <a 
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 bg-[#EE4D2D] hover:bg-[#d43f25] text-white text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95"
          >
            Mua Ngay
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
