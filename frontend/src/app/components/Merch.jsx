"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import usePocketBase from "@/hooks/usePocketBase";
import { preprocessRichText, svgIcon } from "@/lib/richTextUtils";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
};

export default function Merch() {
  const items = usePocketBase("merch_content");
  const items2 = usePocketBase("merch_images");

  const sliderImages = items2.map((item) => ({
    src: `http://localhost:${process.env.NEXT_PUBLIC_PB_LOCAL_PORT}/api/files/${item.collectionId}/${item.id}/${item.img}?thumb=1080x0`,
    alt: item.alt || item.description || "Merch image",
  }));

  return (
    <div className="overflow-hidden py-24" id="merch">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          {items.map((item) => (
            <div key={item.id} className="lg:pr-4 lg:pt-4">
              <div>
                <h2 className="text-base/7 font-semibold text-[#FF6F61]">
                  {item.subtitle}
                </h2>
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {item.title}
                </p>

                <p className="mt-6 text-balance text-xl/8 text-gray-700">
                  {item.text}
                </p>

                <div
                  className="mt-6 text-lg/8 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: preprocessRichText(item.content, svgIcon),
                  }}
                />

                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none"></dl>
              </div>
            </div>
          ))}
          <Slider {...settings}>
            {sliderImages.map((img, idx) => (
              <div key={idx} >
                <img className="max-h-[500px] object-cover rounded-xl" src={img.src} alt={img.alt} style={{ width: "100%" }} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
