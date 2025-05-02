"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "/#o-meni", label: "O meni" },
  { href: "/#nasveti", label: "Nasveti" },
  { href: "/#dodatni-napoki", label: "Dodatni napoki" },
  { href: "/#darilni-boni", label: "Darilni boni" },
  { href: "/#pogosta-vprasanja", label: "Pogosta vprašanja" },
  { href: "/#merch", label: "Merch" },
  { href: "/#kontakt", label: "Kontakt" },
];

const navLinks2 = [
  { href: "/nega", label: "Nega" },
  { href: "/kreme-za-nego", label: "Kreme za nego" },
  { href: "/portfolio", label: "Portfolio" },
];

function DesktopNav() {
  return (
    <div className="hidden lg:flex lg:gap-x-6">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-sm/6 font-semibold text-gray-900 border-transparent hover:border-[#FF6F61] transition-colors border-b-[2.5px]"
        >
          {link.label}
        </a>
      ))}
      <div className="h-8 w-px bg-gray-300 mx-4" />

      {navLinks2.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-sm/6 font-semibold text-gray-900 border-transparent hover:border-[#FF6F61] transition-colors border-b-[2.5px]"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

function MobileNav({ isOpen, toggleMenu }) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden" role="dialog" aria-modal="true">
      {/* Overlay: clicking closes the menu */}
      <div className="fixed inset-0 z-10" onClick={toggleMenu}></div>
      <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-8 py-8 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-24 w-auto" src="logo.svg" alt="" />
          </a>
          {/* Close button */}
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={toggleMenu}
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="w-[50px] h-[50px] size-6 lg:size-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-[1.5rem] font-semibold text-gray-900 hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  {link.label}
                </a>
              ))}
                    <div className="w-full p-0 m-0 mb-4 mt-4 h-px bg-gray-300" />

              {navLinks2.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-[1.5rem] font-semibold text-gray-900 hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const toggleMenu = () => setIsOpen((open) => !open);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    // Run on mount in case page is not at top
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          !isAtTop ? "shadow-md" : ""
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between ${
            !isAtTop ? "p-4 px-8" : "p-8 lg:px-8"
          }`}
          aria-label="Global"
        >
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Tattoo by js</span>
            <img
              className={`w-auto transition-height duration-200 ${
                !isAtTop ? "h-14" : "h-24"
              }`}
              src="logo.svg"
              alt=""
            />
          </a>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#000]"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`size-6 lg:size-6 ${
                  !isAtTop ? "w-[25px] h-[25px]" : "w-[50px] h-[50px]"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <DesktopNav />
        </nav>
        <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} />
      </header>
    </>
  );
}
