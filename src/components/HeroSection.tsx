import { ArrowRight, Shield, CheckCircle, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const AnimatedCounter = ({
  end,
  suffix = "",
  label,
  delay = 0,
}: {
  end: number;
  suffix?: string;
  label: string;
  delay?: number;
}) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          setTimeout(() => {
            let current = 0;
            const step = Math.ceil(end / 40);
            const timer = setInterval(() => {
              current += step;
              if (current >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(current);
              }
            }, 30);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, delay, started]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-3xl sm:text-4xl font-bold text-white">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-white/50 mt-1">{label}</div>
    </div>
  );
};

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl">
          <div
            className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-5 py-2 mb-8 animate-fade-in"
          >
            <Shield size={14} className="text-primary" />
            <span className="text-sm font-medium text-primary/90 tracking-wide">
              Ihr Baupartner in der Schweiz
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-white animate-fade-in-up">
            Qualität. Sicherheit.
            <br />
            <span className="text-gradient">Zuverlässigkeit.</span>
          </h1>

          <p
            className="text-lg sm:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            TOLAJBAU steht für professionellen Gerüstbau, fachgerechten Abbruch
            und zuverlässige Entsorgung – aus Erlinsbach für die ganze Schweiz.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="lg"
              className="text-base gap-2 px-8 h-13 glow-sm hover:glow-md transition-shadow duration-500"
              onClick={scrollToContact}
            >
              Offerte anfordern
              <ArrowRight size={18} />
            </Button>
            <a
              href="tel:+41762152094"
              className="flex items-center gap-3 text-white text-xl sm:text-2xl font-bold font-display tracking-wide hover:text-primary transition-colors"
            >
              <Phone size={22} className="text-primary" />
              +41 76 215 20 94
            </a>
          </div>

          <div
            className="flex flex-wrap gap-8 mt-14 animate-fade-in-up"
            style={{ animationDelay: "0.45s" }}
          >
            {["Gerüstbau", "Abbruch", "Entsorgung"].map((s) => (
              <div
                key={s}
                className="flex items-center gap-2.5 text-white/50 hover:text-white/70 transition-colors"
              >
                <CheckCircle size={16} className="text-primary" />
                <span className="text-sm font-medium tracking-wide">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
            <AnimatedCounter end={100} suffix="%" label="Sicherheit" />
            <AnimatedCounter end={250} suffix="+" label="Projekte" delay={100} />
            <AnimatedCounter end={15} suffix="+" label="Jahre Erfahrung" delay={200} />
            <AnimatedCounter end={100} suffix="%" label="Termintreue" delay={300} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/30 hover:text-white/60 transition-colors animate-float"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};

export default HeroSection;
