import './WorkShowcaseSection.scss';

export const WorkShowcaseSection = () => {
  return (
    <section
        id="work-showcase-section"
        className="work-showcase-section relative w-full pt-24 md:pt-30 flex flex-col items-center justify-center gap-4 md:gap-8"
    >
      <div className="section-content rspnsv">
        <h3 className="text-2xl md:text-3xl text-gray-50 text-center font-black my-4">
          Trabajo Destacado
        </h3>
        <p className="text-lg md:text-xl text-gray-200 opacity-80 inline-flex flex-col my-3 md:my-4 text-center font-bold">
          <span> Confección de ropa de calidad y personalizadas </span>
          <span> a tu alcance </span>
        </p>

        <div className="work-showcase-grid my-3 md:my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Aquí puedes agregar los elementos de la cuadrícula */}
        </div>
      </div>
    </section>
  );
};