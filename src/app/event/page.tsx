import Link from "next/link";
import { eventData } from "@/data/Eventdata";

export default function PastEventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8 text-center">Past Events</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventData.map((event) => (
            <Link 
              key={event.id} 
              href={`/event/${event.slug}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <img 
                  src={event.banner} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-black mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-2">{event.date}</p>
                <p className="text-gray-600 mb-4">{event.venue}</p>
                <p className="text-gray-800 text-sm line-clamp-3">
                  {event.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
