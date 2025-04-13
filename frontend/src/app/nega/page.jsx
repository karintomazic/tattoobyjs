"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import usePocketBase from "@/hooks/usePocketBase";
import { preprocessRichText, svgIcon } from "@/lib/richTextUtils";

export default function Nega() {
  const items = usePocketBase("nega");

  return (
    <>
      <Navigation />
      {items.map((item) => (
        <div key={item.id} className="divide-y divide-gray-100">
          <div className="bg-white px-6 py-12 lg:px-8">
            <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
              <p className="text-base/7 font-semibold text-[#FF6F61]">
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
                    __html: preprocessRichText(item.content, svgIcon),
                  }}
                />
              </div>
              <figure className="mt-16">
                <img
                  src={`http://localhost:${process.env.NEXT_PUBLIC_PB_LOCAL_PORT}/api/files/${item.collectionId}/${item.id}/${item.img}`}
                  alt="Hero Image"
                  className="aspect-video rounded-xl bg-gray-50 object-cover"
                />
              </figure>
              <div className="mt-16 ">
                <div
                  className="e-rte-content mt-8 space-y-8 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: preprocessRichText(item.content2, svgIcon),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
}
