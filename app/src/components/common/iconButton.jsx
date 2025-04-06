export const IconButton = ({ action, icon: Icon = null }) => {
  return (
    <button
      className="flex items-center justify-center bg-white w-[55px] h-[55px] cursor-pointer rounded-full"
      onClick={action}
    >
      {Icon && <Icon className="text-[40px]" />}
    </button>
  );
};
