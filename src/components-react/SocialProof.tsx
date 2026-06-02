import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const SocialProof = () => {
  const testimonials = [
    {
      name: "Marc D.",
      role: "Dirigeant — IMMO+",
      content:
        "L'agent scrape LeBonCoin chaque matin, envoie un message personnalisé avec ma photo aux vendeurs, et me pose 3 RDV par semaine. Sans intervention de ma part.",
      avatar: "MD",
      metric: "3 RDV/semaine",
    },
    {
      name: "Thomas B.",
      role: "CEO — TechScale",
      content:
        "Taux de réponse LinkedIn multiplié par 4 depuis qu'on envoie des images générées avec la photo du prospect. Je n'aurais pas cru si je ne l'avais pas vu.",
      avatar: "TB",
      metric: "×4 taux de réponse",
    },
    {
      name: "Julie L.",
      role: "Fondatrice — Bloom",
      content:
        "Opérationnel en 48h. Le premier lead qualifié est tombé le lendemain. ROI positif dès la première semaine.",
      avatar: "JL",
      metric: "ROI J+7",
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
            Ils nous font confiance
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-foreground">
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
              {/* Metric badge */}
              <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-primary font-black text-sm">{t.metric}</span>
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

        {/* Sectors */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-black text-foreground mb-8 tracking-tight">
            +30 secteurs d'activités accompagnés
          </h3>
        </div>

        <div className="relative overflow-hidden w-full h-16 flex items-center">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#f5f4f0] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#f5f4f0] to-transparent z-10" />

          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 items-center whitespace-nowrap"
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-8 items-center">
                {[
                  "Immobilier",
                  "Finance",
                  "E-commerce",
                  "SaaS",
                  "Retail",
                  "Industrie",
                  "Services B2B",
                  "Santé",
                  "Recrutement",
                  "Juridique",
                ].map((sector, j) => (
                  <div
                    key={j}
                    className="px-10 py-3 rounded-full bg-white border border-border shadow-sm text-foreground/40 font-black text-xl tracking-tighter hover:border-primary/30 hover:text-primary transition-all cursor-default"
                  >
                    {sector}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};
