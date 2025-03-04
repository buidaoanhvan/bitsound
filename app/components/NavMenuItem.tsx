import React from "react";

interface Items {
  title: string;
  href: string;
  keyhash: string;
  type: number;
  active: boolean;
}

interface NavMenuItemProps {
  items: Items[];
}

const NavMenuItem: React.FC<NavMenuItemProps> = ({ items }) => {
  return (
    <div className="flex flex-row items-center">
      {items.map((item) => {
        if (item.type === 1) {
          return (
            <a
              key={item.keyhash}
              className={`text-base ml-4 cursor-pointer relative ${
                item.active
                  ? "text-[#17425b] font-bold after:content-[''] after:block after:w-[32px] after:h-[3px] after:bg-[#3face1] after:absolute after:rounded-2xl after:translate-x-[-50%] after:start-[50%]"
                  : "text-[#5c737e]"
              } hover:text-[#17425b] hidden lg:block`}
            >
              {item.title}
            </a>
          );
        }
        if (item.type === 2) {
          return (
            <a
              key={item.keyhash}
              className={`font-bold text-base bg-[#3face1] ml-4 text-white px-4 py-2 rounded-4xl cursor-pointer`}
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
