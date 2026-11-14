"use client";
import usePocketBase from "@/hooks/usePocketBase";
import { fileUrl } from "@/lib/pocketbase";

import { Merriweather } from "next/font/google";
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Hero() {
  const items = usePocketBase("hero");
  return (
    <div className="mx-0 sm:mx-8 my-0 pb-10 relative isolate overflow-hidden h-[85vh]">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative h-full flex justify-center items-center"
        >
          {/* Background image */}
          <img
            src={fileUrl(item, item.hero_image, "2048x0")}
            alt="Hero Image"
            className="absolute inset-0 -z-20 size-full object-cover sm:rounded-3xl"
          />
          {/* Gray overlay */}
          <div className="absolute inset-0 bg-gray-900/60 -z-10 pointer-events-none sm:rounded-3xl"></div>

          {/* Content stays above overlay */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-0">
            <div className="mx-auto max-w-2xl py-20 sm:py-12 lg:py-12">
              <div className="text-center">
                <div className="mb-10 flex justify-center">
                  <div className="relative rounded-full px-3 py-1 text-sm md:text-base text-white ring-1 ring-white hover:ring-white">
                    Kontaktiraj me ali si zagotovi svoj termin{" "}
                    <a
                      href="#kontakt"
                      className="whitespace-nowrap font-semibold text-[#FF6F61]"
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                    </a>
                  </div>
                </div>
                <h1
                  className={`text-balance text-4xl sm:text-5xl lg:text-7xl font-semibold text-white md:tracking-[.02rem] md:leading-[6rem] ${merriweather.className}`}
                >
                  {item.heading1}
                  {/* {ebGaramond.className} */}
                </h1>
                <h1
                  className={`mb-10 text-balance text-4xl sm:text-5xl lg:text-7xl font-semibold text-white md:tracking-[.02rem] md:leading-[6rem] ${merriweather.className}`}
                >
                  {item.heading2}
                </h1>
                <div className="my-10 flex items-center justify-center gap-x-6">
                  <a
                    href="/portfolio"
                    className="rounded-md py-3 px-8 bg-[#FF6F61] text-md font-semibold text-white shadow-sm hover:bg-[#FF6F61] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#FF6F61]"
                  >
                    Portfolio
                  </a>
                  <a href="/nega" className="text-md font-semibold text-white">
                    Nega tattoja <span aria-hidden="true">→</span>
                  </a>
                </div>
                <div className="flex justify-center text-white font-light tracking-wide space-x-4">
                  <div className="relative text-xs sm:text-base pr-4 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-white">
                    {item.text1}
                  </div>
                  <div className="relative text-xs sm:text-base pr-4 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-white">
                    {item.text2}
                  </div>
                  <div className="text-xs sm:text-base">{item.text3}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
