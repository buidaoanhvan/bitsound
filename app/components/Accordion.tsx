"use client";
import { useState } from "react";

interface AccordionProps {
  id: number;
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

export default function Accordion({
  id,
  title,
  content,
  isOpen,
  onToggle,
}: AccordionProps) {
  return (
    <div className="w-full mb-4 bg-gray-100 p-4 rounded-2xl">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => onToggle(id)}
      >
        <div className="FAQ">
          <h3 className="font-bold">{title}</h3>
        </div>
        <span
          className={`text-xl transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? "-" : "+"}
        </span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="mt-2 rounded-lg">{content}</p>
      </div>
    </div>
  );
}