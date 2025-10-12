import { Calendar } from "lucide-react";
import type { Config } from "../../models/configuration";

interface LocationProps {
  event: Config["event"];
  couple: Config["couple"];
}

export default function Details({ event, couple }: LocationProps) {
  const addCalendar = () => {
    const fecha = "20251227T140000/20251227T220000";
    const titulo = `Boda ${couple.firstName} y ${couple.secondName}`;
    const ubicacion = `${event.venue}, ${event.address}`;
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      titulo
    )}&dates=${fecha}&details=${encodeURIComponent(
      "Celebración de matrimonio"
    )}&location=${encodeURIComponent(ubicacion)}`;
    window.open(googleCalUrl, "_blank");
  };

  return (
    <div>
      <h3 className="text-lg text-gold mb-3 flex justify-center items-center gap-2">
        <Calendar size={18} /> Detalles del evento
      </h3>
      <p className="text-sm text-gray-600 mb-3">
        Ceremonia religiosa seguida de la recepción.
      </p>
      <div className="bg-gray-50 border-l-4 border-gold py-3 px-4 rounded-lg text-sm mb-4">
        <strong>Código de vestimenta:</strong> Etiqueta formal
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-400 py-3 px-4 rounded-lg text-sm mb-4">
        <strong>Importante:</strong> Se sugiere llevar traje de baño para disfrutar de la piscina tras la recepción.
      </div>
      <button
        onClick={addCalendar}
        className="bg-gold text-white px-6 py-2 rounded-full shadow-md hover:bg-gold-700 transition"
      >
        Agregar al calendario
      </button>
    </div>
  );
}
