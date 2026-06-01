import { motion } from "framer-motion";

export const Problem = () => {
  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.08)_0%,transparent_70%)]" />

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
          className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight tracking-tighter"
        >
          La prospection manuelle est morte.{" "}
          <span className="text-primary italic">Vous le savez déjà.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8"
        >
          Vos commerciaux passent 80% de leur temps sur des tâches répétitives. Vos campagnes de prospection B2B tournent sur les mêmes bases Apollo que vos concurrents. Vos séquences multicanal se ressemblent toutes. Et pendant ce temps, les deals partent ailleurs.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-black text-white"
        >
          Le problème n'est pas votre offre.{" "}
          <span className="text-primary font-extrabold italic">C'est l'absence d'infrastructure.</span>
        </motion.p>
      </div>
    </section>
  );
};
