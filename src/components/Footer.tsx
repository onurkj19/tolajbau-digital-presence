import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-dark border-t border-primary/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-8 items-center">
          <div>
            <span className="font-display text-2xl font-bold tracking-tight">
              TOLAJ<span className="text-primary">BAU</span>
            </span>
            <p className="text-section-dark-foreground/50 text-sm mt-2">
              Gerüstbau · Abbruch · Entsorgung
            </p>
          </div>

          <div className="flex items-center gap-3 text-section-dark-foreground/60 text-sm">
            <MapPin size={16} className="text-primary shrink-0" />
            Breitestrasse 22, 5015 Erlinsbach
          </div>

          <div className="flex items-center gap-3 text-section-dark-foreground/60 text-sm sm:justify-end">
            <Phone size={16} className="text-primary shrink-0" />
            <a href="tel:+41762152094" className="hover:text-primary transition-colors">
              +41 76 215 20 94
            </a>
          </div>
        </div>

        <div className="border-t border-primary/10 mt-8 pt-8 text-center text-section-dark-foreground/30 text-xs">
          © {new Date().getFullYear()} TOLAJBAU. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
