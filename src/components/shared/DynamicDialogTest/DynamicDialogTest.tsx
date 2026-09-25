'use client';

import { dynamicDialogService } from '@/src/services';

export function DynamicDialogTest() {
  const handleOpenDialog = () => {
    dynamicDialogService.open(
      'mainModal',
      <div className="space-y-4 p-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-300">
            Prueba del servicio
          </p>
          <h4 className="mt-2 text-2xl font-black text-gray-50">Dialog dinámico funcionando</h4>
        </div>
        <p className="text-sm leading-6 text-gray-300">
          Este contenido fue enviado al diálogo desde un componente cliente mediante Zustand.
        </p>
        <button
          type="button"
          className="rounded-md bg-pink-500 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-pink-400"
          onClick={() => dynamicDialogService.close('mainModal')}
        >
          Cerrar diálogo
        </button>
      </div>,
      {
        draggable: true,
        fullscreenToggle: true,
        showCloseButton: true,
        defaultFullscreen: false,
        header: <span className="text-sm font-bold text-gray-200">Confecciones SB</span>,
      },
    );
  };

  return (
    <div className="mt-8 flex justify-center">
      <button
        type="button"
        className="rounded-md border border-pink-300/70 px-5 py-3 text-sm font-bold text-pink-200 transition-colors hover:bg-pink-300 hover:text-slate-900"
        onClick={handleOpenDialog}
      >
        Probar diálogo dinámico
      </button>
    </div>
  );
}