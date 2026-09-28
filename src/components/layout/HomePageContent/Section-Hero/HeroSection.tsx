import './HeroSection.scss';
import { Carousel } from '../../../shared';
import { Montserrat, Niconne } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

const ftMonserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const ftNiconne = Niconne({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-niconne',
});

export const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="hero-section relative w-full pt-24 md:pt-30 flex flex-col items-center justify-center gap-4 md:gap-8"
      style={{ fontFamily: ftMonserrat.style.fontFamily }}
    >
      <div className="section-content rspnsv">
        <Image
          className="-ml-8 md:-ml-10 lg:-ml-14 w-40! md:w-50! lg:w-60! drop-shadow-md drop-shadow-orange-400 select-none"
          src="/assets/brands/isotipo-confecciones-bardales.svg"
          alt="Isotipo de Confecciones Bardales"
          width={16}
          height={16}
          loading="eager"
        />
        <h1
          className={`${ftNiconne.className} text-6xl md:text-8xl text-gray-50 text-center font-black my-4`}
        >
          Confecciones Bardales
        </h1>
        <h2
          className="text-lg md:text-xl text-gray-200 opacity-80 inline-flex flex-col my-3 md:my-4 text-center font-bold"

        >
          <span> Confección de ropa de calidad y personalizadas </span>
          <span> a tu alcance </span>
        </h2>

        <div className="cta my-3 md:my-4 flex flex-col items-center justify-center gap-2 md:gap-3">
          <Link
            href="/#cta-section"
            className="cta-link text-gray-200 font-extrabold py-3 px-5 rounded-full transition-colors duration-300 select-none"
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
