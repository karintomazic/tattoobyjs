"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";
import usePocketBase from "@/hooks/usePocketBase";
import { preprocessRichText, svgIcon } from "@/lib/richTextUtils";

const ResponsiveMasonry = dynamic(
  () => import("react-responsive-masonry").then((mod) => mod.ResponsiveMasonry),
  { ssr: false }
);

const Masonry = dynamic(
  () => import("react-responsive-masonry").then((mod) => mod.default),
  { ssr: false }
);

export default function Portfolio() {
  const items = usePocketBase("portfolio");
  const itemsText = usePocketBase("portfolio_text");

  return (
    <div>
      <Navigation />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-8">
        {itemsText.map((item, index) => (
          <div key={index} className="mb-12">
            <p className="text-base/7 font-semibold text-[#FF6F61] mb-[0.8rem]">
              {item.subtitle}
            </p>
            <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {item.title}
            </h2>
            <p className="mt-6 text-xl/8 text-gray-700"> {item.text}</p>
            <div
              className="mt-6 text-base/7 text-gray-600"
              dangerouslySetInnerHTML={{
                __html: preprocessRichText(item.content, svgIcon),
              }}
            />
          </div>
        ))}

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 3 }}
        >
          <Masonry gutter="16px">
            {items.map((item, index) => (
              <img
                key={index}
                src={`http://localhost:${process.env.NEXT_PUBLIC_PB_LOCAL_PORT}/api/files/${item.collectionId}/${item.id}/${item.img}?thumb=1080x0`}
                alt={`Tattoo ${index + 1}`}
                className="w-full rounded-lg shadow-md"
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <Footer />
    </div>
  );
}
