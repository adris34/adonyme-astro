import { Bot, Users, Megaphone, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const solutions = [
  {
    icon: Bot,
    title: "CRM & IA Automatisés",
    description: "Prospection intelligente, assistants virtuels IA pour automatiser toutes vos tâches d'entreprise et libérer votre temps.",
  },
  {
    icon: Users,
    title: "Closing Automatisé",
    description: "Qualification, prise de RDV et closing automatisés via messages, emails et appels vocaux intelligents.",
  },
  {
    icon: Megaphone,
    title: "Stratégies Publicitaires",
    description: "Campagnes Meta et Google Ads optimisées pour e-commerce et génération de leads B2B à ROI maximal.",
  },
  {
    icon: Wrench,
    title: "Solutions Sur-Mesure",
    description: "Location et création de logiciels et systèmes automatisés entièrement personnalisés pour vos besoins spécifiques.",
  },
];

export const Solutions = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards one by one
            solutions.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="solutions" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold">
            Nos <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des outils propriétaires conçus pour propulser votre acquisition et automatiser votre croissance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`group p-8 rounded-3xl bg-card/50 backdrop-blur-lg border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 ${
                visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transition: "all 0.6s ease-out",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div className="flex flex-col items-start space-y-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                  <solution.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at center, hsl(217 91% 60% / 0.1) 0%, transparent 70%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
