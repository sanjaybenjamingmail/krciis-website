"use client";

import { useState } from "react";
import CountUp from "react-countup";
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
  Menu,
  X,
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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <main className="bg-slate-950 text-white overflow-hidden min-h-screen">

      {/* NAVBAR */}
<header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800">

  <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

    {/* LOGO */}
    <div className="flex items-center gap-3">
      <Image
        src="/logo.png"
        alt="KRCIIS Logo"
        width={180}
        height={60}
        priority
        className="object-contain"
      />
    </div>

    {/* DESKTOP MENU */}
    <nav className="hidden md:flex items-center gap-8 text-slate-300">
      <a href="#home" className="hover:text-cyan-400 transition">Home</a>
      <a href="#services" className="hover:text-cyan-400 transition">Services</a>
      <a href="#solutions" className="hover:text-cyan-400 transition">Solutions</a>
      <a href="#dubs" className="hover:text-cyan-400 transition">Dubs AI Studio</a>
      <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
    </nav>

    {/* DESKTOP BUTTON */}
    <a
      href="#contact"
      className="hidden md:inline-flex bg-cyan-500 hover:bg-cyan-400 transition px-5 py-3 rounded-xl font-semibold text-slate-950"
    >
      Get Started
    </a>

    {/* MOBILE BUTTON */}
    <button
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="md:hidden text-white"
    >
      {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
    </button>

  </div>

  {/* MOBILE MENU */}
  {mobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="md:hidden border-t border-slate-800 bg-slate-950 px-6 py-8"
    >

      <div className="flex flex-col gap-6 text-lg text-slate-300">

        <a href="#home" onClick={() => setMobileMenuOpen(false)}>
          Home
        </a>

        <a href="#services" onClick={() => setMobileMenuOpen(false)}>
          Services
        </a>

        <a href="#solutions" onClick={() => setMobileMenuOpen(false)}>
          Solutions
        </a>

        <a href="#dubs" onClick={() => setMobileMenuOpen(false)}>
          Dubs AI Studio
        </a>

        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
          Contact
        </a>

        <a
          href="#contact"
          className="bg-cyan-500 text-slate-950 px-5 py-3 rounded-xl font-semibold text-center"
        >
          Get Started
        </a>

      </div>

    </motion.div>
  )}

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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, y: 0 }}
          >

            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full text-sm text-cyan-300 mb-8">
              AI • Innovation • Enterprise Transformation
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
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

{/* ABOUT KRCIIS */}
<section className="px-6 lg:px-20 py-28 border-t border-slate-800">

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

    {/* LEFT */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >

      <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full text-sm text-cyan-300 mb-6">
        About KRCIIS
      </div>

      <h2 className="text-5xl font-bold mb-8 leading-tight">
        Enterprise Technology & AI Innovation Partner
      </h2>

      <p className="text-slate-300 text-lg leading-relaxed mb-8">
        KRCIIS is a next-generation enterprise technology company focused on
        AI innovation, cloud infrastructure, cybersecurity, enterprise
        integration, digital transformation, and intelligent platforms.
      </p>

      <p className="text-slate-400 text-lg leading-relaxed mb-10">
        We help governments, financial institutions, telecoms, utilities,
        enterprises, and digital creators leverage cutting-edge technologies
        to accelerate innovation, automation, security, and operational
        excellence.
      </p>

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="text-cyan-400 text-3xl font-black mb-2">
            <CountUp end={25} duration={3} />+
          </div>

          <div className="text-slate-400">
            Enterprise Projects
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="text-cyan-400 text-3xl font-black mb-2">
            <CountUp end={100} duration={3} />+
          </div>

          <div className="text-slate-400">
            Clients Supported
          </div>
        </div>

      </div>
    </motion.div>

    {/* RIGHT */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >

      <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-slate-800 rounded-[40px] p-10 backdrop-blur-xl">

        <div className="grid gap-6">

          {[
            "Enterprise AI Solutions",
            "Cloud & Infrastructure",
            "Cybersecurity & SIEM",
            "Digital Transformation",
            "IBM Enterprise Technologies",
            "AI Education & Innovation",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 10 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl px-6 py-5 text-slate-300"
            >
              {item}
            </motion.div>
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

{/* ENTERPRISE SOLUTIONS */}
<section
  id="solutions"
  className="px-6 lg:px-20 py-28 border-t border-slate-800"
>
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-20">
      <h2 className="text-5xl font-bold mb-6">
        Enterprise Solutions
      </h2>

      <p className="text-slate-400 text-lg max-w-3xl mx-auto">
        Enterprise-grade infrastructure, AI platforms, cybersecurity,
        automation, and digital transformation solutions for governments,
        banks, telecoms, utilities, and large enterprises.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        ["IBM Power10", "Mission-critical enterprise computing"],
        ["LinuxONE", "Secure Linux enterprise infrastructure"],
        ["VMware", "Virtualization & hybrid cloud"],
        ["Splunk", "SIEM & cybersecurity analytics"],
        ["IBM Maximo", "Enterprise asset management"],
        ["Watsonx", "AI & data intelligence platform"],
        ["Cloud Pak for Integration", "API & enterprise integration"],
        ["AI Infrastructure", "Scalable AI computing platforms"],
      ].map(([title, subtitle], i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          whileHover={{ y: -10 }}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/40 transition"
        >

          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
            <div className="text-cyan-400 text-2xl font-black">
              {title.charAt(0)}
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">
            {title}
          </h3>

          <p className="text-slate-400 leading-relaxed">
            {subtitle}
          </p>

        </motion.div>
      ))}

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

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

    {/* LEFT */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >

      <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full text-sm text-cyan-300 mb-6">
        Contact KRCIIS
      </div>

      <h2 className="text-5xl font-bold mb-8 leading-tight">
        Let’s Build The Future Together
      </h2>

      <p className="text-slate-400 text-lg leading-relaxed mb-10">
        Partner with KRCIIS for enterprise AI solutions,
        cloud infrastructure, cybersecurity, digital transformation,
        and intelligent innovation platforms.
      </p>

      <div className="space-y-6">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="text-cyan-400 font-bold mb-2">
            Email
          </div>

          <div className="text-slate-300">
            info@krciis.com
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="text-cyan-400 font-bold mb-2">
            Location
          </div>

          <div className="text-slate-300">
            Kampala, Uganda
          </div>
        </div>

      </div>

    </motion.div>

    {/* RIGHT */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >

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
            rows={5}
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

    </motion.div>

  </div>

</section>

      {/* FOOTER */}
<footer className="border-t border-slate-800 px-6 lg:px-20 py-20 bg-slate-950">

  <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

    {/* BRAND */}
    <div>
      <Image
        src="/logo.png"
        alt="KRCIIS Logo"
        width={220}
        height={70}
        className="object-contain mb-6"
      />

      <p className="text-slate-400 leading-relaxed">
        Enterprise AI, cloud infrastructure, cybersecurity,
        digital transformation, and innovation solutions for
        governments and enterprises.
      </p>
    </div>

    {/* SERVICES */}
    <div>
      <h3 className="text-white font-bold text-lg mb-5">
        Services
      </h3>

      <ul className="space-y-3 text-slate-400">
        <li>AI Solutions</li>
        <li>Cybersecurity</li>
        <li>Cloud Infrastructure</li>
        <li>Enterprise Integration</li>
        <li>Data Platforms</li>
      </ul>
    </div>

    {/* ENTERPRISE */}
    <div>
      <h3 className="text-white font-bold text-lg mb-5">
        Enterprise
      </h3>

      <ul className="space-y-3 text-slate-400">
        <li>IBM Power10</li>
        <li>LinuxONE</li>
        <li>VMware</li>
        <li>Splunk</li>
        <li>Watsonx</li>
      </ul>
    </div>

    {/* CONTACT */}
    <div>
      <h3 className="text-white font-bold text-lg mb-5">
        Contact
      </h3>

      <ul className="space-y-3 text-slate-400">
        <li>info@krciis.com</li>
        <li>Kampala, Uganda</li>
        <li>Enterprise AI Solutions</li>
        <li>Digital Transformation</li>
      </ul>
    </div>

  </div>

  {/* BOTTOM BAR */}
  <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">

    <p>
      © 2026 KRCIIS. All rights reserved.
    </p>

    <div className="flex items-center gap-6">
      <a href="#" className="hover:text-cyan-400 transition">
        LinkedIn
      </a>

      <a href="#" className="hover:text-cyan-400 transition">
        YouTube
      </a>

      <a href="#" className="hover:text-cyan-400 transition">
        GitHub
      </a>
    </div>

  </div>

</footer>

    </main>
  );
}
