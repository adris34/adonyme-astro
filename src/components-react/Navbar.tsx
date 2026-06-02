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
          <span className="font-semibold text-gray-900 text-lg tracking-tight">
            Adonyme
          </span>
          <span className="text-gray-400 text-lg">·</span>
          <span className="text-gray-500 text-sm font-medium">
            La méthode Source-to-Scale™
          </span>
        </a>
      </div>
    </header>
  );
}
