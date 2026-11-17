"use client";

import { PERSONAL } from "@/lib/data";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { icon: <FaGithub size={18} />, href: PERSONAL.github,   label: "GitHub" },
    { icon: <FaLinkedinIn size={16} />, href: PERSONAL.linkedin, label: "LinkedIn" },
    { icon: <Mail size={18} />,   href: `mailto:${PERSONAL.email}`, label: "Email" },
  ];

  return (
    <footer
      className="relative border-t"
      style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(10,10,15,0.9)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Logo + tagline */}
          <div className="text-center sm:text-left">
            <span
              className="gradient-text font-bold text-xl"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Kashif Ahmad
            </span>
            <p className="text-[#8888AA] text-sm mt-1">
              MERN Stack Developer · Lahore, Pakistan
            </p>
            <p className="text-[#8888AA] text-xs mt-1">© {year} Kashif Ahmad</p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2.5 rounded-xl border text-[#8888AA] hover:text-white transition-all duration-200 hover:border-[#6C63FF] hover:shadow-[0_0_15px_rgba(108,99,255,0.3)]"
                style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(22,22,31,0.7)" }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
