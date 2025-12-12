"use client";

import { aboutContent } from "@/data/about";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

export default function About() {
  const { theme } = useTheme();
  const sectionRef = useRef(null);

  const currentTheme = theme ?? "dark";

  const { rive: riveLight, RiveComponent: RiveLight } = useRive({
    src: "/idk7.riv",
    autoplay: false,
    layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
  });

  const { rive: riveDark, RiveComponent: RiveDark } = useRive({
    src: "/idk6.riv",
    autoplay: false,
    layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
  });

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        (currentTheme === "dark" ? riveDark : riveLight)?.play();
        observer.unobserve(node);
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [currentTheme, riveLight, riveDark]);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen font-inter flex flex-col lg:flex-row items-center lg:items-start px-6 sm:px-10 lg:px-24 pt-20 lg:pt-32 gap-10 lg:gap-0"
    >
      {/* Logo div */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
        <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[600px] xl:max-w-[700px] aspect-square">
          {currentTheme === "dark" ? (
            <RiveDark className="w-full h-full" />
          ) : (
            <RiveLight className="w-full h-full" />
          )}
        </div>
      </div>

      {/* Text div */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left max-w-[700px] mx-auto lg:mx-0">
        <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 text-[#454545] dark:text-[#E4E4E4]">
          {aboutContent.heading}
        </h2>
        {aboutContent.paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-lg sm:text-xl text-[#454545]/70 dark:text-gray-400 leading-relaxed mb-4"
          >
            {p}
          </p>
        ))}
        <a
          href={aboutContent.resumeLink}
          download
          className="mt-6 inline-flex items-center gap-3 px-6 py-3 
                 bg-[#d6d6d6] dark:bg-[#222] 
                 text-[#161616] dark:text-gray-200 
                 rounded-full text-lg font-medium shadow-md 
                 border border-transparent dark:border-[#333]
                 hover:scale-105 
                 hover:bg-[#cfcfcf] dark:hover:bg-[#333] 
                 hover:border-[#be29ec] dark:hover:border-[#be29ec]
                 hover:text-[#be29ec] transition-all duration-300 w-fit mx-auto lg:mx-0"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
