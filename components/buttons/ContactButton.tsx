"use client";

export default function ContactButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
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
      {label}
    </a>
  );
}
