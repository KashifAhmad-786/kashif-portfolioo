"use client";

import { motion } from "framer-motion";
import { PERSONAL, CAREER_PATH, ABOUT_ACHIEVEMENTS, EDUCATION } from "@/lib/data";
import { Download, FolderOpen } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Orb */}
      <div className="orb orb-violet w-72 h-72 top-0 right-0 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section title */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#6C63FF" }}>
            — About Me —
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>
            From Frontend to{" "}
            <span className="gradient-text">Full-Stack Engineering</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* -- Left -- */}
          <div>
            {/* Bio */}
            <motion.p {...fadeUp(0.1)} className="text-base leading-relaxed mb-8" style={{ color: "#8888AA" }}>
              I am a passionate developer focused on building practical web applications that solve real
              business problems. My journey started with <span style={{ color: "#F0F0FF" }}>frontend development using React.js</span> and
              gradually expanded into full-stack development with{" "}
              <span style={{ color: "#6C63FF" }}>Node.js, Express.js, and MongoDB</span>.
              <br /><br />
              Rather than only creating portfolio demos, I enjoy building systems that involve authentication,
              dashboards, data management, API integration, and deployment. I actively adopt{" "}
              <span style={{ color: "#00D4FF" }}>AI tools</span> to improve productivity and deliver features faster.
            </motion.p>

            {/* Career Path */}
            <motion.div {...fadeUp(0.2)} className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#8888AA" }}>
                Career Path
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {CAREER_PATH.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span
                      className="px-3 py-1.5 rounded-full text-sm font-medium border"
                      style={{
                        background: i === CAREER_PATH.length - 1
                          ? "linear-gradient(135deg,rgba(108,99,255,0.25),rgba(0,212,255,0.15))"
                          : "rgba(22,22,31,0.8)",
                        borderColor: i === CAREER_PATH.length - 1 ? "#6C63FF" : "rgba(255,255,255,0.1)",
                        color: i === CAREER_PATH.length - 1 ? "#6C63FF" : "#8888AA",
                      }}
                    >
                      {step}
                    </span>
                    {i < CAREER_PATH.length - 1 && (
                      <span style={{ color: "#6C63FF" }}>→</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              {...fadeUp(0.3)}
              className="glass-card p-5 flex items-start gap-4"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "rgba(108,99,255,0.15)", border: "1px solid rgba(108,99,255,0.25)" }}
              >
                🎓
              </div>
              <div>
                <p className="font-semibold" style={{ color: "#F0F0FF" }}>{EDUCATION.degree}</p>
                <p className="text-sm" style={{ color: "#8888AA" }}>{EDUCATION.university}</p>
                <p className="text-xs mt-1 px-2 py-0.5 rounded-full inline-block"
                  style={{ background: "rgba(108,99,255,0.15)", color: "#6C63FF", border: "1px solid rgba(108,99,255,0.25)" }}>
                  {EDUCATION.status} · {EDUCATION.year}
                </p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3 mt-8">
              <a
                href={PERSONAL.resumePdf}
                download
                className="px-5 py-2.5 rounded-xl font-semibold text-white flex items-center gap-2 btn-glow text-sm"
                style={{ background: "linear-gradient(135deg, #6C63FF, #00D4FF)" }}
              >
                <Download size={15} /> Download CV
              </a>
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 text-sm transition-all hover:bg-white/5"
                style={{ border: "1px solid rgba(108,99,255,0.4)", color: "#F0F0FF" }}
              >
                 LinkedIn
              </a>
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 text-sm text-[#8888AA] hover:text-white transition-all"
              >
                <FolderOpen size={15} /> See Projects
              </a>
            </motion.div>
          </div>

          {/* -- Right: Achievements -- */}
          <div>
            <motion.p {...fadeUp(0.1)} className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: "#8888AA" }}>
              Key Achievements
            </motion.p>
            <div className="grid grid-cols-2 gap-4">
              {ABOUT_ACHIEVEMENTS.map((a, i) => (
                <motion.div
                  key={a.label}
                  {...fadeUp(0.15 * i)}
                  className="glass-card p-5 text-center"
                >
                  <div className="text-3xl mb-3">{a.icon}</div>
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{ fontFamily: "'Outfit', sans-serif", color: "#6C63FF" }}
                  >
                    {a.value}
                  </div>
                  <div className="text-xs leading-snug" style={{ color: "#8888AA" }}>{a.label}</div>
                </motion.div>
              ))}
            </div>

            {/* What I bring */}
            <motion.div {...fadeUp(0.5)} className="glass-card p-6 mt-6">
              <p className="font-semibold mb-4" style={{ color: "#F0F0FF" }}>What I Bring</p>
              <ul className="space-y-3">
                {[
                  "Strong understanding of React.js, Next.js, and Tailwind CSS",
                  "Experience building REST APIs with Express.js & Node.js",
                  "Hands-on work with MongoDB Atlas, authentication, and dashboards",
                  "AI-enhanced workflow for faster, smarter development",
                  "Comfortable with Git/GitHub and modern deployment platforms",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#8888AA" }}>
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                      style={{ background: "#6C63FF" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
