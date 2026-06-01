import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Comment fonctionne votre système d'automatisation de la prospection B2B ?",
    answer:
      "La méthode Source-to-Scale™ d'Adonyme fonctionne en 5 étapes : diagnostic du process, scraping des sources de données brutes, enrichissement IA, déploiement des agents multicanal (LinkedIn, email, SMS, WhatsApp, SDR vocal), puis nurturing et orchestration automatisés. Le tout est opérationnel en 48h.",
  },
  {
    question: "En quoi vos agents IA sont différents des outils de prospection classiques ?",
    answer:
      "Les outils classiques envoient les mêmes messages depuis les mêmes bases Apollo que vos concurrents. Nos agents IA vont chercher la donnée à la source — LeBonCoin, plateformes métier, LinkedIn — et construisent des séquences hyper-personnalisées sur des canaux sous-exploités. Résultat : taux de réponse ×4 en moyenne.",
  },
  {
    question: "Combien de temps avant de voir des résultats ?",
    answer:
      "Votre infrastructure d'acquisition automatisée est opérationnelle en 48h. Les premiers leads qualifiés arrivent dans la première semaine. Certains clients décrochent leur premier RDV le lendemain du déploiement.",
  },
  {
    question: "Faut-il une équipe commerciale pour utiliser vos solutions ?",
    answer:
      "Non. Le système d'agents IA tourne en autonomie complète — prospection, qualification, relances, prise de RDV. Vous recevez un reporting hebdomadaire avec les métriques clés. Votre seule intervention : closer les RDV qualifiés qu'on vous livre.",
  },
];

const FAQItem = ({ faq, index }: { faq: typeof faqs[0]; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border border-border rounded-[20px] bg-white overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-8 text-left group hover:bg-primary/2 transition-colors"
      >
        <span className="text-lg font-black text-foreground group-hover:text-primary transition-colors pr-8">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-none transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-8 pb-8">
          <p className="text-muted-foreground text-lg leading-relaxed font-medium">
            {faq.answer}
          </p>
        </div>
      )}
    </motion.div>
  );
};

export const Objections = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4"
          >
            FAQ
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Les questions qu'on nous{" "}
            <span className="text-primary font-extrabold italic">pose toujours.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
