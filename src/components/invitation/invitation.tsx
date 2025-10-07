import type { Config } from "../../models/configuration";

interface LocationProps {
  event: Config["event"];
  couple: Config["couple"];
  contact: Config["contact"];
}

export default function Invitation({ event, couple, contact }: LocationProps) {
    const confirmAssistance = () => {
    const mensaje = `Hola! Confirmo mi asistencia a la boda de ${couple.firstName} y ${couple.secondName} el ${event.date}`;
    window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(mensaje)}`, "_blank");
  };

  return (
    <div>
      <h3 className="text-lg text-gold mb-2">Confirma tu asistencia</h3>
      <p className="text-gray-600 mb-4">
        Nos encantará contar contigo en este día tan especial.
      </p>
      <button
        onClick={confirmAssistance}
        className="bg-gold text-white px-6 py-2 rounded-full shadow-md hover:bg-gold-700 transition"
      >
        Confirmar Asistencia
      </button>
    </div>
  );
}
