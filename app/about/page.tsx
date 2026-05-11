import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* HERO */}
      <section className="relative px-6 lg:px-20 py-32 border-b border-slate-800">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.12),transparent_40%)]" />

        <div className="max-w-7xl mx-auto relative z-10">

          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full text-sm text-cyan-300 mb-6">
            About KRCIIS
          </div>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight mb-10 max-w-5xl">
            Enterprise AI, Innovation & Digital Transformation
          </h1>

<p className="text-slate-400 text-xl leading-relaxed max-w-4xl">
  <span className="text-white font-semibold">
    KRCIIS (Keynote & Rainbow Covenant International IT Solutions Limited)
  </span>{" "}
  is a next-generation enterprise technology company focused
  on AI innovation, cybersecurity, cloud infrastructure,
  enterprise integration, creator economy platforms,
  and digital transformation for governments,
  enterprises, and future digital ecosystems.
</p>

        </div>

      </section>

      {/* MISSION & VISION */}
      <section className="px-6 lg:px-20 py-28 border-b border-slate-800">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

          <div className="bg-slate-900 border border-slate-800 rounded-[40px] p-12">

            <div className="text-cyan-400 text-sm uppercase tracking-widest mb-5">
              Our Mission
            </div>

            <h2 className="text-4xl font-bold mb-8">
              Accelerating Enterprise Innovation
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">
              To empower organizations, governments, businesses, and creators
              with cutting-edge AI, cybersecurity, cloud, and digital
              transformation solutions that drive innovation, efficiency,
              resilience, and future growth.
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-[40px] p-12">

            <div className="text-cyan-400 text-sm uppercase tracking-widest mb-5">
              Our Vision
            </div>

            <h2 className="text-4xl font-bold mb-8">
              Building The Future Digital Ecosystem
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">
              To become a leading enterprise AI and digital innovation company
              delivering intelligent platforms, scalable infrastructure,
              cybersecurity excellence, and creator economy technologies across
              Africa and beyond.
            </p>

          </div>

        </div>

      </section>

      {/* CORE EXPERTISE */}
      <section className="px-6 lg:px-20 py-28 border-b border-slate-800">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-bold mb-6">
              Core Expertise
            </h2>

            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Enterprise-grade technology capabilities powering intelligent
              transformation and scalable digital innovation.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Enterprise AI Solutions",
              "Cybersecurity & SIEM",
              "Cloud Infrastructure",
              "IBM Enterprise Technologies",
              "Digital Transformation",
              "Enterprise Integration",
              "Data Platforms & Analytics",
              "Creator Economy Platforms",
              "AI Education & Innovation",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-900 border border-slate-800 rounded-[30px] p-10 hover:border-cyan-500/40 transition"
              >

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-8">
                  <div className="text-cyan-400 text-3xl font-black">
                    {item.charAt(0)}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {item}
                </h3>

                <p className="text-slate-400">
                  Enterprise-grade solutions and intelligent digital systems.
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* INDUSTRIES */}
      <section className="px-6 lg:px-20 py-28 border-b border-slate-800">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-bold mb-6">
              Industries We Support
            </h2>

            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Delivering enterprise technology solutions across critical sectors.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Banking & Financial Services",
              "Government & Public Sector",
              "Telecommunications",
              "Utilities & Energy",
              "Healthcare",
              "Education",
              "Enterprise & Corporate",
              "Digital Media & Creators",
            ].map((industry, i) => (
              <div
                key={i}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center hover:border-cyan-500/40 transition"
              >

                <div className="text-cyan-400 text-4xl font-black mb-5">
                  {industry.charAt(0)}
                </div>

                <h3 className="text-xl font-bold">
                  {industry}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 lg:px-20 py-28">

        <div className="max-w-5xl mx-auto text-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-slate-800 rounded-[40px] p-16">

          <h2 className="text-5xl font-bold mb-8">
            Partner With KRCIIS
          </h2>

          <p className="text-slate-400 text-xl max-w-3xl mx-auto mb-10">
            Empower your organization with AI innovation,
            enterprise infrastructure, cybersecurity,
            and intelligent digital transformation.
          </p>

<Link
  href="/contact"
  className="inline-flex bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-xl font-bold text-slate-950"
>
  Contact Us
</Link>

        </div>

      </section>

    </main>
  );
}