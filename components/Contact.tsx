"use client";

import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 py-20">
      {/* Nadpis */}
      <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 text-[#454545] dark:text-[#E4E4E4] text-center">
        Get in Touch
      </h2>

      {/* Podnadpis / Popis */}
      <p className="text-[#454545]/70 dark:text-gray-400 mb-16 text-center max-w-[700px] text-lg sm:text-xl leading-relaxed">
        I’m open to new opportunities and collaborations. Feel free to reach out
        via email or connect on LinkedIn and GitHub.
      </p>

      {/* Kontakty */}
      <div className="flex flex-wrap gap-6 justify-center">
        {/* Email */}
        <a
          href="mailto:maros1chmel@gmail.com"
          className="flex items-center gap-3 px-6 py-3 
                     bg-[#d6d6d6] dark:bg-[#222] 
                     text-[#161616] dark:text-gray-200 
                     rounded-full text-lg font-medium shadow-md 
                     border border-transparent dark:border-[#333]
                     hover:scale-105 
                     hover:bg-[#cfcfcf] dark:hover:bg-[#333] 
                     hover:border-[#be29ec] dark:hover:border-[#be29ec]
                     hover:text-[#be29ec] transition-all duration-300"
        >
          <Mail size={24} /> Email
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/maro%C5%A1-chme%C4%BE-883b21280/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 
                     bg-[#d6d6d6] dark:bg-[#222] 
                     text-[#161616] dark:text-gray-200 
                     rounded-full text-lg font-medium shadow-md 
                     border border-transparent dark:border-[#333]
                     hover:scale-105 
                     hover:bg-[#cfcfcf] dark:hover:bg-[#333] 
                     hover:border-[#be29ec] dark:hover:border-[#be29ec]
                     hover:text-[#be29ec] transition-all duration-300"
        >
          <Linkedin size={24} /> LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/MarroosSK"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 
                     bg-[#d6d6d6] dark:bg-[#222] 
                     text-[#161616] dark:text-gray-200 
                     rounded-full text-lg font-medium shadow-md 
                     border border-transparent dark:border-[#333]
                     hover:scale-105 
                     hover:bg-[#cfcfcf] dark:hover:bg-[#333] 
                     hover:border-[#be29ec] dark:hover:border-[#be29ec]
                     hover:text-[#be29ec] transition-all duration-300"
        >
          <Github size={24} /> GitHub
        </a>
      </div>
    </section>
  );
}
