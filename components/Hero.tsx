
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-orange-50 text-[#EE4D2D] border border-orange-100 font-semibold text-xs uppercase tracking-wider">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Sản Phẩm Chính Hãng - Giá Rực Cháy
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Deal ngon mỗi ngày – <br/>
          <span className="text-[#EE4D2D]">Mua đúng giá, đúng chỗ</span>
        </h1>
        <p className="max-w-2xl text-lg text-gray-500 mb-10 leading-relaxed">
          Tại <strong className="text-gray-900">Rực Cháy Store</strong>, chúng tôi săn tìm và chọn lọc những mã giảm giá tốt nhất từ các sàn TMĐT. 
          Tiết kiệm thời gian, tối ưu ví tiền của bạn chỉ trong một cú click.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="#catalog"
            className="px-8 py-4 bg-[#EE4D2D] hover:bg-[#d43f25] text-white font-bold rounded-xl shadow-lg shadow-orange-200 transition-all transform hover:-translate-y-1 text-center"
          >
            Xem deal hot hôm nay
          </a>
          <a 
            href="tel:0973551168"
            className="px-8 py-4 bg-white border-2 border-gray-100 hover:border-[#EE4D2D] hover:text-[#EE4D2D] text-gray-600 font-bold rounded-xl transition-all text-center flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            0973551168
          </a>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-16 mt-32 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-16 mb-32 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50"></div>
    </section>
  );
};

export default Hero;
