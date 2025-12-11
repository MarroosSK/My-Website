import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maroš Chmeľ",
  description:
    "Personal portfolio of a React / React Native / Next.js developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 🧩 Preload Rive animácií pre rýchlejšie načítanie */}
        <link
          rel="preload"
          href="/hero1.riv"
          as="fetch"
          type="application/octet-stream"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/menoglitch2.riv"
          as="fetch"
          type="application/octet-stream"
          crossOrigin="anonymous"
        />

        {/* ⚙️ Môžeš sem neskôr pridať aj favicon, manifest, meta tagy, atď. */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-[#E4E4E4] dark:bg-[#161616]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
