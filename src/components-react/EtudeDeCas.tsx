'use client';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#f5f4f0', borderBottom: '1px solid #e2e8f0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="https://cal.com/source-to-scale/decouverte" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0a0a0a', textDecoration: 'none' }}>Comment ça marche ?</a>
          <a href="/etude-de-cas" className="nav-link" style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0a0a0a', textDecoration: 'none' }}>Étude de cas</a>
          <a href="/#offre" className="nav-link" style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0a0a0a', textDecoration: 'none' }}>Notre offre</a>
        </div>
        <button className="nav-burger" onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><line x1="4" y1="8" x2="24" y2="8" stroke="#0a0a0a" strokeWidth="2.2" strokeLinecap="round"/><line x1="4" y1="14" x2="24" y2="14" stroke="#0a0a0a" strokeWidth="2.2" strokeLinecap="round"/><line x1="4" y1="20" x2="24" y2="20" stroke="#0a0a0a" strokeWidth="2.2" strokeLinecap="round"/></svg>
        </button>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', lineHeight: 1.1 }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.3rem', fontWeight: 400, textTransform: 'uppercase', color: '#0a0a0a', letterSpacing: '0.05em' }}>Adonyme</span>
            <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Source-to-Scale</span>
          </a>
        </div>
      </div>
      {open && (
        <div className="nav-mobile-menu" style={{ backgroundColor: '#f5f4f0', borderTop: '1px solid #e2e8f0', padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <a href="https://cal.com/source-to-scale/decouverte" onClick={() => setOpen(false)} style={{ fontSize: '1rem', fontWeight: 600, color: '#0a0a0a', textDecoration: 'none' }}>Comment ça marche ?</a>
          <a href="/etude-de-cas" onClick={() => setOpen(false)} style={{ fontSize: '1rem', fontWeight: 600, color: '#0a0a0a', textDecoration: 'none' }}>Étude de cas</a>
          <a href="/#offre" onClick={() => setOpen(false)} style={{ fontSize: '1rem', fontWeight: 600, color: '#0a0a0a', textDecoration: 'none' }}>Notre offre</a>
        </div>
      )}
    </nav>
  );
};

const FooterLP = () => (
  <footer style={{ backgroundColor: '#f5f4f0', backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', borderTop: '1px solid rgba(0,0,0,0.08)', padding: '4rem 2rem' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
      <div>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.75rem', fontWeight: 400, color: '#0f172a', letterSpacing: '0.02em' }}>
          ADONYME<span style={{ color: '#2563eb' }}>.</span>
        </span>
        <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.75rem', maxWidth: '220px', lineHeight: 1.6 }}>
          La méthode Source-to-Scale™ — Générez un flux régulier de prospects pour accélérer la croissance de votre business.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '2.5rem', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#64748b', alignItems: 'center' }}>
        <a href="/#methode" style={{ color: 'inherit', textDecoration: 'none' }}>Méthode</a>
        <a href="https://cal.com/source-to-scale/decouverte" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
        <a href="/mentions-legales" style={{ color: 'inherit', textDecoration: 'none' }}>Mentions légales</a>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
        <a href="/politique-de-confidentialite" style={{ fontSize: '0.8rem', color: '#64748b', textDecoration: 'none' }}>Politique de confidentialité</a>
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

export const EtudeDeCas = () => (
  <main>
    <Navbar />
    <section style={{
      minHeight: '80vh',
      backgroundColor: '#f5f4f0',
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
      backgroundSize: '40px 40px',
      padding: '5rem 2rem',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#64748b', marginBottom: '0.75rem' }}>
          Résultats ↗
        </p>
        <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.1, marginBottom: '0.75rem' }}>
          Etude de cas clients
        </h1>
        <p style={{ fontSize: '0.9rem', fontWeight: 500, color: '#94a3b8', marginBottom: '3rem' }}>(Nos témoignages seront bientôt disponibles)</p>

        {/* Grille 3 par ligne */}
        <div className="etude-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          <style>{`@media (max-width: 768px) { .etude-grid { grid-template-columns: 1fr !important; } }`}</style>
          {/* Carte 1 — Fulgurance */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', backgroundColor: '#fff' }}>
            <img src="/fulgurance-etude-de-cas.webp" alt="Fulgurance — Étude de cas" style={{ width: '100%', display: 'block' }} />
            <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
              <p style={{ fontSize: '1rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0a0a0a', margin: '0 0 0.4rem' }}>Fulgurance EMS — QVEMA S3</p>
              <p style={{ fontSize: '0.82rem', fontWeight: 700, color: '#a3e635', margin: '0 0 0.5rem' }}>+1000 leads · 7€ CPL · 135 000€ CA</p>
              <p style={{ fontSize: '0.82rem', color: '#64748b', margin: '0 0 0.75rem', lineHeight: 1.5 }}>Mise en place de <strong style={{ color: '#0a0a0a' }}>toute la stratégie d'acquisition</strong> meta, système complet de qualification et nurturing</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem' }}>
                <img src="/meta-logo.webp" alt="Meta" style={{ height: '32px', objectFit: 'contain', opacity: 0.7 }} />
                <img src="/Google_Ads_logo.svg.webp" alt="Google Ads" style={{ height: '32px', objectFit: 'contain', opacity: 0.7 }} />
                <img src="/whatsapp-logo-whatsapp-logo-transparent-whatsapp-icon-transparent-free-free-png.webp" alt="WhatsApp" style={{ height: '32px', objectFit: 'contain', opacity: 0.7 }} />
                <img src="/claudecode-color.png" alt="Claude Code" style={{ height: '32px', objectFit: 'contain', opacity: 0.7 }} />
                <img src="/supabase-icon-logo.png" alt="Supabase" style={{ height: '32px', objectFit: 'contain', opacity: 0.7 }} />
              </div>
            </div>
          </div>

          {/* Carte 2 — Cerfrance */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', backgroundColor: '#fff' }}>
            <img src="/cerfrance-etude-de-cas.webp" alt="Cerfrance — Étude de cas" style={{ width: '100%', display: 'block' }} />
            <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
              <p style={{ fontSize: '1rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0a0a0a', margin: '0 0 0.4rem' }}>Cerfrance</p>
              <p style={{ fontSize: '0.82rem', fontWeight: 700, color: '#a3e635', margin: '0 0 0.5rem' }}>1 milliard de CA à travers 720 agences</p>
              <p style={{ fontSize: '0.82rem', color: '#64748b', margin: '0 0 0.75rem', lineHeight: 1.5 }}>Comment nous avons segmenté et exploité la base de données du plus gros réseau d'expertise comptable en France pour générer des leads chauds</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem' }}>
                <img src="/meta-logo.webp" alt="Meta" style={{ height: '32px', objectFit: 'contain', opacity: 0.7 }} />
                <img src="/Google_Ads_logo.svg.webp" alt="Google Ads" style={{ height: '32px', objectFit: 'contain', opacity: 0.7 }} />
                <img src="/claudecode-color.png" alt="Claude Code" style={{ height: '32px', objectFit: 'contain', opacity: 0.7 }} />
                <img src="/OpenAI-Logo-2022.png" alt="OpenAI" style={{ height: '32px', objectFit: 'contain', opacity: 0.7 }} />
              </div>
            </div>
          </div>

          {/* Carte 3 — Decarbosolution */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', backgroundColor: '#fff' }}>
            <img src="/gci-etude-de-cas.webp" alt="GCI — Étude de cas" style={{ width: '100%', display: 'block' }} />
            <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
              <p style={{ fontSize: '1rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0a0a0a', margin: '0 0 0.4rem' }}>decarbosolution.ai</p>
              <p style={{ fontSize: '0.82rem', fontWeight: 700, color: '#a3e635', margin: '0 0 0.5rem' }}>Répondre à plus de 200 appels d'offres par jour ?</p>
              <p style={{ fontSize: '0.82rem', color: '#64748b', margin: '0 0 0.75rem', lineHeight: 1.5 }}>Nous avons créé une <strong style={{ color: '#0a0a0a' }}>plateforme sur-mesure complète</strong>, basée sur des signaux détectés par notre système automatisé, dédié aux marchés publics pour capturer des leads chauds</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem', flexWrap: 'wrap' }}>
                <img src="/claudecode-color.png" alt="Claude Code" style={{ height: '32px', objectFit: 'contain', opacity: 0.7 }} />
                <img src="/OpenAI-Logo-2022.png" alt="OpenAI" style={{ height: '32px', objectFit: 'contain', opacity: 0.7 }} />
                <img src="/claude-icon-logo.png" alt="Claude" style={{ height: '32px', objectFit: 'contain', opacity: 0.7 }} />
                <img src="/supabase-icon-logo.png" alt="Supabase" style={{ height: '32px', objectFit: 'contain', opacity: 0.7 }} />
                <img src="/openclaw-logo.svg" alt="Openclaw" style={{ height: '32px', objectFit: 'contain', opacity: 0.7 }} />
              </div>
            </div>
          </div>

          {/* Carte 4 — à compléter */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', backgroundColor: '#fff' }}>
            <img src="/abraham-etude-de-cas.webp" alt="Abraham & Partners — Étude de cas" style={{ width: '100%', display: 'block' }} />
            <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
              <p style={{ fontSize: '1rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0a0a0a', margin: '0 0 0.4rem' }}>AB & Partners - Recouvrement</p>
              <p style={{ fontSize: '0.82rem', fontWeight: 700, color: '#a3e635', margin: '0 0 0.5rem' }}>20 leads {'>'} 60 chez la concurrence</p>
              <p style={{ fontSize: '0.82rem', color: '#64748b', margin: '0 0 0.75rem', lineHeight: 1.5 }}>Nous avons 17 ans d'expérience dans la gestion d'un cabinet de recouvrement et une maîtrise de la publicité pour générer des <strong style={{ color: '#0a0a0a' }}>leads exclusifs</strong> et se démarquer de toute concurrence</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem' }}>
                <img src="/meta-logo.webp" alt="Meta" style={{ height: '32px', objectFit: 'contain', opacity: 0.7 }} />
                <img src="/claudecode-color.png" alt="Claude Code" style={{ height: '32px', objectFit: 'contain', opacity: 0.7 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterLP />
  </main>
);
