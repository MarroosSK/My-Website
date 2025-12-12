"use client";

import HeroButton from "@/components/buttons/HeroButton";
import { heroData } from "@/data/hero";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import { ChevronDown, Folder } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

export default function Hero() {
  const { theme } = useTheme();

  const currentTheme = theme ?? "dark";

  const { RiveComponent: BackgroundRive } = useRive({
    src: "/hero1.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  const { RiveComponent: RiveLight } = useRive({
    src: "/menoglitch.riv",
    autoplay: true,
    layout: new Layout({ fit: Fit.Contain, alignment: Alignment.TopLeft }),
  });

  const { RiveComponent: RiveDark } = useRive({
    src: "/menoglitch2.riv",
    autoplay: true,
    layout: new Layout({ fit: Fit.Contain, alignment: Alignment.TopLeft }),
  });

  const scrollToNext = () =>
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });

  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="relative w-screen h-screen overflow-hidden font-inter">
      {/* Background animation */}
      <BackgroundRive className="absolute top-0 left-0 w-full h-full scale-[1.05] z-0" />

      {/* Foreground content */}
      <div className="relative z-10 w-full h-full flex items-center justify-start pointer-events-none">
        <div
          className="relative ml-6 w-[90vw] max-w-[500px] sm:ml-12 sm:w-[80vw] sm:max-w-[600px] lg:ml-[10vw] lg:w-[70vw] lg:max-w-[1400px] h-auto lg:h-[35vh] 
                     flex flex-col justify-center gap-4 sm:gap-6 lg:gap-8 pt-10 sm:pt-10 lg:pt-0"
        >
          <h2 className="text-xl sm:text-2xl lg:text-[1.75rem] font-light text-[#454545] dark:text-[#E4E4E4] opacity-90 pl-0 sm:pl-4 lg:pl-6">
            {heroData.greeting}
          </h2>

          {/* Rive animácia podľa témy */}
          <div
            key={currentTheme}
            className="w-full h-[140px] sm:h-[180px] md:h-[220px]"
          >
            {currentTheme === "dark" ? (
              <RiveDark className="w-full h-full lg:h-[220px]" />
            ) : (
              <RiveLight className="w-full h-full lg:h-[220px]" />
            )}
          </div>

          <div className="flex flex-col gap-2 sm:gap-3 pl-0 sm:pl-4 lg:pl-6">
            <p className="text-xl sm:text-2xl lg:text-[1.7rem] font-extrabold text-[#454545] dark:text-[#E4E4E4]">
              {heroData.role}
            </p>

            <p className="text-sm sm:text-base lg:text-[1.2rem] font-light text-[#454545] dark:text-[#E4E4E4] flex flex-wrap items-center gap-1">
              {heroData.skills.map((skill, idx) => (
                <React.Fragment key={skill}>
                  <span>{skill}</span>
                  {idx < heroData.skills.length - 1 && (
                    <span className="text-[#be29ec]">•</span>
                  )}
                </React.Fragment>
              ))}
            </p>

            {/* View Projects button */}
            <HeroButton
              onClick={scrollToProjects}
              icon={<Folder className="w-[18px] h-[18px] sm:w-5 sm:h-5" />}
              label="View Projects"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 right-6 sm:bottom-10 sm:right-7 lg:bottom-12 lg:right-8 z-20 
                   pointer-events-auto flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 
                   rounded-full bg-[#454545] dark:bg-[#E4E4E4] hover:scale-110 transition-transform duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown
          className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#E4E4E4] dark:text-[#161616] transition-colors"
          strokeWidth={2}
        />
      </button>
    </div>
  );
}
