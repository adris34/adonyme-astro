import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2500;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const formattedCount = count % 1 === 0 ? Math.floor(count).toString() : count.toFixed(1);

  return (
    <span ref={ref}>
      {prefix}{formattedCount}{suffix}
    </span>
  );
};

export const Stats = () => {
  const stats = [
    { label: "prospects générés via Meta & Google Ads", value: 412, prefix: "", suffix: " 000" },
    { label: "satisfaction client", value: 4.9, suffix: "/5" },
    { label: "ROI moyen constaté", value: 15.6, prefix: "×" },
    { label: "secteurs d'activités accompagnés", value: 30, prefix: "+" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-y border-border">
      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group items-center justify-center flex flex-col"
            >
              <div className="absolute -inset-10 bg-primary/5 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="text-3xl md:text-7xl font-black text-foreground mb-4 tracking-tighter transition-transform duration-500 group-hover:scale-110 whitespace-nowrap">
                <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>

              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-[0.2em] font-bold text-center">
                {stat.label}
              </div>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                className="h-0.5 bg-primary/20 mt-6"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
