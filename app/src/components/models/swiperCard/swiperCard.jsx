import { useState } from "react";
import { Flashcard } from "../flashCard/flashCard";
import { FlashCardManager } from "../flashCardManager/flashCardManager";

const flashCardExample1 = {
  category: "Computer Science",
  term: "Function",
  def: "A block of code designed to perform a particular task.",
  cid: 1,
};

const choices = [
  { answer: `${flashCardExample1.def}` },
  { answer: "A data structure that stores a collection of elements." },
  { answer: "A type of variable that can hold multiple values." },
  { answer: "A programming language used for web development." },
];

export const SwiperCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="flex flex-col items-center mt-[10px] z-[2]">
      <div className="flex md:flex-row flex-col">
        <Flashcard
          flashCard={flashCardExample1}
          isFlipped={isFlipped}
          setIsFlipped={handleFlip}
          choices={choices}
          mode="practice"
        />
        <FlashCardManager />
      </div>
    </div>
  );
};
