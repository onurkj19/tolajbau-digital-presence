import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  const links = [
    { label: "Startseite", href: "#hero" },
    { label: "Dienstleistungen", href: "#services" },
    { label: "Über uns", href: "#about" },
    { label: "Kontakt", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = links.map((l) => l.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-white/5 shadow-lg shadow-black/10"
          : "glass"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <button
          onClick={() => scrollTo("#hero")}
          className="flex items-center group"
        >
          <img
            src="/logo.png"
            alt="TOLAJBAU Logo"
            className="h-32 w-auto bg-white rounded-lg px-3 py-1 transition-transform duration-300 group-hover:scale-105"
          />
        </button>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                activeSection === l.href
                  ? "text-primary"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {l.label}
              {activeSection === l.href && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary rounded-full" />
              )}
            </button>
          ))}
          <div className="ml-4 flex items-center gap-3">
            <a href="tel:+41762152094">
              <Button
                size="sm"
                variant="outline"
                className="gap-2 border-primary/30 text-primary hover:bg-primary/10 hover:text-primary"
              >
                <Phone size={14} />
                Anrufen
              </Button>
            </a>
            <Button
              size="sm"
              className="gap-2"
              onClick={() => scrollTo("#contact")}
            >
              Offerte
              <ArrowRight size={14} />
            </Button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden glass border-t border-white/5 animate-slide-down">
          <div className="flex flex-col p-5 gap-1">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className={`text-left py-3 px-4 rounded-lg transition-all duration-200 ${
                  activeSection === l.href
                    ? "text-primary bg-primary/10 font-medium"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {l.label}
              </button>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
              <a href="tel:+41762152094">
                <Button variant="outline" className="w-full gap-2 border-primary/30 text-primary hover:bg-primary/10">
                  <Phone size={14} /> +41 76 215 20 94
                </Button>
              </a>
              <Button className="w-full gap-2" onClick={() => scrollTo("#contact")}>
                Offerte anfordern <ArrowRight size={14} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
