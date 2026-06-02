import { motion } from "framer-motion";
import { Search, Database, Cpu, Megaphone, BarChart3 } from "lucide-react";

export const Services = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Diagnostic Process",
      description:
        "On identifie le process commercial qui vous coûte le plus de temps et de deals. Cibles, canaux d'acquisition, sources de données disponibles. Vous repartez avec un plan d'automatisation concret en 30 minutes.",
      result: "Vous savez exactement où l'agent IA va intervenir.",
    },
    {
      number: "02",
      icon: Database,
      title: "Source Intelligence",
      description:
        "On ne rachète pas les mêmes bases de prospection que tout le monde. On scrape la donnée brute là où personne ne regarde encore — LeBonCoin, plateformes métier, LinkedIn, forums sectoriels. Données structurées et enrichies en interne.",
      result: "Vos prospects n'ont jamais été contactés par ce canal.",
    },
    {
      number: "03",
      icon: BarChart3,
      title: "Data Engineering",
      description:
        "Enrichissement de données, scoring IA, nettoyage. Chaque prospect est automatiquement qualifié avant même le premier contact. Vous ne parlez qu'aux bons profils B2B, au bon moment.",
      result: "Zéro temps perdu sur des leads froids.",
    },
    {
      number: "04",
      icon: Cpu,
      title: "Hyper-personnalisation & Déploiement",
      description:
        "L'agent IA scrape le profil, rédige un message hyper-personnalisé selon l'ICP et l'envoie sur le bon canal. Prospection multicanal automatisée : LinkedIn, email, SMS, WhatsApp, SDR vocal IA. Humain dans le ton.",
      result: "Taux de réponse ×4 vs un message générique.",
    },
    {
      number: "05",
      icon: Megaphone,
      title: "Nurturing & Orchestration",
      description:
        "Nurturing automatisé, qualification progressive, prise de RDV automatique par agent IA, injection CRM sans saisie manuelle. Reporting hebdomadaire. Votre infrastructure d'acquisition s'améliore chaque semaine.",
      result: "Vous recevez des RDV qualifiés. Vous closez.",
    },
  ];

  return (
    <section id="methode" className="py-24 relative overflow-hidden bg-background">
      <div className="container relative z-10">
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            La méthode Source-to-Scale™
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-foreground">
            Le système qui tourne{" "}
            <span className="text-primary font-extrabold italic">à votre place.</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed">
            Là où les autres commencent par envoyer des emails, nous commençons par trouver une donnée que personne n'a encore exploitée.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-6 max-w-4xl w-full">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-6 md:p-8 group relative flex items-start gap-4 md:gap-8 border border-border rounded-[24px] hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 overflow-hidden w-full"
            >
              {/* Number */}
              <div className="flex-none">
                <span className="text-6xl font-black text-black/[0.04] group-hover:text-primary/10 transition-colors leading-none">
                  {step.number}
                </span>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 rounded-xl bg-primary/5 group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-black text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed mb-4 font-medium">
                  {step.description}
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm font-bold text-primary">{step.result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="orb bg-primary/5 bottom-[-20%] right-[-10%] w-[500px] h-[500px]" />
    </section>
  );
};
