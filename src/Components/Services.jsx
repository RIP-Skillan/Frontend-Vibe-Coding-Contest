import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Coins,
  BatteryCharging,
  Layers,
  Activity,
} from "lucide-react";
import BillImg from '../assets/images/bill.png';
import ChargeImg from '../assets/images/charge.png';
import CatalogImg from '../assets/images/catalog.png';

const tabs = [
  {
    name: "Billing",
    icon: <Coins className="w-4 h-4" />, 
    color: "bg-[#ffd6d6]",
    description: "Real-Time Convergent Billing",
    details:
      "Instantaneous, accurate billing across all services and payment methods.",
    img: BillImg
  },
  {
    name: "Charging",
    icon: <BatteryCharging className="w-4 h-4" />,
    color: "bg-[#ffe6b3]",
    description: "Online Charging System",
    details:
      "AI-powered insights that predict customer needs and drive personalized experiences.",
    img: ChargeImg
  },
  {
    name: "Catalog",
    icon: <Layers className="w-4 h-4" />,
    color: "bg-[#e5ffd3]",
    description: "Product Catalog",
    details:
      "Empowering tools to manage accounts intuitively and free up your team.",
    img: CatalogImg
  },
  {
    name: "Events",
    icon: <Activity className="w-4 h-4" />,
    color: "bg-[#c8f1ff]",
    description: "Event Management",
    details:
      "Seamlessly track and respond to network events in real time.",
    img: ChargeImg
  },
];

export default function Services() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="min-h-screen bg-[#91a6b6] text-[#111] px-4 sm:px-8 py-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-sm tracking-widest uppercase mb-2 opacity-60">
          Efficiency, Scalability, and Agility
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10 leading-tight">
          Unparalleled <br /> <span className="text-black">BSS/OSS Capabilities</span>
        </h1>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`rounded-xl px-4 py-2 flex items-center gap-2 transition-all duration-300 text-sm font-medium shadow-md text-white ${
                selected === i ? `${tab.color} text-white` : "bg-[#b0c4d6] opacity-50"
              }`}
            >
              {tab.icon}
              {tab.name.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-[#d5e2ec] rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {tabs[selected].description}
                </h2>
                <p className="text-sm leading-relaxed">
                  {tabs[selected].details}
                </p>
              </div>
              <div>
                <div className="w-full h-60 rounded-2xl bg-white shadow-inner flex items-center justify-center text-gray-400 text-xl font-bold">
                  <img src={tabs[selected].img} alt="" className="w-full h-full" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}