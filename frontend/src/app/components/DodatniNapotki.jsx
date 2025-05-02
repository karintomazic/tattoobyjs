"use client";
import usePocketBase from "@/hooks/usePocketBase";
import { preprocessRichText, svgIcon } from "@/lib/richTextUtils";
import GeneralContainer from "../blocks/GeneralContainer";
import usePocketBaseUrl from "@/hooks/usePocketBaseUrl";

export default function DodatniNapotki() {
  const items = usePocketBase("dodatni_napotki");

  return (
    <div
      className="relative isolate overflow-hidden lg:overflow-visible lg:px-0"
      id="dodatni-napoki"
    >
      <GeneralContainer>
        {items.map((item) => (
          <div key={item.id}>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-0 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="lg:max-w-lg">
                    <p className="text-base/7 font-semibold text-[#FF6F61] mb-[0.8rem]">
                      {item.subtitle}
                    </p>
                    <h2 className="mt-2 mb-12 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                      {item.title}
                    </h2>
                    <p className="mt-6 text-xl/8 text-gray-700">{item.text}</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 mb-6 lg:mt-0 lg:sticky lg:top-[80px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden h-full">
                <img
                  className="w-full max-h-[80vh] lg:max-h-none max-w-none rounded-xl bg-gray-900 shadow-lg ring-1 ring-gray-400/10 h-full object-cover"
                  src={`${usePocketBaseUrl()}/api/files/${item.collectionId}/${item.id}/${item.img}?thumb=1080x0`}
                  alt="Hero Image"
                ></img>
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="text-base/7 text-gray-700 lg:max-w-lg">
                    <div
                      className="e-rte-content mt-8 space-y-8 text-gray-600"
                      dangerouslySetInnerHTML={{
                        __html: preprocessRichText(item.content, svgIcon),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </GeneralContainer>
    </div>
  );
}
