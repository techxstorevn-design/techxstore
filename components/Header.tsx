
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#EE4D2D] rounded-lg flex items-center justify-center text-white font-bold text-xl italic shadow-lg shadow-orange-200">
            R
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Rực Cháy <span className="text-[#EE4D2D]">Store</span>
          </span>
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <a href="#catalog" className="hover:text-[#EE4D2D] transition-colors">Sản phẩm</a>
          <a href="#why-us" className="hover:text-[#EE4D2D] transition-colors">Lý do chọn chúng tôi</a>
        </nav>
        <div className="flex items-center">
           <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-[#EE4D2D]">
             <span className="w-2 h-2 mr-1.5 bg-[#EE4D2D] rounded-full animate-pulse"></span>
             Hỗ trợ: 0973551168
           </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
