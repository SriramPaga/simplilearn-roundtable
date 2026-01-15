import { HeroSection } from "@/components/HeroSection";
import { ExploreSection } from "@/components/ExploreSection";
import { SpeakersSection } from "@/components/SpeakersSection";
import { AgendaSection } from "@/components/AgendaSection";
import { InsightsSection } from "@/components/InsightsSection";
import { InviteSection } from "@/components/invite/InviteSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
  
      <HeroSection />
      <InviteSection />
 
      <ExploreSection />
      <SpeakersSection />
      <InsightsSection />

      <AgendaSection />
      
   
      <Footer />
    </main>
  );
}
