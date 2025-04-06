import { IconButton } from "../../common/iconButton";
import { FaList, FaPlus, FaMinus, FaEdit } from "react-icons/fa";

export const FlashCardManager = () => {
  return (
    <div className="flex md:flex-col flex-row place-self-center items-center justify-around bg-[#0047AB] md:w-[75px] md:h-[350px] md:ml-[10px] w-[350px] h-[75px] mt-[10px] md:mt-[0px] rounded-[10px] border-[3px] border-black">
      <IconButton
        action={() => console.log("category list")}
        icon={FaList}
      />
      <IconButton
        action={() => console.log("add card")}
        icon={FaPlus}
      />
      <IconButton
        action={() => console.log("remove card")}
        icon={FaMinus}
      />
      <IconButton
        action={() => console.log("update card")}
        icon={FaEdit}
      />
    </div>
  );
};
