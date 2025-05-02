"use client";
import usePocketBase from "@/hooks/usePocketBase";
import { preprocessRichText, svgIcon } from "@/lib/richTextUtils";
import GeneralContainer from "../blocks/GeneralContainer";
import usePocketBaseUrl from "@/hooks/usePocketBaseUrl";

export default function Nasveti() {
  const items = usePocketBase("nasveti");
  return (
    <div id="nasveti">
      <GeneralContainer>
        {items.map((item) => (
          <div
            key={item.id}
            className="mx-auto grid max-w-4xl grid-cols-1 items-start gap-x-8 gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-2"
          >
            <div className="lg:pr-4 order-2 lg:order-1  lg:sticky top-4">
              <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 p-64 pb-[16rem] lg:pb-[35rem] shadow-lg ">
                <img
                  className="absolute inset-0 size-full object-cover brightness-125 saturate-0"
                  src={`${usePocketBaseUrl()}/api/files/${item.collectionId}/${item.id}/${item.img}?thumb=1080x0`}
                  alt="Hero Image"
                ></img>
              </div>
            </div>
            <div className="order-1 lg:order-2 ">
              <div className="text-base/7 text-gray-700 lg:max-w-lg">
                <p className="text-base/7 font-semibold text-[#FF6F61] mb-[0.8rem]">
                  {item.subtitle}
                </p>
                <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {item.title}
                </h2>
                <div
                  className="e-rte-content mt-8 space-y-8 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: preprocessRichText(item.content, svgIcon),
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </GeneralContainer>
    </div>
  );
}
