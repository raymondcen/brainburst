import { IconButton } from "../../common/iconButton";
import { IoMdArrowRoundUp, IoMdArrowRoundDown } from "react-icons/io";

export const Navigator = () => {
  return (
    <div className="flex flex-col w-[70px] h-[150px] bg-[#003a8b] ml-[10px] items-center justify-around rounded-[10px] border-[3px] border-black">
        <IconButton action={() => console.log("go up")} icon={IoMdArrowRoundUp}/>
        <IconButton action={() => console.log("go down")} icon={IoMdArrowRoundDown}/>
    </div>
  );
};
