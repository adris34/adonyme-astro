import { useEffect, useState } from "react";

const bubbles = [
  { label: "CRM Pro", delay: 0 },
  { label: "AI Assistant", delay: 0.5 },
  { label: "Lead Gen", delay: 1 },
  { label: "Auto Closer", delay: 1.5 },
  { label: "Meta Ads", delay: 2 },
  { label: "Analytics+", delay: 2.5 },
];

export const Expertise = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("expertise");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="expertise" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Présents dans{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                l'écosystème
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ADONYME est derrière de nombreuses solutions que vous utilisez. 
              Découvrez-nous dans les mentions légales des outils qui transforment votre business.
            </p>
          </div>

          {/* Animated bubbles */}
          <div className="relative h-80 flex items-center justify-center">
            <div className="relative w-full max-w-3xl aspect-video">
              {bubbles.map((bubble, index) => {
                const positions = [
                  { top: "10%", left: "15%" },
                  { top: "15%", right: "20%" },
                  { bottom: "25%", left: "10%" },
                  { top: "45%", left: "45%" },
                  { bottom: "20%", right: "15%" },
                  { top: "60%", right: "40%" },
                ];

                return (
                  <div
                    key={index}
                    className={`absolute px-6 py-3 rounded-full bg-card/70 backdrop-blur-lg border border-primary/30 transition-all duration-700 ${
                      visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    }`}
                    style={{
                      ...positions[index],
                      transitionDelay: `${bubble.delay}s`,
                      boxShadow: "0 0 30px rgba(37, 99, 235, 0.3)",
                    }}
                  >
                    <span className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {bubble.label}
                    </span>
                  </div>
                );
              })}

              {/* Central logo/text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-foreground font-bold text-2xl shadow-2xl">
                  ADONYME
                </div>
              </div>
            </div>
          </div>

          <p className="text-lg text-muted-foreground italic">
            "Nous ne créons pas seulement des stratégies, nous construisons l'infrastructure technologique qui les propulse."
          </p>
        </div>
      </div>
    </section>
  );
};
