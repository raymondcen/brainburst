import { useState } from "react";
import { MdSchool } from "react-icons/md";
import { PiGearSixFill } from "react-icons/pi";

export const IconSwitcher = () => {
  const [isLearn, setLearn] = useState(true); 
  
  const toggleIcon = () => {
    setLearn(prev => !prev);
  };

  return (
    <div
      onClick={toggleIcon}
      className="cursor-pointer text-4xl transition-transform duration-300 hover:rotate-180"
    >
      {isLearn ? (
        <MdSchool className="text-blue-400" />
      ) : (
        <PiGearSixFill className="text-green-400" />
      )}
    </div>
  );
};
