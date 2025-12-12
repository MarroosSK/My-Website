"use client";

import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";

export default function About() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);

  const currentTheme =
    theme === "system" ? systemTheme ?? "light" : theme ?? "light";

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
    // Odložené nastavenie, aby sa predišlo varovaniu
    const frame = requestAnimationFrame(() => setMounted(true));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (currentTheme === "dark" && riveDark) {
              riveDark.play();
            } else if (currentTheme === "light" && riveLight) {
              riveLight.play();
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      cancelAnimationFrame(frame);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [currentTheme, riveLight, riveDark]);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen font-inter flex flex-col lg:flex-row items-center lg:items-start px-6 sm:px-10 lg:px-24 pt-20 lg:pt-32 gap-10 lg:gap-0"
    >
      {/* Logo div */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
        <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[600px] xl:max-w-[700px] aspect-square">
          {mounted ? (
            currentTheme === "dark" ? (
              <RiveDark className="w-full h-full" />
            ) : (
              <RiveLight className="w-full h-full" />
            )
          ) : (
            <div className="w-full h-full bg-transparent" />
          )}
        </div>
      </div>

      {/* Text div */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left max-w-[700px] mx-auto lg:mx-0">
        <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 text-[#454545] dark:text-[#E4E4E4]">
          About Me
        </h2>
        <p className="text-lg sm:text-xl text-[#454545]/70 dark:text-gray-400 leading-relaxed mb-4">
          Hello! I&apos;m Maroš from Vranov nad Topľou, Slovakia. I&apos;m a
          self-taught React developer motivated to create applications that help
          people in their everyday life.
        </p>
        <p className="text-lg sm:text-xl text-[#454545]/70 dark:text-gray-400 leading-relaxed mb-4">
          I enjoy working with{" "}
          <strong className="text-[#7a1dbb] dark:text-[#d27bff]">
            React (Next.js), Tailwind.css, and TypeScript
          </strong>
          . I am also able to create full-stack applications using Next.js, and
          I can build simple backend servers with Express.js when needed.
        </p>
        <p className="text-lg sm:text-xl text-[#454545]/70 dark:text-gray-400 leading-relaxed">
          This portfolio highlights some of the projects I&apos;ve been working
          on and shows my progress as I grow as a developer.
        </p>
        <a
          href="/files/cv_Maros_Chmel.pdf"
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
