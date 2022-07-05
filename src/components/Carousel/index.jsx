import "./style.css";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";

function Carousel() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="myCarousel"
    >
      <SwiperSlide>
        <img
          className="slider-img"
          src="https://i.ibb.co/t4vPWGD/img5.png"
          alt="Harry Potter and the Philosopher's Stone - Hard Cover"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://i.ibb.co/LnSdHPQ/img8.png" alt="Frankenstein" />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://i.ibb.co/9TmWdyS/img3.png"
          alt="Harry Potter and the Sorcerer's Stone"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://i.ibb.co/zVN4Xx8/img6.png" alt="The Two Towers" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;
