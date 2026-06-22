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

export const LogoSlider = () => {
  const repeated = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full py-8 border-y border-slate-200/60 bg-[#f5f4f0] overflow-hidden">
      <p className="text-center text-xs font-bold uppercase tracking-widest text-foreground/40 mb-6">
        Ils nous font confiance
      </p>
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f5f4f0] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f5f4f0] to-transparent z-10" />
        <div className="flex gap-16 items-center animate-marquee whitespace-nowrap">
          {repeated.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              className="h-10 object-contain opacity-90 hover:opacity-100 transition-all duration-300 flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
