import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigator } from "../navigator/navigator";
import "swiper/css";
import "swiper/css/mousewheel";
import { Mousewheel, Keyboard } from "swiper/modules";
import { getCardData } from "../../../hooks/dbHooks";
import { flashcardToSwiperCard } from "../../../services/flashcardToSwiperCard";

export const InfinteSwiper = () => {
  const [cards, setCards] = useState([]);
  const [activeCard, setActiveCard] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchCards = async () => {
      const data = await getCardData();
      console.log(data)
      setCards(data);
    };
    fetchCards();
  }, []);

  const choices = [
    { answer: "Choice 1" },
    { answer: "Choice 2" },
    { answer: "Choice 3" },
    { answer: "Choice 4" },
  ];

  const swiperSlides = flashcardToSwiperCard(cards, choices, "learn");

  const handleSlideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
      console.log(cards)
    }
  };

  const handleSlidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
      console.log(cards)

    }
  };

  const onSlideChange = (swiper) => {
    // Use realIndex so that the index is correct when looping is enabled
    setActiveCard(swiper.realIndex);
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
        onSlideChange={onSlideChange}
        ref={swiperRef}
        className="w-[350px] md:w-[450px] h-[655px] md:h-[620px] z-2"
        direction={"vertical"}
        loop={true}
        slidesPerView={1}
      >
        {swiperSlides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
      <Navigator
        slideUp={handleSlidePrev}
        slideDown={handleSlideNext}
        currentCard={activeCard}
        totalCards={cards.length}
      />
    </div>
  );
};
