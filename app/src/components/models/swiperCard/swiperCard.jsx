import { useState } from "react";
import { Flashcard } from "../flashCard/flashCard";
import { FlashCardManager } from "../flashCardManager/flashCardManager";

export const SwiperCard = ({ flashCard, choices, mode }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="flex flex-col items-center mt-[10px] z-[2]">
      <div className="flex md:flex-row flex-col">
        <Flashcard
          flashCard={flashCard}
          isFlipped={isFlipped}
          setIsFlipped={handleFlip}
          choices={choices}
          mode={mode}
        />
      </div>
    </div>
  );
};
