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
            <img src="/avatars.png" alt="clients" className="h-9 w-auto" />
            <span className="text-xs font-bold text-slate-700">+50 entreprises utilisent nos systèmes ⭐⭐⭐⭐⭐</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight mb-4 text-foreground font-playfair max-w-5xl">
            +50 Entreprises nous ont confié leur acquisition
          </h1>

          <p className="text-xl md:text-2xl text-foreground font-medium mb-6 max-w-4xl leading-relaxed">
            On vous génère des prospects qualifiés pour accélérer votre croissance via canaux payants.
          </p>



          {/* CTA */}
          <div className="flex flex-col items-center w-full">
            <div className="flex items-center gap-4 mb-8 flex-wrap justify-center">
              {["Publicité", "Outbound", "CRM & Agents IA"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </div>
                  <span className="text-lg font-bold text-primary">{item}</span>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="mt-8 h-12 md:h-16 rounded-2xl px-6 md:px-12 text-base md:text-xl font-bold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-all hover:scale-[1.05] active:scale-95 cursor-pointer"
            >
              <a
                href="https://cal.com/source-to-scale/decouverte"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                Réserver un appel <ArrowRight className="w-6 h-6" />
              </a>
            </Button>

          </div>
        </motion.div>
      </div>

    </section>
  );
};
