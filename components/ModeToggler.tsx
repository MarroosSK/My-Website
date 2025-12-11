"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-full 
                 bg-[#d6d6d6] dark:bg-[#222] 
                 text-[#161616] dark:text-gray-200 
                 border border-transparent dark:border-[#333] 
                 hover:bg-[#cfcfcf] dark:hover:bg-[#333] 
                 hover:border-[#be29ec] hover:text-[#be29ec] 
                 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <Sun
        className={`h-5 w-5 transition-all ${
          theme === "dark" ? "scale-0 rotate-90" : "scale-100 rotate-0"
        }`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-all ${
          theme === "dark" ? "scale-100 rotate-0" : "scale-0 -rotate-90"
        }`}
      />
    </button>
  );
}
