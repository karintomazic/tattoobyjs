"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import usePocketBase from "@/hooks/usePocketBase";
import usePocketBaseUrl from "@/hooks/usePocketBaseUrl";
import { preprocessRichText, svgIcon } from "@/lib/richTextUtils";
import GeneralContainer from "../blocks/GeneralContainer";

export default function Kreme() {
  const items = usePocketBase("kreme_za_nego");

  return (
    <>
      <Navigation />

      <GeneralContainer>
        <div className="max-w-4xl">
          <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Kreme za nego
          </h1>
          <p className="mt-6 text-balance text-xl/8 text-gray-700">

          </p>
        </div>

        {items.map((item) => (
          <div key={item.id} className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 pt-16">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-[#FF6F61]">
                  {item.subtitle}
                </h2>
                <p className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                {item.title}
                </p>

                <div
                  className="mt-6 text-lg/8 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: preprocessRichText(item.content, svgIcon),
                  }}
                />

              </div>
            </div>
            <img
              alt="Product screenshot"
              src={`${usePocketBaseUrl()}/api/files/${item.collectionId}/${item.id}/${item.img}?thumb=1080x0`}
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl max-h-[400px] object-cover"
            />
          </div>
        ))}
      </GeneralContainer>
      <Footer />
    </>
  );
}
