import { IoClose } from "react-icons/io5";
import { getAllCategory } from "../../../../hooks/dbHooks";
import { useState, useEffect } from "react";




export const CategoryPopUp =({onClose})=>{
    
    const[categories, setCategories] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
          const data = await getAllCategory();
          console.log(data)
          setCategories(data);
        };
        fetchCategories();
      }, []);

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