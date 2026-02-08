import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Startseite", href: "#hero" },
    { label: "Dienstleistungen", href: "#services" },
    { label: "Über uns", href: "#about" },
    { label: "Kontakt", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <button onClick={() => scrollTo("#hero")} className="font-display text-2xl font-bold tracking-tight text-primary-foreground">
          TOLAJ<span className="text-primary">BAU</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium text-secondary-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </button>
          ))}
          <a href="tel:+41762152094">
            <Button size="sm" className="gap-2">
              <Phone size={14} /> Anrufen
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-secondary-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary border-t border-primary/20 animate-fade-in">
          <div className="flex flex-col p-4 gap-3">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-left py-2 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                {l.label}
              </button>
            ))}
            <a href="tel:+41762152094">
              <Button className="w-full gap-2 mt-2">
                <Phone size={14} /> +41 76 215 20 94
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
