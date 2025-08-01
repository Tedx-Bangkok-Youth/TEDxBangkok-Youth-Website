import Image from "next/image";
import PlayerCard from "@/app/pastEvent/components/playerCard";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-white">


      <div className="flex flex-row items-center justify-center w-1856% h-262% m-5 bg-black py-6 gap-6 p-20">
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
        <div className="flex-1 h-40  flex items-center justify-center">
          <img src="/pastEvent/banner2018.png" alt="Banner" className="object-cover h-full w-full" />
        </div>
      </div>

      <div className="flex flex-row items-start justify-between w-full h-full bg-white">
        {/* Left side - Information div */}
        <div className="flex flex-col justify-start mt-5 mb-5 mr-5 ml-20 text-black w-[500px] p-6">
              <img src="/pastEvent/highlight2018.png" alt="highlight2018 image" className="object-cover w-[446%] h-[403%]" />
              <br />
              <h1 className="font-bold text-xl">รายละเอียด</h1>
              <hr className="border-black border-1 mt-5 mb-5 w-full" />
              <p>TEDxBangkok ปีนี้ ขอชวนทุกท่าน ไม่ว่าจะอยู่ในช่วงวัยใดของชีวิต 
                ร่วมเป็นส่วนหนึ่งของผู้ชมเวที “TEDxYouth@Bangkok” พื้นที่แห่ง 
                “สนามเด็กเล่า” ที่เปิดโอกาสให้เด็กไทยได้มา “ปล่อยของ”
                 ผ่านทอร์กและการแสดง 10 ชุด 
                 บอกเล่าไอเดียและเรื่องราวอันควรค่าแก่การเผยแพร่ 
                 ส่งต่อแรงบันดาลใจดี ๆ ให้กับทุกคน 
                 เพื่อนำกลับไปสร้างการเปลี่ยนแปลงให้ชีวิตและสังคม</p>
              <br />
              <br />
              <br />
              <h1 className="font-bold text-xl">คีย์เวิร์ด</h1>
              <hr className="border-black border-1 mt-5 mb-5 w-full" />
              <p>Education <br />
                Art / Design <br />
                Leaders <br />
                Bold Ideas <br />
                Environmental Advocacy Challenge</p>

        </div>
                 {/* Right side - PlayerCard component div */}
         <div className="flex flex-col justify-start text-black w-full p-6">
           <h1 className="font-bold text-xl">ผู้บรรยาย</h1>
           <hr className="border-black border-1 mt-5 mb-5 w-full" />
           <div className="grid grid-cols-4 gap-4">
             <PlayerCard 
               imageUrl="/pastEvent/อ๊ะอาย.webp" 
               text="อ๊ะอาย :  กรณิศ เล้าสุบินประเสริฐ สาวน้อยเสียงใสผู้มีผลงานจากละครเวทีต่างๆมามากมาย ตั้งคำถามว่า ทำไมละครและภาพยนต์ไทยถึงมีเด็ก รับบท “พระเอก นางเอก” น้อยมาก ทำไมผู้ใหญ่ถึงชอบถามเด็กว่...(อ่านต่อ)"
             />
             <PlayerCard 
               imageUrl="/pastEvent/speaker2.jpg" 
               text="ผักบุ้ง : สุขุมาลย์ ศรีราพัฒน์"
             />
             <PlayerCard 
               imageUrl="/pastEvent/บุ๊ค.jfif" 
               text="บุ๊ค : ธนายุทธ ณ อยุธยา"
             />
             <PlayerCard 
               imageUrl="/pastEvent/นิว.webp" 
               text="นิว : สุรีรัตน์ พรสิริรัตน์"
             />
             <PlayerCard 
               imageUrl="/pastEvent/ทีม.jfif" 
               text="ทีม : ปณิธิ วณสิริกุล"
             />
             <PlayerCard 
               imageUrl="/pastEvent/speaker6.jpg" 
               text="ภู : ภูริภัทร พูลสุข"
             />
           </div>
         </div>
      </div>
    </div>
  );
}
