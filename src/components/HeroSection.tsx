import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <Shield size={14} className="text-primary" />
            <span className="text-sm font-medium text-primary">Ihr Baupartner in der Schweiz</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-section-dark-foreground animate-fade-in-up">
            Qualität. Sicherheit.{" "}
            <span className="text-gradient">Zuverlässigkeit.</span>
          </h1>

          <p className="text-lg sm:text-xl text-section-dark-foreground/70 max-w-xl mb-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            TOLAJBAU steht für professionellen Gerüstbau, fachgerechten Abbruch
            und zuverlässige Entsorgung – aus Erlinsbach für die ganze Schweiz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="text-base gap-2 px-8" onClick={scrollToContact}>
              Offerte anfordern <ArrowRight size={18} />
            </Button>
            <a href="tel:+41762152094">
              <Button size="lg" variant="outline" className="text-base border-primary/40 text-primary-foreground hover:bg-primary/10 w-full sm:w-auto">
                +41 76 215 20 94
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            {["Gerüstbau", "Abbruch", "Entsorgung"].map((s) => (
              <div key={s} className="flex items-center gap-2 text-section-dark-foreground/60">
                <CheckCircle size={16} className="text-primary" />
                <span className="text-sm font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
