import { IconButton } from "../../common/iconButton";
import { FaList, FaPlus, FaMinus, FaEdit } from "react-icons/fa";
import { useState } from "react";
import { CategoryPopUp } from "./popups/categoryPopup";
import { AddPopUp } from "./popups/addPopup";
import { EditPopUp } from "./popups/editPopup";

export const FlashCardManager = () => {
  const [categoryMenu, setCategoryMenu] = useState(false)
  const [addMenu, setAddMenu] = useState(false)
  const [updateMenu, setUpdateMenu] = useState(false)

  
  return (
    <>
      {categoryMenu &&(
        <CategoryPopUp
          onClose={()=>setCategoryMenu(false)}
        />
      )}

      {addMenu &&(
        <AddPopUp
          onClose={()=>setAddMenu(false)}
        />
      )}

      {updateMenu &&(
        <EditPopUp
          onClose={()=>setUpdateMenu(false)}
        />
      )}

      
      <div className="flex md:flex-col flex-row place-self-center items-center justify-around bg-[#0047AB] md:w-[75px] md:h-[350px] md:ml-[10px] w-[350px] h-[75px] mt-[10px] md:mt-[0px] rounded-[10px] border-[3px] border-black">
        <IconButton
          action={()=>setCategoryMenu(true)}
          icon={FaList}
        />
        <IconButton
          action={()=>setAddMenu(true)}
          icon={FaPlus}
        />
        <IconButton
          action={()=>console.log("remove card")}
          icon={FaMinus}
        />
        <IconButton
          action={()=>setUpdateMenu(true)}
          icon={FaEdit}
        />
      </div>
    </>
  );
};
