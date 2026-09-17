import './ValuePropositionSection.scss';
import { ServiceCard } from '@/src/components/client/ServiceCard/ServiceCard';

export const ValuePropositionSection = () => {
  return (
    <section id="value-proposition-section" className="value-proposition-section relative w-full py-4 md:py-6 flex flex-col items-center justify-center gap-4 md:gap-8">
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
          <ServiceCard>
            <img className="service-icon" src="/assets/icons/custom-post-type-svgrepo-com.svg" alt="Icono de personalización" />
            <h4 className='text-md md:text-xl py-2 md:py-4'>Personalización</h4>
            <p className='text-sm md:text-md lg:text-lg'>
              Ofrecemos una amplia gama de opciones de personalización para que tu producto sea
              único y refleje tu estilo.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img className="service-icon" src="/assets/icons/diamond-svgrepo-com.svg" alt="Icono de una joya brillando" />
            <h4 className='text-md md:text-xl py-2 md:py-4'>Calidad</h4>
            <p className='text-sm md:text-md lg:text-lg'>
              Nos aseguramos de que cada producto cumpla con los más altos estándares de calidad
              para tu satisfacción.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img className="service-icon" src="/assets/icons/price-tag-svgrepo-com.svg" alt="Icono de una etiqueta de precios" />
            <h4 className='text-md md:text-xl py-2 md:py-4'>Precios Asequibles</h4>
            <p className='text-sm md:text-md lg:text-lg'>Facilidad para adquirir lo que más deseas sin lastimar tu cartera</p>
          </ServiceCard>

          <ServiceCard>
            <img className="service-icon" src="/assets/icons/options-determine-examine-analyze-svgrepo-com.svg" alt="Icono de una persona escogiendo entre un elemento u otro" />
            <h4 className='text-md md:text-xl py-2 md:py-4'>Variedad</h4>
            <p className='text-sm md:text-md lg:text-lg'>
              Amplia selección de telas, materiales y diseños para que encuentres la perfecta para
              tu proyecto.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img className="service-icon" src="/assets/icons/price-tag-percent-svgrepo-com.svg" alt="Icono de una etiqueta de precios con porcentaje" />
            <h4 className='text-md md:text-xl py-2 md:py-4'>Mayoreo</h4>
            <p className='text-sm md:text-md lg:text-lg'>
              Ofrecemos precios especiales para compras de mayor cantidad, ideal para empresas y
              profesionales.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img className="service-icon" src="/assets/icons/loyalty-svgrepo-com.svg" alt="Icono de lealtad" />
            <h4 className='text-md md:text-xl py-2 md:py-4'>Lealtad</h4>
            <p className='text-sm md:text-md lg:text-lg'>
              Ofrecemos un programa de lealtad para nuestros clientes frecuentes, con beneficios
              exclusivos y descuentos especiales.
            </p>
          </ServiceCard>
        </div>
      </div>
    </section>
  );
};
