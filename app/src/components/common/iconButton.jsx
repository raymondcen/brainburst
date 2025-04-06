export const IconButton = ({ action, icon: Icon = null }) => {
  return (
    <button
      className="flex items-center justify-center bg-white w-[58px] h-[58px] rounded-full cursor-pointer shadow-md hover:shadow-xl transform transition-transform duration-200 ease-in-out hover:scale-120 border-[3px] border-black"
      onClick={action}
    >
      {Icon && <Icon className="text-[30px] hover:scale-120  transition duration-200" />}
    </button>
  );
};
