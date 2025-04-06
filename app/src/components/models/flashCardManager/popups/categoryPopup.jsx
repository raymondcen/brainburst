import { IoClose } from "react-icons/io5";
import { getAllCategory } from "../../../../hooks/dbHooks";



const categories = await getAllCategory()

export const CategoryPopUp =({onClose})=>{

    return(
        <div className = "absolute bg-black items-center justify-center">
            <div className="w-[300px] h-[300px] bg-blue-950 border-3">
            <button onClick={onClose}>
                <IoClose className="justify-right"/>
            </button>


            <ul className="bg-white w-fit">
                {categories.map((item, index) => (
                    <li className=""
                    key={index}> 
                    {item.category.trim()} </li> 
                ))}
            </ul>

            </div>
        </div>
    )

}   