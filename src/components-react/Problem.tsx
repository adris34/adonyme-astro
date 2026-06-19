import { motion } from "framer-motion";

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
          Le problème
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-black mb-10 leading-tight tracking-tighter" style={{color: '#0f172a'}}
        >
          Vous dépendez du{" "}
          <span className="text-primary italic">hasard pour grandir.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-xl md:text-2xl leading-relaxed mb-8" style={{color: '#334155'}}
        >
          Vous ne savez pas quel canal privilégier pour scaler votre entreprise ?<br />
          Vous n'avez pas de canal d'acquisition structuré, aucune stratégie inbound / d'outbound, pas de tunnel qui capte et éduque.
        </motion.p>

      </div>
    </section>
  );
};
