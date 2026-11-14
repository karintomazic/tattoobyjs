"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";
import usePocketBase from "@/hooks/usePocketBase";
import { fileUrl } from "@/lib/pocketbase";
import { preprocessRichText } from "@/lib/richTextUtils";
import GeneralContainer from "../blocks/GeneralContainer";
import MainHeading from "../blocks/MainHeading";

const ResponsiveMasonry = dynamic(
  () => import("react-responsive-masonry").then((mod) => mod.ResponsiveMasonry),
  { ssr: false }
);

const Masonry = dynamic(
  () => import("react-responsive-masonry").then((mod) => mod.default),
  { ssr: false }
);

export default function Portfolio() {
  // Skip entries without an uploaded image, so no broken images show
  const items = usePocketBase("portfolio").filter((item) => item.img);
  const itemsText = usePocketBase("portfolio_text");

  return (
    <div>
      <Navigation />
      <GeneralContainer>
        {itemsText.map((item, index) => (
          <div key={index} className="mb-12">
            <p className="text-base/7 font-semibold text-[#FF6F61] mb-[0.8rem]">
              {item.subtitle}
            </p>
            <MainHeading>{item.title}</MainHeading>
            <p className="mt-6 text-xl/8 text-gray-700"> {item.text}</p>
            <div
              className="mt-6 text-base/7 text-gray-600"
              dangerouslySetInnerHTML={{
                __html: preprocessRichText(item.content),
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
                src={fileUrl(item, item.img)}
                alt={`Tattoo ${index + 1}`}
                className="w-full rounded-lg shadow-md"
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </GeneralContainer>

      <Footer />
    </div>
  );
}
