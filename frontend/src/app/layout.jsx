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

export const metadata = {
  title: "Tattoo studio by JS",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/apple-touch-icon.png",
  },
  description: "Tattoo studio by JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiase pt-[160px] scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
