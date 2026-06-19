import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Target, Megaphone, Database, Mail, FileText, Cpu, Zap, LineChart, ChevronLeft, ChevronRight } from "lucide-react";

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

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export const Services = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => { if (current > 0) go(current - 1); };
  const next = () => { if (current < steps.length - 1) go(current + 1); };

  const step = steps[current];
  const Icon = step.icon;

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
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-foreground font-playfair">
            Comment on le fait.
          </h2>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed">
            De l'ICP au client signé — une structure maîtrisée.
          </p>
        </div>

        {/* Slider */}
        <div className="relative bg-white border border-border rounded-[32px] overflow-hidden shadow-sm">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="grid md:grid-cols-2 min-h-[420px]"
            >
              {/* Left — number + meta */}
              <div className="bg-[#0f172a] p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
                <span className="absolute bottom-0 right-0 text-[180px] font-black text-white/[0.04] font-playfair leading-none select-none translate-y-8 translate-x-4">
                  {step.number}
                </span>
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-8">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-primary font-black text-xs uppercase tracking-widest mb-3">
                    Étape {step.number}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white leading-tight font-playfair">
                    {step.title}
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 w-fit mt-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-xs font-bold text-primary">{step.result}</span>
                </div>
              </div>

              {/* Right — content */}
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-8">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs font-bold px-3 py-1.5 rounded-full border ${
                        step.highlightTag === i
                          ? "border-primary/30 text-primary bg-primary/5"
                          : "border-border text-muted-foreground bg-background"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          {/* Step dots */}
          <div className="flex items-center gap-2">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === current
                    ? "w-8 bg-primary"
                    : "w-2 bg-border hover:bg-primary/40"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={current === steps.length - 1}
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
      <div className="orb bg-primary/5 bottom-[-20%] right-[-10%] w-[500px] h-[500px]" />
    </section>
  );
};
