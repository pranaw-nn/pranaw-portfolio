import { motion } from "framer-motion";
import { useState } from "react";

import profileImage from "./assets/profile/profile.png";

import cyberResume from "./assets/resume/cyber-resume.pdf";
import softwareResume from "./assets/resume/software-resume.pdf";

import isc2Cert from "./assets/certificates/CC.png";
import awsCert from "./assets/certificates/AWS.png";
import oracleCert from "./assets/certificates/oracle.png";
import googleCert from "./assets/certificates/google ai.png";
import ciscoCert from "./assets/certificates/cisco.png";
import thmCert from "./assets/certificates/thm.png";
import nptelCert from "./assets/certificates/nptel.png";
import kaggleCert from "./assets/certificates/kaggle.png";
import blockchainCert from "./assets/certificates/blockchain.png";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaShieldAlt,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const QuoteDivider = ({ quote }) => (
  <div className="relative z-10 flex items-center justify-center px-8 py-20">
    <div className="flex items-center gap-6">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500/30" />
      <p className="text-center text-lg italic tracking-wide text-slate-500 md:text-xl">
        "{quote}"
      </p>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-500/30" />
    </div>
  </div>
);

const StatCard = ({ value, label }) => (
  <div className="flex flex-col items-center gap-1 rounded-2xl border border-slate-800 bg-white/[0.03] px-8 py-6 backdrop-blur-xl">
    <span className="text-4xl font-black text-blue-400">{value}</span>
    <span className="text-sm uppercase tracking-[0.2em] text-slate-500">{label}</span>
  </div>
);

export default function App() {
  const certificates = [
    { image: isc2Cert, title: "ISC2 CC", description: "Certified in Cybersecurity" },
    { image: awsCert, title: "AWS Cloud Practitioner", description: "Cloud fundamentals & infrastructure" },
    { image: oracleCert, title: "Oracle Foundations", description: "Oracle Cloud Infrastructure basics" },
    { image: googleCert, title: "Google AI Essentials", description: "AI fundamentals & prompting workflows" },
    { image: ciscoCert, title: "Cisco Cybersecurity", description: "Networking security & cyber defense" },
    { image: thmCert, title: "TryHackMe", description: "Hands-on cybersecurity learning" },
    { image: nptelCert, title: "NPTEL Python", description: "Joy of Computing using Python" },
    { image: kaggleCert, title: "Kaggle Capstone", description: "Data exploration & analytics" },
    { image: blockchainCert, title: "Blockchain", description: "Blockchain technology fundamentals" },
  ];

  const duplicatedCertificates = [...certificates, ...certificates];

  const projects = [
    {
      title: "ScholarLoan",
      description: "Built a finance guidance platform helping Indian students discover educational loans and scholarships — cutting through the noise to surface what actually matters.",
      tag: "Web Platform",
      year: "2025",
      tech: ["JavaScript", "MongoDB", "HTML/CSS"],
      github: "https://github.com/pranaw-nn",
      flavor: "funding futures.",
      color: "hover:border-blue-500/30 hover:shadow-blue-500/10",
      accent: "blue",
    },
    {
      title: "CyberLog AI",
      description: "AI-powered log analysis tool that scans system logs and identifies threats, anomalies, and suspicious patterns — because the logs always know first.",
      tag: "Cybersecurity / AI",
      year: "2025",
      tech: ["Python", "AI", "Log Analysis"],
      github: "https://github.com/pranaw-nn/cyberlog-ai",
      flavor: "threats don't hide.",
      color: "hover:border-cyan-500/30 hover:shadow-cyan-500/10",
      accent: "cyan",
    },
    {
      title: "IoT Device Monitoring",
      description: "Monitoring system capable of collecting and visualizing IoT device metrics in real time — keeping machines honest.",
      tag: "IoT System",
      year: "2025",
      tech: ["Java", "Python", "Backend"],
      github: "https://github.com/pranaw-nn/IoT-Device-Monitoring-System",
      flavor: "systems alive.",
      color: "hover:border-indigo-500/30 hover:shadow-indigo-500/10",
      accent: "indigo",
    },
    {
      title: "Security Labs & CTFs",
      description: "Hands-on practice involving threat analysis, vulnerability exploration, and defensive workflows — where the theory becomes instinct.",
      tag: "Cybersecurity",
      year: "Ongoing",
      tech: ["SOC", "Threat Analysis", "CTF"],
      github: "https://github.com/pranaw-nn",
      flavor: "breach detected.",
      color: "hover:border-green-500/30 hover:shadow-green-500/10",
      accent: "green",
    },
  ];

  const timeline = [
    {
      year: "2023",
      title: "Started the journey",
      description: "Began exploring cybersecurity through TryHackMe, NPTEL Python, and foundational cloud concepts.",
      tag: "Origin",
    },
    {
      year: "2024",
      title: "Certifications & SOC practice",
      description: "Earned ISC2 CC, AWS, Oracle, Cisco, and Google AI certifications. Started LetsDefend SOC simulations and CTF participation.",
      tag: "Growth",
    },
    {
      year: "2025",
      title: "Building in the open",
      description: "Shipped ScholarLoan, CyberLog AI, and IoT Monitoring. Deepened SIEM and threat analysis workflows.",
      tag: "Execution",
    },
    {
      year: "Now",
      title: "Seeking what's next",
      description: "Looking for cybersecurity internships, collaborative projects, and environments that challenge real-world skills.",
      tag: "Future",
    },
  ];

  const skills = [
    { name: "Cybersecurity", x: 45, y: 15, info: "Core security focus across labs, CTFs, SOC workflows, and defensive experimentation." },
    { name: "SOC", x: 25, y: 24, info: "SOC investigation, alert handling, and incident workflow practice." },
    { name: "Splunk", x: 25, y: 40, info: "Worked with SIEM workflows, log forwarding, and monitoring pipelines." },
    { name: "LetsDefend", x: 55, y: 35, info: "Practiced alert triage, incident handling, and SOC analysis simulations." },
    { name: "TryHackMe", x: 78, y: 52, info: "Hands-on cybersecurity labs and guided attack-defense learning." },
    { name: "Threat Analysis", x: 72, y: 22, info: "Practicing investigation workflows and suspicious activity analysis." },
    { name: "AWS", x: 25, y: 72, info: "AWS Cloud Practitioner certified with cloud infrastructure fundamentals." },
    { name: "OCI", x: 48, y: 82, info: "Oracle Cloud Infrastructure foundations and cloud concepts." },
    { name: "Cloud Security", x: 68, y: 72, info: "Interest in secure cloud systems and infrastructure protection." },
    { name: "MongoDB", x: 10, y: 56, info: "Used in full-stack and database-driven application projects." },
    { name: "JavaScript", x: 82, y: 80, info: "Frontend logic, interaction systems, and dynamic UI workflows." },
    { name: "Python", x: 90, y: 32, info: "Automation, scripting, and computing fundamentals." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [secretMessage, setSecretMessage] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [activeSkill, setActiveSkill] = useState(skills[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pnHovered, setPnHovered] = useState(false);
  const [minecraftHovered, setMinecraftHovered] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background Glows */}
<div className="pointer-events-none absolute inset-0 overflow-hidden">

  {/* Main Ambient Glow */}
  <div className="absolute top-0 left-0 h-[620px] w-[620px] rounded-full bg-blue-500/10 blur-[140px]" />

  {/* Secondary Cyan Atmosphere */}
  <div className="absolute top-1/3 right-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-500/5 blur-[120px]" />

  {/* Bottom Depth Glow */}
  <div className="absolute bottom-[-120px] right-[-80px] h-[500px] w-[500px] rounded-full bg-blue-700/8 blur-[140px]" />

</div>

      {/* Grid Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between border-b border-slate-800/60 px-8 py-5 backdrop-blur-sm">
        {/* PN Logo with Easter Egg */}
        <div className="relative">
          <h1
            className="cursor-default text-2xl font-black tracking-widest text-blue-500 transition-all duration-300 select-none"
            onMouseEnter={() => setPnHovered(true)}
            onMouseLeave={() => setPnHovered(false)}
          >
            PN
          </h1>
          {pnHovered && (
            <div className="absolute left-0 top-full mt-3 z-50 whitespace-nowrap rounded-xl border border-blue-500/20 bg-black/90 px-4 py-2.5 text-xs text-slate-300 backdrop-blur-xl shadow-xl shadow-blue-500/10">
              <span className="text-blue-400">👁</span> oh. you found me. bold move.
              <div className="absolute -top-1.5 left-4 h-3 w-3 rotate-45 rounded-sm border-l border-t border-blue-500/20 bg-black/90" />
            </div>
          )}
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {["About", "Projects", "Certifications", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative transition duration-300 hover:text-blue-400 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`h-px w-6 bg-slate-300 transition-all duration-300 ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-slate-300 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-slate-300 transition-all duration-300 ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 z-30 flex flex-col gap-4 border-b border-slate-800 bg-black/90 px-8 py-6 backdrop-blur-xl text-sm text-slate-300">
            {["About", "Projects", "Certifications", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-blue-400"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex min-h-[calc(100vh-73px)] items-center">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-16 px-8 py-24 md:flex-row">

          {/* Left */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
              cybersecurity • cloud • software
            </p>

            <h1
              onClick={() => {
                const nextCount = clickCount + 1;
                setClickCount(nextCount);
                if (nextCount >= 3) {
                  setSecretMessage(true);
                  setTimeout(() => {
                    setSecretMessage(false);
                    setClickCount(0);
                  }, 3500);
                }
              }}
              className="cursor-pointer text-4xl font-black leading-[0.9] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              PRANAW <span className="text-blue-500">N N</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              Security-minded engineer crafting resilient digital experiences through
              cybersecurity, cloud technologies, and modern software development.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={cyberResume}
                download="Pranaw_Cyber_Resume.pdf"
                className="group flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-medium transition-all hover:scale-[1.02] hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Cyber Resume
                <FaExternalLinkAlt className="text-xs opacity-60 transition group-hover:opacity-100" />
              </a>
              <a
                href={softwareResume}
                download="Pranaw_Software_Resume.pdf"
                className="group flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-white/5 px-8 py-4 font-medium backdrop-blur-md transition-all hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
              >
                Software Resume
                <FaExternalLinkAlt className="text-xs opacity-60 transition group-hover:opacity-100" />
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex flex-wrap items-center gap-5 text-slate-500">
              <a href="https://github.com/pranaw-nn" target="_blank" rel="noreferrer" className="transition hover:text-white">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/pranaw-nn/" target="_blank" rel="noreferrer" className="transition hover:text-blue-400">
                <FaLinkedin size={22} />
              </a>
              <a href="mailto:pranawsaga@gmail.com" className="transition hover:text-blue-400">
                <FaEnvelope size={22} />
              </a>
              <a
                href="https://tryhackme.com/p/Nallavan001"
                target="_blank"
                rel="noreferrer"
                title="TryHackMe"
                className="transition hover:text-green-400"
              >
                <SiTryhackme size={22} />
              </a>
              {/* LetsDefend — custom SVG-style text icon since no package icon exists */}
              <a
                href="https://app.letsdefend.io/user/DunkinBotnet"
                target="_blank"
                rel="noreferrer"
                title="LetsDefend"
                className="flex items-center justify-center rounded border border-slate-700 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-slate-500 transition hover:border-blue-500 hover:text-blue-400"
              >
                LD
              </a>

              <span className="h-px w-6 bg-slate-800" />
              <span className="text-xs uppercase tracking-widest text-slate-600">Available for opportunities</span>
            </div>
          </motion.div>

          {/* Right — Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="relative flex shrink-0 justify-center"
          >
            {/* Dot on orbit */}
            <div className="absolute h-80 w-80 animate-[spin_18s_linear_infinite]">
              <div className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
            </div>

            {/* Shield badge */}
            <div className="absolute -top-2 -right-2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/40 bg-black/80 backdrop-blur-xl">
              <FaShieldAlt className="text-blue-400" size={18} />
            </div>

            <div className="relative overflow-hidden rounded-full border border-slate-700 bg-slate-900 p-2 shadow-2xl shadow-blue-500/20">
              <img
                src={profileImage}
                alt="Pranaw N N"
                className="h-72 w-72 rounded-full object-cover brightness-95 contrast-[1.08] grayscale-[10%]"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 px-8 py-32">
        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mb-16">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">About Me</p>
              <h2 className="text-3xl font-black md:text-5xl">
                Building systems with
                <span className="text-blue-500"> clarity & resilience</span>
              </h2>
            </div>

            {/* Stats Row */}
            <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <StatCard value="10+" label="Certifications" />
              <StatCard value="5" label="Projects shipped" />
              <StatCard value="2+" label="Years exploring" />
              <StatCard value="∞" label="Curiosity" />
            </div>

            {/* About Grid */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-slate-800 bg-white/[0.03] p-8 backdrop-blur-xl">
                <p className="text-lg leading-relaxed text-slate-300">
                  I'm a cybersecurity-focused engineering student exploring defensive security,
                  cloud technologies, and modern software development through hands-on projects,
                  SOC simulations, hackathons, and continuous experimentation.
                  <br /><br />
                  My interests revolve around building secure systems, understanding digital
                  infrastructure, and crafting clean user experiences that feel both modern
                  and intuitive. I believe good security is invisible — it's what lets
                  everything else just work.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-white/[0.03] p-8 backdrop-blur-xl">
                <div className="space-y-7">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Focus Areas</p>
                    <h3 className="mt-2 text-xl font-bold text-white">Cybersecurity • Cloud • Frontend</h3>
                  </div>
                  <div className="h-px bg-slate-800" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Experience</p>
                    <h3 className="mt-2 text-xl font-bold text-white">CTFs, LetsDefend, Hackathons & Security Labs</h3>
                  </div>
                  <div className="h-px bg-slate-800" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Currently Reading</p>
                    <h3 className="mt-2 text-xl font-bold text-white">The Web Application Hacker's Handbook</h3>
                  </div>
                  <div className="h-px bg-slate-800" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Philosophy</p>
                    <h3 className="mt-2 text-xl font-bold text-white">Quiet systems. Clean design. Real impact.</h3>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <QuoteDivider quote="ideas become systems through iteration." />

      {/* Projects Section */}
      <section id="projects" className="relative z-10 px-8 py-32">
        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="mb-16">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">Featured Projects</p>
              <h2 className="text-3xl font-black md:text-5xl">
                Selected work &
                <span className="text-blue-500"> experiments</span>
              </h2>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="grid gap-8 lg:grid-cols-2"
            >
              {projects.map((project, index) => (
                <motion.a
                  key={index}
                  variants={fadeUp}
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl ${project.color}`}
                >
                  {/* Top */}
                  <div className="mb-6 flex items-center justify-between">
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-widest text-slate-300">
                      {project.tag}
                    </span>
                    <span className="text-sm text-slate-500">{project.year}</span>
                  </div>

                  <h3 className="text-3xl font-bold text-white transition duration-300 group-hover:text-blue-400">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-slate-400">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <div className="pointer-events-none absolute bottom-6 left-6 opacity-0 transition-all duration-500 ease-out group-hover:bottom-8 group-hover:opacity-100">
                      <div className="rounded-xl border border-white/10 bg-white px-4 py-2 text-sm font-medium text-black shadow-2xl">
                        {project.flavor}
                      </div>
                    </div>
                    <span className="ml-auto translate-x-0 text-xl text-slate-500 transition duration-300 group-hover:translate-x-2 group-hover:text-blue-400">
                      ↗
                    </span>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </section>

      <QuoteDivider quote="discipline leaves traces." />

      {/* Timeline Section */}
      <section className="relative z-10 px-8 py-32">
        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mb-16">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">Journey</p>
              {/* Minecraft achievement heading */}
              <div className="relative inline-block">
                <h2
                  className="cursor-default text-3xl font-black md:text-5xl"
                  onMouseEnter={() => setMinecraftHovered(true)}
                  onMouseLeave={() => setMinecraftHovered(false)}
                >
                  How did we get
                  <span className="text-blue-500"> here</span>
                </h2>
                {minecraftHovered && (
                  <div
                    className="absolute left-0 top-full mt-3 z-50 whitespace-nowrap rounded border-2 border-yellow-400/80 bg-[#100010] px-4 py-2 text-sm text-white shadow-[0_0_0_2px_#000] font-mono"
                    style={{ imageRendering: "pixelated" }}
                  >
                    <span className="text-yellow-400 font-bold">Achievement Get!</span>
                    <br />
                    <span className="text-white">yes im a big minecraft fan</span>
                  </div>
                )}
              </div>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[11px] top-2 hidden h-[calc(100%-16px)] w-px bg-slate-800 md:left-1/2 md:block" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className={`relative flex flex-col gap-6 md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Content card */}
                    <div className="w-full md:w-[calc(50%-2rem)]">
                      <div className="rounded-2xl border border-slate-800 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30">
                        <div className="mb-3 flex items-center gap-3">
                          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs uppercase tracking-widest text-blue-400">
                            {item.tag}
                          </span>
                          <span className="text-sm font-bold text-slate-500">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-0 top-6 flex h-6 w-6 items-center justify-center md:relative md:left-auto md:top-auto md:flex md:shrink-0 md:items-start md:pt-6">
                      <div className="h-3 w-3 rounded-full border-2 border-blue-500 bg-black shadow-md shadow-blue-500/30" />
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden w-[calc(50%-2rem)] md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <QuoteDivider quote="every system has a story." />

      {/* Certifications Section */}
      <section id="certifications" className="relative z-10 overflow-hidden px-8 py-32">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl"
        >
          <div className="mb-16">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">Certifications</p>
            <h2 className="text-3xl font-black md:text-5xl">
              Verified learning &
              <span className="text-blue-500"> technical growth</span>
            </h2>
            <p className="mt-4 max-w-xl text-slate-400">
              Nine certifications across cybersecurity, cloud, AI, and data — each one a deliberate step forward.
            </p>
          </div>

          <div className="relative mx-auto flex max-w-7xl items-center justify-center">
            {/* LEFT BUTTON */}
            <button
              onClick={() => setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1))}
              className="absolute -left-4 z-30 rounded-full border border-slate-700 bg-black/60 p-4 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:bg-blue-500/10"
              aria-label="Previous certificate"
            >
              <FaChevronLeft />
            </button>

            {/* VIEWPORT */}
            <div className="w-full overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateX(-${currentIndex * 346}px)` }}
              >
                {duplicatedCertificates.map((cert, index) => (
                  <div
                    key={index}
                    className="w-[280px] flex-shrink-0 rounded-3xl border border-slate-800 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-3 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 sm:w-[320px]"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="mb-5 w-full rounded-2xl border border-slate-700 object-cover"
                    />
                    <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                    <p className="mt-2 text-sm text-slate-400">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT BUTTON */}
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1 >= certificates.length ? 0 : prev + 1))}
              className="absolute -right-4 z-30 rounded-full border border-slate-700 bg-black/60 p-4 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:bg-blue-500/10"
              aria-label="Next certificate"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="mt-8 flex justify-center gap-2">
            {certificates.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-6 bg-blue-500" : "w-1.5 bg-slate-700 hover:bg-slate-500"
                }`}
                aria-label={`Go to certificate ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </section>

      <QuoteDivider quote="everything connects eventually." />

      {/* Synaptic Mesh Section */}
      <section className="relative z-10 px-8 py-32">
        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="mb-16">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">Synaptic Mesh™</p>
              <h2 className="text-3xl font-black md:text-5xl">
                Connected
                <span className="text-blue-500"> systems</span>
              </h2>
              <p className="mt-4 text-slate-500">Hover any node to explore the skill.</p>
            </div>

            {/* Two-column layout */}
            <div className="grid gap-10 md:grid-cols-2">

              {/* Mesh */}
              <div className="relative h-[500px] overflow-hidden rounded-[40px] border border-slate-800 bg-white/[0.03] backdrop-blur-xl">
                <svg className="absolute inset-0 h-full w-full">
                  {skills.map((skill, index) =>
                    skills[index + 1] ? (
                      <line
                        key={index}
                        x1={`${skill.x}%`}
                        y1={`${skill.y}%`}
                        x2={`${skills[index + 1].x}%`}
                        y2={`${skills[index + 1].y}%`}
                        stroke={
                          activeSkill.name === skill.name || activeSkill.name === skills[index + 1].name
                            ? "rgba(59,130,246,0.8)"
                            : "rgba(96,165,250,0.12)"
                        }
                        strokeWidth={
                          activeSkill.name === skill.name || activeSkill.name === skills[index + 1].name
                            ? "2"
                            : "1"
                        }
                        className="transition-all duration-500"
                      />
                    ) : null
                  )}
                </svg>

                {skills.map((skill, index) => (
                  <button
                    key={index}
                    onMouseEnter={() => setActiveSkill(skill)}
                    onClick={() => setActiveSkill(skill)}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-4 py-2 text-xs font-medium backdrop-blur-xl transition-all duration-400 ease-out ${
                      activeSkill.name === skill.name
                        ? "scale-125 border-blue-400 bg-blue-500/20 text-white shadow-lg shadow-blue-500/30"
                        : "border-slate-700 bg-black/60 text-slate-400 hover:scale-110 hover:border-blue-500 hover:bg-blue-500/10 hover:text-white"
                    }`}
                    style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
                  >
                    {skill.name}
                  </button>
                ))}
              </div>

              {/* Info Panel */}
              <div className="flex items-center">
                <div className="w-full rounded-[40px] border border-blue-500/10 bg-white/[0.03] p-10 backdrop-blur-xl shadow-2xl shadow-blue-500/5 transition-all duration-500">
                  <p className="text-xs uppercase tracking-[0.3em] text-blue-400">Active Node</p>
                  <h3 className="mt-5 text-4xl font-black text-white">{activeSkill.name}</h3>
                  <p className="mt-6 text-lg leading-relaxed text-slate-400">{activeSkill.info}</p>

                  {/* Progress bar */}
                  <div className="mt-8">
                    <div className="mb-2 flex justify-between text-xs text-slate-600">
                      <span>Proficiency</span>
                      <span className="text-blue-400">Active</span>
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-700"
                        style={{
                          width: activeSkill.name === "Cybersecurity" ? "85%" :
                                 activeSkill.name === "Python" ? "75%" :
                                 activeSkill.name === "JavaScript" ? "72%" :
                                 activeSkill.name === "AWS" ? "70%" :
                                 activeSkill.name === "SOC" ? "68%" :
                                 activeSkill.name === "Splunk" ? "60%" :
                                 "65%"
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      <QuoteDivider quote="quiet systems leave the loudest impact." />

      {/* Contact Section */}
      <section id="contact" className="relative z-10 px-8 py-32">
        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="text-center">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">Contact</p>
              <h2 className="text-3xl font-black md:text-5xl">
                Let's build something
                <span className="text-blue-500"> meaningful</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                Open to cybersecurity opportunities, collaborative projects,
                internships, and meaningful technical conversations.
              </p>
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              <a
                href="mailto:pranawsaga@gmail.com"
                className="group flex items-center gap-5 rounded-3xl border border-slate-800 bg-black/20 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-700 bg-white/5 text-slate-400 transition group-hover:border-blue-500/30 group-hover:text-blue-400">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Email</p>
                  <h3 className="mt-1 font-bold text-white break-all">pranawsaga@gmail.com</h3>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/pranaw-nn/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-5 rounded-3xl border border-slate-800 bg-black/20 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-700 bg-white/5 text-slate-400 transition group-hover:border-cyan-500/30 group-hover:text-cyan-400">
                  <FaLinkedin size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">LinkedIn</p>
                  <h3 className="mt-1 font-bold text-white">/in/pranaw-nn</h3>
                </div>
              </a>

              <a
                href="https://github.com/pranaw-nn"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-5 rounded-3xl border border-slate-800 bg-black/20 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-700 bg-white/5 text-slate-400 transition group-hover:border-indigo-500/30 group-hover:text-indigo-400">
                  <FaGithub size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">GitHub</p>
                  <h3 className="mt-1 font-bold text-white">github.com/pranaw-nn</h3>
                </div>
              </a>
            </div>

            {/* CTA note */}
            <p className="mt-10 text-center text-sm text-slate-600">
              Response time: usually within 24 hours. Prefer email for detailed inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-8 pb-12 pt-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-600 md:flex-row">
          <p>© 2026 PRANAW N N — built with clarity.</p>
          <p className="flex items-center gap-2">
            <FaShieldAlt className="text-blue-500/40" size={12} />
            Designed & developed without shortcuts.
          </p>
        </div>
      </footer>

      {/* Secret Easter Egg */}
      {secretMessage && (
        <div className="pointer-events-none fixed inset-0 z-[999] flex items-center justify-center px-6">
          <div className="animate-[fadeIn_0.4s_ease-out] rounded-3xl border border-blue-500/20 bg-black/80 px-10 py-8 text-center backdrop-blur-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Hidden Interaction Detected
            </p>
            <h2 className="mt-4 text-2xl font-black text-white">
              Careful.<br />
              I might report you to cyber crime.<br /><br />
              <span className="text-blue-400">
                Oh wait.<br />
                I AM cyber crime.
              </span>
            </h2>
          </div>
        </div>
      )}

    </div>
  );
}
