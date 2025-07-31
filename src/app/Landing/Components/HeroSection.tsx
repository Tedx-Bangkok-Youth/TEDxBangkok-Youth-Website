import React from "react";
import Image from "next/image";
function HeroSection() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex w-[80vw] justify-center gap-60  items-center">
        <div>
          <h1 className="text-red text-4xl font-bold">
            ไอเดียและเรื่องราว
            <br />
            อันควรค่าแก่การเผยแพร่
          </h1>
          <Image
            width={400}
            height={400}
            src="/Landing/Arrow.png"
            alt="TedXYouth Bangkok"
            className="w-[100%]"
          />
          <p className="text-red text-left">
            เพื่อสร้างแรงบันดาลใจดีๆให้กับทุกคน
            <br /> เพื่อนำกลับไปสร้างการเปลี่ยนแปลงทางสังคม
          </p>
          <div className="flex gap-4 mt-12">
            <button className="bg-red px-8 py-2 rounded-full text-white font-medium cursor-pointer">Join Event</button>
            <button className="flex items-center gap-2 bg-white rounded-full text-black font-medium cursor-pointer">
            <div className="flex items-center gap-2">
                <Image width={80} height={80} src="/Landing/Play.svg" alt="Play Icon" className="min-h-10 h-[100%] aspect-square w-auto" />
                <p>ชม Talk ที่ผ่านมา</p>
            </div>
               </button>
          </div>
        </div>
        <div>
          {" "}
          <Image
            width={600}
            height={600}
            src="/Landing/Landing.png"
            alt="TedXYouth Bangkok"
            className="h-60 w-auto max-h-[400px]"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
