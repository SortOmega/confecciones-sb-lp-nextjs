export const SocialProofSection = () => {
  return (
    <section className="socialproof-section relative w-full pt-24 md:pt-30 flex flex-col items-center justify-center gap-4 md:gap-8">
      <div className="section-content rspnsv">
        <h3 className="text-2xl md:text-3xl text-gray-50 text-center font-black my-4">
          Nuestros Clientes
        </h3>
        <div className="customers-list flex flex-wrap justify-around gap-4 md:gap-8">
          <figure className="customer-item">
            <img src="/assets/brands/isotipo-mlg-publicidad.svg" alt="Cliente 1" />
            <figcaption>MLG Publicidad</figcaption>
          </figure>
          <figure className="customer-item">
            <img src="/assets/brands/isotipo-mlg-publicidad.svg" alt="Cliente 1" />
            <figcaption>MLG Publicidad</figcaption>
          </figure>
          <figure className="customer-item">
            <img src="/assets/brands/isotipo-mlg-publicidad.svg" alt="Cliente 1" />
            <figcaption>MLG Publicidad</figcaption>
          </figure>
          <figure className="customer-item">
            <img src="/assets/brands/isotipo-mlg-publicidad.svg" alt="Cliente 1" />
            <figcaption>MLG Publicidad</figcaption>
          </figure>
          <figure className="customer-item">
            <img src="/assets/brands/isotipo-mlg-publicidad.svg" alt="Cliente 1" />
            <figcaption>MLG Publicidad</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};
