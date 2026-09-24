import './WorkShowcaseSection.scss';
import Image from 'next/image';
import { DynamicDialogTest } from '@/src/components/shared';
import { FeaturedWorkListSchema } from '@/src/utils/schemas/FeaturedWork.schema';
import { FeaturedWorkList } from './mock';

export const WorkShowcaseSection = () => {
  const parsedWorkList = FeaturedWorkListSchema.parse(FeaturedWorkList);

  return (
    <section
      id="work-showcase-section"
      className="work-showcase-section relative flex w-full flex-col items-center justify-center gap-4 px-4 py-20 md:gap-8 md:px-8 md:py-28"
    >
      <div className="section-content rspnsv max-w-6xl">
        <h3 className="my-4 text-center text-2xl font-black text-gray-50 md:text-3xl">
          Trabajo destacado
        </h3>

        <p className="my-3 max-w-2xl text-center text-sm leading-6 text-gray-300 md:my-4 md:text-base">
          Algunas formas en las que convertimos ideas y necesidades en prendas con identidad.
        </p>

        <div className="work-showcase-grid my-8 flex w-full flex-col gap-12 md:my-12 md:gap-16">
          {parsedWorkList.map((work, index) => (
            <article
              key={work.title}
              className={`flex w-full flex-col items-center gap-6 md:gap-12 lg:gap-20 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <figure className="work-showcase-image flex aspect-[4/3] w-full max-w-md shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-blue-400/60 bg-slate-800/80 p-8 shadow-xl shadow-black/20 md:w-1/2 md:p-12">
                <Image
                  src={work.image}
                  alt={work.alt}
                  width={320}
                  height={240}
                  className="h-full w-full object-contain drop-shadow-lg transition-transform duration-500 hover:scale-105"
                />
              </figure>

              <div className="w-full max-w-xl text-center md:w-1/2 md:text-left">
                {/* <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-pink-300">
                  Proyecto {String(index + 1).padStart(2, '0')}
                </span> */}
                <h4 className="text-xl font-extrabold text-pink-300 md:text-2xl">{work.title}</h4>
                <p className="mt-3 text-sm leading-7 text-gray-300 md:text-base">
                  {work.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <DynamicDialogTest />
      </div>
    </section>
  );
};
