"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";
import { FolderOpen, FileText } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="orb orb-cyan w-80 h-80 top-1/2 left-[-150px] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#6C63FF" }}>
            — Technical Skills —
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Skills Focused on{" "}
            <span className="gradient-text">Modern Web Development</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm" style={{ color: "#8888AA" }}>
            A curated stack for building scalable, production-ready applications from UI to database.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SKILLS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="glass-card p-6"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `linear-gradient(135deg,rgba(108,99,255,0.2),rgba(0,212,255,0.1))`, border: "1px solid rgba(108,99,255,0.2)" }}
                >
                  {group.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm" style={{ color: "#F0F0FF", fontFamily: "'Outfit', sans-serif" }}>
                    {group.category}
                  </h3>
                  <p className="text-xs" style={{ color: "#8888AA" }}>{group.items.length} skills</p>
                </div>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.06 + si * 0.04 }}
                    className="tech-badge cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6"
          style={{ border: "1px solid rgba(108,99,255,0.2)" }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { emoji: "🖥️", text: "20+ responsive React/Next.js pages built" },
              { emoji: "🔌", text: "Multiple REST APIs integrated across projects" },
              { emoji: "🍃", text: "MongoDB Atlas databases for production apps" },
              { emoji: "🤖", text: "AI tools used daily to accelerate development" },
            ].map((item) => (
              <div key={item.text} className="flex flex-col items-center gap-2">
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-xs leading-snug" style={{ color: "#8888AA" }}>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4 mt-10"
        >
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-5 py-2.5 rounded-xl font-semibold text-white btn-glow text-sm flex items-center gap-2"
            style={{ background: "linear-gradient(135deg, #6C63FF, #00D4FF)" }}
          >
            <FolderOpen size={15} /> Explore Projects
          </a>
          <a
            href="#resume"
            onClick={(e) => { e.preventDefault(); document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all hover:bg-white/5"
            style={{ border: "1px solid rgba(108,99,255,0.4)", color: "#F0F0FF" }}
          >
            <FileText size={15} /> View Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
