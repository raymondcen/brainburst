import { useState } from "react";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { MdSchool } from "react-icons/md";
import { PiGearSixFill } from "react-icons/pi";
import { AnswerOption } from "./AnswerOption";

export const Flashcard = ({ flashCard, choices = [] }) => {
  if (!flashCard) return <div>Loading...</div>;

  const { category, term, def } = flashCard;

  const [isLearnMode, setIsLearnMode] = useState(true); // true for Learn mode, false for Practice mode
  const [showAnswer, setShowAnswer] = useState(false); // false to show term/question, true to show answer/definition or choices

  const toggleMode = () => {
    setIsLearnMode((prev) => !prev);
    setShowAnswer(false); // Reset to show term/question when mode changes
  };

  const toggleShowAnswer = () => setShowAnswer((prev) => !prev);

  return (
    <div className="flex flex-col items-center bg-[#012556] text-white border-[3px] border-black md:h-[600px] h-[550px] w-[350px] rounded-[10px] relative bg-gradient-to-b from-[#0147aa] to-[#001738] overflow-hidden">
      {/* Top Blur */}
      <div className="absolute left-[-20px] top-[-30px] w-[225px] h-[300px] bg-[#2d77df] z-[0] rounded-full blur-[100px]" />

      {/* Content */}
      <h2 className="font-bold text-[30px] text-center mt-[10px] mb-[5px] z-[1]">
        {category}
      </h2>

      <div className="mx-[10px] z-[1]">
        {!showAnswer ? (
          // Show Term/Question
          <p className="font-semibold text-[20px] text-center">
            Question/Term: {term}
          </p>
        ) : isLearnMode ? (
          // Learn Mode: Show Answer Choices
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
        ) : (
          // Practice Mode: Show Answer/Definition
          <p className="font-semibold text-[20px] text-center">
            Answer/Definition: {def}
          </p>
        )}
      </div>

      {/* Bottom-right: Toggle Show Answer/Definition or Choices */}
      <FaArrowRotateLeft
        className="text-[50px] absolute bottom-[10px] right-[10px] cursor-pointer z-[1] hover:rotate-180 transition-transform duration-300"
        onClick={toggleShowAnswer}
      />

      {/* Bottom-left: Toggle Mode */}
      <div
        className="text-[50px] absolute bottom-[10px] left-[10px] cursor-pointer z-[1] hover:scale-110 transition-transform duration-200"
        onClick={toggleMode}
      >
        {isLearnMode ? <MdSchool /> : <PiGearSixFill />}
      </div>

      {/* Bottom Blur */}
      <div className="absolute bottom-[-60px] w-[150px] h-[150px] bg-[#2d77df] z-[0] rounded-full blur-[100px]" />
    </div>
  );
};
