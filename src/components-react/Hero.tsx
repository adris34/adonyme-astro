import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const SECTORS = [
  "Finance",
  "E-commerce",
  "SaaS",
  "Retail",
  "Industrie",
  "Services B2B",
  "Santé",
  "Immobilier",
  "Conseil",
  "Formation",
  "RH & Recrutement",
  "Logistique",
  "Tech",
  "Assurance",
  "Juridique",
  "BTP",
  "Marketing",
  "Restauration",
  "Tourisme",
  "Énergie",
];

const SectorsMarquee = () => {
  return (
    <div className="w-full py-10 mt-6 border-y border-slate-100/50" style={{backgroundColor: '#ffffff'}}>
      <div className="container mx-auto px-4">
        <p className="text-2xl md:text-3xl font-black text-slate-900 text-center mb-10 tracking-tight">
          +30 secteurs d'activités accompagnés
        </p>

        <div className="relative overflow-hidden w-full h-16 flex items-center">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex gap-4 items-center whitespace-nowrap animate-marquee">
            {[...SECTORS, ...SECTORS, ...SECTORS].map((item, i) => (
              <div
                key={i}
                className="px-8 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-slate-800 font-bold text-sm md:text-base flex items-center justify-center cursor-default"
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
    <section className="relative flex flex-col items-center justify-start pt-32 pb-24 overflow-hidden" style={{backgroundColor: '#f5f4f0'}}>
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
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm mb-10">
            <div className="flex -space-x-2.5">
              {["#3B82F6","#10B981","#F59E0B","#EF4444","#8B5CF6","#06B6D4"].map((color, i) => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-white flex-shrink-0" style={{ backgroundColor: color, zIndex: 6 - i }} />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-700">Ils utilisent nos systèmes ⭐⭐⭐⭐⭐</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-8 text-foreground font-playfair">
            On débloque votre acquisition BtoB pour générer une{" "}
            <span className="text-primary italic">croissance prédictible.</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground font-medium mb-8 max-w-4xl leading-relaxed">
            Pour les entreprises qui veulent structurer, scaler et maîtriser leur acquisition.
          </p>



          {/* CTA */}
          <div className="flex flex-col items-center w-full">
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
                Structurer mon acquisition <ArrowRight className="w-6 h-6" />
              </a>
            </Button>
            <p className="text-sm font-bold text-foreground/50 mt-3">
              +50 entreprises accompagnées · 412K leads générés · Sans engagement
            </p>
          </div>
        </motion.div>
      </div>

    </section>
  );
};
