"use client";

import usePocketBase from "@/hooks/usePocketBase";
import { preprocessRichText, svgIcon } from "@/lib/richTextUtils";
import GeneralContainer from "../blocks/GeneralContainer";
import usePocketBaseUrl from "@/hooks/usePocketBaseUrl";

export default function DarilniBoni() {
  const items = usePocketBase("darilni_boni");

  return (
    <div id="darilni-boni">
      <GeneralContainer>
        {items.map((item) => (
          <div
            key={item.id}
            className="relative isolate overflow-hidden bg-stone-950 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
          >
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle
                r={512}
                cx={512}
                cy={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#FF6F61" />
                  <stop offset={1} stopColor="#FF6F61" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {item.title}
              </h2>
              <div
                className="mt-6 text-pretty text-lg/8 text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: preprocessRichText(item.content, svgIcon),
                }}
              />
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#kontakt"
                  className="rounded-md bg-white py-3 px-8 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Kontaktiraj me
                </a>
                <a
                  href="/portfolio"
                  className="text-sm/6 font-semibold text-white"
                >
                  Moj portfolio <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                alt="App screenshot"
                src={`${usePocketBaseUrl()}/api/files/${item.collectionId}/${item.id}/${item.img}?thumb=1080x0`}
                width={1824}
                height={1080}
                className="absolute left-0 top-0 h-[30rem] w-full lg:w-[40rem] object-cover max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              />
            </div>
          </div>
        ))}
      </GeneralContainer>
    </div>
  );
}
