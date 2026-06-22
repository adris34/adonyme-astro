"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
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
    tags: ["Meta Ads", "Google Ads", "LinkedIn Ads", "Taboola"],
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
    title: "Convertir",
    description: "Séquence anti no-show : études de cas, témoignages, vidéo \"qui on est\" J+1, SMS 2h avant.",
    tags: ["RDV booké J+3 minimum", "No-show <15% ↓"],
    result: "Closing en 20 min — pas 60",
  },
  {
    number: "08",
    icon: LineChart,
    title: "Mesurer",
    description: "UTMs par canal, CAC vs LTV, reporting hebdomadaire. Vous savez d'où vient chaque client.",
    tags: ["LinkedIn /li", "Instagram /inst", "Google /gg", "YouTube /yt"],
    result: "Au mois 4, vous savez où mettre le budget",
  },
];

export const Services = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const CARD_W = 340; // 320px card + 20px gap

  const getMaxOffset = () => {
    const el = sliderRef.current;
    if (!el) return 0;
    return -(steps.length * CARD_W - el.clientWidth - CARD_W);
  };

  const scroll = (dir: "left" | "right") => {
    const delta = dir === "right" ? -CARD_W : CARD_W;
    setOffset(prev => Math.min(0, Math.max(getMaxOffset(), prev + delta)));
  };

  const canScrollLeft = offset < 0;
  const canScrollRight = offset > getMaxOffset();

  return (
    <section id="methode" className="py-24 bg-[#0f172a] relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.12)_0%,transparent_60%)]" />

      <div className="container relative z-10">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
            >
              La méthode Source-to-Scale™
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-white font-playfair"
            >
              Comment on résout<br />votre problème.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg mt-4 font-medium"
            >
              De l'ICP au client signé — une structure maîtrisée.
            </motion.p>
          </div>

          {/* Nav buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition disabled:opacity-30"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition disabled:opacity-30"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider — JS translateX so no overflow clipping on zoom */}
        <div>
          <div
            ref={sliderRef}
            className="flex gap-5 py-10 -my-10"
            style={{ transform: `translateX(${offset}px)`, transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)" }}
          >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="bg-white rounded-2xl p-7 flex flex-col flex-shrink-0 w-[300px] md:w-[320px] transition-all duration-300 ease-out border border-transparent hover:border-white/80 cursor-pointer"
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 0 1px rgba(255,255,255,0.8), 0 0 12px 2px rgba(255,255,255,0.6), 0 0 40px 8px rgba(147,197,253,0.5), 0 0 80px 16px rgba(99,102,241,0.3)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                <span className="text-[11px] font-black text-primary uppercase tracking-widest mb-1">
                  Étape {step.number}
                </span>
                <h3 className="text-lg font-black text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium mb-5 flex-1">
                  {step.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {step.tags.map((tag, i) => (
                    <span key={i} className="text-[11px] font-bold px-2.5 py-1 rounded-full border border-slate-200 text-slate-600 bg-slate-50">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-[11px] font-bold text-primary">{step.result}</span>
                </div>
              </motion.div>

            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
};
