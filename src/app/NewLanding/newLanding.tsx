import React from "react";
import Image from "next/image";
import Link from "next/link";
function NewLanding() {
  return (
    <div>
      <div
        className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/LandingAsset/LandingHero.svg')" }}
      >
        <Image
          src="/LandingAsset/Logo.svg"
          width={600}
          height={600}
          alt="Landing Hero"
          className="h-[60vh] w-auto max-h-[440px]"
        />
        <p className="md:hidden text-black font-bold text-center mt-4 max-w-[520px]">
          เรื่องราวของเราทุกคน ต่างถูกถักทอขึ้นจากประสบการณ์ ความคิด
          และความฝันที่แตกต่างกัน แต่ละเส้นชีวิตต่างสะท้อนถึงความเป็นตัวตน
          ที่เชื่อมต่อกันจนกลายเป็นวิถีชีวิตและวัฒนธรรม
        </p>
        <Link
          href="/join-event"
          className="flex items-center bg-[#D91E18] text-white px-4 py-2 rounded"
        >
          JOIN EVENT
        </Link>
      </div>
      <div className="min-h-screen flex flex-col justify-end">
      <div
        className="min-h-[98vh] flex flex-col items-center justify-center bg-cover bg-center "
        style={{ backgroundImage: "url('/LandingAsset/Line.svg')" }}
      >
        <p className=" text-black font-bold text-3xl text-center mt-4 max-w-[520px]">
          เส้น
        </p>
      </div>
      </div>
    </div>
  );
}

export default NewLanding;
