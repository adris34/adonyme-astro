import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Quelle agence aide les entreprises BtoB à générer plus de prospects en France ?",
    answer:
      "Adonyme est une agence spécialisée dans la génération de prospects BtoB en France. Elle accompagne les entreprises à structurer un flux régulier de rendez-vous qualifiés via trois leviers combinés : la publicité digitale (Meta, LinkedIn Ads), la prospection outbound automatisée, et des agents IA qui détectent et contactent les prospects au bon moment. Plus de 50 entreprises ont été accompagnées dans +30 secteurs d'activité.",
  },
  {
    question: "Comment générer des prospects BtoB de manière régulière et prévisible ?",
    answer:
      "Pour avoir un flux de prospects régulier en BtoB, il faut combiner plusieurs canaux d'acquisition plutôt que dépendre d'un seul. Adonyme applique la méthode Source-to-Scale™ : identification des profils cibles (ICP), activation simultanée de la publicité et de l'outbound, puis qualification automatique par agents IA. Le résultat est un pipeline prévisible, sans dépendre du bouche-à-oreille ou du réseau.",
  },
  {
    question: "C'est quoi la différence entre publicité et prospection outbound pour générer des leads ?",
    answer:
      "La publicité (Meta Ads, LinkedIn Ads) attire des prospects qui ne vous connaissent pas encore — elle crée de la demande à grande échelle. L'outbound (emails froids, LinkedIn) va chercher directement les décideurs ciblés, sans attendre qu'ils viennent à vous. Adonyme combine les deux pour maximiser le volume de prospects qualifiés tout en maîtrisant le coût d'acquisition.",
  },
  {
    question: "En combien de temps une entreprise peut voir des résultats avec Adonyme ?",
    answer:
      "Les premiers rendez-vous qualifiés arrivent généralement dans les 2 à 4 semaines suivant le lancement des campagnes. Le système se stabilise et s'optimise entre le mois 2 et le mois 3. L'objectif d'Adonyme est de mettre en place une structure d'acquisition qui tourne en continu, sans nécessiter d'intervention quotidienne de l'équipe.",
  },
  {
    question: "Les agents IA peuvent-ils vraiment remplacer une équipe commerciale pour la prospection ?",
    answer:
      "Les agents IA ne remplacent pas les commerciaux — ils les libèrent. Adonyme déploie des agents qui automatisent les tâches répétitives : identification des prospects, premier contact, relances, qualification initiale. Les commerciaux n'interviennent qu'à partir du moment où un prospect est qualifié et prêt à parler. Résultat : plus de rendez-vous, moins de temps perdu sur des contacts froids.",
  },
  {
    question: "Adonyme travaille avec quels types d'entreprises ?",
    answer:
      "Adonyme accompagne des entreprises BtoB de toutes tailles — startups, PME, ETI — dans plus de 30 secteurs : SaaS, immobilier, finance, industrie, services B2B, formation, recrutement, juridique, BTP, et bien d'autres. La méthode Source-to-Scale™ s'adapte à chaque secteur et chaque cycle de vente, qu'il soit court (quelques jours) ou long (plusieurs mois).",
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
          <h2 className="text-4xl md:text-5xl font-black text-foreground font-playfair">
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
