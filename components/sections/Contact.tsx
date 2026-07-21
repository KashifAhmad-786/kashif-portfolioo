"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { PERSONAL } from "@/lib/data";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

// EmailJS credentials — loaded from .env.local
const EMAILJS_SERVICE_ID        = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID        ?? "";
const EMAILJS_TEMPLATE_ID       = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID       ?? "";
const EMAILJS_AUTOREPLY_TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID ?? "";
const EMAILJS_PUBLIC_KEY        = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY        ?? "";

const SUBJECTS = [
  "Job Opportunity",
  "Freelance Project",
  "Internship Offer",
  "General Inquiry",
  "Collaboration",
  "Other",
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // --- Validation ---
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast.error("Email service not configured yet. Please email me directly.");
      return;
    }

    setLoading(true);
    try {
      // --- Email 1: Notify Kashif ---
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );

      // --- Email 2: Auto-reply to sender (if template configured) ---
      if (EMAILJS_AUTOREPLY_TEMPLATE) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_AUTOREPLY_TEMPLATE,
          {
            name:    form.name,
            email:   form.email,
            from_name:  "Kashif Ahmad",
            subject:    form.subject || "Your message received",
            message:    form.message,
          },
          EMAILJS_PUBLIC_KEY
        );
      }

      toast.success("Message sent! Check your inbox for confirmation. 🚀");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Something went wrong. Please email me directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    background: "rgba(17,17,24,0.8)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px",
    color: "#F0F0FF",
    padding: "12px 16px",
    width: "100%",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="orb orb-violet w-80 h-80 bottom-0 left-[-100px] opacity-12" />
      <div className="orb orb-cyan   w-60 h-60 top-0 right-[-80px]  opacity-08" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#6C63FF" }}>
            — Get In Touch —
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Let&apos;s Build{" "}
            <span className="gradient-text">Something Amazing</span>
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-sm" style={{ color: "#8888AA" }}>
            Actively seeking React.js / Next.js / MERN Stack Developer opportunities.
            I usually respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* -- Left: Details -- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Availability badge */}
            <div
              className="flex items-center gap-3 p-4 rounded-2xl"
              style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <div>
                <p className="text-sm font-semibold" style={{ color: "#22c55e" }}>Open to Work</p>
                <p className="text-xs" style={{ color: "#8888AA" }}>Available for new opportunities</p>
              </div>
            </div>

            {/* Contact details */}
            <div className="glass-card p-6 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#8888AA" }}>
                Contact Details
              </p>
              {[
                { icon: <Mail size={16} />, label: "Email", value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
                { icon: <MapPin size={16} />, label: "Location", value: PERSONAL.location, href: undefined },
              ].map((d) => (
                <div key={d.label} className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(108,99,255,0.15)", color: "#6C63FF" }}
                  >
                    {d.icon}
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: "#8888AA" }}>{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="text-sm font-medium hover:text-[#6C63FF] transition-colors" style={{ color: "#F0F0FF" }}>
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: "#F0F0FF" }}>{d.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Open to */}
            <div className="glass-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#8888AA" }}>
                Open To
              </p>
              <div className="flex flex-wrap gap-2">
                {PERSONAL.openTo.map((o) => (
                  <span
                    key={o}
                    className="text-xs px-3 py-1.5 rounded-full font-medium"
                    style={{ background: "rgba(108,99,255,0.12)", border: "1px solid rgba(108,99,255,0.25)", color: "#6C63FF" }}
                  >
                    {o}
                  </span>
                ))}
                {PERSONAL.willingToRelocate && (
                  <span
                    className="text-xs px-3 py-1.5 rounded-full font-medium"
                    style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)", color: "#00D4FF" }}
                  >
                    ✈️ Willing to Relocate
                  </span>
                )}
              </div>
            </div>

            {/* Social links */}
            <div className="glass-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#8888AA" }}>
                Connect With Me
              </p>
              <div className="flex gap-3">
                {[
                  { icon: <FaGithub size={18} />, href: PERSONAL.github, label: "GitHub" },
                  { icon: <FaLinkedinIn size={16} />, href: PERSONAL.linkedin, label: "LinkedIn" },
                  { icon: <Mail size={18} />, href: `mailto:${PERSONAL.email}`, label: "Email" },
                  { icon: <FaWhatsapp size={18} />, href: `https://wa.me/${PERSONAL.phone.replace(/[^0-9]/g, "")}`, label: "WhatsApp" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-3 rounded-xl border text-[#8888AA] hover:text-white transition-all duration-200 hover:border-[#6C63FF] hover:shadow-[0_0_15px_rgba(108,99,255,0.3)]"
                    style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(22,22,31,0.8)" }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* -- Right: Form -- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card p-8 space-y-5"
            >
              <p className="font-semibold text-lg mb-2" style={{ fontFamily: "'Outfit', sans-serif", color: "#F0F0FF" }}>
                Send a Message
              </p>

              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: "#8888AA" }}>
                    Your Name <span style={{ color: "#FF6584" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#6C63FF")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: "#8888AA" }}>
                    Email Address <span style={{ color: "#FF6584" }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#6C63FF")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-medium mb-2" style={{ color: "#8888AA" }}>
                  Subject
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={(e) => (e.target.style.borderColor = "#6C63FF")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                >
                  <option value="" style={{ background: "#111118" }}>Select a subject…</option>
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s} style={{ background: "#111118" }}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium mb-2" style={{ color: "#8888AA" }}>
                  Message <span style={{ color: "#FF6584" }}>*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell me about your project, opportunity, or just say hi!"
                  required
                  style={{ ...inputStyle, resize: "vertical", minHeight: 140 }}
                  onFocus={(e) => (e.target.style.borderColor = "#6C63FF")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white btn-glow transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: "linear-gradient(135deg, #6C63FF, #00D4FF)" }}
              >
                {loading ? (
                  <><Loader2 size={16} className="animate-spin" /> Sending…</>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </button>

              <p className="text-center text-xs" style={{ color: "#8888AA" }}>
                ⏱️ Response time: {PERSONAL.responseTime}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
