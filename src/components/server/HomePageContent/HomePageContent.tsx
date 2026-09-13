import './homepage.scss';
import { HeroSection } from './HeroSection';
import { SocialProofSection } from './SocialProofSection';

export function HomePageContent() {
  return (
    <main>
      <HeroSection />
      <SocialProofSection />
    </main>
  );
}
