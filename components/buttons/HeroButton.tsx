"use client";

import { ReactNode } from "react";

interface HeroButtonProps {
  onClick: () => void;
  label: string;
  icon?: ReactNode;
  className?: string;
}

export default function HeroButton({
  onClick,
  label,
  icon,
  className = "",
}: HeroButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer flex items-center gap-2 px-6 py-3 rounded-full 
                  bg-[#d6d6d6] dark:bg-[#222] text-[#161616] dark:text-gray-200 
                  font-medium text-lg shadow-md border border-transparent dark:border-[#333] 
                  hover:scale-105 hover:bg-[#cfcfcf] dark:hover:bg-[#333] 
                  hover:border-[#be29ec] dark:hover:border-[#be29ec] 
                  hover:text-[#be29ec] transition-all duration-300 w-max mt-3 sm:mt-4 lg:mt-4 pointer-events-auto
                  ${className}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
