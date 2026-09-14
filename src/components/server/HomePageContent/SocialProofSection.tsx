import './SocialProofSection.scss';

export const SocialProofSection = () => {
  return (
    <section className="socialproof-section relative w-full py-4 md:py-6 flex flex-col items-center justify-center gap-4 md:gap-8">
      <div className="section-content rspnsv" id="socialproof-section">
        <h3 className="text-2xl md:text-3xl text-gray-50 text-center font-black my-4 md:my-6">
          Nuestros Clientes
        </h3>

        <div className="customers-list flex flex-wrap justify-around py-2 md:py-3 gap-4 md:gap-8">
          <figure className="customer-item">
            <img src="/assets/brands/isotipo-simple-esc-francisco-morazan-zacapa.svg" alt="Isotipo Escuela Francisco Morazán en San Pedro Zacapa"/>
            <figcaption>Escuela Francisco Morazán</figcaption>
          </figure>
          <figure className="customer-item">
            <img src="/assets/brands/isotipo-mlg-publicidad.svg" className="text-white" alt="Isotipo de MLG Publicidad" />
            <figcaption>MLG Publicidad</figcaption>
          </figure>
          <figure className="customer-item">
            <img src="/assets/brands/isotipo-telepais-honduras.svg" alt="Isotipo del Canal televisivo Telepais Honduras" />
            <figcaption>Telepais Honduras</figcaption>
          </figure>
          {/* <figure className="customer-item">
            <img src="/assets/brands/isotipo-mlg-publicidad.svg" alt="Cliente 1" />
            <figcaption>MLG Publicidad</figcaption>
          </figure>
          <figure className="customer-item">
            <img src="/assets/brands/isotipo-mlg-publicidad.svg" alt="Cliente 1" />
            <figcaption>MLG Publicidad</figcaption>
          </figure> */}
        </div>
      </div>
    </section>
  );
};
