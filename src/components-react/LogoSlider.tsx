"use client";

const logos = [
  { src: "/logos/fulgurance-dark.svg", alt: "Fulgurance", width: 140 },
  { src: "/logos/upreview-dark.svg", alt: "upReview", width: 110 },
  { src: "/logos/effy.svg", alt: "Effy", width: 80 },
  { src: "/logos/cerfrance.svg", alt: "Cerfrance", width: 120 },
  { src: "/logos/jeep.png", alt: "Jeep", width: 80 },
  { src: "/logos/renault.png", alt: "Renault Group", width: 120 },
  { src: "/logos/cyclopro.webp", alt: "CycloPro", width: 120 },
];

const GAP = 60;

export const LogoSlider = () => (
  <div className="w-full py-8 border-y border-slate-200/60 bg-[#f5f4f0]">
    <p className="text-center text-xs font-bold uppercase tracking-widest text-foreground mb-6">
      Ils nous font confiance
    </p>
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, left: 0, width: '80px', background: 'linear-gradient(to right, #f5f4f0, transparent)', zIndex: 10 }} />
      <div style={{ position: 'absolute', inset: 0, right: 0, left: 'auto', width: '80px', background: 'linear-gradient(to left, #f5f4f0, transparent)', zIndex: 10 }} />
      <div style={{ display: 'flex', alignItems: 'center', animation: 'logoScroll 20s linear infinite', width: 'max-content' }}>
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            style={{ height: '40px', width: `${logo.width}px`, objectFit: 'contain', opacity: 0.9, flexShrink: 0, marginRight: `${GAP}px` }}
          />
        ))}
      </div>
    </div>
    <style>{`
      @keyframes logoScroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  </div>
);
