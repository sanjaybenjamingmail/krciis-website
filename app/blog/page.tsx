export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* HERO */}
      <section className="px-6 lg:px-20 py-32 border-b border-slate-800">

        <div className="max-w-7xl mx-auto">

          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full text-sm text-cyan-300 mb-6">
            KRCIIS Insights & Innovation
          </div>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight mb-10 max-w-5xl">
            Enterprise AI, Cybersecurity & Digital Transformation Insights
          </h1>

          <p className="text-slate-400 text-xl leading-relaxed max-w-4xl">
            Explore the latest trends, enterprise technologies,
            AI innovation strategies, cybersecurity intelligence,
            cloud transformation, and future digital ecosystems.
          </p>

        </div>

      </section>

      {/* FEATURED ARTICLE */}
      <section className="px-6 lg:px-20 py-28 border-b border-slate-800">

        <div className="max-w-7xl mx-auto">

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-slate-800 rounded-[40px] p-14">

            <div className="text-cyan-400 text-sm uppercase tracking-widest mb-6">
              Featured Insight
            </div>

            <h2 className="text-5xl font-bold leading-tight mb-8 max-w-4xl">
              The Future of Enterprise AI Transformation in Africa
            </h2>

            <p className="text-slate-400 text-xl leading-relaxed max-w-4xl mb-10">
              How AI, intelligent automation, cybersecurity,
              and enterprise infrastructure are transforming
              governments, banks, telecoms, and businesses across Africa.
            </p>

            <a
              href="#"
              className="inline-flex bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-xl font-bold text-slate-950"
            >
              Read Article
            </a>

          </div>

        </div>

      </section>

      {/* BLOG GRID */}
      <section className="px-6 lg:px-20 py-28">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                category: "Artificial Intelligence",
                title: "Enterprise AI & Intelligent Automation",
                desc: "How organizations are leveraging AI systems to accelerate digital transformation and operational intelligence.",
              },

              {
                category: "Cybersecurity",
                title: "Modern SIEM & Threat Intelligence",
                desc: "Strengthening enterprise resilience through intelligent cybersecurity monitoring and analytics.",
              },

              {
                category: "Cloud Infrastructure",
                title: "Hybrid Cloud Transformation",
                desc: "The future of scalable enterprise infrastructure and virtualization strategies.",
              },

              {
                category: "IBM Technologies",
                title: "IBM Power10 & LinuxONE",
                desc: "Enterprise-grade computing platforms for mission-critical workloads and AI systems.",
              },

              {
                category: "Digital Transformation",
                title: "Enterprise Integration & APIs",
                desc: "Connecting modern enterprise ecosystems with automation and intelligent integration.",
              },

              {
                category: "Creator Economy",
                title: "AI Filmmaking & Creator Innovation",
                desc: "The rise of AI-generated content, microdrama production, and digital creator ecosystems.",
              },

            ].map((post, i) => (
              <div
                key={i}
                className="bg-slate-900 border border-slate-800 rounded-[30px] p-10 hover:border-cyan-500/40 transition"
              >

                <div className="text-cyan-400 text-sm uppercase tracking-widest mb-5">
                  {post.category}
                </div>

                <h2 className="text-3xl font-bold leading-tight mb-6">
                  {post.title}
                </h2>

                <p className="text-slate-400 leading-relaxed mb-10">
                  {post.desc}
                </p>

                <a
                  href="#"
                  className="inline-flex text-cyan-400 hover:text-cyan-300 transition"
                >
                  Read More →
                </a>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* NEWSLETTER */}
      <section className="px-6 lg:px-20 py-28 border-t border-slate-800">

        <div className="max-w-5xl mx-auto text-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-slate-800 rounded-[40px] p-16">

          <h2 className="text-5xl font-bold mb-8">
            Stay Ahead of Enterprise Innovation
          </h2>

          <p className="text-slate-400 text-xl max-w-3xl mx-auto mb-10">
            Subscribe for enterprise AI insights, cybersecurity trends,
            infrastructure innovation, and digital transformation strategies.
          </p>

          <div className="flex flex-col md:flex-row gap-5 max-w-2xl mx-auto">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-6 py-4 text-white outline-none focus:border-cyan-500"
            />

            <button
              className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-xl font-bold text-slate-950"
            >
              Subscribe
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}