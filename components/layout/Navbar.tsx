"use client";

import { useState, useEffect, useRef } from "react";
import { PERSONAL } from "@/lib/data";
import { Menu, X, Download } from "lucide-react";

const NAV_LINKS = [
  { label: "Home",           href: "#home" },
  { label: "About",          href: "#about" },
  { label: "Skills",         href: "#skills" },
  { label: "Projects",       href: "#projects" },
  { label: "Experience",     href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Resume",         href: "#resume" },
  { label: "Contact",        href: "#contact" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [mobileOpen, setMobile]   = useState(false);
  const [active,    setActive]    = useState("home");
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          setScrolled(scrollTop > 60);

          // Scroll spy
          const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
          for (const id of [...sections].reverse()) {
            const el = document.getElementById(id);
            if (el && scrollTop >= el.offsetTop - 120) {
              setActive(id);
              break;
            }
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobile(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* -- Navbar -- */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl border-b border-white/[0.07] py-3"
            : "py-5"
        }`}
        style={{ background: scrolled ? "rgba(10,10,15,0.85)" : "transparent" }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="font-outfit font-bold text-xl select-none"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span className="gradient-text">Kashif Ahmad</span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      active === id
                        ? "text-white"
                        : "text-[#8888AA] hover:text-white"
                    }`}
                    style={
                      active === id
                        ? { color: "#6C63FF" }
                        : {}
                    }
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL.resumePdf}
              download
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white btn-glow"
              style={{ background: "linear-gradient(135deg, #6C63FF, #00D4FF)" }}
            >
              <Download size={14} /> Hire Me
            </a>
            <button
              className="lg:hidden p-2 rounded-lg text-[#8888AA] hover:text-white transition-colors"
              onClick={() => setMobile((p) => !p)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* -- Mobile Drawer -- */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className="mx-4 mt-2 mb-4 rounded-2xl border border-white/[0.07] p-4"
            style={{ background: "rgba(17,17,24,0.95)", backdropFilter: "blur(16px)" }}
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const id = link.href.replace("#", "");
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        active === id
                          ? "text-white"
                          : "text-[#8888AA] hover:text-white hover:bg-white/5"
                      }`}
                      style={active === id ? { color: "#6C63FF", background: "rgba(108,99,255,0.1)" } : {}}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 pt-4 border-t border-white/[0.07]">
              <a
                href={PERSONAL.resumePdf}
                download
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #6C63FF, #00D4FF)" }}
              >
                <Download size={14} /> Hire Me
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
