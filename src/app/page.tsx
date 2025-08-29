import { AboutSection } from "@/components/AboutSection";
import { EventFeatures } from "@/components/EventFeatures";
import { EventSchedule } from "@/components/EventSchedule";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { TicketSection } from "@/components/TicketSection";

export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection />
      <EventFeatures />
      <AboutSection />
      <EventSchedule />
      <TicketSection />
      <Footer />
    </div>
  );
}
