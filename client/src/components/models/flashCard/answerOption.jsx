export const AnswerOption = ({ answer }) => {
  return (
    <div>
      <button>
        <div className="bg-[#0047AB] text-white border-[3px] border-black md:h-[175px] h-[150px] w-[150px] rounded-[10px] flex items-center justify-center hover:bg-[#003a8b] transition duration-150 ease-in-out p-[2px]">
          <p className="font-normal text-[14px] text-center">{answer}</p>
        </div>
      </button>
    </div>
  );
};
