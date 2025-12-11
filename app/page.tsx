"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-[#E4E4E4] dark:bg-[#161616] flex flex-col w-full overflow-x-hidden scroll-smooth relative">
      <Navbar />

      {/* Hero sekcia */}
      <div id="hero" className="w-full h-screen relative">
        <Hero />
      </div>

      {/* About sekcia */}
      <div id="about" className="w-full min-h-screen relative">
        <About />

        {/* Ľavý horný blob v About */}
        <div
          className="absolute top-[-15rem] left-[-10rem] w-[35rem] h-[35rem] rounded-full 
          bg-black/40 dark:bg-white/5 blur-3xl z-0 pointer-events-none"
        />
      </div>

      {/* Skills sekcia */}
      <div id="skills" className="w-full min-h-screen relative">
        <Skills />
      </div>

      {/* Blob medzi About a Skills */}
      <div
        className="absolute top-1/2 right-[-10rem] w-[35rem] h-[35rem] rounded-full 
        bg-black/40 dark:bg-white/5 blur-3xl z-10 pointer-events-none"
      />

      {/* Projects sekcia */}
      <div id="projects" className="w-full min-h-screen relative">
        <Projects />
      </div>

      {/* Contact sekcia */}
      <div id="contact" className="w-full min-h-screen">
        <Contact />
      </div>
    </div>
  );
}
