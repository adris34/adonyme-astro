import { motion } from "framer-motion";
import { Target, Megaphone, Database, Mail, FileText, Cpu, Zap, LineChart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Fondations",
    description: "ICP, signaux d'achat, douleur centrale. Plan priorisé en 30 min.",
    tags: ["Qui est mon client idéal", "Quel signal déclencheur", "Quelle douleur précise"],
    result: "Vous savez exactement à qui parler",
  },
  {
    number: "02",
    icon: Megaphone,
    title: "Attirer",
    description: "Meta Ads CBO — TOFU/MOFU/BOFU en simultané. L'algorithme optimise le budget en global, pas par adset.",
    tags: ["Meta Ads", "Google Ads", "LinkedIn Ads", "Taboola", "Outbrain"],
    result: "Trafic qualifié sans structure lourde",
  },
  {
    number: "03",
    icon: Database,
    title: "Source Intelligence",
    description: "On scrape des sources non exploitées, spécifiques à votre secteur. Enrichissement en cascade selon les signaux détectés.",
    tags: ["Pas Apollo comme tout le monde", "Signal → enrichissement avancé"],
    result: "Données que vos concurrents n'ont pas",
  },
  {
    number: "04",
    icon: Mail,
    title: "Prospecter",
    description: "Email multicanal + LinkedIn outreach + SDR vocal IA. 5 à 7 touches sur 45 jours — le bon canal, au bon moment.",
    tags: ["Email", "LinkedIn", "Vocal IA"],
    result: "Relancé automatiquement jusqu'à la décision",
  },
  {
    number: "05",
    icon: FileText,
    title: "Capturer",
    description: "Page de capture + VSL 30-60s. Le PDF n'est jamais envoyé directement — toujours derrière une page.",
    tags: ["Sans VSL : 15-20%", "Avec VSL : 35-50% ↑"],
    result: "Taux de conversion ×2 avec VSL",
    highlightTag: 1,
  },
  {
    number: "06",
    icon: Cpu,
    title: "Nurturing",
    description: "Séquence email 30 jours. Scoring comportemental — chaque action déclenche une réponse automatique.",
    tags: ["Email ouvert 3× → SMS dans l'heure", "Clic page RDV → créneau immédiat"],
    result: "7-12 points de contact automatiques",
  },
  {
    number: "07",
    icon: Zap,
    title: "Convertir avant de signer",
    description: "Séquence anti no-show : études de cas, témoignages, lead magnet, vidéo \"qui on est\" J+1, SMS 2h avant. Votre prospect cherche à confirmer ce qu'il sait déjà. Le seul facteur étant : la confiance.",
    tags: ["RDV booké J+3 minimum", "No-show <15% ↓"],
    result: "Closing en 20 min — pas 60",
    highlightTag: 1,
  },
  {
    number: "08",
    icon: LineChart,
    title: "Mesurer",
    description: "UTMs par canal, CAC vs LTV, reporting hebdomadaire. Vous savez d'où vient chaque client et où concentrer vos efforts.",
    tags: ["LinkedIn /li", "Instagram /inst", "Google /gg", "YouTube /yt"],
    result: "Au mois 4, vous savez où mettre le budget",
  },
];

export const Services = () => {
  return (
    <section id="methode" className="py-24 relative overflow-hidden bg-background">
      <div className="container relative z-10">
        <div className="max-w-2xl mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            La méthode Source-to-Scale™
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-foreground font-playfair">
            Comment on le fait.
          </h2>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed">
            De l'ICP au client signé — une structure maîtrisée.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
              className="bg-white border border-border rounded-[20px] p-6 relative overflow-hidden group hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <span className="absolute top-0 right-3 text-[72px] font-black text-foreground/[0.04] font-playfair leading-none select-none">
                {step.number}
              </span>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-base font-black text-foreground group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-3 font-medium">
                {step.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {step.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                      step.highlightTag === i
                        ? "border-primary/30 text-primary bg-primary/5"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-[11px] font-bold text-primary">{step.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="orb bg-primary/5 bottom-[-20%] right-[-10%] w-[500px] h-[500px]" />
    </section>
  );
};
