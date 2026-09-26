'use client';

import './cta-section.scss';
import { SubmitEvent, useState } from 'react';

const destinationEmail = 'sortocarlo755@gmail.com';
const phoneNumber = 'Número de teléfono pendiente';
const physicalAddress = 'Dirección física pendiente';

export function CtaSection() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const message = String(formData.get('message') ?? '');
    const subject = encodeURIComponent(`Nueva consulta de ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\n${message}`);

    window.location.href = `mailto:${destinationEmail}?subject=${subject}&body=${body}`;
    setIsSent(true);
  };

  return (
    <section
      id="cta-section"
      className="cta-section relative w-full py-4 md:py-6 flex flex-col items-center justify-center gap-4 md:gap-8 px-0 py-16 text-slate-50 md:py-20"
    >
      <div className="section-content rspnsv">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-rose-300">
            Hablemos de tu próximo proyecto
          </p>
          <h3 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
            ¿Listo para materializar tu idea?
          </h3>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-200/80">
            Cuéntanos qué tienes en mente y te ayudaremos a convertirlo en una prenda con identidad,
            calidad y el acabado que estás buscando.
          </p>
          <h4 className="mt-8 text-lg font-extrabold text-rose-300">Contáctanos</h4>
          <div className="mt-4 flex flex-wrap justify-center gap-3" aria-label="Redes sociales">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-rose-200/35 bg-white/[7%] px-4 py-3 text-xs font-extrabold transition duration-200 hover:-translate-y-0.5 hover:border-rose-300 hover:bg-rose-500/25 focus-visible:-translate-y-0.5 focus-visible:border-rose-300 focus-visible:bg-rose-500/25"
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-base leading-none text-rose-300" aria-hidden="true">◔</span>
              WhatsApp
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-rose-200/35 bg-white/[7%] px-4 py-3 text-xs font-extrabold transition duration-200 hover:-translate-y-0.5 hover:border-rose-300 hover:bg-rose-500/25 focus-visible:-translate-y-0.5 focus-visible:border-rose-300 focus-visible:bg-rose-500/25"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-base leading-none text-rose-300" aria-hidden="true">f</span>
              Facebook
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-rose-200/35 bg-white/[7%] px-4 py-3 text-xs font-extrabold transition duration-200 hover:-translate-y-0.5 hover:border-rose-300 hover:bg-rose-500/25 focus-visible:-translate-y-0.5 focus-visible:border-rose-300 focus-visible:bg-rose-500/25"
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-base leading-none text-rose-300" aria-hidden="true">➤</span>
              Telegram
            </a>
          </div>
        </div>

        <div className="mt-12 grid items-start gap-10 md:mt-16 md:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] md:gap-12">
          <form
            className="grid gap-2.5 rounded-lg border border-white/10 bg-slate-900/40 p-6"
            onSubmit={handleSubmit}
          >
            <label className="mt-1 text-xs font-bold text-slate-200/85" htmlFor="cta-name">
              Nombre
            </label>
            <input
              className="w-full resize-y rounded border border-slate-200/20 bg-slate-950/55 px-3.5 py-3 text-slate-50 outline-none transition focus:border-rose-300 focus:ring-4 focus:ring-rose-500/15"
              id="cta-name"
              name="name"
              type="text"
              autoComplete="name"
              required
            />

            <label className="mt-1 text-xs font-bold text-slate-200/85" htmlFor="cta-email">
              Correo electrónico
            </label>
            <input
              className="w-full resize-y rounded border border-slate-200/20 bg-slate-950/55 px-3.5 py-3 text-slate-50 outline-none transition focus:border-rose-300 focus:ring-4 focus:ring-rose-500/15"
              id="cta-email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />

            <label className="mt-1 text-xs font-bold text-slate-200/85" htmlFor="cta-message">
              Descripción
            </label>
            <textarea
              className="w-full resize-y rounded border border-slate-200/20 bg-slate-950/55 px-3.5 py-3 text-slate-50 outline-none transition focus:border-rose-300 focus:ring-4 focus:ring-rose-500/15"
              id="cta-message"
              name="message"
              rows={5}
              required
            />

            <button
              className="cta-link text-gray-200 font-extrabold py-3 px-5 rounded-full"
              type="submit"
            >
              Enviar Mensaje
            </button>
            {isSent ? (
              <p className="text-xs text-rose-300" role="status">
                Se abrió tu aplicación de correo con el mensaje preparado.
              </p>
            ) : null}
          </form>

          <address className="grid gap-5 pt-3 not-italic">
            <div className="flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-rose-200/35 text-lg text-rose-300" aria-hidden="true">✉</span>
              <span>
                <small className="mb-1 block text-[0.7rem] font-extrabold uppercase tracking-[0.08em] text-slate-200/55">
                  Correo destino
                </small>
                <a className="block text-[0.95rem] font-bold text-slate-50 hover:text-rose-300 focus-visible:text-rose-300" href={`mailto:${destinationEmail}`}>
                  {destinationEmail}
                </a>
              </span>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-rose-200/35 text-lg text-rose-300" aria-hidden="true">☎</span>
              <span>
                <small className="mb-1 block text-[0.7rem] font-extrabold uppercase tracking-[0.08em] text-slate-200/55">Teléfono</small>
                <strong className="block text-[0.95rem] font-bold text-slate-50">{phoneNumber}</strong>
              </span>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-rose-200/35 text-lg text-rose-300" aria-hidden="true">⌖</span>
              <span>
                <small className="mb-1 block text-[0.7rem] font-extrabold uppercase tracking-[0.08em] text-slate-200/55">Dirección física</small>
                <strong className="block text-[0.95rem] font-bold text-slate-50">{physicalAddress}</strong>
              </span>
            </div>
          </address>
        </div>
      </div>
    </section>
  );
}