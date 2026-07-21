"use client";

import { motion } from "framer-motion";
import { LEARNING } from "@/lib/data";

const STATUS_STYLES: Record<string, { bg: string; border: string; color: string; label: string }> = {
  active:   { bg: "rgba(108,99,255,0.12)", border: "rgba(108,99,255,0.3)", color: "#6C63FF",  label: "Active" },
  learning: { bg: "rgba(251,191,36,0.1)",  border: "rgba(251,191,36,0.3)", color: "#fbbf24", label: "Learning" },
  planned:  { bg: "rgba(0,212,255,0.08)",  border: "rgba(0,212,255,0.25)", color: "#00D4FF", label: "Planned" },
};

const RECENT_TRAINING = [
  { icon: "🔨", title: "MERN Stack Project-Based Learning", desc: "Built real-world apps applying full MERN workflow end-to-end." },
  { icon: "🎯", title: "Next.js Interview Preparation", desc: "Deep-dived into Next.js App Router, SSR, RSC, and interview Q&A." },
  { icon: "🏗️", title: "System Design Fundamentals", desc: "Studied scalable architecture, CAP theorem, and design patterns." },
  { icon: "🏦", title: "Banking System Architecture Planning", desc: "Planned modular MERN banking system with Docker & role-based auth." },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      <div className="orb orb-violet w-72 h-72 bottom-0 left-[-100px] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#6C63FF" }}>
            — Continuous Learning —
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Learning Through{" "}
            <span className="gradient-text">Real Projects</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm" style={{ color: "#8888AA" }}>
            Continuously improving through hands-on project development and modern web technologies.
          </p>
        </motion.div>

        {/* Learning Focus Cards */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest mb-8 text-center"
            style={{ color: "#8888AA" }}
          >
            Current Learning Focus
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LEARNING.map((item, i) => {
              const s = STATUS_STYLES[item.status];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="glass-card p-5 flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{item.icon}</span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.color }}
                    >
                      {s.label}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm leading-snug" style={{ fontFamily: "'Outfit', sans-serif", color: "#F0F0FF" }}>
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#8888AA" }}>
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Recent Training */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest mb-8 text-center"
            style={{ color: "#8888AA" }}
          >
            Recent Training Activities
          </motion.p>
          <div className="grid sm:grid-cols-2 gap-4">
            {RECENT_TRAINING.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-5 flex gap-4"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: "rgba(108,99,255,0.12)", border: "1px solid rgba(108,99,255,0.2)" }}
                >
                  {t.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1" style={{ fontFamily: "'Outfit', sans-serif", color: "#F0F0FF" }}>
                    {t.title}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: "#8888AA" }}>{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievement banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6 mt-10 text-center"
          style={{ border: "1px solid rgba(108,99,255,0.2)", background: "linear-gradient(135deg, rgba(108,99,255,0.06), rgba(0,212,255,0.04))" }}
        >
          <p className="text-sm font-semibold mb-3" style={{ color: "#F0F0FF" }}>
            🏆 Key Learning Achievements
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Built projects while learning new technologies",
              "Practiced real interview Q&A workflows",
              "Actively studying scalable MERN architecture",
              "Daily use of AI tools in development",
            ].map((a) => (
              <span
                key={a}
                className="text-xs px-3 py-1.5 rounded-full"
                style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)", color: "#00D4FF" }}
              >
                ✓ {a}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
