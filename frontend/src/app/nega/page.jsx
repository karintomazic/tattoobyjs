"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import usePocketBase from "@/hooks/usePocketBase";
import usePocketBaseUrl from "@/hooks/usePocketBaseUrl";
import { preprocessRichText, svgIcon } from "@/lib/richTextUtils";
import GeneralContainer from "../blocks/GeneralContainer";

export default function Nega() {
  const items = usePocketBase("nega");

  return (
    <>
      <Navigation />
      {items.map((item) => (
        <div key={item.id} className="divide-y divide-gray-100">
          <GeneralContainer>
            <div className="text-base/7 text-gray-700">
              <p className="font-semibold text-[#FF6F61] mb-[0.8rem]">
                {item.subtitle}
              </p>
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {item.title}
              </h1>
              <p className="mt-6 text-xl/8">{item.text1}</p>
              <div className="mt-10 ">
                <div
                  className="e-rte-content mt-8 space-y-8 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: preprocessRichText(item.content1, svgIcon),
                  }}
                />
              </div>
              <figure className="mt-12">
                <img
                  src={`${usePocketBaseUrl()}/api/files/${item.collectionId}/${item.id}/${item.img1}?thumb=1080x0`}
                  alt="Hero Image"
                  className="aspect-video rounded-xl bg-gray-50 object-cover max-h-[500px] w-full"
                />
              </figure>
              <div className="mt-10 ">
                <div
                  className="e-rte-content mt-8 space-y-8 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: preprocessRichText(item.content2, svgIcon),
                  }}
                />
              </div>
              <figure>
                <img
                  src={`${usePocketBaseUrl()}/api/files/${item.collectionId}/${item.id}/${item.img2}?thumb=1080x0`}
                  alt="Hero Image"
                  className="aspect-video rounded-xl bg-gray-50 object-cover max-h-[500px] w-full"
                />
              </figure>
              <div className="mt-16 ">
                <div
                  className="e-rte-content mt-8 space-y-8 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: preprocessRichText(item.content3, svgIcon),
                  }}
                />
              </div>
            </div>
          </GeneralContainer>
        </div>
      ))}
      <Footer />
    </>
  );
}
