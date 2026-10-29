import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="text-lg font-heading font-bold">
          Azeem <span className="gradient-text">Zulfiqar</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-slate-400 hover:text-white transition-colors">
            Services
          </a>
          <a href="#work" className="text-sm text-slate-400 hover:text-white transition-colors">
            Case Studies
          </a>
          <a href="#experience" className="text-sm text-slate-400 hover:text-white transition-colors">
            Experience
          </a>
          <a href="#about" className="text-sm text-slate-400 hover:text-white transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm text-slate-400 hover:text-white transition-colors">
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/azeem-zulfiqar-marketer/"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-cta inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white"
          >
            <MessageCircle size={14} /> Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}