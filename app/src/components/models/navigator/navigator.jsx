import { IconButton } from "../../common/iconButton";
import { IoMdArrowRoundUp, IoMdArrowRoundDown } from "react-icons/io";

export const Navigator = ({ slideUp, slideDown }) => {
  return (
    <div className="hidden md:flex flex-col items-center justify-around bg-[#003a8b] ml-[10px] rounded-[10px] border-[3px] border-black p-2">
      <IconButton action={slideUp} icon={IoMdArrowRoundUp} />
      <div className="text-white">
      </div>
      <IconButton action={slideDown} icon={IoMdArrowRoundDown} />
    </div>
  );
};
