import { AboutSection } from "@/components/AboutSection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { MovieScreeningShowTimes } from "@/components/MovieScreeningShowTimes";
import { PressKit } from "@/components/PressKit";
import { ProgramGlance } from "@/components/ProgramGlance";
import { Sponsors } from "@/components/Sponsors";
import { SubmitApply } from "@/components/SubmitApply";
import { TicketSection } from "@/components/TicketSection";
import { ViewersChoiceVoting } from "@/components/ViewersChoiceVoting";

export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection />
      <AboutSection />
      <ProgramGlance />
      <MovieScreeningShowTimes />
      <ViewersChoiceVoting />
      <SubmitApply />
      <TicketSection />
      <Sponsors />
      <PressKit />
      <FAQ />
      <Footer />
    </div>
  );
}