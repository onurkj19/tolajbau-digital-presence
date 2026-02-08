import { Layers, Hammer, Truck, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Layers,
    title: "Gerüstbau",
    num: "01",
    description:
      "Professionelle Gerüstlösungen für Neubau, Renovation und Sanierung. Sicher, termingerecht und nach Schweizer Standards.",
    features: ["Fassadengerüste", "Schutzgerüste", "Spezialgerüste"],
  },
  {
    icon: Hammer,
    title: "Abbruch",
    num: "02",
    description:
      "Fachgerechter Rückbau und Abbruch von Gebäuden und Strukturen – effizient, sauber und umweltbewusst durchgeführt.",
    features: ["Totalabbruch", "Teilrückbau", "Entkernung"],
  },
  {
    icon: Truck,
    title: "Entsorgung",
    num: "03",
    description:
      "Zuverlässige Entsorgung von Baumaterialien und Schutt. Ordnungsgemässe und nachhaltige Abfallbewirtschaftung.",
    features: ["Bauschuttentsorgung", "Muldenservice", "Recycling"],
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative bg-card rounded-2xl p-8 sm:p-10 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 ${
        visible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Number */}
      <span className="absolute top-6 right-6 font-display text-5xl font-bold text-muted/60 select-none">
        {service.num}
      </span>

      <div className="relative">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
          <service.icon size={26} className="text-primary" />
        </div>

        <h3 className="font-display text-2xl font-bold mb-4 text-card-foreground group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-6">
          {service.description}
        </p>

        <ul className="space-y-2.5 mb-8">
          {service.features.map((f) => (
            <li
              key={f}
              className="flex items-center gap-2.5 text-sm text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <button
          onClick={() =>
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-300"
        >
          Mehr erfahren
          <ArrowUpRight size={16} />
        </button>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Unsere Leistungen
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Kompetenz auf
            <span className="text-gradient"> jeder Baustelle</span>
          </h2>
          <p className="text-muted-foreground mt-5 text-lg max-w-xl mx-auto">
            Von der Planung bis zur Ausführung – umfassende Bauleistungen aus
            einer Hand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
