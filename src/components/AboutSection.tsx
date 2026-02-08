import { Award, Users, ShieldCheck, Clock } from "lucide-react";

const stats = [
  { icon: ShieldCheck, label: "Sicherheit", value: "100%" },
  { icon: Clock, label: "Termintreue", value: "Garantiert" },
  { icon: Users, label: "Zufriedene Kunden", value: "Zahlreich" },
  { icon: Award, label: "Qualitätsstandard", value: "Schweizer" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 section-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Über uns
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-6">
              Ihr verlässlicher Partner im Bauwesen
            </h2>
            <p className="text-section-dark-foreground/70 leading-relaxed mb-6">
              TOLAJBAU ist ein Schweizer Bauunternehmen mit Sitz in Erlinsbach. Unter der
              Leitung von <strong className="text-section-dark-foreground">Uke Tolaj</strong> bieten wir
              professionelle Dienstleistungen in den Bereichen Gerüstbau, Abbruch und
              Entsorgung.
            </p>
            <p className="text-section-dark-foreground/70 leading-relaxed mb-8">
              Unser Anspruch: Höchste Qualität, termingerechte Ausführung und absolute
              Sicherheit auf jeder Baustelle. Wir arbeiten nach den strengen Schweizer
              Bauvorschriften und setzen auf modernste Technik.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3 bg-secondary/50 rounded-lg p-4">
                  <s.icon size={20} className="text-primary shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-section-dark-foreground">{s.value}</div>
                    <div className="text-xs text-section-dark-foreground/50">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-secondary rounded-2xl p-10 border border-primary/20">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto flex items-center justify-center mb-6">
                  <span className="font-display text-3xl font-bold text-primary">UT</span>
                </div>
                <h3 className="font-display text-2xl font-bold">Uke Tolaj</h3>
                <p className="text-primary font-medium mt-1">Geschäftsführer</p>
                <div className="w-12 h-0.5 bg-primary mx-auto my-6" />
                <p className="text-section-dark-foreground/60 text-sm leading-relaxed">
                  Mit langjähriger Erfahrung im Bauwesen führt Uke Tolaj TOLAJBAU mit
                  Leidenschaft und dem Anspruch, jedem Kunden erstklassige Qualität zu liefern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
