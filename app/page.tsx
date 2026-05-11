"use client";

import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* DUBS AI STUDIO */}
      <section className="px-6 lg:px-20 py-24 border-b border-slate-800">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full text-sm text-cyan-300 mb-6">
              AI Education & Creator Economy Platform
            </div>

            <h2 className="text-5xl font-bold mb-8 leading-tight">
              Dubs AI Studio
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Dubs AI Studio is the AI education and creative technology division
              of KRCIIS focused on AI-powered content creation, creator economy
              training, AI filmmaking, automation workflows, and digital innovation.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Through Dubs AI Studio, we empower creators, entrepreneurs,
              students, and businesses with practical AI skills for the future
              digital economy.
            </p>

            <a
              href="https://app.dubs.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition px-7 py-4 rounded-xl font-semibold text-slate-950"
            >
              Launch Platform <ArrowRight size={18} />
            </a>
          </div>

          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-500/10 border border-slate-800 rounded-[40px] p-10 backdrop-blur-xl">
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-10">

              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-2xl font-black">
                  D
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    Dubs AI Studio
                  </h3>

                  <p className="text-slate-400">
                    AI Training & Creative Platform
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "AI Video Creation",
                  "Microdrama Production",
                  "Creator Economy Training",
                  "AI Automation Workflows",
                  "Digital Media Innovation",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="border border-slate-800 rounded-xl px-5 py-4 text-slate-300 bg-slate-900"
                  >
                    {item}
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 lg:px-20 py-24">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-8">
            Let's Build Something Amazing
          </h2>

          <p className="text-slate-400 text-lg mb-10">
            Partner with KRCIIS for AI innovation, education,
            digital transformation, and creative technology solutions.
          </p>

          <a
            href="mailto:info@krciis.com"
            className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-slate-200 transition px-8 py-4 rounded-xl font-semibold"
          >
            Contact Us <ArrowRight size={18} />
          </a>

        </div>
      </section>

    </main>
  );
}