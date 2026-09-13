import type { Metadata } from 'next';
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

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="es" className={`antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
