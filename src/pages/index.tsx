import AboutCompany from "@/components/pages/home/AboutCompany";
import CallToAction from "@/components/pages/home/CallToAction";
import CaseStudies from "@/components/pages/home/CaseStudies";
import ClientSay from "@/components/pages/home/ClientSay";
// import Consultation from "@/components/pages/home/Consultation";
import GetQuotes from "@/components/pages/home/GetQuotes";
import HeroSection from "@/components/pages/home/HeroSection";
import MissionVision from "@/components/pages/home/MissionVission";
import OurServices from "@/components/pages/home/OurServices";
import OurTeam from "@/components/pages/home/OurTeam";
import ProductSection from "@/components/pages/home/ProductSection";
import StepsSection from "@/components/pages/home/StepsSection";
import WhyChooseUs from "@/components/pages/home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StepsSection />
      <AboutCompany />
      <GetQuotes />
      <OurServices />
      <ClientSay />
      <OurTeam />
      <CaseStudies />
      <WhyChooseUs/>
      <MissionVision/>
      <ProductSection/>
      <CallToAction/>
      {/* <Consultation /> */}
    </div>
  );
}
