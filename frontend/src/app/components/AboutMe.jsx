"use client";
import usePocketBase from "@/hooks/usePocketBase";
import { preprocessRichText, svgIcon } from "@/lib/richTextUtils";
import GeneralContainer from "../blocks/GeneralContainer";

export default function AboutMe() {
  const items = usePocketBase("about");

  return (
    <div id="o-meni">
      <GeneralContainer>
        {items.map((item) => (
          <div key={item.id} className="mx-auto max-w-2xl lg:max-w-none">
            <div className="max-w-4xl">
              <p className="text-base/7 font-semibold text-[#FF6F61]">
                {item.subtitle}
              </p>
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {item.title}
              </h1>
              <p className="mt-6 text-balance text-xl/8 text-gray-700">
                {item.text}
              </p>
            </div>
            <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
              <div className="lg:pr-8">
                <div
                  className="mt-6 text-base/7 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: preprocessRichText(item.content, svgIcon),
                  }}
                />

                <div
                  className="mt-8 text-base/7 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: preprocessRichText(item.content2, svgIcon),
                  }}
                />
              </div>
              <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-2 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                  <div className="aspect-[7/9] overflow-hidden rounded-xl shadow-xl outline -outline-offset-1 outline-black/10">
                    <img
                      alt=""
                      src={`http://localhost:${process.env.NEXT_PUBLIC_PB_LOCAL_PORT}/api/files/${item.collectionId}/${item.id}/${item.img3}?thumb=1080x0`}
                      className="block size-full object-cover"
                    />
                  </div>
                  <div className="-mt-8 aspect-[7/9] overflow-hidden rounded-xl shadow-xl outline -outline-offset-1 outline-black/10 lg:-mt-40">
                    <img
                      alt=""
                      src={`http://localhost:${process.env.NEXT_PUBLIC_PB_LOCAL_PORT}/api/files/${item.collectionId}/${item.id}/${item.img2}?thumb=1080x0`}
                      className="block size-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="max-lg:mt-16 lg:col-span-1">
                <p className="text-lg font-semibold text-gray-800">
                  Moji stili
                </p>
                <hr className="mt-6 border-t border-gray-200" />

                <div
                  className="mt-8 text-base/7 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: preprocessRichText(item.content3, svgIcon),
                  }}
                />
              </div>
            </section>
          </div>
        ))}
      </GeneralContainer>
    </div>
  );
}
