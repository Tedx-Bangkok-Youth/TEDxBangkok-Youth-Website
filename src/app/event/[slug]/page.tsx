
import Image from "next/image";
import PlayerCard from "@/app/event/components/playerCard";
import { getEventBySlug, getAllEventSlugs } from "@/data/Eventdata";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = getAllEventSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex flex-row items-center justify-center w-1856% h-262% m-5 bg-black py-6 gap-6 p-20">
        <div className="flex flex-col bg-black p-4 w-72 h-40 justify-between">
          <div className="w-full flex justify-start">
            <img src={event.leftBanner} alt={event.title} className="h-118px w-410px" />
          </div>
          <div className="text-white text-xs mt-2 text-left">
            วันที่จัดงาน: {event.date}<br />
            สถานที่: {event.venue}
          </div>
        </div>
        <div className="flex-1 h-40 flex items-center justify-center">
          <img src={event.banner} alt="Banner" className="object-cover h-full w-full" />
        </div>
      </div>

      <div className="flex flex-row items-start justify-between w-full h-full bg-white">
        <div className="flex flex-col justify-start mt-5 mb-5 mr-5 ml-20 text-black w-[500px] p-6">
          <img src={event.highlight} alt="highlight image" className="object-cover w-[446%] h-[403%]" />
          <br />
          <h1 className="font-bold text-xl">รายละเอียด</h1>
          <hr className="border-black border-1 mt-5 mb-5 w-full" />
          <p>{event.description}</p>
          <br />
          <br />
          <br />
          <h1 className="font-bold text-xl">คีย์เวิร์ด</h1>
          <hr className="border-black border-1 mt-5 mb-5 w-full" />
          <div>
            {event.keywords.map((keyword, index) => (
              <p key={index}>{keyword}</p>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col justify-start text-black w-full p-6">
          <h1 className="font-bold text-xl">ผู้บรรยาย</h1>
          <hr className="border-black border-1 mt-5 mb-5 w-[84%]" />
          <div className="flex flex-wrap gap-4">
            {event.speakers.map((speaker, index) => (
              <PlayerCard 
                key={index}
                imageUrl={speaker.imageUrl} 
                text={`${speaker.name} : ${speaker.fullName} ${speaker.description}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
