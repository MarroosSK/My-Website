"use client";

export default function Footer({ show = true }: { show?: boolean }) {
  if (!show) return null;

  return (
    <footer className="w-full bg-[#E4E4E4] dark:bg-[#161616] py-6 flex flex-col items-center justify-center">
      <p className="text-sm text-[#454545]/70 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Maroš. All rights reserved.
      </p>
      <div className="flex gap-4 mt-2">
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#454545] dark:text-[#E4E4E4] hover:text-[#be29ec] transition-colors text-sm"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#454545] dark:text-[#E4E4E4] hover:text-[#be29ec] transition-colors text-sm"
        >
          LinkedIn
        </a>
        <a
          href="mailto:maros@example.com"
          className="text-[#454545] dark:text-[#E4E4E4] hover:text-[#be29ec] transition-colors text-sm"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
