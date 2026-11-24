import './Navbar.css'
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#0f172a]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">

        {/* Logo */}
        <a href="#home" className="text-2xl font-bold tracking-wide text-white">
          Makara<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-300 transition duration-300 hover:text-cyan-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden rounded-full border border-cyan-400 px-5 py-2 text-sm font-medium text-cyan-400 transition duration-300 hover:bg-cyan-400 hover:text-slate-900 md:block"
        >
          Let's Talk aaaaa
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle navigation"
        >
          <span
            className={`h-0.5 w-6 bg-white transition ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>

          <span
            className={`h-0.5 w-6 bg-white transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>

          <span
            className={`h-0.5 w-6 bg-white transition ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#0f172a] transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 py-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-cyan-400 px-6 py-2 font-medium text-slate-900"
            >
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 