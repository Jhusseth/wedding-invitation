export interface Config {
  couple: { firstName: string; secondName: string };
  event: { date: string; time: string; venue: string; address: string };
  contact: { whatsapp: string };
  location: { googleMapsUrl: string };
}

const env = import.meta.env;

const config: Config = {
  couple: {
    firstName: String(env.VITE_FIRST_NAME),
    secondName: String(env.VITE_SECOND_NAME) ,
  },
  event: {
    date: String(env.VITE_EVENT_DATE),
    time: String(env.VITE_EVENT_TIME),
    venue: String(env.VITE_EVENT_VENUE),
    address: String(env.VITE_EVENT_ADDRESS),
  },
  contact: {
    whatsapp: String(env.VITE_WHATSAPP),
  },
  location: {
    googleMapsUrl: String(env.VITE_GOOGLE_MAPS_URL),
  },
};

export default config;
