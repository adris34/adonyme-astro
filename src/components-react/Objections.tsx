import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Pourquoi le lead magnet doit être derrière une page de capture ?",
    answer:
      "Un PDF envoyé directement ne génère rien. Derrière une page de capture avec une VSL de 30 à 60 secondes, vous capturez le contact, vous démarrez la relation, et vous déclenchez automatiquement la séquence CRM. Sans ça, vous offrez de la valeur sans rien récupérer en échange.",
  },
  {
    question: "Comment fonctionne le scoring comportemental ?",
    answer:
      "Chaque action de votre prospect déclenche une réponse automatique. Email ouvert 3 fois → SMS dans l'heure. Clic sur la page RDV sans réservation → créneau proposé immédiatement. Le système détecte les signaux chauds et agit avant que l'intérêt retombe.",
  },
  {
    question: "C'est quoi concrètement le warming avant le call ?",
    answer:
      "Entre la réservation et le call, le prospect reçoit une séquence progressive : confirmation, études de cas, témoignages, puis une vidéo \"qui on est\" J+1. Quand il décroche, il vous connaît déjà — il a vu vos résultats. Vous closez en 20 minutes, pas 60.",
  },
  {
    question: "Pourquoi vous ne partez pas de bases Apollo comme tout le monde ?",
    answer:
      "Parce que vos concurrents prospectent exactement les mêmes contacts avec exactement les mêmes messages. On identifie des sources de données non exploitées, spécifiques à votre secteur. Et surtout — on n'enrichit pas tout le monde de la même façon. Si un signal d'achat est détecté sur un profil, on déclenche un enrichissement avancé : téléphone, LinkedIn, contexte entreprise. Si aucun signal, on ne dépense pas le budget. Vous ne travaillez que les profils qui arrivent en phase d'achat.",
  },
  {
    question: "Comment vous mesurez que le système performe ?",
    answer:
      "UTMs par canal, CAC vs LTV, taux de conversion à chaque étape du tunnel. Reporting hebdomadaire. Vous savez exactement d'où vient chaque client, quel canal convertit le mieux, et où concentrer le budget au mois 4.",
  },
  {
    question: "Est-ce que vous gérez aussi la publicité Meta ?",
    answer:
      "Oui. On structure les campagnes en CBO avec des créas TOFU, MOFU et BOFU qui tournent en simultané. L'algorithme optimise en global — pas par adset. C'est ce qui permet de scaler le budget sans casser les performances.",
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
