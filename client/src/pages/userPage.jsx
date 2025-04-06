import { Flashcard } from "../components/models/flashCard/flashCard";

const flashCardExample1 = {
  category: "Computer Science",
  term: "Function",
  def: "A block of code designed to perform a particular task.",
  cid: 1,
};

export const UserPage = () => {
  return (
    <div>
      {/* Top blur */}
      <div className="flex items-center justify-center">
        <div className="absolute bg-[#003a8b] w-[50vw] h-[50vw] z-[-1] self-center rounded-[764px] min-w-[450px] min-h-[450px] blur-[100px]"></div>
      </div>
      <div className="flex flex-col items-center">
        <Flashcard flashCard={flashCardExample1} isFlipped={false} />
        <Flashcard flashCard={flashCardExample1} isFlipped={true} />
      </div>
      {/* Bottom blurs */}
      <div className="">
        <div className="absolute bg-[#003a8b] w-[30vw] h-[30vw] z-[-1] rounded-[764px] bottom-0 right-0 min-w-[250px] min-h-[250px] blur-[100px]"></div>
        <div className="absolute bg-[#003a8b] w-[30vw] h-[30vw] z-[-1] rounded-[764px] bottom-0 left-0 min-w-[250px] min-h-[250px] blur-[100px]"></div>
      </div>
    </div>
  );
};

export default UserPage;
