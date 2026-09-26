import { HomePageContent } from '@-components/layout/HomePageContent';
import { NavigationBar } from '@-components/layout/NavigationBar';

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
