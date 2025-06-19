import { useState } from "react";
import { Settings2 } from "lucide-react";

const brandKits = [
  {
    name: "ECorp",
    color: "bg-green-500",
    selected: false,
  },
  {
    name: "ICorp",
    color: "bg-orange-400",
    selected: false,
  },
  {
    name: "The Agency",
    color: "bg-red-500",
    selected: true,
  },
];

export default function BrandKitSelector() {
  const [selectedIndex, setSelectedIndex] = useState(2);

  return (
    <div className="max-w-sm mx-auto my-10 p-4 bg-black rounded-2xl shadow-lg border border-zinc-800 relative">
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-60 blur-xl z-0" />
      <div className="relative z-10">
        <h2 className="text-white text-lg font-semibold mb-4">Brand Kits</h2>
        <div className="space-y-3">
          {brandKits.map((kit, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`flex items-center justify-between p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 cursor-pointer transition-all duration-300 border border-zinc-800 ${
                selectedIndex === idx ? "ring-2 ring-purple-500" : ""
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div
                    className={`w-4 h-4 rounded-sm border border-zinc-600 bg-zinc-800 flex items-center justify-center`}
                  >
                    {selectedIndex === idx && (
                      <div className="w-3 h-3 bg-purple-500 rounded-sm" />
                    )}
                  </div>
                  <span
                    className={`w-3 h-3 absolute left-4 top-0 ${kit.color} rounded-full border-2 border-zinc-900`}
                  />
                </div>
                <span className="text-white font-medium">{kit.name}</span>
              </div>
              <Settings2 className="text-white w-4 h-4 opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
