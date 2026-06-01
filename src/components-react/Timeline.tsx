import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Zap, Clock, CheckCircle } from "lucide-react";

export const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const steps = [
    {
      title: "Audit 30 min",
      description:
        "On analyse vos cibles, vos canaux et vos sources de données. On identifie le levier à fort ROI immédiat. Vous repartez avec un plan concret.",
      icon: Zap,
    },
    {
      title: "Build & Déploiement",
      description:
        "Construction de l'agent, configuration des séquences, branchement CRM. Le système est live en 48h.",
      icon: Clock,
    },
    {
      title: "Scale & Optimisation",
      description:
        "Reporting hebdomadaire, tests continus, nouveaux canaux. Le système s'améliore sans intervention.",
      icon: CheckCircle,
    },
  ];

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-6 text-foreground">
          De l'audit au système opérationnel{" "}
          <span className="text-primary italic">en 48h.</span>
        </h2>
        <p className="text-center text-xl text-muted-foreground font-medium mb-20 max-w-2xl mx-auto">
          Trois étapes. Pas de friction. Pas de formation interne requise.
        </p>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Progress Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-1/2">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute inset-0 bg-primary shadow-[0_0_15px_rgba(37,99,235,0.5)]"
            />
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white md:-translate-x-1/2 z-20 shadow-lg" />

                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <div
                    className={`bg-background border border-border p-8 rounded-[24px] shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div
                      className={`p-4 rounded-xl bg-primary/5 w-fit mb-6 ${
                        index % 2 === 0 ? "md:ml-auto" : ""
                      }`}
                    >
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-primary font-black text-sm uppercase tracking-widest mb-2">
                      Étape {index + 1}
                    </div>
                    <h3 className="text-2xl font-black mb-3 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground font-medium">{step.description}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
