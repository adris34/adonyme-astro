import { motion } from "framer-motion";
import { Search, Database, Cpu, Megaphone, BarChart3, Zap, LineChart, Mail } from "lucide-react";

export const Services = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Fondations",
      description:
        "On définit votre ICP, vos signaux d'achat et la douleur centrale. On analyse vos cibles, vos canaux et les sources de données disponibles. On sort avec un plan Source-to-Scale priorisé en 30 minutes.",
      result: "Vous savez exactement à qui parler — et pourquoi maintenant.",
    },
    {
      number: "02",
      icon: Megaphone,
      title: "Attirer",
      description:
        "Campagnes Meta Ads CBO en simultané TOFU/MOFU/BOFU. L'algo optimise en global, pas par adset. Notoriété, preuve et conversion tournent en même temps.",
      result: "Trafic qualifié entrant — sans structure lourde à gérer.",
    },
    {
      number: "03",
      icon: Database,
      title: "Source Intelligence",
      description:
        "On ne rachète pas les mêmes bases Apollo que vos concurrents. On identifie et scrape les sources de données non exploitées — spécifiques à votre secteur et à votre ICP.",
      result: "Pour vous démarquer et sortir du lot.",
    },
    {
      number: "04",
      icon: Mail,
      title: "Prospecter",
      description:
        "Séquences email multicanal, LinkedIn outreach, SDR vocal IA. Enrichissement en cascade selon les signaux détectés — email ouvert, clic, visite page. Chaque contact est travaillé sur 5 à 7 touches sur 45 jours — le bon message, au bon moment, sur le bon canal.",
      result: "Vos prospects sont relancés automatiquement jusqu'à la décision.",
    },
    {
      number: "05",
      icon: BarChart3,
      title: "Capturer",
      description:
        "Page de capture + VSL 30-60s + formulaire. Le lead magnet n'est jamais envoyé directement — toujours derrière une page. Tout prospect capturé entre automatiquement dans le CRM.",
      result: "Taux de conversion ×2 avec VSL vs sans.",
    },
    {
      number: "06",
      icon: Cpu,
      title: "Nurturing",
      description:
        "Séquence email 30 jours automatisée. Pipeline CRM : Nouveau → Engagé → Chaud → RDV Booké. Scoring comportemental : email ouvert 3× → SMS dans l'heure. Votre CRM se met à jour automatiquement.",
      result: "7 à 12 points de contact avant la décision — automatiques.",
    },
    {
      number: "07",
      icon: Zap,
      title: "Convertir",
      description:
        "Séquence anti no-show automatisée : confirmation + contenu de warming progressif (études de cas, témoignages, preuves sociales) + vidéo \"qui on est\" J+1 + SMS 2h avant. Quand votre prospect décroche, il vous connaît déjà — il a vu vos résultats, il comprend votre méthode.",
      result: "No-show réduit à <15%. Vous closez en 20 min. Pas 60.",
    },
    {
      number: "08",
      icon: LineChart,
      title: "Mesurer",
      description:
        "UTMs par canal, CAC vs LTV, reporting hebdomadaire. Vous savez exactement d'où vient chaque client et où concentrer le budget.",
      result: "Au mois 4, vous savez où mettre le budget.",
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
          <h2 className="text-3xl md:text-6xl font-black mb-4 text-foreground">
            Le système qui prospecte, qualifie et relance{" "}
            <span className="text-primary font-extrabold italic">— à votre place.</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed">
            Là où les autres commencent par envoyer des emails, nous commençons par trouver une donnée que personne n'a encore exploitée.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-6 max-w-4xl w-full">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-6 md:p-8 group relative flex items-start gap-4 md:gap-8 border border-border rounded-[24px] hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 overflow-hidden w-full"
            >
              {/* Number */}
              <div className="flex-none">
                <span className="text-4xl md:text-6xl font-black text-black/[0.04] group-hover:text-primary/10 transition-colors leading-none">
                  {step.number}
                </span>
              </div>

              <div className="flex-1 min-w-0">
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
