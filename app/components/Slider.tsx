"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function SliderComponent() {
  const settings = {
    infinite: true, // Chạy vòng lặp
    speed: 10000, // Thời gian chạy 1 vòng (ms)
    slidesToShow: 7, // Số lượng hiển thị
    autoplay: true, // Tự động chạy
    autoplaySpeed: 0, // Để 0 để không dừng lại
    cssEase: "linear", // Làm mượt liên tục
    arrows: false, // Ẩn nút điều hướng
    pauseOnHover: false, // Không dừng khi hover
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="overflow-hidden">
      <Image
        src="/img/image copy 3.png"
        alt="1"
        width={250}
        height={250}
        className="object-cover px-1 h-[25vw] min-h-[250px]" // Cắt hình và bo góc
      />
      <div>
        <Image
          src="/img/image copy 3.png"
          alt="1"
          width={250}
          height={250}
          className="object-cover px-1 w-full h-[12.2vw] min-h-[121px] mb-2" // Cắt hình và bo góc
        />
        <Image
          src="/img/image copy 3.png"
          alt="1"
          width={250}
          height={250}
          className="object-cover px-1 w-full h-[12.2vw] min-h-[121px]" // Cắt hình và bo góc
        />
      </div>
      <Image
        src="/img/image copy 3.png"
        alt="1"
        width={250}
        height={250}
        className="object-cover px-1 h-[25vw] min-h-[250px]" // Cắt hình và bo góc
      />
      <div>
        <Image
          src="/img/image copy 3.png"
          alt="1"
          width={250}
          height={250}
          className="object-cover px-1 w-full h-[12.2vw] min-h-[121px] mb-2" // Cắt hình và bo góc
        />
        <Image
          src="/img/image copy 3.png"
          alt="1"
          width={250}
          height={250}
          className="object-cover px-1 w-full h-[12.2vw] min-h-[121px]" // Cắt hình và bo góc
        />
      </div>
      <Image
        src="/img/image copy 3.png"
        alt="1"
        width={250}
        height={250}
        className="object-cover px-1 h-[25vw] min-h-[250px]" // Cắt hình và bo góc
      />
      <div>
        <Image
          src="/img/image copy 3.png"
          alt="1"
          width={250}
          height={250}
          className="object-cover px-1 w-full h-[12.2vw] min-h-[121px] mb-2" // Cắt hình và bo góc
        />
        <Image
          src="/img/image copy 3.png"
          alt="1"
          width={250}
          height={250}
          className="object-cover px-1 w-full h-[12.2vw] min-h-[121px]" // Cắt hình và bo góc
        />
      </div>
      <Image
        src="/img/image copy 3.png"
        alt="1"
        width={250}
        height={250}
        className="object-cover px-1 h-[25vw] min-h-[250px]" // Cắt hình và bo góc
      />
    </Slider>
  );
}
