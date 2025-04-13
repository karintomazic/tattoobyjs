"use client";
import usePocketBase from "@/hooks/usePocketBase";

export default function Hero() {
  const items = usePocketBase("hero");
  return (
    <div className="rounded-xl mx-8 my-0 relative isolate overflow-hidden py-14">
      {items.map((item) => (
        <div key={item.id}>
          <img
            src={`http://localhost:${process.env.NEXT_PUBLIC_PB_LOCAL_PORT}/api/files/${item.collectionId}/${item.id}/${item.hero_image}`}
            alt="Hero Image"
            className="absolute inset-0 -z-10 size-full object-cover"
          ></img>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-12">
              <div className="text-center">
                <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                  {item.heading1}
                </h1>
                <h1 className="mb-10 text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                  {item.heading2}
                </h1>

                <div className="my-10 flex items-center justify-center gap-x-6">
                  <a
                    href="/portfolio"
                    className="rounded-md bg-[#FF6F61] px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-[#FF6F61] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6F61]"
                  >
                    Portfolio
                  </a>
                  <a href="/nega" className="text-md font-semibold text-white">
                    Nega tattoja <span aria-hidden="true">→</span>
                  </a>
                </div>

                <div className="flex justify-center text-white font-light tracking-wide space-x-4">
                  <div className="relative pr-4 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-white">
                    {item.text1}
                  </div>
                  <div className="relative pr-4 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-white">
                    {item.text2}
                  </div>
                  <div>{item.text3}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
