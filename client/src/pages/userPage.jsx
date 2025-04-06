import { Flashcard } from "../components/models/flashCard/flashCard";
import { useState } from "react";
import { FlashCardManager } from "../components/models/flashCardManager/flashCardManager";
import { Navigator } from "../components/models/navigator/navigator";
import { getCardData } from "../hooks/dbHooks";

const flashCardExample1 = await getCardData();//array of all cards
let counter = 0;

const choices = [
  { answer: `${flashCardExample1.def}` },
  { answer: "A data structure that stores a collection of elements." },
  { answer: "A type of variable that can hold multiple values." },
  { answer: "A programming language used for web development." },
];



export const UserPage = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div>
      {/* Top blur */}
      <div className="flex items-center justify-center">
        <div className="absolute bg-[#003a8b] w-[50vw] h-[50vw] z-[-1] self-center rounded-[764px] min-w-[450px] min-h-[450px] top-[-200px] blur-[100px]"></div>
      </div>

      {/* Content div */}
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-center mt-[10px] z-[2]">
          <div className="flex md:flex-row flex-col">
            <Flashcard
              flashCard={flashCardExample1[i]}
              isFlipped={isFlipped}
              setIsFlipped={handleFlip}
              choices={choices}
              mode="learn"
            />
            <FlashCardManager />
          </div>
        </div>
        <div className="z-[1]">
          <Navigator />
        </div>
      </div>

      {/* Bottom blur */}
      <div>
        <div className="absolute bg-[#003a8b] w-[30vw] h-[30vw] z-[-1] rounded-[764px] bottom-[-50px] right-[-40px] min-w-[250px] min-h-[250px] blur-[100px]"></div>
        <div className="absolute bg-[#003a8b] w-[30vw] h-[30vw] z-[-1] rounded-[764px] bottom-[-50px] left-[-40px] min-w-[250px] min-h-[250px] blur-[100px]"></div>
      </div>
    </div>
  );
};

export default UserPage;
