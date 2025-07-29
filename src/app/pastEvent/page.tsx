import Image from "next/image";
import PlayerCard from "@/app/pastEvent/components/playerCard";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-white">


      <div className="flex flex-row items-center justify-center w-1856px h-262px m-5 bg-black py-6 gap-6 p-20">
        {/* Left: Logo and event info */}
        <div className="flex flex-col bg-black p-4 w-72 h-40 justify-between">
          <div className="w-full flex justify-start">
            <img src="/pastEvent/left banner.png" alt="TEDxBangkokYouth สนามเด็กเล่า" className="h-118px w-410px" />
          </div>
          <div className="text-white text-xs mt-2 text-left">
            วันที่จัดงาน: วันที่ 18 พฤศจิกายน 2018<br />
            สถานที่: โรงละครอักษรา คิงเพาเวอร์
          </div>
        </div>
        {/* Right: Banner image */}
        <div className="flex-1 h-40 border-2 border-blue-500 flex items-center justify-center">
          <img src="/globe.svg" alt="Banner" className="object-cover h-full w-full" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-between w-full h-full bg-white">
        
      </div>
    </div>
  );
}
