"use client";

import { motion } from "framer-motion";
import { PERSONAL, RESUME_SKILLS, EDUCATION } from "@/lib/data";
import { Download, CheckCircle } from "lucide-react";

const RESUME_ACHIEVEMENTS = [
  "Built 10+ real-time deployed web applications",
  "Developed a complete Real Estate Rental MERN Application",
  "Integrated AI features into web applications (AI Resume Builder)",
  "Prepared scalable architecture for a Core Banking System project",
  "Gained internship experience at Zamionic Forge with React.js development",
];

export default function Resume() {
  return (
    <section id="resume" className="section-padding relative overflow-hidden">
      <div className="orb orb-cyan w-80 h-80 top-0 right-[-100px] opacity-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#6C63FF" }}>
            — Resume —
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Professional{" "}
            <span className="gradient-text">Profile & Resume</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* -- Left panel -- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Profile card */}
            <div className="glass-card p-6 text-center">
              <div
                className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white"
                style={{ background: "linear-gradient(135deg, #6C63FF, #00D4FF)" }}
              >
                KA
              </div>
              <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "'Outfit', sans-serif", color: "#F0F0FF" }}>
                {PERSONAL.name}
              </h3>
              <p className="text-sm mb-3" style={{ color: "#6C63FF" }}>{PERSONAL.title}</p>
              <p className="text-xs mb-4" style={{ color: "#8888AA" }}>📍 {PERSONAL.location}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {PERSONAL.openTo.map((o) => (
                  <span
                    key={o}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(108,99,255,0.12)", border: "1px solid rgba(108,99,255,0.25)", color: "#6C63FF" }}
                  >
                    {o}
                  </span>
                ))}
              </div>
            </div>

            {/* Education card */}
            <div className="glass-card p-5">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#8888AA" }}>
                Education
              </p>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#F0F0FF" }}>{EDUCATION.degree}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#8888AA" }}>{EDUCATION.university}</p>
                  <p className="text-xs mt-1.5 px-2 py-0.5 rounded-full inline-block"
                    style={{ background: "rgba(108,99,255,0.12)", color: "#6C63FF", border: "1px solid rgba(108,99,255,0.25)" }}>
                    {EDUCATION.status}
                  </p>
                </div>
              </div>
            </div>

            {/* Download CTA */}
            <div className="glass-card p-5" style={{ border: "1px solid rgba(108,99,255,0.25)", background: "linear-gradient(135deg,rgba(108,99,255,0.08),rgba(0,212,255,0.04))" }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-center" style={{ color: "#8888AA" }}>
                Last updated · July 2026
              </p>
              <a
                href={PERSONAL.resumePdf}
                download
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-white btn-glow mb-3"
                style={{ background: "linear-gradient(135deg, #6C63FF, #00D4FF)" }}
              >
                <Download size={16} /> Download PDF Resume
              </a>
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all hover:bg-white/5"
                style={{ border: "1px solid rgba(108,99,255,0.3)", color: "#F0F0FF" }}
              >
               View LinkedIn Profile
              </a>
            </div>
          </motion.div>

          {/* -- Right panel -- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Summary */}
            <div className="glass-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#8888AA" }}>
                Professional Summary
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#8888AA" }}>
                <span style={{ color: "#F0F0FF" }}>MERN Stack Developer</span> with practical experience building{" "}
                <span style={{ color: "#6C63FF" }}>React.js, Next.js, Node.js, Express.js, and MongoDB</span> applications.
                Proven ability to develop responsive UIs, integrate APIs, implement authentication systems,
                and deploy real-world projects. Strong problem-solving mindset with a focus on scalable
                web applications and <span style={{ color: "#00D4FF" }}>AI-enhanced development workflows</span>.
              </p>
            </div>

            {/* Key Skills */}
            <div className="glass-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#8888AA" }}>
                Key Technical Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {RESUME_SKILLS.map((skill) => (
                  <span key={skill} className="tech-badge">{skill}</span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="glass-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#8888AA" }}>
                Key Achievements
              </p>
              <ul className="space-y-3">
                {RESUME_ACHIEVEMENTS.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm" style={{ color: "#8888AA" }}>
                    <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: "#6C63FF" }} />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
