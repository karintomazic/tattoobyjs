"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { src: "darilni-bon-ex.jpg", alt: "First image" },
  { src: "darilni-bon-ex.jpg", alt: "Second image" },
  { src: "darilni-bon-ex.jpg", alt: "Third image" }
];


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500
};

export default function ImageSlider() {
  return (
    <Slider {...settings}>
      {images.map((img, idx) => (
        <div key={idx}>
          <img src={img.src} alt={img.alt} style={{ width: "100%" }} />
        </div>
      ))}
    </Slider>
  );
}
