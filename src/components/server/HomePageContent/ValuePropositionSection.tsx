import './ValuePropositionSection.scss';

export const ValuePropositionSection = () => {
  return (
    <section className="value-proposition-section relative w-full py-4 md:py-6 flex flex-col items-center justify-center gap-4 md:gap-8">
      <div className="bg-patron">
        <div className="circle-blueshadow"></div>
        <div className="circle-shine"></div>
        <div className="circle-bluelight"></div>
        <div className="circle-dark"></div>
      </div>
      <div className="section-content rspnsv mt-20 md:mt-28">
        <h3 className="text-2xl md:text-3xl text-gray-50 text-center font-black my-4">
          Nuestros Servicios
        </h3>

        <p className="text-gray-300 text-center my-3 md:my-4">
          Con cada producto encontrarás la calidad y el servicio que mereces a precios accesibles.
        </p>

        <div className="services-list py-3 md:py-4">
          <div className="service-item">
            <img className="service-icon" src="/assets/icons/service-icon-1.svg" alt="Servicio 1" />
            <h4>Personalización</h4>
            <p>
              Ofrecemos una amplia gama de opciones de personalización para que tu producto sea
              único y refleje tu estilo.
            </p>
          </div>

          <div className="service-item">
            <img className="service-icon" src="/assets/icons/service-icon-2.svg" alt="Servicio 2" />
            <h4>Calidad</h4>
            <p>
              Nos aseguramos de que cada producto cumpla con los más altos estándares de calidad
              para tu satisfacción.
            </p>
          </div>

          <div className="service-item">
            <img className="service-icon" src="/assets/icons/service-icon-3.svg" alt="Servicio 3" />
            <h4>Precios Asequibles</h4>
            <p>Facilidad para adquirir lo que más deseas sin lastimar tu cartera</p>
          </div>

          <div className="service-item">
            <img className="service-icon" src="/assets/icons/service-icon-4.svg" alt="Servicio 4" />
            <h4>Variedad</h4>
            <p>
              Amplia selección de telas, materiales y diseños para que encuentres la perfecta para
              tu proyecto.
            </p>
          </div>

          <div className="service-item">
            <img className="service-icon" src="/assets/icons/service-icon-5.svg" alt="Servicio 5" />
            <h4>Mayoreo</h4>
            <p>
              Ofrecemos precios especiales para compras de mayor cantidad, ideal para empresas y
              profesionales.
            </p>
          </div>

          <div className="service-item">
            <img className="service-icon" src="/assets/icons/service-icon-6.svg" alt="Servicio 6" />
            <h4>Lealtad</h4>
            <p>
              Ofrecemos un programa de lealtad para nuestros clientes frecuentes, con beneficios
              exclusivos y descuentos especiales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
