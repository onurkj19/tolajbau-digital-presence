import { Award, Users, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: ShieldCheck, label: "Sicherheitsstandard", value: "100%", color: "text-emerald-400" },
  { icon: Clock, label: "Termintreue", value: "Garantiert", color: "text-emerald-400" },
  { icon: Users, label: "Zufriedene Kunden", value: "250+", color: "text-emerald-400" },
  { icon: Award, label: "Qualitätsstandard", value: "Schweizer", color: "text-emerald-400" },
];

const values = [
  {
    title: "Qualität",
    description: "Wir arbeiten nach höchsten Schweizer Standards und verwenden nur bewährte Materialien und Techniken.",
  },
  {
    title: "Sicherheit",
    description: "Absolute Sicherheit auf jeder Baustelle ist für uns nicht verhandelbar. Ihr Schutz hat Priorität.",
  },
  {
    title: "Zuverlässigkeit",
    description: "Termingerechte Ausführung und transparente Kommunikation – darauf können Sie sich verlassen.",
  },
];

const AboutSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-28 section-dark overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Über uns
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Ihr verlässlicher Partner
            <span className="text-gradient"> im Bauwesen</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left - Content */}
          <div className={visible ? "animate-fade-in-left" : "opacity-0"}>
            <p className="text-lg text-section-dark-foreground/70 leading-relaxed mb-6">
              TOLAJBAU ist ein Schweizer Bauunternehmen mit Sitz in Erlinsbach. Unter der
              Leitung von{" "}
              <strong className="text-white font-semibold">Uke Tolaj</strong>{" "}
              bieten wir professionelle Dienstleistungen in den Bereichen
              Gerüstbau, Abbruch und Entsorgung.
            </p>
            <p className="text-section-dark-foreground/70 leading-relaxed mb-10">
              Unser Anspruch: Höchste Qualität, termingerechte Ausführung und
              absolute Sicherheit auf jeder Baustelle. Wir arbeiten nach den
              strengen Schweizer Bauvorschriften und setzen auf modernste
              Technik.
            </p>

            {/* Values */}
            <div className="space-y-6 mb-10">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="flex gap-5 group"
                >
                  <div className="shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center text-primary font-display font-bold text-sm group-hover:bg-primary/25 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white mb-1">
                      {v.title}
                    </h4>
                    <p className="text-section-dark-foreground/50 text-sm leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              className="gap-2"
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Kontakt aufnehmen
              <ArrowRight size={16} />
            </Button>
          </div>

          {/* Right - Card + Stats */}
          <div className={visible ? "animate-fade-in-right" : "opacity-0"} style={{ animationDelay: "0.2s" }}>
            {/* CEO Card */}
            <div className="relative bg-secondary/80 rounded-2xl p-10 border border-white/5 mb-8">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] rounded-tr-2xl" />

              <div className="relative text-center">
                <div className="w-24 h-24 rounded-2xl bg-primary/15 mx-auto flex items-center justify-center mb-6 animate-pulse-glow">
                  <span className="font-display text-3xl font-bold text-primary">
                    UT
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Uke Tolaj
                </h3>
                <p className="text-primary font-medium mt-1 text-sm tracking-wide">
                  Geschäftsführer
                </p>
                <div className="w-12 h-0.5 bg-primary/30 mx-auto my-6 rounded-full" />
                <p className="text-section-dark-foreground/50 text-sm leading-relaxed max-w-sm mx-auto">
                  Mit langjähriger Erfahrung im Bauwesen führt Uke Tolaj
                  TOLAJBAU mit Leidenschaft und dem Anspruch, jedem Kunden
                  erstklassige Qualität zu liefern.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-secondary/50 rounded-xl p-5 border border-white/5 hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <s.icon
                      size={18}
                      className="text-primary shrink-0 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-sm font-bold text-white">
                      {s.value}
                    </span>
                  </div>
                  <span className="text-xs text-section-dark-foreground/40">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
