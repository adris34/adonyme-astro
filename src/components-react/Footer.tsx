import { motion } from "framer-motion";


export const Footer = () => {
  return (
    <footer className="py-20 border-t border-border bg-[#f5f4f0]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-3xl font-black tracking-tighter text-foreground">
              ADONYME<span className="text-primary">.</span>
            </span>
            <p className="text-muted-foreground text-sm mt-2 max-w-[220px]">
              La méthode Source-to-Scale™ — Générez un flux régulier de prospects pour accélérer la croissance de votre business.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-10 text-sm font-semibold text-muted-foreground">
            <a href="/#methode" className="hover:text-primary transition-colors uppercase tracking-widest">
              Méthode
            </a>
            <a href="https://cal.com/source-to-scale/decouverte" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors uppercase tracking-widest">
              Contact
            </a>
            <a href="/mentions-legales" className="hover:text-primary transition-colors uppercase tracking-widest">
              Mentions légales
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-6 mb-4 text-sm text-muted-foreground">
              <a href="/politique-de-confidentialite" className="hover:text-foreground transition-colors">
                Politique de confidentialité
              </a>
            </div>
            <a
              href="https://www.linkedin.com/company/adonyme"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <div className="text-xs text-muted-foreground/30 font-mono">
              © 2026 Adonyme.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
