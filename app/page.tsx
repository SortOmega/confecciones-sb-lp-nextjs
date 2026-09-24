import { HomePageContent } from '@/src/components/layout/HomePageContent';
import { NavigationBar } from '@-components/shared';

export default function HomePage() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <HomePageContent />
    </>
  );
}
