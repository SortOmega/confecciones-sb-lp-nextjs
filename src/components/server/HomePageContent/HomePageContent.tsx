import './homepage.scss';
import '@/src/styles/responsive.scss';
import { HeroSection } from './HeroSection';
import { SocialProofSection } from './SocialProofSection';
import { ValuePropositionSection } from './ValuePropositionSection';

export function HomePageContent() {
  return (
    <main>
      <HeroSection />
      <SocialProofSection />
      <ValuePropositionSection />
    </main>
  );
}
