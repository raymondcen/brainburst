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
    <div className="flex flex-col items-center bg-[#0047AB] text-white border-[3px] border-black h-[600px] w-[350px] rounded-[10px] relative">
      <h2 className="font-bold text-[30px] text-center mt-[20px] mb-[50px]">
        {category}
      </h2>
      <div className="justify-between mr-[10px] ml-[10px]">
        <p className="font-semibold text-[20px] text-center">
          {isFlipped && mode === "learn" ? `Answer/Definition: ${def}` : `Question/Term: ${term}`}
        </p>
      </div>

      {/* Choices */}
      <div>
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
        className="text-[50px] absolute bottom-[10px] right-[10px] cursor-pointer"
        onClick={handleFlip}
      />
    </div>
  );
};
