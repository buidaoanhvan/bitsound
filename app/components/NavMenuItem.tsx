"use client";

import React, { useState, useEffect } from "react";

interface Items {
  title: string;
  href: string;
  keyhash: string;
  type: number;
}

interface NavMenuItemProps {
  items: Items[];
}

const NavMenuItem: React.FC<NavMenuItemProps> = ({ items }) => {
  const [active, setActive] = useState<string>("section1");

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  useEffect(() => {
    const sections = items
      .filter((item) => item.type === 1) // Chỉ theo dõi các mục type 1
      .map((item) => document.getElementById(item.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.9 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [items]);

  return (
    <div className="flex flex-row items-center">
      {items.map((item) => {
        if (item.type === 1) {
          return (
            <span
              key={item.keyhash}
              onClick={() => handleScroll(item.href)}
              className={`text-base ml-4 cursor-pointer relative ${
                active === item.href
                  ? "text-[#17425b] font-bold after:content-[''] after:block after:w-[32px] after:h-[3px] after:bg-[#3face1] after:absolute after:rounded-2xl after:translate-x-[-50%] after:start-[50%]"
                  : "text-[#5c737e]"
              } hover:text-[#17425b] hidden lg:block`}
            >
              {item.title}
            </span>
          );
        }
        if (item.type === 2) {
          return (
            <a
              key={item.keyhash}
              href={"#" + item.href}
              onClick={() => handleScroll(item.href)}
              className="font-bold text-base bg-[#3face1] ml-4 text-white px-4 py-2 rounded-4xl cursor-pointer"
            >
              {item.title}
            </a>
          );
        }
      })}
    </div>
  );
};

export default NavMenuItem;
