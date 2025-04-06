import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperCard } from "../swiperCard/swiperCard";
import { Navigator } from "../navigator/navigator";
import { Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";

export const InfinteSwiper = ({ swiperSlides }) => {
  const swiperRef = useRef(null);

  const handleSlideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleSlidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <Swiper
        modules={[Mousewheel, Keyboard]}
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
          thresholdDelta: 20,
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: false,
          pageUpDown: true,
        }}
        ref={swiperRef}
        className="w-[350px] md:w-[450px] h-[655px] md:h-[620px] z-2"
        direction={"vertical"}
        loop={true}
        slidesPerView={1}
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
      <Navigator slideUp={handleSlidePrev} slideDown={handleSlideNext} />
    </div>
  );
};
