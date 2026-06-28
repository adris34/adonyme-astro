export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <img
            src="/logo-adonyme.png"
            alt="Adonyme"
            className="h-7 w-auto"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900 text-base tracking-tight leading-tight">
              Adonyme
            </span>
            <span className="text-gray-400 text-[10px] font-medium leading-tight">
              La méthode Source-to-Scale™
            </span>
          </div>
        </a>
        <a
          href="https://cal.com/acquisition-ai/decouverte"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-white text-xs md:text-sm font-bold px-3 md:px-5 py-2 rounded-xl hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
        >
          Réserver un appel
        </a>
      </div>
    </header>
  );
}
