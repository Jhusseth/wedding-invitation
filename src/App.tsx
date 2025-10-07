import { useState } from "react";
import { motion } from "framer-motion";
import Details from "./components/details/details";
import Invitation from "./components/invitation/invitation";
import Location from "./components/location/location";
import defaultConfig from "./models/configuration";
import Footer from "./components/footer/footer";

function App() {
  const [tab, setTab] = useState<"invitacion" | "ubicacion" | "detalles">(
    "invitacion"
  );
  const config = defaultConfig;

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-10 relative overflow-hidden bg-gold-700 wedding-background">
      <img
        src="https://png.pngtree.com/png-clipart/20250124/original/pngtree-gold-glitter-floral-corner-elegant-watercolor-flowers-leaves-clipart-png-image_20304639.png"
        className="absolute top-0 left-0 w-64 opacity-60 rotate-230 pointer-events-none"
      />
      <img
        src="https://png.pngtree.com/png-clipart/20250124/original/pngtree-gold-glitter-floral-corner-elegant-watercolor-flowers-leaves-clipart-png-image_20304639.png"
        className="absolute bottom-0 right-0 w-64 opacity-60 rotate-30 pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-gold/50"
      >
        <div className="p-8 text-center relative">
          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-3">
            Junto con nuestras familias
          </h2>

          <p className="text-sm text-gray-600 mb-6">
            Tenemos el honor de invitarte a celebrar nuestra unión en matrimonio
          </p>

          <div className="font-script text-5xl text-gold leading-tight">
            {config.couple.firstName}
            <div className="text-3xl">&</div>
            {config.couple.secondName}
          </div>

          <div className="mt-6 text-sm text-gray-600">
            <p>{config.event.date}</p>
            <p>{config.event.time}</p>
            <p>{config.event.venue}</p>
            <p>{config.event.address}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-t border-gray-100 bg-gray-50 text-sm">
          <button
            onClick={() => setTab("invitacion")}
            className={`flex-1 py-3 ${
              tab === "invitacion"
                ? "text-gold border-b-2 border-gold"
                : "text-gray-500"
            }`}
          >
            Invitación
          </button>
          <button
            onClick={() => setTab("ubicacion")}
            className={`flex-1 py-3 ${
              tab === "ubicacion"
                ? "text-gold border-b-2 border-gold"
                : "text-gray-500"
            }`}
          >
            Ubicación
          </button>
          <button
            onClick={() => setTab("detalles")}
            className={`flex-1 py-3 ${
              tab === "detalles"
                ? "text-gold border-b-2 border-gold"
                : "text-gray-500"
            }`}
          >
            Detalles
          </button>
        </div>

        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6 text-center"
        >
          {tab === "invitacion" && (
            <>
              <Invitation
                event={defaultConfig.event}
                couple={defaultConfig.couple}
                contact={defaultConfig.contact}
              />
            </>
          )}

          {tab === "ubicacion" && (
            <>
              <Location
                event={defaultConfig.event}
                location={defaultConfig.location}
              />
            </>
          )}

          {tab === "detalles" && (
            <>
              <Details
                event={defaultConfig.event}
                couple={defaultConfig.couple}
              />
            </>
          )}
        </motion.div>

        {/* <div className="pb-6 text-center text-xs text-gray-400 flex justify-center gap-1 items-center">
          <Heart size={14} className="text-gold" /> <span>Con amor</span>
        </div> */}
        <Footer  event={defaultConfig.event}/>
      </motion.div>
    </div>
  );
}

export default App;
