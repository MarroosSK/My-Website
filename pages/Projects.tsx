"use client";

import Image from "next/image";
import Link from "next/link";
import { projects, projectsSectionText } from "@/data/projects";

export default function Projects() {
  return (
    <section className="relative w-full min-h-screen font-inter flex flex-col items-center justify-center px-6 sm:px-10 py-20">
      {/* Nadpis a podnadpis */}
      <div className="w-full max-w-[1200px] mx-auto text-center mb-16">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-[#454545] dark:text-[#E4E4E4]">
          {projectsSectionText.title}
        </h2>
        <p className="text-[#454545]/70 dark:text-gray-400 mt-4 text-lg sm:text-xl max-w-[800px] mx-auto">
          {projectsSectionText.description}
        </p>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px]">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="group relative w-full overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative w-full h-64 sm:h-72 lg:h-80">
              {project.preview && (
                <Image
                  src={project.preview}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}

              {/* Názov / badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="bg-black/80 text-white px-4 py-1 rounded-full font-semibold text-sm sm:text-base lg:text-lg">
                  {project.title}
                </span>

                {/* Work in Progress badge, ak github link je "#" */}
                {project.link.github === "#" && (
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold text-xs sm:text-sm">
                    Work in Progress
                  </span>
                )}
              </div>

              {/* Hover overlay s popisom */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                <p className="text-white text-sm sm:text-base line-clamp-4">
                  {project.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
