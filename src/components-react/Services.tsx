import { motion } from "framer-motion";
import { useRef } from "react";
import { Target, Megaphone, Database, Mail, FileText, Cpu, Zap, LineChart } from "lucide-react";

const TiltCard = ({ children, className }: { children: React.ReactNode; className: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale3d(1.06,1.06,1.06)`;
  };

  const handleMouseLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.15s ease-out", transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
};

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
    description: "Séquence anti no-show : études de cas, témoignages, lead magnet, vidéo \"qui on est\" J+1, SMS 2h avant. Le seul facteur : la confiance.",
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
      <div className="container relative z-10 max-w-5xl mx-auto">

        <div className="mb-20 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            La méthode Source-to-Scale™
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-foreground font-playfair">
            Comment on résout votre problème.
          </h2>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed">
            De l'ICP au client signé — une structure maîtrisée.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-border -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isRight = index % 2 === 0;

              return (
                <div key={index} className="relative flex items-center">
                  {/* Dot on the line */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-primary border-4 border-background shadow z-10 hidden md:block"
                  />

                  {/* Card — alternating sides */}
                  <div className={`w-full md:w-[46%] ${isRight ? "md:ml-auto" : "md:mr-auto"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                    >
                    <TiltCard className="bg-[#0f172a] rounded-2xl p-6 md:p-8 group hover:shadow-lg hover:shadow-slate-900/20 cursor-pointer">
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <span className="text-[11px] font-black text-white/70 uppercase tracking-widest">
                        Étape {step.number}
                      </span>
                      <h3 className="text-xl font-black text-white mt-1 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-white/75 leading-relaxed font-medium mb-4">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {step.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/30 text-white/80 bg-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                        <span className="text-[11px] font-bold text-white">{step.result}</span>
                      </div>
                    </TiltCard>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
