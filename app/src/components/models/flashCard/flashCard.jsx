import { useState } from "react";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { MdSchool } from "react-icons/md";
import { PiGearSixFill } from "react-icons/pi";
import { AnswerOption } from "./AnswerOption";

export const Flashcard = ({
  flashCard: { category, term, def },
  choices = [],
}) => {
  const [isLearnMode, setIsLearnMode] = useState(true); // true for Learn mode, false for Practice mode
  const [isFlipped, setIsFlipped] = useState(false); // false to show term/question, true to show answer/definition or choices

  const toggleMode = () => {
    setIsLearnMode((prev) => !prev);
    setIsFlipped(false); // Reset to show term/question when mode changes
  };

  const handleFlip = () => setIsFlipped((prev) => !prev);

  return (
    <div className="flashcard-container overflow-hidden rounded-[10px]">
      <div className={`flashcard-inner ${isFlipped ? 'flashcard-flipped' : ''}`}>
        {/* Front Side */}
        <div className="flashcard-front flex flex-col items-center bg-[#012556] text-white border-[3px] border-black h-[550px] w-[350px] rounded-[10px] relative bg-gradient-to-b from-[#0147aa] to-[#001738]">
          {/* Top Blur */}
          <div className="top-blur"></div>

          {/* Content */}
          <h2 className="font-bold text-[30px] text-center mt-[10px] mb-[5px] z-[1]">
            {category}
          </h2>
          <p className="font-semibold text-[20px] text-center">
            Question/Term: {term}
          </p>

          {/* Bottom-right: Flip Button */}
          <FaArrowRotateLeft
            className="text-[50px] absolute bottom-[10px] right-[10px] cursor-pointer z-[1] hover:rotate-180 transition-transform duration-300"
            onClick={handleFlip}
          />

          {/* Bottom-left: Toggle Mode */}
          <div
            className="text-[50px] absolute bottom-[10px] left-[10px] cursor-pointer z-[1] hover:scale-110 transition-transform duration-200"
            onClick={toggleMode}
          >
            {isLearnMode ? <MdSchool /> : <PiGearSixFill />}
          </div>

          {/* Bottom Blur */}
          <div className="bottom-blur"></div>
        </div>

        {/* Back Side */}
        <div className="flashcard-back flex flex-col items-center bg-[#012556] text-white border-[3px] border-black h-[550px] w-[350px] rounded-[10px] relative bg-gradient-to-b from-[#0147aa] to-[#001738]">
          {/* Top Blur */}
          <div className="top-blur"></div>

          {/* Content */}
          <h2 className="font-bold text-[30px] text-center mt-[10px] mb-[5px] z-[1]">
            {category}
          </h2>
          {isLearnMode ? (
            // Learn Mode: Show Answer/Definition
            <p className="font-semibold text-[20px] text-center">
              Answer/Definition: {def}
            </p>
          ) : (
            // Practice Mode: Show Answer Choices
            <div className="flex flex-col items-center mt-[20px] mb-[100px] z-[1]">
              <p className="font-semibold text-[20px] text-center mb-[10px]">
                Choose the correct answer:
              </p>
              <div className="grid grid-cols-2 gap-2 w-full max-w-xs">
                {choices.map((choice, id) => (
                  <AnswerOption key={id} answer={choice.answer} />
                ))}
              </div>
            </div>
          )}

          {/* Bottom-right: Flip Button */}
          <FaArrowRotateLeft
            className="text-[50px] absolute bottom-[10px] right-[10px] cursor-pointer z-[1] hover:rotate-180 transition-transform duration-300"
            onClick={handleFlip}
          />

          {/* Bottom-left: Toggle Mode */}
          <div
            className="text-[50px] absolute bottom-[10px] left-[10px] cursor-pointer z-[1] hover:scale-110 transition-transform duration-200"
            onClick={toggleMode}
          >
            {isLearnMode ? <MdSchool /> : <PiGearSixFill />}
          </div>

          {/* Bottom Blur */}
          <div className="bottom-blur"></div>
        </div>
      </div>
    </div>
  );
};
