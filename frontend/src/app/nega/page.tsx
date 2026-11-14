"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import usePocketBase from "@/hooks/usePocketBase";
import { fileUrl } from "@/lib/pocketbase";
import { preprocessRichText } from "@/lib/richTextUtils";
import GeneralContainer from "../blocks/GeneralContainer";
import MainHeading from "../blocks/MainHeading";

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
              <MainHeading>{item.title}</MainHeading>
              <p className="mt-6 text-xl/8">{item.text1}</p>
              <div className="mt-10 ">
                <div
                  className="e-rte-content mt-8 space-y-8 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: preprocessRichText(item.content1),
                  }}
                />
              </div>
              <figure className="mt-12">
                <img
                  src={fileUrl(item, item.img1)}
                  alt="Hero Image"
                  className="aspect-video rounded-xl bg-gray-100 object-cover max-h-[500px] w-full"
                />
              </figure>
              <div className="mt-10 ">
                <div
                  className="e-rte-content mt-8 space-y-8 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: preprocessRichText(item.content2),
                  }}
                />
              </div>
              <figure>
                <img
                  src={fileUrl(item, item.img2)}
                  alt="Hero Image"
                  className="aspect-video rounded-xl bg-gray-100 object-cover max-h-[500px] w-full"
                />
              </figure>
              <div className="mt-16 ">
                <div
                  className="e-rte-content mt-8 space-y-8 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: preprocessRichText(item.content3),
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
