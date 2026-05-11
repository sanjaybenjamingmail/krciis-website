"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function AIChatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-cyan-500 hover:bg-cyan-400 transition flex items-center justify-center shadow-2xl"
      >
        {open ? (
          <X className="text-slate-950" size={28} />
        ) : (
          <MessageCircle className="text-slate-950" size={28} />
        )}
      </button>

      {/* CHAT WINDOW */}
      {open && (
        <div className="fixed bottom-28 right-6 z-50 w-[360px] bg-slate-900 border border-slate-800 rounded-[30px] overflow-hidden shadow-2xl">

          {/* HEADER */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-5">

            <h2 className="text-slate-950 text-xl font-black">
              KRCIIS AI Assistant
            </h2>

            <p className="text-slate-900/80 text-sm">
              Enterprise AI & Innovation Support
            </p>

          </div>

          {/* MESSAGES */}
          <div className="p-6 space-y-5 h-[350px] overflow-y-auto">

            <div className="bg-slate-800 rounded-2xl px-5 py-4 text-slate-300">
              👋 Welcome to KRCIIS.
              <br />
              How can we help you today?
            </div>

            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl px-5 py-4 text-cyan-300">
              Ask about:
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Enterprise AI Solutions</li>
                <li>• Cybersecurity</li>
                <li>• Cloud Infrastructure</li>
                <li>• Dubs AI Studio</li>
                <li>• Digital Transformation</li>
              </ul>
            </div>

          </div>

          {/* INPUT */}
          <div className="border-t border-slate-800 p-4">

            <div className="flex gap-3">

              <input
                type="text"
                placeholder="Ask something..."
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500"
              />

              <button
                className="bg-cyan-500 hover:bg-cyan-400 transition px-5 rounded-xl font-bold text-slate-950"
              >
                Send
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}