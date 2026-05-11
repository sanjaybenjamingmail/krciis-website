export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 lg:px-20 py-32">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-6xl font-black mb-10">
          Our Services
        </h1>

        <p className="text-slate-400 text-xl mb-20 max-w-3xl">
          Enterprise AI, cybersecurity, cloud infrastructure,
          enterprise integration, and digital transformation solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {[
            {
              title: "AI Solutions",
              desc: "Generative AI, automation, AI agents, enterprise intelligence, and AI transformation platforms.",
            },
            {
              title: "Cybersecurity",
              desc: "SIEM, SOC, threat intelligence, identity management, and enterprise protection.",
            },
            {
              title: "Cloud & Infrastructure",
              desc: "Hybrid cloud, VMware, IBM Power, LinuxONE, and enterprise-scale infrastructure.",
            },
            {
              title: "Enterprise Integration",
              desc: "API management, middleware, automation, and Cloud Pak for Integration solutions.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-10"
            >
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">
                {service.title}
              </h2>

              <p className="text-slate-400 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </main>
  );
}