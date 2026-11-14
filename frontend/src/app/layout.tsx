import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tattoo studio by JS",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  description: "Jernej Sirc s.p.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-[160px] scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
