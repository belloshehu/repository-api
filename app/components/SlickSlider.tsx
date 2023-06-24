"use client";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { users } from "../data";
import Slider from "react-slick";
import Image from "next/image";

export default function SlickSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="w-full min-h-[300px] p-5 border-none outline-none">
      <Slider {...settings}>
        {users.map(({ id, image, message }) => (
          <div key={id}>
            <div className="my-5 relative text-center w-full">
              <FaQuoteLeft className="absolute top-0 left-0 text-2xl" />
              <p className="w-4/5 mx-auto px-3  text-center">{message}</p>
              <FaQuoteRight className="absolute top-0 right-0 text-2xl " />
            </div>
            <Image
              src={image}
              alt="slider"
              className="object-cover w-72 h-72 m-auto block aspect-square ring-4 ring-black rounded-full"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
