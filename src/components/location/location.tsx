import { MapPin } from "lucide-react";
import type { Config } from "../../models/configuration";

interface LocationProps {
  event: Config["event"];
  location: Config["location"];
}

export default function Location({ event, location }: LocationProps) {
  const openMap = () => window.open(location.googleMapsUrl, "_blank");

  return (
    <div>
      <h3 className="text-lg text-gold mb-2 flex justify-center items-center gap-2">
        <MapPin size={18} /> Cómo llegar
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        <strong>{event.venue}</strong>
        <br />
        {event.address}
      </p>
      <button
        onClick={openMap}
        className="bg-gold text-white px-6 py-2 rounded-full shadow-md hover:bg-gold-700 transition"
      >
      Ver en Google Maps
      </button>
    </div>
  );
}
