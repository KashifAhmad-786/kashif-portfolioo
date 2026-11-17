"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PERSONAL, METRICS } from "@/lib/data";
import { Download, Send, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

/* -- Animated counter ---------------------------------- */
function Counter({ target }: { target: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(target.replace(/\D/g, ""));
    const suffix = target.replace(/[0-9]/g, "");
    let start = 0;
    const step = Math.ceil(num / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setDisplay(`${num}${suffix}`); clearInterval(timer); }
      else               { setDisplay(`${start}${suffix}`); }
    }, 40);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{display}</span>;
}

/* -- Rotating subtitle --------------------------------─ */
const ROLES = [
  "MERN Stack Developer",
  "React.js Engineer",
  "Next.js Specialist",
  "Full Stack Builder",
  "AI-Enhanced Developer",
];

function RotatingRole() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setIdx((i) => (i + 1) % ROLES.length); setVisible(true); }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="gradient-text"
      style={{
        display: "inline-block",
        transition: "opacity 0.4s ease, transform 0.4s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      {ROLES[idx]}
    </span>
  );
}

/* -- Floating Badge ------------------------------------ */
function FloatingBadge({
  label,
  emoji,
  style,
  delay = 0,
}: {
  label: string;
  emoji: string;
  style: React.CSSProperties;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
      className="absolute glass-card px-3 py-2 flex items-center gap-2 text-sm font-medium select-none"
      style={{ ...style, zIndex: 10 }}
    >
      <span>{emoji}</span>
      <span style={{ color: "#F0F0FF" }}>{label}</span>
    </motion.div>
  );
}

export default function Hero() {
  const scrollToNext = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
      style={{ paddingTop: "100px" }}
    >
      {/* Orbs */}
      <div className="orb orb-violet w-96 h-96 top-[-100px] left-[-100px]" />
      <div className="orb orb-cyan   w-80 h-80 bottom-[-80px] right-[-80px]" style={{ animationDelay: "3s" }} />
      <div className="orb orb-coral  w-56 h-56 top-[40%] right-[20%]" style={{ animationDelay: "6s", opacity: 0.08 }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-16">

          {/* -- Left: Text -- */}
          <div>
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{
                background: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.3)",
                color: "#22c55e",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Open to Work — Available Now
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-tight mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">{PERSONAL.name}</span>
            </motion.h1>

            {/* Rotating Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl sm:text-3xl font-semibold mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <RotatingRole />
            </motion.div>

            {/* Sub-description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: "#8888AA" }}
            >
              Specializing in <span style={{ color: "#6C63FF" }}>React.js, Next.js, Node.js, Express.js,</span> and{" "}
              <span style={{ color: "#00D4FF" }}>MongoDB</span>. Building fast, responsive, and user-friendly
              products while leveraging AI tools to accelerate development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-6 py-3 rounded-xl font-semibold text-white btn-glow"
                style={{ background: "linear-gradient(135deg, #6C63FF, #00D4FF)" }}
              >
                View Projects
              </a>
              <a
                href={PERSONAL.resumePdf}
                download
                className="px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-200 hover:bg-white/5"
                style={{ border: "1px solid rgba(108,99,255,0.4)", color: "#F0F0FF" }}
              >
                <Download size={16} /> Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-6 py-3 rounded-xl font-semibold flex items-center gap-2 text-[#8888AA] hover:text-white transition-all"
              >
                <Send size={16} /> Contact Me
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-xl border text-[#8888AA] hover:text-white hover:border-[#6C63FF] hover:shadow-[0_0_15px_rgba(108,99,255,0.3)] transition-all"
                style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(22,22,31,0.7)" }}>
              <FaGithub size={18} />
              </a>
              <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-xl border text-[#8888AA] hover:text-white hover:border-[#6C63FF] hover:shadow-[0_0_15px_rgba(108,99,255,0.3)] transition-all"
                style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(22,22,31,0.7)" }}>
                <FaLinkedinIn size={16} />
              </a>
              <div className="h-4 w-px" style={{ background: "rgba(255,255,255,0.1)" }} />
              <span className="text-sm" style={{ color: "#8888AA" }}>
                📍 {PERSONAL.location}
              </span>
            </motion.div>
          </div>

          {/* -- Right: Avatar -- */}
          <div className="relative flex items-center justify-center">
            {/* Floating badges */}
            <FloatingBadge label="React.js" emoji="⚛️" style={{ top: "8%", left: "-5%" }} delay={0.4} />
            <FloatingBadge label="Node.js" emoji="🟢" style={{ top: "15%", right: "-8%" }} delay={0.9} />
            <FloatingBadge label="MongoDB" emoji="🍃" style={{ bottom: "20%", left: "-10%" }} delay={1.3} />
            <FloatingBadge label="Next.js" emoji="▲" style={{ bottom: "10%", right: "-5%" }} delay={1.7} />

            {/* Spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute"
              style={{
                width: 340,
                height: 340,
                borderRadius: "50%",
                border: "2px dashed rgba(108,99,255,0.3)",
              }}
            />
            {/* Outer glow ring */}
            <div
              className="absolute"
              style={{
                width: 300,
                height: 300,
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(108,99,255,0.15), rgba(0,212,255,0.1))",
                filter: "blur(20px)",
              }}
            />
            {/* Avatar */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
              className="relative"
              style={{
                width: 260,
                height: 260,
                borderRadius: "50%",
                border: "3px solid transparent",
                background: "linear-gradient(var(--bg-primary), var(--bg-primary)) padding-box, linear-gradient(135deg, #6C63FF, #00D4FF) border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PERSONAL.avatar}
                alt={`${PERSONAL.name} — MERN Stack Developer`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback initials when avatar.jpg not yet added
                  (e.target as HTMLImageElement).style.display = "none";
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent) {
                    parent.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#6C63FF,#00D4FF);font-size:5rem;font-weight:800;color:white;font-family:'Outfit',sans-serif;">KA</div>`;
                  }
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* -- Metrics strip -- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-16"
        >
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="glass-card text-center px-6 py-5"
            >
              <div className="counter-number text-3xl font-bold mb-1">
                <Counter target={m.value} />
              </div>
              <div className="text-sm" style={{ color: "#8888AA" }}>
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToNext}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#8888AA] hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
