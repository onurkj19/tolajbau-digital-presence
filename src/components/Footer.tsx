import { Phone, MapPin, Mail, ArrowUp, Clock } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="section-dark border-t border-white/5">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src="/logo.png" alt="TOLAJBAU Logo" className="h-36 w-auto bg-white rounded-lg px-3 py-1 mb-5" />
            <p className="text-section-dark-foreground/40 text-sm leading-relaxed max-w-xs">
              Professioneller Gerüstbau, fachgerechter Abbruch und zuverlässige
              Entsorgung – aus Erlinsbach für die ganze Schweiz.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-5 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Startseite", href: "#hero" },
                { label: "Dienstleistungen", href: "#services" },
                { label: "Über uns", href: "#about" },
                { label: "Kontakt", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-section-dark-foreground/40 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-5 uppercase tracking-wider">
              Leistungen
            </h4>
            <ul className="space-y-3">
              {["Gerüstbau", "Abbruch", "Entsorgung", "Beratung"].map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-sm text-section-dark-foreground/40 hover:text-primary transition-colors duration-200"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-5 uppercase tracking-wider">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-section-dark-foreground/40">
                  Breitestrasse 22
                  <br />
                  5015 Erlinsbach
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <a
                  href="tel:+41762152094"
                  className="text-sm text-section-dark-foreground/40 hover:text-primary transition-colors"
                >
                  +41 76 215 20 94
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <a
                  href="mailto:info@tolajbau.ch"
                  className="text-sm text-section-dark-foreground/40 hover:text-primary transition-colors"
                >
                  info@tolajbau.ch
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-primary shrink-0" />
                <span className="text-sm text-section-dark-foreground/40">
                  Mo – Fr: 07:00 – 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-section-dark-foreground/25 text-xs">
            © {new Date().getFullYear()} TOLAJBAU. Alle Rechte vorbehalten.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-section-dark-foreground/25 hover:text-primary transition-colors group"
          >
            Nach oben
            <ArrowUp
              size={14}
              className="group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
