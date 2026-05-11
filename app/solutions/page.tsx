import Image from "next/image";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 lg:px-20 py-32">

      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <div className="mb-24">

          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full text-sm text-cyan-300 mb-6">
            Enterprise Technology Solutions
          </div>

          <h1 className="text-6xl font-black leading-tight mb-8">
            Enterprise Infrastructure & AI Platforms
          </h1>

          <p className="text-slate-400 text-xl max-w-4xl leading-relaxed">
            KRCIIS delivers enterprise-grade infrastructure, AI platforms,
            cybersecurity, integration, and digital transformation solutions
            for governments, banks, telecoms, utilities, and large enterprises.
          </p>

        </div>

        {/* SOLUTIONS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              title: "IBM Power10",
              desc: "Mission-critical enterprise computing for high-performance workloads and core banking systems.",
            },
            {
              title: "LinuxONE",
              desc: "Highly secure Linux infrastructure for enterprise-scale workloads and cybersecurity.",
            },
            {
              title: "VMware",
              desc: "Virtualization, hybrid cloud infrastructure, and enterprise scalability solutions.",
            },
            {
              title: "Splunk",
              desc: "Advanced SIEM, log analytics, threat detection, and enterprise cybersecurity intelligence.",
            },
            {
              title: "IBM Watsonx",
              desc: "Enterprise AI platform for generative AI, intelligent automation, and data intelligence.",
            },
            {
              title: "IBM Maximo",
              desc: "Enterprise asset management and operational intelligence for utilities and enterprises.",
            },
            {
              title: "Cloud Pak for Integration",
              desc: "API management, automation workflows, enterprise integration, and digital connectivity.",
            },
            {
              title: "AI Infrastructure",
              desc: "Scalable AI compute platforms for machine learning, automation, and AI transformation.",
            },
            {
              title: "Cybersecurity Platforms",
              desc: "Identity protection, SIEM, SOC operations, monitoring, and enterprise resilience.",
            },
          ].map((solution, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-[30px] p-10 hover:border-cyan-500/40 transition"
            >

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-8">
                <div className="text-cyan-400 text-3xl font-black">
                  {solution.title.charAt(0)}
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">
                {solution.title}
              </h2>

              <p className="text-slate-400 leading-relaxed">
                {solution.desc}
              </p>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-28 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-slate-800 rounded-[40px] p-16 text-center">

          <h2 className="text-5xl font-bold mb-8">
            Ready for Enterprise Transformation?
          </h2>

          <p className="text-slate-400 text-xl max-w-3xl mx-auto mb-10">
            Partner with KRCIIS to modernize infrastructure,
            accelerate AI adoption, strengthen cybersecurity,
            and drive enterprise innovation.
          </p>

          <a
            href="/contact"
            className="inline-flex bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-xl font-bold text-slate-950"
          >
            Contact KRCIIS
          </a>

        </div>

      </div>

    </main>
  );
}