"use client";
import usePocketBase from "@/hooks/usePocketBase";
import { fileUrl } from "@/lib/pocketbase";
import { preprocessRichText } from "@/lib/richTextUtils";
import GeneralContainer from "../blocks/GeneralContainer";
import MainHeading from "../blocks/MainHeading";

export default function AboutMe() {
  const items = usePocketBase("about");

  return (
    <div id="o-meni">
      <GeneralContainer>
        {items.map((item) => (
          <div key={item.id} className="mx-auto max-w-4xl lg:max-w-none">
            <div className="max-w-4xl">
              <p className="text-base/7 font-semibold text-[#FF6F61]">
                {item.subtitle}
              </p>
              <MainHeading>{item.title}</MainHeading>
              <p className="mt-6 text-balance text-xl/8 text-gray-700">
                {item.text}
              </p>
            </div>
            <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
              <div className="lg:pr-8">
                <div
                  className="mt-6 text-base/7 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: preprocessRichText(item.content),
                  }}
                />

                <div
                  className="mt-8 text-base/7 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: preprocessRichText(item.content2),
                  }}
                />
              </div>
              <div className="pt-16 lg:row-span-2 xl:mr-auto">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-0 lg:gap-4 xl:gap-8">
                  <div className="aspect-square lg:aspect-[7/9] overflow-hidden rounded-xl shadow-xl outline -outline-offset-1 outline-black/10">
                    <img
                      alt=""
                      src={fileUrl(item, item.img3)}
                      className="block size-full object-cover"
                    />
                  </div>
                  <div className="aspect-square lg:aspect-[7/9] overflow-hidden rounded-xl shadow-xl outline -outline-offset-1 outline-black/10 lg:-mt-40">
                    <img
                      alt=""
                      src={fileUrl(item, item.img2)}
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
                    __html: preprocessRichText(item.content3),
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
