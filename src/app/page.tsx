import { AboutSection } from "@/components/AboutSection";
import { FAQ } from "@/components/FAQ";
// import { SubmitApply } from "@/components/SubmitApply";
// import { Sponsors } from "@/components/Sponsors";
// import { PressKit } from "@/components/PressKit";
// import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { PressKit } from "@/components/PressKit";
import { ProgramGlance } from "@/components/ProgramGlance";
import { Sponsors } from "@/components/Sponsors";
import { SubmitApply } from "@/components/SubmitApply";

export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection />
      <AboutSection />
      <ProgramGlance />
      <SubmitApply />
      <Sponsors />
      <PressKit />
      <FAQ />
      <Footer />
    </div>
  );
}