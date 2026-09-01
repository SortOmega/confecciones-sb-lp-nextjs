import { HomePageContent, NavigationBar } from '@/src/components/server';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>
        <HomePageContent />
      </main>
    </>
  );
}
