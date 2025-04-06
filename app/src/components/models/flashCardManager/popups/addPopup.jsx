import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { addCard } from "../../../../hooks/dbHooks";




export const AddPopUp =({onClose})=>{
    const [term, setTerm]=useState("");
    const [def, setDef]=useState("");
    const [category, setCategory]=useState("");

    const handleSubmit=(t)=>{
        t.preventDefault()
        const newCard = {
            category,
            term,
            def
        };
        
        addCard(newCard);
    }

    return(
       <div className = "absolute bg-black items-center justify-center">
            <div className="w-[350px] h-[550px] bg-blue-950 border-3">
            <button onClick={onClose}>
                <IoClose className="justify-right"/>
            </button>

            <form
                onSubmit = {handleSubmit}
            >
                <p className="flex">
                    <label
                    htmlFor="category"
                    className="flex text-sm items-center justify-center bg-[#F4F3F2] m-3 p-2 rounded-2xl w-[100px]"
                    >
                    Category
                    </label>
                    <textarea
                        className="border-[2px] bg-[#F4F3F2] w-[600px] min-w-[200px] m-2 p-2 resize-none"
                        placeholder="Write the category it will belong to here"
                        required
                        maxLength="100"
                        id="cat"
                        onChange={(t)=>setCategory(t.target.value)}
                    />
                </p> 

                <p className="flex">
                    <label
                    htmlFor="term"
                    className="flex text-sm items-center justify-center bg-[#F4F3F2] m-3 p-2 rounded-2xl w-[100px]"
                    >
                    Term/Question
                    </label>
                    <textarea
                        className="border-[2px] bg-[#F4F3F2] w-[600px] min-w-[200px] m-2 p-2 resize-none"
                        placeholder="Write the term or question in here"
                        required
                        maxLength="100"
                        id="term"
                        onChange={(t)=>setTerm(t.target.value)}

                    />
                </p> 

                <p className="flex">
                    <label
                    htmlFor="def"
                    className="flex text-[12px] text-wrap items-center justify-center bg-[#F4F3F2] m-3 p-2 rounded-2xl w-[100px]"
                    >
                    Definition/Answer
                    </label>
                    <textarea
                        className="border-[2px] bg-[#F4F3F2] w-[600px] min-w-[200px] m-2 p-2 resize-none"
                        placeholder="Write the definiton or answer here"
                        required
                        maxLength="100"
                        id="def"
                        onChange={(t)=>setDef(t.target.value)}

                    />
                </p> 
                <p className="flex -mt-1 w-full text-white justify-center">
                <button
                    className="font-bold bg-blue-400 cursor-pointer m-3 p-2 rounded-2xl text-center w-[150px] hover:bg-blue-600 hover:shadow-xl transition-colors duration-200"
                    type="submit"
                    id="submit"
                >
                Add Task
              </button>
            </p>
            </form>
            </div>
        </div>
    )

}   