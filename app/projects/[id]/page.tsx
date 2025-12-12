"use client";

import ProjectDetailClient from "@/pages/ProjectDetails";
import { projects } from "@/data/projects";
import React, { use } from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  // React 18+ use() unwrapping Promise
  const { id } = use(params);

  const project = projects.find((p) => p.id.toLowerCase() === id.toLowerCase());

  if (!project) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center text-[#454545] dark:text-[#E4E4E4] bg-[#E4E4E4] dark:bg-[#161616]">
        <p>Project not found.</p>
      </div>
    );
  }

  return <ProjectDetailClient project={project} />;
}
