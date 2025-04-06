import { InfinteSwiper } from "../components/models/infiniteSwiper/infiniteSwiper";
import { useState, useEffect } from "react";
import { getCardData } from "../hooks/dbHooks";
import { flashcardToSwiperCard } from "../services/flashcardToSwiperCard";

export const UserPage = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      const data = await getCardData();
      setCards(data);
      setIsLoading(false);
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

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Top blur */}
      <div className="flex items-center justify-center">
        <div className="absolute bg-[#003a8b] w-[50vw] h-[50vw] z-[-1] self-center rounded-[764px] min-w-[450px] min-h-[450px] top-[-200px] blur-[100px]"></div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-full">Loading...</div>
      ) : (
        <div className="flex flex-row items-center justify-center">
          <InfinteSwiper swiperSlides={swiperSlides} />
        </div>
      )}

      {/* Bottom blur */}
      <div>
        <div className="absolute bg-[#003a8b] w-[30vw] h-[30vw] z-[-1] rounded-[764px] bottom-[-50px] right-[-40px] min-w-[250px] min-h-[250px] blur-[100px]"></div>
        <div className="absolute bg-[#003a8b] w-[30vw] h-[30vw] z-[-1] rounded-[764px] bottom-[-50px] left-[-40px] min-w-[250px] min-h-[250px] blur-[100px]"></div>
      </div>
    </div>
  );
};

export default UserPage;
