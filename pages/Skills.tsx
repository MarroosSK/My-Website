"use client";

import { skillsData } from "@/data/skills";

export default function Skills() {
  const renderSkills = (skills: string[]) =>
    skills.map((skill) => (
      <span
        key={skill}
        className="px-4 py-2 bg-[#d6d6d6] dark:bg-[#222] 
                   text-[#161616] dark:text-gray-200 
                   rounded-full text-base font-medium shadow-md 
                   border border-transparent dark:border-[#333] 
                   hover:scale-105 hover:bg-[#cfcfcf] dark:hover:bg-[#333] 
                   hover:border-[#be29ec] dark:hover:border-[#be29ec] 
                   hover:text-[#be29ec] transition-all duration-300"
      >
        {skill}
      </span>
    ));

  return (
    <section className="relative w-full min-h-screen font-inter flex flex-col items-center justify-center overflow-hidden px-6 sm:px-10 py-20 pb-40">
      {/* Section title */}
      <h2 className="text-5xl sm:text-6xl font-extrabold text-[#454545] dark:text-[#E4E4E4] mb-4 text-center z-10 relative">
        {skillsData.title}
      </h2>

      {/* Section description */}
      <p className="text-lg sm:text-xl text-[#454545]/70 dark:text-gray-400 mb-12 text-center max-w-[800px]">
        {skillsData.description}
      </p>

      {/* Skills grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-[1100px] w-full">
        {/* Left column */}
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-[#454545] dark:text-[#E4E4E4] mb-3">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-3">
              {renderSkills(skillsData.categories.frontend)}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#454545] dark:text-[#E4E4E4] mb-3">
              State & Data
            </h3>
            <div className="flex flex-wrap gap-3">
              {renderSkills(skillsData.categories.stateAndData)}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-[#454545] dark:text-[#E4E4E4] mb-3">
              Backend & Database
            </h3>
            <div className="flex flex-wrap gap-3">
              {renderSkills(skillsData.categories.backendAndDatabase)}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#454545] dark:text-[#E4E4E4] mb-3">
              Testing & Authentication
            </h3>
            <div className="flex flex-wrap gap-3">
              {renderSkills(skillsData.categories.testingAndAuth)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
