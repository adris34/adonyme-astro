import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Rocket } from "lucide-react";
import { useState } from "react";
import { useToast } from "../../hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message envoyé !",
      description: "Nous reviendrons vers vous dans les plus brefs délais.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
          <div 
            className="absolute inset-0 rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, hsl(217 91% 60% / 0.3) 0%, transparent 70%)" }}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold">
              Un Projet{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Précis ?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Notre sélectivité garantit des résultats exceptionnels. 
              <br />
              Parlez-nous de votre vision.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="p-8 rounded-3xl bg-card/50 backdrop-blur-lg border border-border/50 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nom *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                    className="bg-background/50 backdrop-blur border-border/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                    className="bg-background/50 backdrop-blur border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Entreprise
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Votre entreprise"
                    className="bg-background/50 backdrop-blur border-border/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+33 6 12 34 56 78"
                    className="bg-background/50 backdrop-blur border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez-nous votre projet..."
                  rows={6}
                  required
                  className="bg-background/50 backdrop-blur border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
              >
                <Rocket className="w-5 h-5" />
                Envoyer le message
              </Button>
            </div>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Nous étudions chaque demande avec attention. 
            <br />
            Réponse sous 48h pour les projets qualifiés.
          </p>
        </div>
      </div>
    </section>
  );
};
