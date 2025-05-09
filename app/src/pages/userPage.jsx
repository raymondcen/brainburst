import { InfinteSwiper } from "../components/models/infiniteSwiper/infiniteSwiper";

export const UserPage = () => {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Top blur */}
      <div className="flex items-center justify-center">
        <div className="absolute bg-[#003a8b] w-[50vw] h-[50vw] z-[-1] self-center rounded-[764px] min-w-[450px] min-h-[450px] top-[-200px] blur-[100px]"></div>
      </div>
      
      {/* Content */}
      <div className="flex flex-row items-center justify-center">
        <InfinteSwiper />
      </div>

      {/* Bottom blur */}
      <div>
        <div className="absolute bg-[#003a8b] w-[30vw] h-[30vw] z-[-1] rounded-[764px] bottom-[-50px] right-[-40px] min-w-[250px] min-h-[250px] blur-[100px]"></div>
        <div className="absolute bg-[#003a8b] w-[30vw] h-[30vw] z-[-1] rounded-[764px] bottom-[-50px] left-[-40px] min-w-[250px] min-h-[250px] blur-[100px]"></div>
      </div>
    </div>
  );
};

export default UserPage;
