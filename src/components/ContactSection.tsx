import { useState } from "react";
import { Phone, MapPin, Mail, Send, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    value: "+41 76 215 20 94",
    href: "tel:+41762152094",
    subtitle: "Mo – Fr, 07:00 – 18:00",
  },
  {
    icon: Mail,
    title: "E-Mail",
    value: "info@tolajbau.ch",
    href: "mailto:info@tolajbau.ch",
    subtitle: "Antwort innert 24h",
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: "Breitestrasse 22",
    subtitle: "5015 Erlinsbach, Schweiz",
  },
  {
    icon: Clock,
    title: "Öffnungszeiten",
    value: "Mo – Fr: 07:00 – 18:00",
    subtitle: "Sa: nach Vereinbarung",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast({
        title: "Nachricht gesendet",
        description:
          "Vielen Dank! Wir melden uns schnellstmöglich bei Ihnen.",
      });
      setForm({ name: "", email: "", phone: "", message: "" });
      setSending(false);
    }, 800);
  };

  return (
    <section id="contact" className="py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Kontakt
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Jetzt <span className="text-gradient">Offerte anfordern</span>
          </h2>
          <p className="text-muted-foreground mt-5 text-lg">
            Kontaktieren Sie uns für eine unverbindliche Beratung und Offerte.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-display font-bold text-foreground text-sm mb-0.5">
                    {item.title}
                  </h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  )}
                  <p className="text-muted-foreground/60 text-xs mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border h-52">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.5!2d7.995!3d47.393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4790176a22b2a32d%3A0x0!2sBreitestrasse%2022%2C%205015%20Erlinsbach!5e0!3m2!1sde!2sch!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TOLAJBAU Standort"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-8 sm:p-10 space-y-6 shadow-sm"
            >
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  Schreiben Sie uns
                </h3>
                <p className="text-muted-foreground text-sm">
                  Füllen Sie das Formular aus und wir melden uns bei Ihnen.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    required
                    maxLength={100}
                    placeholder="Ihr vollständiger Name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="h-12 bg-muted/50 border-border focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    E-Mail <span className="text-primary">*</span>
                  </label>
                  <Input
                    required
                    type="email"
                    maxLength={255}
                    placeholder="ihre@email.ch"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="h-12 bg-muted/50 border-border focus:border-primary/50"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Telefon
                </label>
                <Input
                  type="tel"
                  maxLength={20}
                  placeholder="+41 76 ..."
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  className="h-12 bg-muted/50 border-border focus:border-primary/50"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Nachricht <span className="text-primary">*</span>
                </label>
                <Textarea
                  required
                  maxLength={1000}
                  rows={5}
                  placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="bg-muted/50 border-border focus:border-primary/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gap-2 h-13 text-base glow-sm hover:glow-md transition-shadow duration-500"
                disabled={sending}
              >
                {sending ? (
                  <>Wird gesendet...</>
                ) : (
                  <>
                    Nachricht senden
                    <Send size={16} />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground/60 text-center">
                Ihre Daten werden vertraulich behandelt und nicht an Dritte
                weitergegeben.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
