import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { SwiperCard } from "../models/swiperCard/swiperCard";
import "swiper/css";
import "swiper/css/pagination";

export const InfinteSwiper = ({ swiperSlides }) => {
  return (
    <div className="flex">
      <Swiper
        className="w-[500px] h-[700px] z-[10]"
        direction={"vertical"}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {swiperSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <SwiperCard
              flashCard={slide.card.flashCard}
              choices={slide.card.choices}
              mode={slide.card.mode}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
