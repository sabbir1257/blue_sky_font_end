import WhyChooseUs from "@/components/pages/home/WhyChooseUs";
import Facilities from "@/components/pages/project/Facilities";
import ImageGallery from "@/components/pages/project/ImageGallery";
import Living from "@/components/pages/project/Living";
import ProjectHeroSection from "@/components/pages/project/ProjectHeroSection";
import ProjectLocation from "@/components/pages/project/ProjectLocation";
import TermsAndConditions from "@/components/pages/project/TermsAndConditions";
import VideoShowSection from "@/components/pages/project/VideoShowSection";
import EmbeddedMap from "@/components/shared/EmbeddedMap";
import Image from "next/image";
import React from "react";

const Project = () => {
  const images = [
    "/images/land.jpg",
    "/images/land.jpg",
    "/images/land.jpg",
    "/images/land.jpg",
    "/images/land.jpg",
    "/images/land.jpg",
  ];
  return (
    <section>
      <ProjectHeroSection />
      <Facilities />
      <VideoShowSection />
      <Living />
      <ImageGallery
        images={images}
        modalWidth="w-[850px]"
        modalHeight="h-[800px]"
      />
      <WhyChooseUs/>
      <TermsAndConditions/>
      <ProjectLocation/>
      <EmbeddedMap />
    </section>
  );
};

export default Project;
