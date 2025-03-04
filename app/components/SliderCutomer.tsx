"use client";

import React from "react";
import Slider from "react-slick";



export default function SliderCutomer() {
  const settings = {
    infinite: true, // Chạy vòng lặp
    slidesToShow: 3, // Số lượng hiển thị
    slidesToScroll: 1, // Số lượng chuyển khi click
    speed: 500, // Thời gian chạy 1 vòng (ms)
    arrows: true, // Ẩn nút điều hướng
    autoplay: true, // Tự động chạy
    cssEase: "ease-in-out", // Hiệu ứng mượt hơn
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="overflow-hidden p-6">
      <div className="px-2 flex flex-col cursor-pointer">
        <div className="justify-center p-4 bg-gray-100 rounded-2xl">
          <div className="flex items-center col-span-2 mb-3">
            <div className="w-15 h-15 rounded-full bg-white"></div>
            <p className="ml-3">
              <span className="font-bold">Nguyễn Thị Hồng</span>
              <br />
              <span className="text-xs">Chủ spa Hồng Hà</span>
            </p>
          </div>
          <p className="text-sm line-clamp-6">
            Khi biết đến Loa TingTing giúp thông báo giao dịch chuyển khoản qua
            QR, mình quyết định dùng thử ngay, và kết quả thật sự vượt ngoài
            mong đợi. Nhân viên spa của mình dễ dàng theo dõi các nguồn thu một
            cách chính xác. Mình hoàn toàn hài lòng và khuyến khích những cửa
            hàng spa khác cũng áp dụng giải pháp thông minh này.
          </p>
        </div>
      </div>
      <div className="px-2 flex flex-col cursor-pointer">
        <div className="justify-center p-4 bg-gray-100 rounded-2xl">
          <div className="flex items-center col-span-2 mb-3">
            <div className="w-15 h-15 rounded-full bg-white"></div>
            <p className="ml-3">
              <span className="font-bold">Nguyễn Thị Hồng</span>
              <br />
              <span className="text-xs">Chủ spa Hồng Hà</span>
            </p>
          </div>
          <p className="text-sm line-clamp-6">
            Khi biết đến Loa TingTing giúp thông báo giao dịch chuyển khoản qua
            QR, mình quyết định dùng thử ngay, và kết quả thật sự vượt ngoài
            mong đợi. Nhân viên spa của mình dễ dàng theo dõi các nguồn thu một
            cách chính xác. Mình hoàn toàn hài lòng và khuyến khích những cửa
            hàng spa khác cũng áp dụng giải pháp thông minh này.
          </p>
        </div>
      </div>
      <div className="px-2 flex flex-col cursor-pointer">
        <div className="justify-center p-4 bg-gray-100 rounded-2xl">
          <div className="flex items-center col-span-2 mb-3">
            <div className="w-15 h-15 rounded-full bg-white"></div>
            <p className="ml-3">
              <span className="font-bold">Nguyễn Thị Hồng</span>
              <br />
              <span className="text-xs">Chủ spa Hồng Hà</span>
            </p>
          </div>
          <p className="text-sm line-clamp-6">
            Khi biết đến Loa TingTing giúp thông báo giao dịch chuyển khoản qua
            QR, mình quyết định dùng thử ngay, và kết quả thật sự vượt ngoài
            mong đợi. Nhân viên spa của mình dễ dàng theo dõi các nguồn thu một
            cách chính xác. Mình hoàn toàn hài lòng và khuyến khích những cửa
            hàng spa khác cũng áp dụng giải pháp thông minh này.
          </p>
        </div>
      </div>
      <div className="px-2 flex flex-col cursor-pointer">
        <div className="justify-center p-4 bg-gray-100 rounded-2xl">
          <div className="flex items-center col-span-2 mb-3">
            <div className="w-15 h-15 rounded-full bg-white"></div>
            <p className="ml-3">
              <span className="font-bold">Nguyễn Thị Hồng</span>
              <br />
              <span className="text-xs">Chủ spa Hồng Hà</span>
            </p>
          </div>
          <p className="text-sm line-clamp-6">
            Khi biết đến Loa TingTing giúp thông báo giao dịch chuyển khoản qua
            QR, mình quyết định dùng thử ngay, và kết quả thật sự vượt ngoài
            mong đợi. Nhân viên spa của mình dễ dàng theo dõi các nguồn thu một
            cách chính xác. Mình hoàn toàn hài lòng và khuyến khích những cửa
            hàng spa khác cũng áp dụng giải pháp thông minh này.
          </p>
        </div>
      </div>
    </Slider>
  );
}
