import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const AI_EXAMPLES = [
  "Scraping sur-mesure",
  "Cold Email",
  "SDR IA",
  "LinkedIn Automation",
  "Social Warming",
  "Ringless Voicemail",
  "WhatsApp Automation",
  "Meta Ads",
  "Google Ads",
  "LinkedIn Ads",
  "Enrichissement de données",
  "Prise de RDV",
  "Nurturing automatisé",
  "Score de qualification",
  "Campagnes SMS",
  "Séquences multicanal",
  "Agent IA 24h/24",
  "CRM sur-mesure",
  "Transcription d'appels",
  "Image génération IA",
  "Hyper-personnalisation",
  "Retargeting",
  "Taboola",
  "Outbrain",
  "Source Intelligence",
];

const AIExamplesMarquee = () => {
  return (
    <div className="w-full py-10 mt-6 border-y border-slate-100/50" style={{backgroundColor: '#ffffff'}}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12 tracking-tight">
          Nos outils d'acquisition.
        </h2>

        <div className="relative overflow-hidden w-full h-16 flex items-center">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex gap-4 items-center whitespace-nowrap animate-marquee">
            {[...AI_EXAMPLES, ...AI_EXAMPLES, ...AI_EXAMPLES].map((item, i) => (
              <div
                key={i}
                className="px-8 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-slate-800 font-bold text-sm md:text-base flex items-center justify-center hover:border-blue-400 hover:text-blue-600 transition-all cursor-default"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-32 pb-0 overflow-hidden" style={{backgroundColor: '#f5f4f0'}}>
      <motion.div
        style={{ y: y1 }}
        className="orb bg-primary/10 top-[-10%] right-[-10%] w-[600px] h-[600px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="orb bg-secondary/5 bottom-[-10%] left-[-10%] w-[500px] h-[500px]"
      />

      <div className="container relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl flex flex-col items-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] md:text-xs font-bold uppercase tracking-wider mb-10 shadow-sm">
            Le 1er système d'acquisition IA pensé pour le marché français
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter mb-8 text-foreground">
            L'infrastructure qui accélère{" "}
            <span className="text-primary">votre acquisition.</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground font-medium mb-8 max-w-4xl leading-relaxed">
            Adonyme construit un écosystème d'agents IA sur-mesure — qui prospecte sur <strong className="font-extrabold italic text-foreground">des sources que personne n'exploite encore</strong>, automatise <strong className="font-extrabold italic text-foreground">chaque étape du cycle commercial</strong>, et vous livre <strong className="font-extrabold italic text-foreground">des revenus prévisibles</strong>. Sans équipe à gérer.
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center w-full mb-12">
            <Button
              asChild
              size="lg"
              className="h-16 rounded-2xl px-12 text-xl font-bold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-all hover:scale-[1.05] active:scale-95 cursor-pointer mb-3"
            >
              <a
                href="https://cal.com/acquisition-ai/decouverte"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                Réserver mon audit gratuit <ArrowRight className="w-6 h-6" />
              </a>
            </Button>
            <p className="text-sm font-bold text-foreground/50 mt-3">
              +50 startups, TPE et PME nous font confiance
            </p>
          </div>
        </motion.div>
      </div>

      <AIExamplesMarquee />
    </section>
  );
};
