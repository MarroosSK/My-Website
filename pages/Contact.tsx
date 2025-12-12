"use client";

import { contactData } from "@/data/contact";
import ContactButton from "../components/buttons/ContactButton";

export default function Contact() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 py-20">
      <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 text-[#454545] dark:text-[#E4E4E4] text-center">
        {contactData.heading}
      </h2>

      <p className="text-[#454545]/70 dark:text-gray-400 mb-16 text-center max-w-[700px] text-lg sm:text-xl leading-relaxed">
        {contactData.description}
      </p>

      <div className="flex flex-wrap gap-6 justify-center">
        {contactData.buttons.map((btn) => (
          <ContactButton key={btn.href} href={btn.href} label={btn.label} />
        ))}
      </div>
    </section>
  );
}
