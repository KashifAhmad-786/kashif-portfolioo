"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";
import { Download } from "lucide-react";
import { PERSONAL } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="orb orb-coral w-72 h-72 top-1/2 right-0 opacity-8" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#6C63FF" }}>
            — Experience —
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Practical Development{" "}
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm" style={{ color: "#8888AA" }}>
            Freelancing and internship experience through real-world projects and team collaboration.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5 timeline-line"
            style={{ marginLeft: "-1px" }}
          />

          <div className="space-y-10">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-16"
              >
                {/* Icon circle */}
                <div
                  className="absolute left-0 top-1 w-12 h-12 rounded-full flex items-center justify-center text-xl"
                  style={{
                    background: `linear-gradient(135deg,rgba(108,99,255,0.2),rgba(0,212,255,0.1))`,
                    border: "2px solid rgba(108,99,255,0.4)",
                    zIndex: 1,
                  }}
                >
                  {exp.icon}
                </div>

                {/* Card */}
                <div className="glass-card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-bold text-lg" style={{ fontFamily: "'Outfit', sans-serif", color: "#F0F0FF" }}>
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium" style={{ color: "#6C63FF" }}>{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span
                        className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{ background: "rgba(108,99,255,0.15)", border: "1px solid rgba(108,99,255,0.25)", color: "#6C63FF" }}
                      >
                        {exp.type}
                      </span>
                      {exp.current && (
                        <span
                          className="text-xs px-3 py-1 rounded-full font-medium"
                          style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", color: "#22c55e" }}
                        >
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs mb-5 flex items-center gap-1.5" style={{ color: "#8888AA" }}>
                    📅 {exp.period}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#8888AA" }}>
                      Responsibilities
                    </p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-3 text-sm" style={{ color: "#8888AA" }}>
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#6C63FF" }} />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((a) => (
                      <span
                        key={a}
                        className="text-xs px-3 py-1 rounded-full"
                        style={{
                          background: "rgba(0,212,255,0.08)",
                          border: "1px solid rgba(0,212,255,0.2)",
                          color: "#00D4FF",
                        }}
                      >
                        ✓ {a}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4 mt-12"
        >
          <a
            href={PERSONAL.resumePdf}
            download
            className="px-5 py-2.5 rounded-xl font-semibold text-white btn-glow text-sm flex items-center gap-2"
            style={{ background: "linear-gradient(135deg, #6C63FF, #00D4FF)" }}
          >
            <Download size={15} /> Download Full Resume
          </a>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all hover:bg-white/5"
            style={{ border: "1px solid rgba(108,99,255,0.4)", color: "#F0F0FF" }}
          >
          LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
