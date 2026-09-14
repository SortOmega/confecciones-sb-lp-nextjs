const authorUrl = 'https://github.com/SortOmega';

export function Footer() {
  return (
    <footer id="footer-section" className="relative w-full py-4 md:py-6 flex flex-col items-center justify-center gap-4 md:gap-8  border-t border-white/10 bg-[radial-gradient(circle_at_16%_0%,rgb(255_83_107_/_12%),transparent_34%),linear-gradient(145deg,#17131b_0%,#11131f_100%)] text-gray-100">
      <div className="section-content rspnsv">
        <div className="credits w-full flex flex-row justify-between items-center gap-8 flex-wrap md:flex-nowrap py-3 md:py-4">
          <div className="max-w-sm">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-gray-400">
              Diseño y desarrollo
            </p>
            <a
              className="text-2xl font-extrabold text-gray-100 transition-colors hover:text-rose-300 focus-visible:text-rose-300"
              href={authorUrl}
              target="_blank"
              rel="noreferrer"
            >
              Sortomega
            </a>
            <p className="mt-3 leading-6 text-gray-300/80">
              Una experiencia digital para Confecciones SB.
            </p>
          </div>

          <nav
            className="grid w-full max-w-sm grid-cols-2 gap-8 md:w-auto"
            aria-label="Enlaces del footer"
          >
            <div className="flex flex-col items-start gap-2.5">
              <h2 className="mb-1 text-sm font-bold text-gray-100">Redes sociales</h2>
              <a
                className="text-sm text-gray-400 transition-all hover:translate-x-1 hover:text-rose-300 focus-visible:text-rose-300"
                href={authorUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

            <div className="flex flex-col items-start gap-2.5">
              <h2 className="mb-1 text-sm font-bold text-gray-100">Recursos</h2>
              <a
                className="text-sm text-gray-400 transition-all hover:translate-x-1 hover:text-rose-300 focus-visible:text-rose-300"
                href="https://www.svgrepo.com/"
                target="_blank"
                rel="noreferrer"
              >
                SVG Repo
              </a>
              <a
                className="text-sm text-gray-400 transition-all hover:translate-x-1 hover:text-rose-300 focus-visible:text-rose-300"
                href="https://www.figma.com/"
                target="_blank"
                rel="noreferrer"
              >
                Figma
              </a>
            </div>
          </nav>
        </div>
        <div className="w-full border-t border-white/[8%] py-3 md:py-4">
          <div className="section-content rspnsv w-full gap-2 py-4 text-center text-xs text-gray-400 md:flex-row md:justify-between md:text-left">
            <p>© {new Date().getFullYear()} Confecciones SB</p>
            <p>Hecho con intención y detalle.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
