import Image from "next/image";

export default function DubsAIStudioPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* HERO */}
      <section className="relative px-6 lg:px-20 py-32 border-b border-slate-800">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent_40%)]" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full text-sm text-cyan-300 mb-6">
              AI Education & Creator Economy Platform
            </div>

            <h1 className="text-6xl lg:text-7xl font-black leading-tight mb-8">
              Dubs AI Studio
            </h1>

            <p className="text-slate-300 text-xl leading-relaxed mb-10">
              Dubs AI Studio is the AI innovation and creator economy division
              of KRCIIS focused on AI filmmaking, AI video creation,
              automation workflows, creator education, and future digital media.
            </p>

            <div className="flex flex-wrap gap-5">

              <a
                href="https://app.dubs.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-xl font-bold text-slate-950"
              >
                Launch Platform
              </a>

              <a
                href="#features"
                className="inline-flex border border-slate-700 hover:border-cyan-500 transition px-8 py-4 rounded-xl font-semibold"
              >
                Explore Features
              </a>

            </div>

          </div>

          {/* RIGHT */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-slate-800 rounded-[40px] p-10 backdrop-blur-xl">

            <div className="bg-slate-950 border border-slate-800 rounded-[30px] p-10">

              <div className="flex items-center gap-5 mb-10">

                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-3xl font-black">
                  D
                </div>

                <div>
                  <h2 className="text-3xl font-bold">
                    Dubs AI Studio
                  </h2>

                  <p className="text-slate-400">
                    AI Creator Platform
                  </p>
                </div>

              </div>

              <div className="space-y-5">

                {[
                  "AI Video Creation",
                  "AI Filmmaking",
                  "Microdrama Production",
                  "Creator Economy Training",
                  "AI Prompt Engineering",
                  "Automation Workflows",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-slate-900 border border-slate-800 rounded-2xl px-6 py-5 text-slate-300"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="px-6 lg:px-20 py-28 border-b border-slate-800"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-bold mb-6">
              Platform Features
            </h2>

            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Tools, education, workflows, and AI systems for creators,
              entrepreneurs, businesses, and future digital innovators.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "AI Video Creation",
                desc: "Create cinematic AI-generated content, short films, and social media visuals.",
              },
              {
                title: "Microdrama Production",
                desc: "AI-assisted storytelling and short-form cinematic content production.",
              },
              {
                title: "Creator Economy Training",
                desc: "Learn AI monetization, digital business, and future creator workflows.",
              },
              {
                title: "Prompt Engineering",
                desc: "Advanced AI prompting systems for image, video, automation, and workflows.",
              },
              {
                title: "Automation Systems",
                desc: "Build intelligent AI workflows for creators and enterprises.",
              },
              {
                title: "AI Innovation Academy",
                desc: "Training future digital innovators, entrepreneurs, and AI creators.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-slate-900 border border-slate-800 rounded-[30px] p-10 hover:border-cyan-500/40 transition"
              >

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-8">
                  <div className="text-cyan-400 text-3xl font-black">
                    {feature.title.charAt(0)}
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-6">
                  {feature.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 lg:px-20 py-28">

        <div className="max-w-5xl mx-auto text-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-slate-800 rounded-[40px] p-16">

          <h2 className="text-5xl font-bold mb-8">
            The Future of AI Creativity Starts Here
          </h2>

          <p className="text-slate-400 text-xl mb-10 max-w-3xl mx-auto">
            Join the next generation of AI creators, filmmakers,
            entrepreneurs, and digital innovators with Dubs AI Studio.
          </p>

          <a
            href="https://app.dubs.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-xl font-bold text-slate-950"
          >
            Explore Dubs AI Studio
          </a>

        </div>

      </section>

    </main>
  );
}