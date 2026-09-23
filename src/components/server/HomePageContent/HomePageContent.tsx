import './homepage.scss';
import '@/src/styles/responsive.scss';
import { HeroSection, SocialProofSection, ValuePropositionSection, WorkShowcaseSection, Footer } from '../';

export function HomePageContent() {
  return (
    <main>
      <HeroSection />
      <SocialProofSection />
      <ValuePropositionSection />
      <WorkShowcaseSection />
      <Footer />
    </main>
  );
}
