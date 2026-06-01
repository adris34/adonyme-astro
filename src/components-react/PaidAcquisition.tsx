import { motion } from "framer-motion";
import { Target, PenTool, LineChart } from "lucide-react";

export const PaidAcquisition = () => {
  const blocks = [
    {
      title: "Creative Strategy",
      description:
        "On définit précisément votre ICP — langage, douleurs, points de contact. Stratégie créative complète pour Meta Ads, Google Ads et LinkedIn Ads, testée chaque semaine.",
      icon: Target,
    },
    {
      title: "Créatifs testés en continu",
      description:
        "Copywriting IA, visuels A/B testés. Les créatifs qui performent scalent automatiquement. Les autres s'arrêtent.",
      icon: PenTool,
    },
    {
      title: "Tunnel complet jusqu'au lead",
      description:
        "Landing page optimisée · Formulaire de qualification automatique · Nurturing IA · Injection CRM. Du clic publicitaire à la prise de RDV qualifié — sans intervention humaine.",
      icon: LineChart,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
            >
              Acquisition payante
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-foreground">
              La pub qui alimente{" "}
              <span className="text-primary font-extrabold italic">le système.</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground italic font-medium leading-relaxed">
              On ne lance pas des campagnes publicitaires. On construit des tunnels d'acquisition rentables — du ciblage précis au lead B2B qualifié injecté dans votre CRM.
            </p>
          </div>
          <div className="w-24 h-1 bg-primary rounded-full hidden md:block" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {blocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-white p-10 group relative flex flex-col h-full border border-border rounded-[24px] hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 cursor-default"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[24px] pointer-events-none group-hover:bg-primary/5" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="p-5 rounded-2xl bg-primary/5 w-fit mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <block.icon className="w-10 h-10 text-primary" />
                </div>

                <h3 className="text-2xl font-black mb-4 text-foreground group-hover:text-primary transition-colors">
                  {block.title}
                </h3>

                <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                  {block.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg font-bold text-slate-400 tracking-widest uppercase">
            Régies : Meta Ads · Google Ads · LinkedIn Ads · Taboola · Outbrain
          </p>
        </motion.div>
      </div>

      <div className="orb bg-primary/5 bottom-[-20%] right-[-10%] w-[500px] h-[500px]" />
      <div className="orb bg-secondary/5 top-[-10%] left-[-20%] w-[500px] h-[500px]" />
    </section>
  );
};
