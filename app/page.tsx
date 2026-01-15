import { HeroSection } from "@/components/HeroSection";
import { ExploreSection } from "@/components/ExploreSection";
import { SpeakersSection } from "@/components/SpeakersSection";
import { AgendaSection } from "@/components/AgendaSection";
import { InsightsSection } from "@/components/InsightsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { HeroSectionRef } from "@/components/HeroSectionRef";
import { InviteSectionRef } from "@/components/InviteSectionRef";
import { InviteSection } from "@/components/invite/InviteSection";
import { ExploreSectionRef } from "@/components/ExploreSectionRef";
export default function Home() {
  return (
    <main>
      {/* <HeroSectionRef /> */}
      <HeroSection />
      <InviteSection />
      {/* <ExploreSectionRef /> */}
      <ExploreSection />
      <SpeakersSection />
      <InsightsSection />

      <AgendaSection />
      
      {/* <CTASection /> */}
      <Footer />
    </main>
  );
}
