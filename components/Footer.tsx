"use client";

export default function Footer({ show = true }: { show?: boolean }) {
  if (!show) return null;

  return (
    <footer className="w-full bg-[#E4E4E4] dark:bg-[#161616] py-6 flex flex-col items-center justify-center">
      <p className="text-sm text-[#454545]/70 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Maroš. All rights reserved.
      </p>
    </footer>
  );
}
