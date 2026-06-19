import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#0f172a] p-12 md:p-20 rounded-[48px] text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight font-playfair">
              Prêt à structurer{" "}
              <span className="italic text-primary">
                votre acquisition ?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-slate-300 mb-6 font-medium leading-relaxed">
              On analyse votre situation en 30 minutes et on repart avec un plan d'action concret.
            </p>

            <div className="flex flex-col items-center gap-4">
              <Button
                asChild
                size="lg"
                className="h-16 rounded-2xl px-12 text-xl font-bold bg-primary text-white hover:bg-primary/90 shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <a
                  href="https://cal.com/acquisition-ai/decouverte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  Réserver un appel découverte <ArrowRight className="w-6 h-6" />
                </a>
              </Button>
              <p className="text-slate-400 text-sm font-bold">
                Sans engagement · 30 minutes
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
