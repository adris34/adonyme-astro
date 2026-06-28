"use client";

import { motion } from "framer-motion";

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

export const Problem = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{backgroundColor: '#ffffff'}}>

      <div className="container relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-primary font-bold tracking-widest uppercase text-sm mb-6"
        >
          Ce qu'on fait
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-black mb-10 leading-tight tracking-tighter" style={{color: '#0f172a'}}
        >
          On vous garantit un{" "}
          <span className="text-primary italic">flux de prospects régulier.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-xl md:text-2xl leading-relaxed mb-16" style={{color: '#334155'}}
        >
          On revoit ensemble toute votre stratégie d'acquisition. Vos canaux inbound / d'outbound, votre tunnel de vente, vos méthodes de capturer - éduquer - qualifier - convertir vos prospects.
        </motion.p>

      </div>

      {/* Sectors marquee */}
      <div className="w-full bg-white pt-4 pb-8">
        <p className="text-center text-xl md:text-2xl font-black text-slate-900 mb-8 tracking-tight">
          +30 secteurs d'activités accompagnés
        </p>
        <div className="relative max-w-5xl mx-auto overflow-hidden h-16 flex items-center">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex gap-4 items-center whitespace-nowrap animate-marquee-slow">
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

    </section>
  );
};
