import './HeroSection.scss';
import { Carousel } from '../../client/Carousel/Carousel';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';

const ftMonserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="hero-section relative w-full pt-24 md:pt-30 flex flex-col items-center justify-center gap-4 md:gap-8"
      style={{ fontFamily: ftMonserrat.style.fontFamily }}
    >
      <div className="section-content rspnsv">
        <h1
          className="text-4xl md:text-5xl text-gray-50 text-center font-black my-4"

        >
          Confecciones SB
        </h1>
        <h2
          className="text-lg md:text-xl text-gray-200 opacity-80 inline-flex flex-col my-3 md:my-4 text-center font-bold"

        >
          <span> Confección de ropa de calidad y personalizadas </span>
          <span> a tu alcance </span>
        </h2>

        <div className="cta my-3 md:my-4 flex flex-col items-center justify-center gap-2 md:gap-3">
          <Link
            href="/contacto"
            className="cta-link text-gray-200 font-extrabold py-3 px-5 rounded-full transition-colors duration-300"
          >
            Consulta y cotiza
          </Link>

          <p className="text-gray-200 opacity-80 text-sm md:text-base text-center font-medium">
            Precios • Materiales • Diseños • Mayoreo
          </p>
        </div>

        <Carousel />
      </div>
    </section>
  );
};
