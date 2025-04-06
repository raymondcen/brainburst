export const AnswerOption = ({ answer }) => {
  return (
    <div>
      <button>
        <div className="bg-[#0047AB] text-white md:h-[175px] h-[150px] w-[150px] rounded-[12px] flex items-center justify-center hover:bg-[#003a8b] hover:scale-90 transition duration-200 ease-in-out p-[2px] shadow-xl shadow-black/40">
          <p className="font-normal text-[14px] text-center mt-[3px] ">{answer}</p>
        </div>
      </button>
    </div>
  );
};
