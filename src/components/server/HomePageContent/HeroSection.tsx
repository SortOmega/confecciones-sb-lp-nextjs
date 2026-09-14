import './HeroSection.scss';
import { Carousel } from '../../client/Carousel/Carousel';
import { Montserrat } from 'next/font/google';

const ftMonserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const HeroSection = () => {
  return (
    <section className="hero-section relative w-full pt-24 md:pt-30 flex flex-col items-center justify-center gap-4 md:gap-8">
      <div className="section-content rspnsv">
        <h1
          className="text-4xl md:text-5xl text-gray-50 text-center font-black my-4"
          style={{ fontFamily: ftMonserrat.style.fontFamily }}
        >
          Confecciones SB
        </h1>
        <h2
          className="text-lg md:text-xl text-gray-200 opacity-80 inline-flex flex-col text-center font-bold"
          style={{ fontFamily: ftMonserrat.style.fontFamily }}
        >
          <span> Confección de ropa de calidad y personalizadas </span>
          <span> a tu alcance </span>
        </h2>
        <Carousel />
      </div>
    </section>
  );
};
