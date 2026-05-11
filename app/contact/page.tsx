export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 lg:px-20 py-32">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div>

          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full text-sm text-cyan-300 mb-6">
            Contact KRCIIS
          </div>

          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-8">
            Let’s Build The Future Together
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl">
            Partner with KRCIIS for enterprise AI solutions,
            cybersecurity, cloud infrastructure, enterprise integration,
            and digital transformation initiatives.
          </p>

          <div className="space-y-6">

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <div className="text-cyan-400 font-bold mb-2">
                Email
              </div>

              <div className="text-slate-300">
                info@krciis.com
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <div className="text-cyan-400 font-bold mb-2">
                Location
              </div>

              <div className="text-slate-300">
                Kampala, Uganda
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <div className="text-cyan-400 font-bold mb-2">
                Services
              </div>

              <div className="text-slate-300">
                AI • Cloud • Cybersecurity • Enterprise Solutions
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div>

          <form className="bg-slate-900 border border-slate-800 rounded-[40px] p-10 space-y-6">

            <div>
              <label className="block text-slate-300 mb-3">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-3">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-3">
                Company
              </label>

              <input
                type="text"
                placeholder="Your company"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-3">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Tell us about your project"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 transition text-slate-950 font-bold py-4 rounded-xl"
            >
              Send Inquiry
            </button>

          </form>

        </div>

      </div>

    </main>
  );
}