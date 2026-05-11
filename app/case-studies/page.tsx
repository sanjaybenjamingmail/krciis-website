export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* HERO */}
      <section className="px-6 lg:px-20 py-32 border-b border-slate-800">

        <div className="max-w-7xl mx-auto">

          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full text-sm text-cyan-300 mb-6">
            Enterprise Case Studies
          </div>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight mb-10 max-w-5xl">
            Enterprise Transformation & Innovation Success Stories
          </h1>

          <p className="text-slate-400 text-xl leading-relaxed max-w-4xl">
            Discover how KRCIIS delivers enterprise AI, cybersecurity,
            infrastructure modernization, integration, and digital
            transformation solutions across industries.
          </p>

        </div>

      </section>

      {/* CASE STUDIES */}
      <section className="px-6 lg:px-20 py-28">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

          {[
            {
              industry: "Banking & Financial Services",
              title: "Enterprise Infrastructure Modernization",
              desc: "Implemented scalable enterprise infrastructure and cybersecurity solutions to support mission-critical banking systems, high availability, and operational resilience.",
              tech: [
                "IBM Power10",
                "VMware",
                "Cybersecurity",
                "High Availability",
              ],
            },

            {
              industry: "Government & Public Sector",
              title: "Digital Transformation & Integration",
              desc: "Designed intelligent enterprise integration and automation solutions to improve interoperability, service delivery, and digital transformation initiatives.",
              tech: [
                "Cloud Pak for Integration",
                "API Management",
                "Automation",
                "Enterprise Integration",
              ],
            },

            {
              industry: "Utilities & Energy",
              title: "Enterprise Asset Management",
              desc: "Delivered intelligent enterprise asset management and operational visibility solutions for large-scale infrastructure and utility environments.",
              tech: [
                "IBM Maximo",
                "Analytics",
                "Infrastructure",
                "Operations",
              ],
            },

            {
              industry: "AI & Digital Innovation",
              title: "AI Creator Economy Platform",
              desc: "Built AI-powered creator economy and education ecosystems supporting AI filmmaking, automation, digital innovation, and creator workflows.",
              tech: [
                "AI Platforms",
                "Automation",
                "AI Video",
                "Creator Economy",
              ],
            },

          ].map((study, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-[40px] p-12 hover:border-cyan-500/40 transition"
            >

              <div className="text-cyan-400 text-sm uppercase tracking-widest mb-5">
                {study.industry}
              </div>

              <h2 className="text-4xl font-bold leading-tight mb-8">
                {study.title}
              </h2>

              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                {study.desc}
              </p>

              <div className="flex flex-wrap gap-4">

                {study.tech.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* INDUSTRIES */}
      <section className="px-6 lg:px-20 py-28 border-t border-slate-800">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-bold mb-6">
              Industries We Transform
            </h2>

            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Enterprise technology innovation across mission-critical sectors.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Banking",
              "Government",
              "Telecommunications",
              "Utilities",
              "Healthcare",
              "Education",
              "AI Innovation",
              "Enterprise",
            ].map((industry, i) => (
              <div
                key={i}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center hover:border-cyan-500/40 transition"
              >

                <div className="text-cyan-400 text-5xl font-black mb-5">
                  {industry.charAt(0)}
                </div>

                <h3 className="text-2xl font-bold">
                  {industry}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 lg:px-20 py-28 border-t border-slate-800">

        <div className="max-w-5xl mx-auto text-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-slate-800 rounded-[40px] p-16">

          <h2 className="text-5xl font-bold mb-8">
            Let’s Build Your Success Story
          </h2>

          <p className="text-slate-400 text-xl max-w-3xl mx-auto mb-10">
            Partner with KRCIIS to accelerate enterprise transformation,
            AI innovation, cybersecurity resilience, and digital modernization.
          </p>

          <a
            href="/contact"
            className="inline-flex bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-xl font-bold text-slate-950"
          >
            Start Your Transformation
          </a>

        </div>

      </section>

    </main>
  );
}