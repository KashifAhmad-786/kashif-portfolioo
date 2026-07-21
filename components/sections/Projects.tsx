"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ project, featured = false }: { project: typeof PROJECTS[0]; featured?: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`glass-card overflow-hidden flex flex-col ${featured ? "lg:col-span-1" : ""}`}
    >
      {/* Image / Banner */}
      <div
        className="relative overflow-hidden"
        style={{ height: featured ? 220 : 180 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            const t = e.target as HTMLImageElement;
            t.style.display = "none";
            const parent = t.parentElement;
            if (parent) {
              parent.style.background = "linear-gradient(135deg, rgba(108,99,255,0.2), rgba(0,212,255,0.1))";
              parent.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3.5rem;">${project.id === 1 ? "🏠" : project.id === 2 ? "🤖" : project.id === 3 ? "🍔" : project.id === 4 ? "🛒" : "🏦"}</div>`;
            }
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,15,0.9) 0%, transparent 60%)" }} />

        {/* Type badge */}
        {/* <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-medium"
            style={{ background: "rgba(108,99,255,0.2)", border: "1px solid rgba(108,99,255,0.35)", color: "#6C63FF" }}>
            {project.type}
          </span>
        </div> */}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-base leading-snug" style={{ fontFamily: "'Outfit', sans-serif", color: "#F0F0FF" }}>
            {project.title}
          </h3>
        </div>
        <p className="text-xs mb-3" style={{ color: "#8888AA" }}>
          Role: <span style={{ color: "#6C63FF" }}>{project.role}</span>
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>

        {/* Problem statement */}
        <p className="text-xs leading-relaxed mb-3" style={{ color: "#8888AA" }}>
          <span style={{ color: "#F0F0FF" }}>Problem: </span>
          {project.problem}
        </p>

        {/* Expandable section */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {/* Solution */}
              <div className="mb-3">
                <p className="text-xs font-semibold mb-2" style={{ color: "#F0F0FF" }}>Solution:</p>
                <ul className="space-y-1.5">
                  {project.solution.map((s) => (
                    <li key={s} className="text-xs flex items-start gap-2" style={{ color: "#8888AA" }}>
                      <span className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#6C63FF" }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Outcome */}
              <div className="p-3 rounded-xl mb-3" style={{ background: "rgba(108,99,255,0.08)", border: "1px solid rgba(108,99,255,0.15)" }}>
                <p className="text-xs font-semibold mb-1" style={{ color: "#6C63FF" }}>Outcome:</p>
                <p className="text-xs" style={{ color: "#8888AA" }}>{project.outcome}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle */}
        <button
          onClick={() => setExpanded((p) => !p)}
          className="text-xs flex items-center gap-1 mb-4 transition-colors hover:text-[#6C63FF]"
          style={{ color: "#8888AA" }}
        >
          {expanded ? <><ChevronUp size={12} /> Show less</> : <><ChevronDown size={12} /> View details</>}
        </button>

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold text-white transition-all btn-glow"
              style={{ background: "linear-gradient(135deg, #6C63FF, #00D4FF)" }}
            >
              <ExternalLink size={12} /> Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold transition-all hover:bg-white/5"
              style={{ border: "1px solid rgba(108,99,255,0.3)", color: "#F0F0FF" }}
            >
              <FaGithub size={12} /> GitHub
            </a>
          )}
          {!project.demo && !project.github && (
            <span className="text-xs py-2 px-3 rounded-xl" style={{ color: "#8888AA", border: "1px solid rgba(255,255,255,0.07)" }}>
              Coming soon…
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="orb orb-violet w-96 h-96 bottom-0 right-[-120px] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#6C63FF" }}>
            — Projects —
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Real-World{" "}
            <span className="gradient-text">MERN Development</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm" style={{ color: "#8888AA" }}>
            End-to-end projects demonstrating UI design, API integration, authentication, database management, and deployment.
          </p>
        </motion.div>

        {/* Featured grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {featured.map((p) => <ProjectCard key={p.id} project={p} featured />)}
        </div>

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 gap-6">
          {rest.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://github.com/KashifAhmad-786"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-semibold text-white btn-glow flex items-center gap-2"
            style={{ background: "linear-gradient(135deg, #6C63FF, #00D4FF)" }}
          >
            <FaGithub size={16} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
