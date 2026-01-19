
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-[#EE4D2D] rounded-lg flex items-center justify-center text-white font-bold text-xl italic">
                R
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                Rực Cháy <span className="text-[#EE4D2D]">Store</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Rực Cháy Store chuyên chia sẻ các sản phẩm chất lượng, được chọn lọc kỹ lưỡng với giá ưu đãi cực tốt từ các sàn thương mại điện tử uy tín nhất.
            </p>
            <div className="flex space-x-4">
              <a href="https://shopee.vn/" className="text-gray-400 hover:text-[#EE4D2D] transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="https://shopee.vn/" className="text-gray-400 hover:text-[#EE4D2D] transition-colors">
                <span className="sr-only">TikTok</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Chính sách</h3>
            <ul className="space-y-4">
              <li><a href="https://shopee.vn/" className="text-sm text-gray-500 hover:text-[#EE4D2D]">Về Rực Cháy Store</a></li>
              <li><a href="https://shopee.vn/" className="text-sm text-gray-500 hover:text-[#EE4D2D]">Quy định bảo mật</a></li>
              <li><a href="https://shopee.vn/" className="text-sm text-gray-500 hover:text-[#EE4D2D]">Hướng dẫn mua hàng</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Liên hệ</h3>
            <p className="text-sm text-gray-500 mb-2">Hỗ trợ nhanh qua Hotline hoặc Zalo.</p>
            <p className="text-xl font-bold text-[#EE4D2D] mb-1">0973551168</p>
            <p className="text-sm text-gray-500">Thứ 2 - CN (8:00 - 22:00)</p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-xs text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Rực Cháy Store. All rights reserved.
          </p>
          <div className="bg-blue-50 px-4 py-2 rounded-lg inline-flex items-center">
             <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
               <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
             </svg>
             <p className="text-[10px] text-blue-700 font-medium">
               Website không thu thập dữ liệu người dùng & không yêu cầu đăng nhập.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
