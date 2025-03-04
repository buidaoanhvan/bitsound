"use client";

import { useState } from "react";
import Accordion from "./Accordion";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const items = [
    {
      id: 1,
      title: "Loa BitSound là gì?",
      content:
        "Loa BitSound là thiết bị phát âm thanh thông báo thanh toán QR.",
    },
    {
      id: 2,
      title: "Cách thức hoạt động?",
      content:
        "Loa sẽ tự động đọc số tiền sau khi khách hàng thanh toán thành công.",
    },
    {
      id: 3,
      title: "Giá sản phẩm?",
      content: "Giá sản phẩm vui lòng liên hệ bộ phận hỗ trợ.",
    },
  ];

  return (
    <div className="mx-auto z-10">
      {items.map((item) => (
        <Accordion
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          isOpen={openId === item.id}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}
