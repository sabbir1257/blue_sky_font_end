import AboutCompany from '@/components/pages/home/AboutCompany';
import CallToAction from '@/components/pages/home/CallToAction';
import GetQuotes from '@/components/pages/home/GetQuotes';
import HeroSection from '@/components/pages/home/HeroSection';
import OurBusiness from '@/components/pages/home/OurBusiness';
import ProductSection from '@/components/pages/home/ProductSection';
import StepsSection from '@/components/pages/home/StepsSection';
import TestimonialSlider from '@/components/pages/home/TestimonialSlider';
import FlowUsSection from '@/components/shared/followUs/FollowUs';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StepsSection />
      <div className="mx-auto max-w-[1200px] w-full">
        <AboutCompany />
        <GetQuotes />
        <ProductSection />
        <OurBusiness />
        <TestimonialSlider />
      </div>
      <div className="text-center my-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Follow Us
        </h2>
        <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
      </div>
      <FlowUsSection />
      <CallToAction />
    </div>
  );
}
