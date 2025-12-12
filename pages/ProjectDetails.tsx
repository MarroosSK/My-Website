"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Play, ArrowLeft, X } from "lucide-react";
import Image from "next/image";
import { Project } from "@/data/projects";

export default function ProjectDetailClient({ project }: { project: Project }) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!project) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center text-[#454545] dark:text-[#E4E4E4] bg-[#E4E4E4] dark:bg-[#161616]">
        <p>Project not found.</p>
      </div>
    );
  }

  return (
    <section className="relative w-full min-h-screen font-inter px-4 sm:px-8 py-16 overflow-x-hidden">
      {/* Back button */}
      <button
        onClick={() => router.push("/#projects")}
        className="flex items-center gap-2 text-[#454545]/70 dark:text-gray-400 hover:text-[#be29ec] transition-colors mb-8 cursor-pointer"
      >
        <ArrowLeft size={20} /> Back
      </button>

      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left: Video/Image + Links */}
        <div className="flex flex-col gap-4 flex-[2]">
          {project.link?.videoDemo ? (
            <div className="relative w-full h-[500px] sm:h-[600px] bg-black rounded-2xl overflow-hidden shadow-lg cursor-pointer group">
              <video
                ref={videoRef}
                src={project.link.videoDemo}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setShowModal(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Play size={64} className="text-white drop-shadow-lg" />
              </button>
            </div>
          ) : (
            <div className="relative w-full h-[500px] sm:h-[600px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
              {project.preview && (
                <Image
                  src={project.preview}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                />
              )}
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-4 justify-start mt-2">
            {project.link?.github && project.link.github !== "#" && (
              <a
                href={project.link.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#d6d6d6] dark:bg-[#222] text-[#161616] dark:text-gray-200 rounded-full font-semibold shadow-md border border-transparent dark:border-[#333] hover:scale-105 hover:bg-[#cfcfcf] dark:hover:bg-[#333] hover:border-[#be29ec] dark:hover:border-[#be29ec] hover:text-[#be29ec] transition-all duration-300"
              >
                View on GitHub
              </a>
            )}
            {project.link?.playStore && (
              <a
                href={project.link.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#d6d6d6] dark:bg-[#222] text-[#161616] dark:text-gray-200 rounded-full font-semibold shadow-md border border-transparent dark:border-[#333] hover:scale-105 hover:bg-[#cfcfcf] dark:hover:bg-[#333] hover:border-[#be29ec] dark:hover:border-[#be29ec] hover:text-[#be29ec] transition-all duration-300"
              >
                View on Play Store
              </a>
            )}
          </div>
        </div>

        {/* Right: Title, description, stack, features */}
        <div className="flex flex-col gap-6 flex-[1]">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-[#454545] dark:text-[#E4E4E4]">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-[#454545]/70 dark:text-gray-400 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#454545] dark:text-[#E4E4E4]">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#d6d6d6] dark:bg-[#222] text-[#161616] dark:text-gray-200 rounded-full text-sm sm:text-base font-medium shadow-md border border-transparent dark:border-[#333] hover:scale-105 hover:bg-[#cfcfcf] dark:hover:bg-[#333] hover:border-[#be29ec] dark:hover:border-[#be29ec] hover:text-[#be29ec] transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          {project.features && (
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#454545] dark:text-[#E4E4E4]">
                Key Features
              </h2>
              <ul className="list-disc list-inside text-[#454545]/70 dark:text-gray-400 space-y-2 sm:space-y-3">
                {project.features.map((feat, i) => (
                  <li key={i} className="text-sm sm:text-base">
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Modal Video */}
      {showModal && project.link?.videoDemo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative w-full h-full max-w-[900px] max-h-[90vh]">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors z-50"
            >
              <X size={24} />
            </button>
            <video
              src={project.link.videoDemo}
              className="w-full h-full object-contain rounded-2xl"
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </section>
  );
}
