import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import type { Config } from "../../models/configuration";

interface FooterProps {
  event: Config["event"];
}

export default function Footer({ event }: FooterProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const months: Record<string, number> = {
      enero: 0, febrero: 1, marzo: 2, abril: 3,
      mayo: 4, junio: 5, julio: 6, agosto: 7,
      septiembre: 8, octubre: 9, noviembre: 10, diciembre: 11,
    };

    const updateAccount = () => {
      const partes = event.date.split(" ");
      const dia = parseInt(partes[0], 10);
      const mes = months[partes[2].toLowerCase()] ?? 0;
      const ano = parseInt(partes[4], 10);

      const timeStr = event.time.trim();
      const isPM = /PM$/i.test(timeStr);
      const [horaStr, minutoStr] = timeStr.replace(/ ?(AM|PM)$/i, "").split(":");
      let hora = parseInt(horaStr, 10);
      if (isPM && hora < 12) hora += 12;
      const minutos = parseInt(minutoStr, 10);

      const target = new Date(ano, mes, dia, hora, minutos).getTime();
      const ahora = Date.now();
      const delta = Math.max(0, target - ahora);

      const days = Math.floor(delta / (1000 * 60 * 60 * 24));
      const hours = Math.floor((delta / (1000 * 60 * 60)) % 24);
      const minutesLeft = Math.floor((delta / (1000 * 60)) % 60);
      const seconds = Math.floor((delta / 1000) % 60);

      setTimeLeft({ days, hours, minutes: minutesLeft, seconds });
    };

    updateAccount();
    const interval = setInterval(updateAccount, 1000);
    return () => clearInterval(interval);
  }, [event.date, event.time]);

  return (
    <div>
      <div className="flex justify-center gap-4 text-center text-gold my-6">
        <div>
          <div className="text-2xl font-semibold">{timeLeft.days}</div>
          <div className="text-xs text-gray-600">Days</div>
        </div>
        <div>
          <div className="text-2xl font-semibold">{timeLeft.hours}</div>
          <div className="text-xs text-gray-600">Hours</div>
        </div>
        <div>
          <div className="text-2xl font-semibold">{timeLeft.minutes}</div>
          <div className="text-xs text-gray-600">Minutes</div>
        </div>
        <div>
          <div className="text-2xl font-semibold">{timeLeft.seconds}</div>
          <div className="text-xs text-gray-600">Seconds</div>
        </div>
      </div>

      <div className="pb-6 text-center text-xs text-gray-400 flex justify-center gap-1 items-center">
        <Heart size={14} className="text-gold" /> <span>Con amor</span>
      </div>
    </div>
  );
}