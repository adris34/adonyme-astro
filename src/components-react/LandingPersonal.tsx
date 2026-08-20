"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, ArrowRight, Check } from "lucide-react";
const logos = [
  { src: "/logos/fulgurance-dark.svg", alt: "Fulgurance", width: 140 },
  { src: "/logos/upreview-dark.svg", alt: "upReview", width: 110 },
  { src: "/logos/effy.svg", alt: "Effy", width: 80 },
  { src: "/logos/cerfrance.svg", alt: "Cerfrance", width: 120 },
  { src: "/logos/jeep.png", alt: "Jeep", width: 80 },
  { src: "/logos/renault.png", alt: "Renault Group", width: 120 },
  { src: "/logos/cyclopro.webp", alt: "CycloPro", width: 120 },
];

/* ─── SECTION 1 — HERO ─────────────────────────────────────── */
const Hero = () => (
  <section className="hero-section" style={{
    backgroundColor: '#f5f4f0',
    padding: '6rem 4rem',
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
  }}>
    {/* Orb vert lime haut-gauche */}
    <div style={{ position: 'absolute', top: '-10%', left: '-8%', width: '500px', height: '500px', borderRadius: '50%', background: '#a3e635', opacity: 0.12, filter: 'blur(90px)', pointerEvents: 'none' }} />
    {/* Orb vert lime bas-droite */}
    <div style={{ position: 'absolute', bottom: '-15%', right: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: '#a3e635', opacity: 0.08, filter: 'blur(80px)', pointerEvents: 'none' }} />
    <div className="hero-grid" style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '58% 42%', gap: '3rem', alignItems: 'center' }}>

      {/* GAUCHE — texte */}
      <div style={{ paddingTop: '1rem', minWidth: 0, overflow: 'hidden' }}>
        <h1 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 'clamp(1.8rem, 2.8vw, 3.2rem)',
          fontWeight: 400,
          lineHeight: 1.1,
          textTransform: 'uppercase',
          color: '#0a0a0a',
          marginBottom: '0.75rem',
        }}>
          L'agence des leads pour les PME/TPE
        </h1>
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(1.1rem, 1.6vw, 1.6rem)',
            fontWeight: 400,
            textTransform: 'uppercase',
            color: '#0a0a0a',
            lineHeight: 1.2,
            margin: '0 0 0.5rem',
          }}>On structure vos bases et on accélère votre croissance</p>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(1.1rem, 1.6vw, 1.6rem)',
            fontWeight: 400,
            textTransform: 'uppercase',
            color: '#0a0a0a',
            lineHeight: 1.2,
            margin: 0,
          }}>
            <span style={{ position: 'relative', display: 'inline-block' }}>
              +50 Entreprises / +20 secteurs
              <svg viewBox="0 0 300 18" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ position: 'absolute', bottom: '-6px', left: '-4px', width: 'calc(100% + 8px)', height: '12px', overflow: 'visible' }}>
                <path d="M4,10 Q75,2 150,9 Q225,16 296,8" stroke="#a3e635" strokeWidth="5" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </p>
        </div>

        {/* Secteur slider inline */}
        <div style={{ width: '100%', maxWidth: '100%', overflow: 'hidden', margin: '1.25rem 0 1.75rem', position: 'relative', height: '3rem', display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '3rem', background: 'linear-gradient(to right, #f5f4f0, transparent)', zIndex: 10 }} />
          <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '3rem', background: 'linear-gradient(to left, #f5f4f0, transparent)', zIndex: 10 }} />
          <div className="animate-marquee-slow" style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', whiteSpace: 'nowrap', flexShrink: 0 }}>
            {[...SECTORS, ...SECTORS, ...SECTORS].map((item, i) => (
              <div key={i} style={{ padding: '0.4rem 1rem', borderRadius: '9999px', backgroundColor: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', color: '#1e293b', fontWeight: 600, fontSize: '0.8rem', whiteSpace: 'nowrap', flexShrink: 0 }}>
                {item}
              </div>
            ))}
          </div>
        </div>

<p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6, marginBottom: '2rem' }}>
          Pendant que vous prospectez toujours à froid, nous générons des leads prêts à signer pour accélérer votre croissance et gagner du temps !
        </p>
        <a href="https://cal.com/source-to-scale/decouverte" target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-block',
          backgroundColor: '#a3e635',
          color: '#0a0a0a',
          fontWeight: 900,
          fontSize: '1rem',
          padding: '1rem 2rem',
        }}>
          Réserver un appel stratégique
        </a>
      </div>

      {/* DROITE — photo avec badge */}
      <div style={{ position: 'relative', overflow: 'visible' }}>
        <img
          src="/photo-adrian-vertical.webp"
          alt="Adrian"
          style={{ width: '100%', borderRadius: '20px', display: 'block', objectFit: 'cover' }}
        />
        {/* Badge stat en bas de la photo */}
        <div className="hero-badge" style={{
          backgroundColor: '#fff',
          borderRadius: '20px',
          padding: '1.75rem 2.75rem',
          boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
        }}>
          <p style={{ fontSize: '3rem', fontWeight: 900, color: '#0a0a0a', margin: 0, lineHeight: 1 }}>+400k</p>
          <p style={{ fontSize: '1.1rem', color: '#64748b', margin: '0.4rem 0 0', lineHeight: 1.3 }}>leads générés<br/>pour nos clients</p>
        </div>
      </div>

    </div>

    {/* Logo slider — statique sur desktop, défilement sur mobile */}
    <div style={{ maxWidth: '1300px', margin: '4rem auto 0', paddingTop: '2rem' }}>
      {/* Desktop : grille statique */}
      <div className="logos-desktop" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '2.5rem 3.5rem' }}>
        {logos.map((logo, i) => (
          <img key={i} src={logo.src} alt={logo.alt} style={{ height: '36px', width: `${logo.width}px`, objectFit: 'contain', opacity: 0.75 }} />
        ))}
      </div>
      {/* Mobile : défilement */}
      <div className="logos-mobile" style={{ position: 'relative', overflow: 'hidden', display: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', animation: 'heroLogoScroll 20s linear infinite', width: 'max-content' }}>
          {[...logos, ...logos].map((logo, i) => (
            <img key={i} src={logo.src} alt={logo.alt} style={{ height: '36px', width: `${logo.width}px`, objectFit: 'contain', opacity: 0.75, flexShrink: 0, marginRight: '60px' }} />
          ))}
        </div>
      </div>
    </div>
    <style>{`
      @keyframes heroLogoScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      @media (max-width: 768px) {
        .logos-desktop { display: none !important; }
        .logos-mobile { display: block !important; }
      }
    `}</style>
  </section>
);

/* ─── SECTION 2 — LE PROBLÈME ──────────────────────────────── */
const problemes = [
  {
    num: '01',
    titre: "Votre offre & votre ICP",
    desc: "",
    points: [
      "Analyse et validation de votre offre",
      "Recherche des points de douleurs",
      "Stratégie créative & testing",
    ],
  },
  {
    num: '02',
    titre: "Qualifier vos prospects",
    desc: "",
    points: [
      "Segmentation de prospects",
      "Système de qualification multicanal social proof",
      "Le warm pour maintenir vos prospects engagés",
    ],
  },
  {
    num: '03',
    titre: "Optimiser votre ROI",
    desc: "",
    points: [
      "Tracking",
      "Optimisation de votre taux de transformation",
      "Nurturing multicanal pour traiter et rééduquer les no-show",
      "Relance selon les actions effectuées",
    ],
  },
  {
    num: '04',
    titre: "Projection claire",
    desc: "",
    points: [
      "Automatisation",
      "Scale",
      "Gestion du système",
    ],
  },
];

const Probleme = () => (
  <section id="offre" style={{ backgroundColor: '#f5f4f0', padding: '6rem 2rem' }}>
    <div className="probleme-grid" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>

      {/* GAUCHE — sticky */}
      <div className="probleme-sticky" style={{ position: 'sticky', top: '6rem' }}>
        <p style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#64748b', marginBottom: '1rem' }}>
          Pourquoi notre système fonctionne ↗
        </p>
        <h2 className="font-anton" style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 'clamp(1.6rem, 2.2vw, 2.8rem)',
          textTransform: 'uppercase',
          lineHeight: 1.2,
          color: '#0a0a0a',
          marginBottom: '1.5rem',
          fontWeight: 400,
          letterSpacing: '0.01em',
        }}>
          La méthode la plus rapide pour générer des prospects chauds
        </h2>
        <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.7 }}>
          90% des Entreprises pensent que la publicité est une dépense et non un investissement avec un ROI immédiat.<br/><br/>Nous avons implémenté notre stratégie au sein de +50 Entreprises, depuis, la publicité est devenue leur principal canal d'acquisition.
        </p>
      </div>

      {/* DROITE — cartes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {problemes.map((p, i) => (
          <div key={i} style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', color: '#a3e635', backgroundColor: '#0a0a0a', borderRadius: '6px', padding: '0.2em 0.55em', flexShrink: 0, marginTop: '3px' }}>{p.num}</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0a0a0a', lineHeight: 1.3, margin: 0 }}>{p.titre}</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: p.desc ? '0.9rem' : 0 }}>
              {p.points.map((pt, j) => (
                <p key={j} style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>— {pt}</p>
              ))}
            </div>
            {p.desc && <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, margin: 0, borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem', fontStyle: 'italic' }}>{p.desc}</p>}
          </div>
        ))}
      </div>

    </div>
  </section>
);

/* ─── VIDEO PROOF ───────────────────────────────────────────── */
const VideoProof = () => (
  <section id="etude-de-cas" style={{ backgroundColor: '#f5f4f0', padding: '5rem 2rem' }}>
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 'clamp(1.6rem, 2.2vw, 2.8rem)',
        fontWeight: 400,
        textTransform: 'uppercase',
        letterSpacing: '0.01em',
        lineHeight: 1.2,
        color: '#0a0a0a',
        marginBottom: '0.25rem',
        textAlign: 'center',
      }}>
        Extrait de notre stratégie <span style={{ backgroundColor: '#a3e635', padding: '0 0.3em' }}>+2000 RDV en 10 mois</span>
      </h2>
      <p style={{ fontSize: '1.1rem', color: '#475569', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.6, textAlign: 'center', margin: '0 0 1.5rem' }}>
        (<span style={{ position: 'relative', display: 'inline-block' }}>EMS QVEMA saison 4<svg viewBox="0 0 260 18" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ position: 'absolute', bottom: '-4px', left: '-4px', width: 'calc(100% + 8px)', height: '10px', overflow: 'visible' }}><path d="M4,10 Q65,2 130,9 Q195,16 256,8" stroke="#a3e635" strokeWidth="4" fill="none" strokeLinecap="round"/></svg></span> - On a fait exploser leur business)
      </p>
      <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.12)', position: 'relative', paddingTop: '56.25%' }}>
        <iframe
          src="https://www.youtube.com/embed/cb4NuQV8KRQ"
          title="Étude de cas client"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
        />
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a href="https://cal.com/source-to-scale/decouverte" target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-block',
          backgroundColor: '#a3e635',
          color: '#0a0a0a',
          fontWeight: 900,
          fontSize: '1rem',
          padding: '1rem 2rem',
        }}>
          Découvrez tout le système
        </a>
      </div>
    </div>
  </section>
);

const SECTORS = [
  "SaaS", "Retail", "Immobilier", "Conseil", "RH & Recrutement",
  "Assurance", "Juridique", "BTP", "Énergie", "Recouvrement",
  "Biotech", "Centre de formation",
];

const SecteurSlider = () => (
  <div style={{ backgroundColor: '#f5f4f0', paddingTop: '2rem', paddingBottom: '2rem', borderTop: '1px solid rgba(0,0,0,0.08)', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
    <p style={{ textAlign: 'center', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#0f172a', marginBottom: '1.5rem' }}>
      +20 secteurs d'activité
    </p>
    <div style={{ position: 'relative', maxWidth: '1100px', margin: '0 auto', overflow: 'hidden', height: '4rem', display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '6rem', background: 'linear-gradient(to right, #f5f4f0, transparent)', zIndex: 10 }} />
      <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '6rem', background: 'linear-gradient(to left, #f5f4f0, transparent)', zIndex: 10 }} />
      <div className="animate-marquee-slow" style={{ display: 'flex', gap: '1rem', alignItems: 'center', whiteSpace: 'nowrap' }}>
        {[...SECTORS, ...SECTORS, ...SECTORS].map((item, i) => (
          <div key={i} style={{
            padding: '0.75rem 2rem',
            borderRadius: '9999px',
            backgroundColor: '#fff',
            border: '1px solid #e2e8f0',
            boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            color: '#1e293b',
            fontWeight: 700,
            fontSize: '0.9rem',
            whiteSpace: 'nowrap',
          }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ─── SECTION 3 — SOURCE-TO-SCALE ─────────────────────────── */
const SourceToScale = () => (
  <section style={{ backgroundColor: '#f5f4f0', padding: '6rem 2rem' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <p style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#64748b', marginBottom: '1rem' }}>
        Source-to-scale ↗
      </p>
      <h2 style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 'clamp(1.6rem, 2.2vw, 2.8rem)',
        textTransform: 'uppercase',
        lineHeight: 1.2,
        color: '#0a0a0a',
        marginBottom: '1.5rem',
        fontWeight: 400,
        letterSpacing: '0.01em',
        maxWidth: '900px',
      }}>
        Une structure qu'on met en place depuis +10 ans<br/>pour générer un flux de prospects qualifiés.
      </h2>
      <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.7, maxWidth: '600px', marginBottom: '2rem' }}>
        On revoit l'ensemble de votre stratégie d'acquisition. Votre tunnel de vente, vos méthodes de capturer — éduquer — qualifier — convertir vos prospects.
      </p>
      <a href="https://cal.com/source-to-scale/decouverte" target="_blank" rel="noopener noreferrer" style={{
        display: 'inline-block',
        backgroundColor: '#a3e635',
        color: '#0a0a0a',
        fontWeight: 900,
        fontSize: '1rem',
        padding: '1rem 2rem',
      }}>
        Je book un appel
      </a>
    </div>
  </section>
);


/* ─── SECTION 5 — LA PROMESSE ──────────────────────────────── */
const Promesse = () => (
  <section className="py-24 px-6 bg-[#f5f4f0]">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">La promesse</p>
      <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-6 font-playfair leading-tight">
        [RENVERSEMENT — "Tu n'as pas besoin de X, tu as besoin de Y"]
      </h2>
      <p className="text-xl text-slate-600 mb-16 max-w-2xl mx-auto">
        [Phrase d'appui sur la promesse]
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { titre: "[Promesse 1]", desc: "[Description courte]" },
          { titre: "[Promesse 2]", desc: "[Description courte]" },
          { titre: "[Promesse 3]", desc: "[Description courte]" },
          { titre: "[Promesse 4]", desc: "[Description courte]" },
        ].map((p, i) => (
          <div key={i} className="bg-white rounded-2xl p-8 border border-slate-200 text-left">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Check className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-xl font-black text-[#0f172a] mb-2">{p.titre}</h3>
            <p className="text-slate-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SECTION 4 — LE PROCESSUS ─────────────────────────────── */
const Processus = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-3xl mx-auto">
      <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 text-center">Comment ça marche</p>
      <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] text-center mb-16 font-playfair leading-tight">
        [TITRE PROCESSUS]
      </h2>

      <div className="space-y-6">
        {[
          { num: "01", titre: "[Étape 1]", desc: "[Description de l'étape]" },
          { num: "02", titre: "[Étape 2]", desc: "[Description de l'étape]" },
          { num: "03", titre: "[Étape 3]", desc: "[Description de l'étape]" },
          { num: "04", titre: "[Étape 4]", desc: "[Description de l'étape]" },
          { num: "05", titre: "[Étape 5]", desc: "[Description de l'étape]" },
        ].map((e, i) => (
          <div key={i} className="flex gap-6 items-start">
            <span className="text-5xl font-black text-blue-100 leading-none flex-shrink-0 w-16">{e.num}</span>
            <div className="pt-2">
              <h3 className="text-xl font-black text-[#0f172a] mb-1">{e.titre}</h3>
              <p className="text-slate-600">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SECTION 5 — L'OFFRE ──────────────────────────────────── */
const Offre = () => (
  <section className="py-24 px-6 bg-slate-900 text-white">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Ce qui est inclus</p>
      <h2 className="text-4xl md:text-5xl font-black text-white mb-16 font-playfair leading-tight">
        [TITRE OFFRE]
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { titre: "[Livrable 1]", items: ["[Item]", "[Item]", "[Item]"] },
          { titre: "[Livrable 2]", items: ["[Item]", "[Item]", "[Item]"] },
          { titre: "[Livrable 3]", items: ["[Item]", "[Item]", "[Item]"] },
        ].map((bloc, i) => (
          <div key={i} className="bg-slate-800 rounded-2xl p-8 text-left">
            <h3 className="text-lg font-black text-white mb-4">{bloc.titre}</h3>
            <ul className="space-y-2">
              {bloc.items.map((item, j) => (
                <li key={j} className="flex items-center gap-2 text-slate-400">
                  <Check className="w-4 h-4 text-blue-400 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <a
        href="https://cal.com/source-to-scale/decouverte" target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-xl hover:bg-blue-700 transition-all hover:scale-[1.03]"
      >
        [CTA OFFRE] <ArrowRight className="w-5 h-5" />
      </a>
    </div>
  </section>
);

/* ─── SECTION 6 — TÉMOIGNAGES ──────────────────────────────── */
const Temoignages = () => (
  <section className="py-24 px-6 bg-[#f5f4f0]">
    <div className="max-w-4xl mx-auto">
      <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 text-center">Ils témoignent</p>
      <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] text-center mb-16 font-playfair leading-tight">
        [TITRE TÉMOIGNAGES]
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-2xl p-8 border border-slate-200">
            <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">
              "[Témoignage client {i} — résultat chiffré concret]"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200" />
              <div>
                <p className="font-black text-[#0f172a]">[Prénom Nom]</p>
                <p className="text-sm text-slate-500">[Poste — Entreprise]</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SECTION 7 — FAQ ──────────────────────────────────────── */
const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center p-6 text-left">
        <span className="text-lg font-black text-[#0f172a]">{q}</span>
        <ChevronDown className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-6 pb-6 text-slate-600 text-base leading-relaxed">{a}</div>}
    </div>
  );
};

const FAQ = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-3xl mx-auto">
      <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 text-center">FAQ</p>
      <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] text-center mb-16 font-playfair leading-tight">
        [TITRE FAQ]
      </h2>
      <div className="space-y-4">
        {[
          { q: "[Question / Objection 1]", a: "[Réponse rassurante]" },
          { q: "[Question / Objection 2]", a: "[Réponse rassurante]" },
          { q: "[Question / Objection 3]", a: "[Réponse rassurante]" },
          { q: "[Question / Objection 4]", a: "[Réponse rassurante]" },
          { q: "[Question / Objection 5]", a: "[Réponse rassurante]" },
        ].map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
      </div>
    </div>
  </section>
);

/* ─── SECTION 8 — À PROPOS ─────────────────────────────────── */
const APropos = () => (
  <section className="py-24 px-6 bg-[#f5f4f0]">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
      <div className="w-64 h-64 rounded-3xl bg-slate-300 flex-shrink-0 overflow-hidden">
        <img src="/avatars.png" alt="Adrian" className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Qui je suis</p>
        <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mb-6 font-playfair leading-tight">
          [TITRE À PROPOS]
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-6">
          [Bio courte — parcours, crédibilité, pourquoi tu fais ça]
        </p>
        <div className="flex gap-8">
          {[
            { chiffre: "+400k", label: "leads générés" },
            { chiffre: "+3 000", label: "RDV délivrés" },
            { chiffre: "+50", label: "entreprises" },
          ].map((s, i) => (
            <div key={i}>
              <p className="text-3xl font-black text-blue-600">{s.chiffre}</p>
              <p className="text-sm text-slate-500 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── SECTION 9 — CTA FINAL ─────────────────────────────────── */
const CTAFinal = () => (
  <section id="contact" className="py-24 px-6 bg-slate-900 text-white text-center">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-playfair leading-tight">
        [TITRE CTA FINAL]
      </h2>
      <p className="text-xl text-slate-400 mb-10">
        [Phrase d'urgence ou de réassurance finale]
      </p>
      <a
        href="https://cal.com/source-to-scale/decouverte"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-blue-600 text-white px-12 py-6 rounded-2xl text-xl font-bold shadow-xl hover:bg-blue-700 transition-all hover:scale-[1.03]"
      >
        [CTA FINAL] <ArrowRight className="w-6 h-6" />
      </a>
    </div>
  </section>
);

/* ─── FOOTER ────────────────────────────────────────────────── */
const FooterLP = () => (
  <footer style={{ backgroundColor: '#f5f4f0', backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', borderTop: '1px solid rgba(0,0,0,0.08)', padding: '4rem 2rem' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>

      {/* Logo + tagline */}
      <div>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.75rem', fontWeight: 400, color: '#0f172a', letterSpacing: '0.02em' }}>
          ADONYME<span style={{ color: '#2563eb' }}>.</span>
        </span>
        <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.75rem', maxWidth: '220px', lineHeight: 1.6 }}>
          La méthode Source-to-Scale™ — Générez un flux régulier de prospects pour accélérer la croissance de votre business.
        </p>
      </div>

      {/* Liens nav */}
      <div style={{ display: 'flex', gap: '2.5rem', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#64748b', alignItems: 'center' }}>
        <a href="#methode" style={{ color: 'inherit', textDecoration: 'none' }}>Méthode</a>
        <a href="https://cal.com/source-to-scale/decouverte" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
        <a href="/mentions-legales" style={{ color: 'inherit', textDecoration: 'none' }}>Mentions légales</a>
      </div>

      {/* Droite */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
        <a href="/politique-de-confidentialite" style={{ fontSize: '0.8rem', color: '#64748b', textDecoration: 'none' }}>
          Politique de confidentialité
        </a>
        <a href="https://www.linkedin.com/company/adonyme" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#64748b', textDecoration: 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>
        <span style={{ fontSize: '0.7rem', color: '#cbd5e1' }}>© 2026 Adonyme.</span>
      </div>

    </div>
  </footer>
);

/* ─── PAGE COMPLÈTE ─────────────────────────────────────────── */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#f5f4f0', borderBottom: '1px solid #e2e8f0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

        {/* Desktop: liens | Mobile: hamburger */}
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="https://cal.com/source-to-scale/decouverte" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0a0a0a', textDecoration: 'none' }}>Comment ça marche ?</a>
          <a href="/etude-de-cas" className="nav-link" style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0a0a0a', textDecoration: 'none' }}>Étude de cas</a>
          <a href="#offre" className="nav-link" style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0a0a0a', textDecoration: 'none' }}>Notre offre</a>
        </div>
        <button className="nav-burger" onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><line x1="4" y1="8" x2="24" y2="8" stroke="#0a0a0a" strokeWidth="2.2" strokeLinecap="round"/><line x1="4" y1="14" x2="24" y2="14" stroke="#0a0a0a" strokeWidth="2.2" strokeLinecap="round"/><line x1="4" y1="20" x2="24" y2="20" stroke="#0a0a0a" strokeWidth="2.2" strokeLinecap="round"/></svg>
        </button>

        {/* Logo */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', lineHeight: 1.1 }}>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.3rem', fontWeight: 400, textTransform: 'uppercase', color: '#0a0a0a', letterSpacing: '0.05em' }}>Adonyme</span>
          <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Source-to-Scale</span>
        </div>
      </div>

      {/* Mobile menu déroulant */}
      {open && (
        <div className="nav-mobile-menu" style={{ backgroundColor: '#f5f4f0', borderTop: '1px solid #e2e8f0', padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <a href="#methode" onClick={() => setOpen(false)} style={{ fontSize: '1rem', fontWeight: 600, color: '#0a0a0a', textDecoration: 'none' }}>Comment ça marche ?</a>
          <a href="/etude-de-cas" onClick={() => setOpen(false)} style={{ fontSize: '1rem', fontWeight: 600, color: '#0a0a0a', textDecoration: 'none' }}>Étude de cas</a>
          <a href="#offre" onClick={() => setOpen(false)} style={{ fontSize: '1rem', fontWeight: 600, color: '#0a0a0a', textDecoration: 'none' }}>Notre offre</a>
        </div>
      )}
    </nav>
  );
};

const resultats = [
  {
    img: '/resultats-1.png',
    tag: 'Recouvrement — AB Partners',
    stats: [{ val: 'Total lead : +100', label: 'Performance sur 60 jours' }, { val: '6€', label: 'CPL moyen' }, { val: '+37 000€', label: 'CA généré' }],
    desc: '',
  },
  {
    img: '/resultats-2.png',
    tag: 'BTP — Tech vertes',
    stats: [{ val: 'Total lead : +100', label: 'Performance sur 60 jours' }, { val: '10€', label: 'CPL moyen' }, { val: '+75 000€', label: 'CA généré' }],
    desc: '',
  },
  {
    img: '/resultats-3.png',
    tag: 'EMS — Fulgurance',
    stats: [{ val: 'Total lead : +800', label: 'Performance sur 60 jours' }, { val: '7€', label: 'CPL moyen' }, { val: '135 000€', label: 'CA généré' }],
    desc: '',
  },
  {
    img: '/resultats-4.png',
    tag: 'SaaS — Whatsy',
    stats: [{ val: 'Total lead : +160', label: 'Performance sur 60 jours' }, { val: '7€', label: 'CPL moyen' }, { val: 'MRR +2 500€', label: 'CA généré' }],
    desc: '',
  },
  {
    img: '/ems.png',
    tag: 'Effy',
    stats: [{ val: 'Total lead : +1 400', label: 'Performance sur 60 jours' }, { val: '9€', label: 'CPL moyen' }, { val: '>1M€', label: 'CA généré' }],
    desc: '',
  },
];

const CARD_WIDTH_PX = 420;
const CARD_GAP_PX = 24;

const ResultatsClients = () => (
  <section style={{ backgroundColor: '#f5f4f0', padding: '5rem 0' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', marginBottom: '2rem' }}>
      <p style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#64748b', marginBottom: '0.75rem' }}>
        Résultats ↗
      </p>
      <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.6rem, 2.2vw, 2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.2, margin: '0 0 0.5rem' }}>
        Résultats de <span style={{ position: 'relative', display: 'inline-block' }}>nos clients récents<svg viewBox="0 0 340 18" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ position: 'absolute', bottom: '-6px', left: '-4px', width: 'calc(100% + 8px)', height: '12px', overflow: 'visible' }}><path d="M4,10 Q85,2 170,9 Q255,16 336,8" stroke="#a3e635" strokeWidth="5" fill="none" strokeLinecap="round"/></svg></span>
      </h2>
      <p style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 500, letterSpacing: '0.05em', marginTop: '0.75rem' }}>
        Meta · Google · Taboola · Outbrain · LinkedIn
      </p>
    </div>

    {/* Carrousel infini — limité à la largeur du contenu */}
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'stretch', animation: 'resultatsScroll 50s linear infinite', width: 'max-content' }}>
        {[...resultats, ...resultats].map((r, i) => (
          <div key={i} style={{ width: `${CARD_WIDTH_PX}px`, flexShrink: 0, marginRight: `${CARD_GAP_PX}px`, backgroundColor: '#fff', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 4px 32px rgba(0,0,0,0.08)' }}>
            <img src={r.img} alt={r.tag} style={{ width: '100%', display: 'block' }} />
            <div style={{ padding: '1.5rem 2rem' }}>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b', marginBottom: '0.75rem' }}>{r.tag}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '0.75rem' }}>
                {r.stats.map((s, j) => (
                  <div key={j}>
                    <span style={{ fontSize: '0.8rem', fontWeight: s.label === 'Performance sur 60 jours' ? 700 : 400, color: '#64748b', display: 'block' }}>{s.label}</span>
                    {s.val.includes(' : ') ? (
                      <>
                        <span style={{ fontSize: '0.8rem', color: '#64748b', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, display: 'block' }}>{s.val.split(' : ')[0]} :</span>
                        <span style={{ fontWeight: 900, fontSize: '1.4rem', color: '#0a0a0a', display: 'block', lineHeight: 1 }}>{s.val.split(' : ')[1]}</span>
                      </>
                    ) : (
                      <span style={{ fontWeight: 900, fontSize: '1.4rem', color: '#0a0a0a', display: 'block', lineHeight: 1 }}>{s.val}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>

    <style>{`
      @keyframes resultatsScroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @media (max-width: 768px) {
        @keyframes resultatsScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      }
    `}</style>

  </section>
);

const etudesCas = [
  {
    img: '/fulgurance-etude-de-cas.webp',
    titre: 'Fulgurance EMS — QVEMA S3',
    stats: '+1000 leads · 7€ CPL · 135 000€ CA',
    desc: <></>,
    logos: ['/meta-logo.webp', '/Google_Ads_logo.svg.webp', '/whatsapp-logo-whatsapp-logo-transparent-whatsapp-icon-transparent-free-free-png.webp', '/claudecode-color.png', '/supabase-icon-logo.png'],
  },
  {
    img: '/cerfrance-etude-de-cas.webp',
    titre: 'Cerfrance - 720 agences',
    stats: 'Contacter 35 000 prospects',
    desc: <></>,
    logos: ['/meta-logo.webp', '/Google_Ads_logo.svg.webp', '/claudecode-color.png', '/OpenAI-Logo-2022.png'],
  },
  {
    img: '/abraham-etude-de-cas.webp',
    titre: 'AB & Partners - Recouvrement',
    stats: 'Nos 20 leads valent plus que 100 chez la concurrence',
    desc: <></>,
    logos: ['/meta-logo.webp', '/claudecode-color.png'],
  },
  {
    img: '/gci-etude-de-cas.webp',
    titre: 'decarbosolution.ai',
    stats: "Une interface qui répond à +200 appels d'offres par jour",
    desc: <></>,
    logos: ['/claudecode-color.png', '/OpenAI-Logo-2022.png', '/claude-icon-logo.png', '/supabase-icon-logo.png', '/openclaw-logo.svg'],
  },
];

const EtudesDeCasCarousel = () => {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const max = etudesCas.length - 3;

  const scroll = (dir: 'prev' | 'next') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.offsetWidth / 3 + 8;
    el.scrollBy({ left: dir === 'next' ? cardWidth : -cardWidth, behavior: 'smooth' });
    setIndex(prev => dir === 'next' ? Math.min(max, prev + 1) : Math.max(0, prev - 1));
  };

  return (
    <section style={{ backgroundColor: '#f5f4f0', backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#64748b', marginBottom: '0.75rem' }}>Résultats ↗</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.6rem, 2.5vw, 2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.1, margin: 0 }}>
              Témoignages clients
            </h2>
            <p style={{ fontSize: '0.9rem', fontWeight: 500, color: '#94a3b8', marginTop: '0.5rem' }}>(Vidéos bientôt disponibles)</p>
          </div>
          <div className="carousel-arrows" style={{ display: 'flex', gap: '0.5rem' }}>
            <button onClick={() => scroll('prev')} disabled={index === 0} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #e2e8f0', backgroundColor: index === 0 ? '#f1f5f9' : '#fff', cursor: index === 0 ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', color: index === 0 ? '#cbd5e1' : '#0a0a0a' }}>←</button>
            <button onClick={() => scroll('next')} disabled={index >= max} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #e2e8f0', backgroundColor: index >= max ? '#f1f5f9' : '#0a0a0a', cursor: index >= max ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', color: index >= max ? '#cbd5e1' : '#fff' }}>→</button>
          </div>
        </div>

        {/* Desktop : carousel */}
        <div className="carousel-desktop" ref={scrollRef} style={{ overflow: 'hidden', display: 'flex', gap: '1.5rem', scrollBehavior: 'smooth' }}>
          <style>{`.carousel-desktop::-webkit-scrollbar { display: none; }`}</style>
            {etudesCas.map((c, i) => (
              <div key={i} style={{ flex: '0 0 calc(33.33% - 1rem)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', backgroundColor: '#fff' }}>
                <img src={c.img} alt={c.titre} style={{ width: '100%', display: 'block' }} />
                <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
                  <p style={{ fontSize: '1rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0a0a0a', margin: '0 0 0.4rem' }}>{c.titre}</p>
                  <p style={{ fontSize: '0.82rem', fontWeight: 700, color: '#a3e635', margin: '0 0 0.5rem' }}>{c.stats}</p>
                  <p style={{ fontSize: '0.82rem', color: '#64748b', margin: '0 0 0.75rem', lineHeight: 1.5 }}>{c.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem', flexWrap: 'wrap' }}>
                    {c.logos.map((l, j) => <img key={j} src={l} alt="" style={{ height: '28px', objectFit: 'contain', opacity: 0.7 }} />)}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Mobile : empilées */}
        <div className="carousel-mobile" style={{ display: 'none', flexDirection: 'column', gap: '1.5rem' }}>
          {etudesCas.map((c, i) => (
            <div key={i} style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', backgroundColor: '#fff' }}>
              <img src={c.img} alt={c.titre} style={{ width: '100%', display: 'block' }} />
              <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
                <p style={{ fontSize: '1rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0a0a0a', margin: '0 0 0.4rem' }}>{c.titre}</p>
                <p style={{ fontSize: '0.82rem', fontWeight: 700, color: '#a3e635', margin: '0 0 0.5rem' }}>{c.stats}</p>
                <p style={{ fontSize: '0.82rem', color: '#64748b', margin: '0 0 0.75rem', lineHeight: 1.5 }}>{c.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem', flexWrap: 'wrap' }}>
                  {c.logos.map((l, j) => <img key={j} src={l} alt="" style={{ height: '28px', objectFit: 'contain', opacity: 0.7 }} />)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 768px) {
            .carousel-desktop { display: none !important; }
            .carousel-mobile { display: flex !important; }
            .carousel-arrows { display: none !important; }
          }
        `}</style>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="/etude-de-cas" style={{ display: 'inline-block', backgroundColor: '#0a0a0a', color: '#fff', fontWeight: 700, fontSize: '0.9rem', padding: '0.85rem 2rem', borderRadius: '8px', textDecoration: 'none', letterSpacing: '0.05em' }}>
            Toutes les études de cas →
          </a>
        </div>
      </div>
    </section>
  );
};

export const LandingPersonal = () => (
  <main>
    <Navbar />
    <Hero />
    <EtudesDeCasCarousel />
    {/* <ResultatsClients /> */}
    {/* <VideoProof /> */}
    {/* <Probleme /> */}
    {/* <SourceToScale /> */}
    <FooterLP />
  </main>
);
