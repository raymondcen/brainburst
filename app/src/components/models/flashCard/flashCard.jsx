import { FaArrowRotateLeft } from "react-icons/fa6";
import { AnswerOption } from "./answerOption";

export const Flashcard = ({
  flashCard: { category, term, def },
  isFlipped,
  setIsFlipped,
  choices = [],
  mode,
}) => {
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="flex flex-col items-center bg-[#012556] text-white border-[3px] border-black md:h-[600px] h-[550px] w-[350px] rounded-[10px] relative bg-gradient-to-b from-[#0147aa] to-[#001738]">
      
      {/* Top blur */}
      <div className="absolute left-[-20px] top-[-30px] w-[225px] h-[300px] bg-[#2d77df] z-[0] rounded-full blur-[100px]">
      </div>
      <h2 className="font-bold text-[30px] text-center mt-[10px] mb-[5px] z-[1]">
        {category}
      </h2>
      <div className="justify-between mr-[10px] ml-[10px] z-[1]">
        <p className="font-semibold text-[20px] text-center">
          {isFlipped && mode === "learn"
            ? `Answer/Definition: ${def}`
            : `Question/Term: ${term}`}
        </p>
      </div>

      {/* Choices */}
      <div className="z-[1]">
        {isFlipped && choices && mode === "practice" ? (
          <div className="flex flex-col items-center mt-[20px] mb-[10px]">
            <p className="font-semibold text-[20px] text-center mb-[10px]">
              Choose the correct answer:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {choices.map((choice, id) => (
                <AnswerOption
                  key={id}
                  answer={choice.answer}
                  className="mb-[10px]"
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {/* Flip card button */}
      <FaArrowRotateLeft
        className="text-[50px] absolute bottom-[10px] right-[10px] cursor-pointer z-[1]"
        onClick={handleFlip}
      />
      {/* Bottom blur */}
      <div className="absolute bottom-[-60px] w-[150px] h-[150px] bg-[#2d77df] z-[0] rounded-full blur-[100px]"></div>
    </div>
  );
};
