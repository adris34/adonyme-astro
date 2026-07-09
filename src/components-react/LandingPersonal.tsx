"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight, Check } from "lucide-react";
import { LogoSlider } from "./LogoSlider";

/* ─── SECTION 1 — HERO ─────────────────────────────────────── */
const Hero = () => (
  <section className="hero-section" style={{ backgroundColor: '#f5f4f0', padding: '5rem 6rem' }}>
    <div className="hero-grid" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '55% 45%', gap: '5rem', alignItems: 'flex-start' }}>

      {/* GAUCHE — texte */}
      <div style={{ paddingTop: '3rem' }}>
        <h1 style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: 'clamp(1.6rem, 2.2vw, 2.8rem)',
          fontWeight: 400,
          lineHeight: 1.2,
          textTransform: 'uppercase',
          color: '#0a0a0a',
          marginBottom: '1.5rem',
        }}>
          La publicité est devenue<br/>Leur canal d'acquisition numéro&nbsp;1<br/><span style={{display:'inline-block', marginTop:'0.9rem'}}>+50 Entreprises accompagnées</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6, marginBottom: '2rem' }}>
          Nous avons prouvé dans +20 secteurs que la publicité est le levier le plus rentable pour générer des prospects en BtoB.
        </p>
        <a href="https://cal.com/source-to-scale/decouverte" target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-block',
          backgroundColor: '#a3e635',
          color: '#0a0a0a',
          fontWeight: 900,
          fontSize: '1rem',
          padding: '1rem 2rem',
        }}>
          Découvrez nos stratégies
        </a>
      </div>

      {/* DROITE — photo avec badge */}
      <div style={{ position: 'relative', overflow: 'visible' }}>
        <img
          src="/photo-adrian-vertical.png"
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
  </section>
);

/* ─── SECTION 2 — LE PROBLÈME ──────────────────────────────── */
const problemes = [
  {
    titre: "Tu n'as pas de résultats car tu n'as pas de bonnes méthodes.",
    points: [
      "→ Tu n'as pas défini ton ICP.",
      "→ Tu n'as pas identifié les buyer persona.",
      "→ Tu parles le même langage à tous les prospects.",
      "→ Tu reçois des profils non qualifiés.",
    ],
  },
  {
    titre: "J'ai des prospects mais aucune vente.",
    points: [
      "→ Tu laisses le prospect sans le maintenir engagé.",
      "→ Il n'a pas confiance en toi avant l'appel.",
      "→ Tu n'as aucun système de nurturing.",
    ],
  },
  {
    titre: "Tu te sens dépassé et tu perds ton temps à prospecter.",
    points: [
      "→ La publicité est le seul canal qui génère des prospects immédiatement.",
      "→ On t'a dit que la publicité c'était cher. Mais ça ne l'est moins que de perdre du temps.",
      "→ Avec la bonne stratégie, 500€/mois peuvent générer un ROI réel.",
    ],
  },
  {
    titre: "Tu perds 60% de tes prospects par manque de structure et de suivi.",
    points: [
      "→ Tu n'enregistres pas tes appels de closing.",
      "→ Tu n'as aucun suivi d'appels.",
      "→ Tu ne relances pas tes prospects.",
    ],
  },
];

const Probleme = () => (
  <section style={{ backgroundColor: '#f5f4f0', padding: '6rem 2rem' }}>
    <div className="probleme-grid" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>

      {/* GAUCHE — sticky */}
      <div className="probleme-sticky" style={{ position: 'sticky', top: '6rem' }}>
        <p style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#64748b', marginBottom: '1rem' }}>
          Le problème ↗
        </p>
        <h2 className="font-anton" style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: 'clamp(1.6rem, 2.2vw, 2.8rem)',
          textTransform: 'uppercase',
          lineHeight: 1.2,
          color: '#0a0a0a',
          marginBottom: '1.5rem',
          fontWeight: 400,
          letterSpacing: '0.01em',
        }}>
          90% des entreprises n'ont eu aucun résultat réel avec la Publicité.
        </h2>
        <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.7 }}>
          La vérité : la plupart veulent convertir un prospect froid en client sans jamais avoir identifié ses douleurs réelles. Et sans adapter leur argumentation à chacune d'elles.
        </p>
      </div>

      {/* DROITE — cartes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {problemes.map((p, i) => (
          <div key={i} style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0a0a0a', marginBottom: '1rem', lineHeight: 1.3 }}>
              {p.titre}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {p.points.map((pt, j) => (
                <p key={j} style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.5 }}>{pt}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

/* ─── VIDEO PROOF ───────────────────────────────────────────── */
const VideoProof = () => (
  <section style={{ backgroundColor: '#f5f4f0', padding: '5rem 2rem' }}>
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{
        fontFamily: "'Anton', sans-serif",
        fontSize: 'clamp(1.6rem, 2.2vw, 2.8rem)',
        fontWeight: 400,
        textTransform: 'uppercase',
        letterSpacing: '0.01em',
        lineHeight: 1.2,
        color: '#0a0a0a',
        marginBottom: '0.25rem',
        textAlign: 'center',
      }}>
        Nous avons généré <span style={{ backgroundColor: '#a3e635', padding: '0 0.3em' }}>+2000 RDV en 10 mois</span><br/>Vu dans QVEMA saison 4
      </h2>
      <p style={{ fontSize: '1.1rem', color: '#475569', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.6, textAlign: 'center', margin: '0 0 1.5rem' }}>
        (Toute notre stratégie décortiquée, extrait d'un cas client)
      </p>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <svg width="40" height="100" viewBox="0 0 40 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block' }}>
          <line x1="20" y1="0" x2="20" y2="72" stroke="#a3e635" strokeWidth="4"/>
          <polygon points="20,100 4,72 36,72" fill="#a3e635"/>
        </svg>
      </div>
      <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.12)', position: 'relative', paddingTop: '56.25%' }}>
        <iframe
          src="https://www.youtube.com/embed/Big0YUW1428"
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
          Je veux les mêmes résultats
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
      +30 secteurs d'activités accompagnés
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
        fontFamily: "'Anton', sans-serif",
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

/* ─── SECTION 4 — CARTES MÉTHODE ───────────────────────────── */
const methodeCards = [
  {
    num: "01",
    titre: "Définir votre offre & ICP",
    texte: "Analyser votre offre et définir votre ICP. Identifier les points de douleurs et mettre en place une stratégie créative adaptée.",
    lime: false,
  },
  {
    num: "02",
    titre: "Qualifier vos prospects",
    texte: "Segmenter et qualifier les prospects avec nos outils internes multicanaux pour multiplier les points de contact et booster l'engagement.",
    lime: true,
  },
  {
    num: "03",
    titre: "Optimiser votre taux de transformation",
    texte: "Préparer le RDV avec des campagnes de nurturing ciblées qui éduquent, rassurent et convertissent avant même le premier appel.",
    lime: true,
  },
  {
    num: "04",
    titre: "Optimiser votre ROI",
    texte: "Mise en place de systèmes de tracking et de relance selon le contexte et les actions effectuées par le prospect pour maximiser le ROI.",
    lime: true,
  },
];

const CarteMethode = () => (
  <section style={{ backgroundColor: '#f5f4f0', padding: '0 2rem 6rem' }}>
    <div className="methode-grid" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
      {methodeCards.map((c, i) => (
        <div key={i} style={{
          backgroundColor: c.lime ? '#a3e635' : '#ffffff',
          borderRadius: '20px',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 800,
            color: c.lime ? '#3d5a00' : '#94a3b8',
            letterSpacing: '0.1em',
          }}>{c.num}</span>
          <h3 style={{
            fontSize: '1.1rem',
            fontWeight: 800,
            color: '#0a0a0a',
            lineHeight: 1.3,
            margin: 0,
          }}>{c.titre}</h3>
          <p style={{
            fontSize: '0.9rem',
            color: c.lime ? '#3d5a00' : '#64748b',
            lineHeight: 1.6,
            margin: 0,
          }}>{c.texte}</p>
        </div>
      ))}
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
  <footer style={{ backgroundColor: '#f5f4f0', borderTop: '1px solid rgba(0,0,0,0.08)', padding: '4rem 2rem' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>

      {/* Logo + tagline */}
      <div>
        <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.75rem', fontWeight: 400, color: '#0f172a', letterSpacing: '0.02em' }}>
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
          <a href="#methode" className="nav-link" style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0a0a0a', textDecoration: 'none' }}>Découvrir la méthode</a>
          <a href="#etude-de-cas" className="nav-link" style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0a0a0a', textDecoration: 'none' }}>Étude de cas</a>
          <a href="#offre" className="nav-link" style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0a0a0a', textDecoration: 'none' }}>Notre offre</a>
        </div>
        <button className="nav-burger" onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><line x1="4" y1="8" x2="24" y2="8" stroke="#0a0a0a" strokeWidth="2.2" strokeLinecap="round"/><line x1="4" y1="14" x2="24" y2="14" stroke="#0a0a0a" strokeWidth="2.2" strokeLinecap="round"/><line x1="4" y1="20" x2="24" y2="20" stroke="#0a0a0a" strokeWidth="2.2" strokeLinecap="round"/></svg>
        </button>

        {/* Logo */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', lineHeight: 1.1 }}>
          <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.3rem', fontWeight: 400, textTransform: 'uppercase', color: '#0a0a0a', letterSpacing: '0.05em' }}>Adonyme</span>
          <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Source-to-Scale</span>
        </div>
      </div>

      {/* Mobile menu déroulant */}
      {open && (
        <div className="nav-mobile-menu" style={{ backgroundColor: '#f5f4f0', borderTop: '1px solid #e2e8f0', padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <a href="#methode" onClick={() => setOpen(false)} style={{ fontSize: '1rem', fontWeight: 600, color: '#0a0a0a', textDecoration: 'none' }}>Découvrir la méthode</a>
          <a href="#etude-de-cas" onClick={() => setOpen(false)} style={{ fontSize: '1rem', fontWeight: 600, color: '#0a0a0a', textDecoration: 'none' }}>Étude de cas</a>
          <a href="#offre" onClick={() => setOpen(false)} style={{ fontSize: '1rem', fontWeight: 600, color: '#0a0a0a', textDecoration: 'none' }}>Notre offre</a>
        </div>
      )}
    </nav>
  );
};

export const LandingPersonal = () => (
  <main>
    <Navbar />
    <Hero />
    <LogoSlider />
    <VideoProof />
    <Probleme />
    <SecteurSlider />
    <SourceToScale />
    <CarteMethode />
    <FooterLP />
  </main>
);
