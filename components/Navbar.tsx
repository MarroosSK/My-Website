"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ModeToggle } from "./buttons/ModeToggleButton";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const middle = window.scrollY + window.innerHeight / 2;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && middle >= el.offsetTop) {
          setActiveId(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop navbar */}
      <div className="fixed top-7 left-1/2 -translate-x-1/2 z-50 hidden sm:block">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className={`rounded-full px-6 py-4 flex items-center gap-4 shadow-lg ${
            scrolled
              ? "backdrop-blur-md bg-[#E4E4E4] dark:bg-[#161616]"
              : "bg-[#E4E4E4] dark:bg-[#161616]"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative text-[#454545] dark:text-[#E4E4E4] font-medium transition-colors px-3 py-1 rounded-full hover:text-[#be29ec] ${
                activeId === item.id ? "text-[#be29ec]" : ""
              }`}
            >
              {item.label}
              {activeId === item.id && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-1 bg-[#be29ec] rounded-full"
                  style={{ width: "100%" }}
                />
              )}
            </a>
          ))}

          <div className="ml-4">
            <ModeToggle />
          </div>
        </motion.nav>
      </div>

      {/* Mobile navbar */}
      <div className="fixed top-4 left-4 z-50 sm:hidden flex items-center justify-between w-[calc(100%-2rem)]">
        <ModeToggle />
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-full bg-[#E4E4E4] dark:bg-[#161616] shadow-md hover:shadow-lg transition-shadow"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile sheet */}
      {mobileOpen && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-[#E4E4E4] dark:bg-[#161616] flex flex-col items-center justify-center gap-8 z-40"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-semibold text-[#454545] dark:text-[#E4E4E4] hover:text-[#be29ec] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </>
  );
}
