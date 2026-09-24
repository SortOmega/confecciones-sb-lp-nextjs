import type { Metadata, Viewport } from 'next';
import { DynamicDialog } from '@/src/components/shared';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Confecciones SB',
  description:
    'Confecciones SB es una empresa dedicada a la confección de ropa de calidad con estilos y diseños personalizados.',
  keywords: [
    'Confecciones SB',
    'ropa de calidad',
    'estilos personalizados',
    'diseños únicos',
    'moda a medida',
  ],
  authors: [{ name: 'Sortomega', url: 'https://www.github.com/SortOmega' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="es" className={`antialiased`}>
      <body>
        {children}
        <DynamicDialog
          id="mainModal"
          draggable
          fullscreenToggle
          showCloseButton
          header={<span className="text-sm font-bold text-gray-200">Confecciones SB</span>}
        />
      </body>
    </html>
  );
}
