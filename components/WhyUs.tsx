
import React from 'react';

const WhyUs: React.FC = () => {
  const benefits = [
    {
      title: "Chọn lọc deal thật",
      description: "Chúng tôi chỉ hiển thị những sản phẩm có mức giảm giá thực tế so với giá thị trường.",
      icon: (
        <svg className="w-6 h-6 text-[#EE4D2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Không tăng giá ảo",
      description: "Đảm bảo link dẫn trực tiếp đến shop uy tín, Mall chính hãng để tránh hàng giả hàng nhái.",
      icon: (
        <svg className="w-6 h-6 text-[#EE4D2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Cập nhật hằng ngày",
      description: "Đội ngũ săn deal làm việc 24/7 để mang đến những ưu đãi mới nhất và hời nhất cho bạn.",
      icon: (
        <svg className="w-6 h-6 text-[#EE4D2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Hỗ trợ mua sắm",
      description: "Giao diện tối ưu cho điện thoại, giúp bạn đặt hàng nhanh chóng chỉ với vài thao tác.",
      icon: (
        <svg className="w-6 h-6 text-[#EE4D2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Lý do nên mua qua website này</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Chúng tôi cam kết mang lại giá trị thực cho người tiêu dùng thông qua việc chọn lọc thông minh.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#EE4D2D]/20 transition-all">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
