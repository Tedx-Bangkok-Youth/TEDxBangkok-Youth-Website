import React from "react";
import Image from "next/image";

function StorySection() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-8">
     
      <h1 className="font-bold text-2xl">จากคนหนึ่งถึงสังคม</h1>
      <p className="text-center">
        เรื่องราวที่ถ่ายทอดออกมาไม่ใช่แค่ถ้อยคำสวยงาม แต่คือประสบการณ์จริง
        ความฝัน และมุมมองที่ลึกซึ้งของคนรุ่นใหม่ <br />
        ทุกคำพูดคือแรงบันดาลใจที่จุดประกายให้ผู้ฟังกล้าคิด กล้าทำ
        และกล้าสร้างอนาคตในแบบของตัวเอง เวทีนี้จึงไม่ใช่แค่ที่เล่าเรื่อง
        <br />
        แต่คือพื้นที่ปลดปล่อยพลังความเป็นไปได้ของเยาวชน
        เพื่อให้เสียงของพวกเขาถูกฟังอย่างแท้จริง
      </p>
      <div className="flex flex-col items-center text-center p-16 shadow-[0px_20px_40px_rgba(0,0,0,0.3)] rounded-lg">
         <Image
          width={80}
          height={80}
          src="/Landing/Story.png"
          alt="TedXYouth Bangkok"
          className="max-w-[80px] w-[100%]"
        />
        <p className="font-semibold">
          “ ขอให้คุณเดินทางด้วยความเข้าใจสิ่งที่เกิดขึ้น
          <br /> เข้าใจสัมภาระ เข้าใจตัวคุณเอง ”
        </p>
        <p>นิศาชล คำลือ</p>
      </div>
    </div>
  );
}

export default StorySection;
