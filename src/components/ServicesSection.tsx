import { Layers, Hammer, Truck } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Gerüstbau",
    description:
      "Professionelle Gerüstlösungen für Neubau, Renovation und Sanierung. Sicher, termingerecht und nach Schweizer Standards.",
  },
  {
    icon: Hammer,
    title: "Abbruch",
    description:
      "Fachgerechter Rückbau und Abbruch von Gebäuden und Strukturen – effizient, sauber und umweltbewusst durchgeführt.",
  },
  {
    icon: Truck,
    title: "Entsorgung",
    description:
      "Zuverlässige Entsorgung von Baumaterialien und Schutt. Wir sorgen für eine ordnungsgemässe und nachhaltige Abfallbewirtschaftung.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Unsere Leistungen
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-foreground">
            Kompetenz auf jeder Baustelle
          </h2>
          <p className="text-muted-foreground mt-4">
            Von der Planung bis zur Ausführung – wir bieten Ihnen umfassende Bauleistungen aus einer Hand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card rounded-lg p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <s.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-card-foreground">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
