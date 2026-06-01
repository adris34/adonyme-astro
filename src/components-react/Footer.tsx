import { motion } from "framer-motion";


export const Footer = () => {
  return (
    <footer className="py-20 border-t border-border bg-[#f4f5f6]">
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
              La méthode Source-to-Scale™ — automatisation de la prospection B2B et acquisition clients par agents IA en France.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-10 text-sm font-semibold text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors uppercase tracking-widest">
              Méthode
            </a>
            <a href="#" className="hover:text-primary transition-colors uppercase tracking-widest">
              Résultats
            </a>
            <a href="#" className="hover:text-primary transition-colors uppercase tracking-widest">
              Contact
            </a>
            <a href="#" className="hover:text-primary transition-colors uppercase tracking-widest">
              Mentions légales
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-6 mb-4 text-sm text-muted-foreground">
              <a href="/politique-de-confidentialite" className="hover:text-foreground transition-colors">
                Politique de confidentialité
              </a>
              <a href="/mentions-legales" className="hover:text-foreground transition-colors">
                Mentions légales
              </a>
            </div>
            <div className="text-xs text-muted-foreground/30 font-mono">
              © 2026 Adonyme.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
