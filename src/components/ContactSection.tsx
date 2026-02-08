import { useState } from "react";
import { Phone, MapPin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet",
      description: "Vielen Dank! Wir melden uns schnellstmöglich bei Ihnen.",
    });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Kontakt
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-foreground">
            Jetzt Offerte anfordern
          </h2>
          <p className="text-muted-foreground mt-4">
            Kontaktieren Sie uns für eine unverbindliche Beratung und Offerte.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-display font-bold text-foreground">Telefon</h4>
                <a href="tel:+41762152094" className="text-muted-foreground hover:text-primary transition-colors">
                  +41 76 215 20 94
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-display font-bold text-foreground">Adresse</h4>
                <p className="text-muted-foreground">
                  Breitestrasse 22<br />
                  5015 Erlinsbach, Schweiz
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-display font-bold text-foreground">E-Mail</h4>
                <p className="text-muted-foreground">info@tolajbau.ch</p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-lg overflow-hidden border border-border h-48 bg-card flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin size={32} className="mx-auto mb-2 text-primary/40" />
                <p className="text-sm">Erlinsbach, Schweiz</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
                  <Input
                    required
                    maxLength={100}
                    placeholder="Ihr Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">E-Mail *</label>
                  <Input
                    required
                    type="email"
                    maxLength={255}
                    placeholder="ihre@email.ch"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Telefon</label>
                <Input
                  type="tel"
                  maxLength={20}
                  placeholder="+41 ..."
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Nachricht *</label>
                <Textarea
                  required
                  maxLength={1000}
                  rows={5}
                  placeholder="Beschreiben Sie Ihr Projekt..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <Button type="submit" size="lg" className="w-full gap-2">
                <Send size={16} /> Nachricht senden
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
