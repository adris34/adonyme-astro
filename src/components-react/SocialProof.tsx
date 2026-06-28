import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const SocialProof = () => {
  const testimonials = [
    {
      name: "François Garcia",
      role: "Fulgurance QVEMA S3",
      content:
        "Depuis qu'Adonyme a structuré notre acquisition, on a généré plus de 2 000 leads qualifiés. Je n'aurais pas pensé qu'on pouvait scaler aussi vite sans recruter.",
      avatar: "FG",
      metric: "2 000 leads",
      logo: "/logos/fulgurance-dark.svg",
    },
    {
      name: "",
      role: "Cerfrance Normandie",
      content:
        "On avait une base de 35 000 contacts qui dormait. Nous avons restructuré toute l'acquisition, activé la base de données et activé des canaux payants — les résultats sont arrivés dans les premières semaines.",
      avatar: "CF",
      metric: "35 000 contacts activés",
      logoText: "Cerfrance Normandie",
    },
    {
      name: "Thierry",
      role: "Effy",
      content:
        "Plus de 20 000 leads générés. Adonyme a mis en place un système d'acquisition qui tourne en continu — sans intervention de notre part.",
      avatar: "TH",
      metric: "20 000 leads",
      logo: "/logos/effy.svg",
    },
  ];

  return (
    <section className="py-24 bg-[#f5f4f0] relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4"
          >
            1 SEUL OBJECTIF.
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-foreground font-playfair">
            Des résultats, pas des{" "}
            <span className="text-primary font-extrabold italic">promesses.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white p-10 rounded-[32px] border border-border shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
            >
              {/* Logo or metric badge */}
              <div className="absolute top-6 right-6">
                {t.logo ? (
                  <img src={t.logo} alt="" className="h-6 w-auto object-contain opacity-80" />
                ) : t.logoText ? (
                  <span className="text-foreground font-black text-lg tracking-tight">{t.logoText}</span>
                ) : (
                  <div className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                    <span className="text-primary font-black text-sm">{t.metric}</span>
                  </div>
                )}
              </div>

              <Quote className="w-10 h-10 text-primary/10 mb-6 group-hover:text-primary/20 transition-colors" />
              <p className="text-lg text-foreground/90 font-medium mb-8 leading-relaxed italic">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-black text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};
