"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Cloud,
  Shield,
  Database,
  GraduationCap,
  Server,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Solutions",
    desc: "Generative AI, automation, AI agents, and enterprise intelligence solutions.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    desc: "Hybrid cloud, VMware, IBM Power, LinuxONE, and scalable enterprise systems.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Threat monitoring, SIEM, identity security, and enterprise protection.",
  },
  {
    icon: Database,
    title: "Data Platforms",
    desc: "Analytics, data lakes, Watsonx, BI reporting, and intelligent data platforms.",
  },
  {
    icon: GraduationCap,
    title: "AI Education",
    desc: "AI creator economy training, digital innovation, and future workforce skills.",
  },
  {
    icon: Server,
    title: "Enterprise Integration",
    desc: "API management, automation workflows, and enterprise system integration.",
  },
];

export default function Home() {
  return (
    <main className="bg-slate-950 text-white overflow-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="KRCIIS Logo"
              width={200}
              height={70}
              priority
              className="object-contain"
              />
          </div>

          <nav className="hidden md:flex items-center gap-8 text-slate-300">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#services" className="hover:text-cyan-400 transition">Services</a>
            <a href="#solutions" className="hover:text-cyan-400 transition">Solutions</a>
            <a href="#dubs" className="hover:text-cyan-400 transition">Dubs AI Studio</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </nav>

          <a
            href="#contact"
            className="bg-cyan-500 hover:bg-cyan-400 transition px-5 py-3 rounded-xl font-semibold text-slate-950"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex items-center relative px-6 lg:px-20 pt-32"
      >

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.18),transparent_40%)]" />
        <div className="absolute top-40 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 blur-[140px] rounded-full" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -8 }}
          >

            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full text-sm text-cyan-300 mb-8">
              AI • Innovation • Enterprise Transformation
            </div>

            <h1 className="text-6xl lg:text-7xl font-black leading-tight mb-8">
              Transforming Enterprises Through AI Innovation
            </h1>

            <p className="text-slate-300 text-xl leading-relaxed mb-10 max-w-2xl">
              KRCIIS delivers enterprise AI solutions, cloud infrastructure,
              cybersecurity, digital transformation, and creator economy innovation
              for governments, businesses, and future digital leaders.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-xl font-semibold text-slate-950"
              >
                Explore Services <ArrowRight size={18} />
              </a>

              <a
                href="#dubs"
                className="inline-flex items-center gap-2 border border-slate-700 hover:border-cyan-500 transition px-8 py-4 rounded-xl font-semibold"
              >
                Dubs AI Studio
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-slate-800 rounded-[40px] p-10 backdrop-blur-xl">

              <div className="grid grid-cols-2 gap-5">

                {[
                  ["AI Solutions", "Generative AI & Automation"],
                  ["Cloud", "Hybrid Infrastructure"],
                  ["Cybersecurity", "Threat Protection"],
                  ["Data Platforms", "Analytics & Intelligence"],
                ].map(([title, subtitle], i) => (
                <div
                  key={i}
                  className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center"
                  >
                <div className="text-cyan-400 text-lg font-bold mb-3">
                {title}
                </div>

                <div className="text-slate-400 text-sm">
                {subtitle}
                </div>
                </div>
              ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="px-6 lg:px-20 py-28 border-t border-slate-800"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              Our Services
            </h2>

            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Enterprise-grade solutions designed for digital transformation,
              AI innovation, cloud infrastructure, and future-ready organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/40 transition"
                >
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                    <Icon className="text-cyan-400" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DUBS AI STUDIO */}
      <section
        id="dubs"
        className="px-6 lg:px-20 py-28 border-t border-slate-800"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

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
              Empowering creators, entrepreneurs, students, and businesses with
              practical AI skills for the future digital economy.
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
                  <h3 className="text-2xl font-bold">Dubs AI Studio</h3>
                  <p className="text-slate-400">AI Training & Creative Platform</p>
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

      {/* STATS */}
      <section className="px-6 lg:px-20 py-24 border-t border-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

          {[
            ["25+", "Enterprise Projects"],
            ["100+", "Clients Supported"],
            ["10+", "AI Solutions"],
            ["24/7", "Technical Support"],
          ].map(([num, label], i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-10"
            >
              <div className="text-5xl font-black text-cyan-400 mb-4">
                {num}
              </div>

              <div className="text-slate-400">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-6 lg:px-20 py-28 border-t border-slate-800"
      >
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-8">
            Let's Build The Future Together
          </h2>

          <p className="text-slate-400 text-lg mb-12">
            Partner with KRCIIS for AI innovation, digital transformation,
            enterprise technology, and creator economy solutions.
          </p>

          <a
            href="mailto:info@krciis.com"
            className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-slate-200 transition px-8 py-4 rounded-xl font-semibold"
          >
            Contact Us <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 px-6 lg:px-20 py-10 text-center text-slate-500">
        <p>
          © 2026 KRCIIS • AI • Enterprise • Innovation
        </p>
      </footer>

    </main>
  );
}
