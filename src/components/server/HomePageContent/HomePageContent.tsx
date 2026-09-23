import './homepage.scss';
import '@/src/styles/responsive.scss';
import { HeroSection, SocialProofSection, ValuePropositionSection } from '../';
import { Footer } from './Footer/Footer';

export function HomePageContent() {
  return (
    <main>
      <HeroSection />
      <SocialProofSection />
      <ValuePropositionSection />
      <Footer />
    </main>
  );
}
