import Facilities from "@/components/pages/project/Facilities";
import ImageGallery from "@/components/pages/project/ImageGallery";
import Living from "@/components/pages/project/Living";
import ProjectHeroSection from "@/components/pages/project/ProjectHeroSection";
import VideoShowSection from "@/components/pages/project/VideoShowSection";
import React from "react";
import img1 from "../../../public/images/land.jpg";

const Project = () => {
  const images = [
    {
      src: img1,
      alt: "land",
    },
    {
      src: img1,
      alt: "land",
    },
    {
      src: img1,
      alt: "land",
    },
    {
      src: img1,
      alt: "land",
    },
    {
      src: img1,
      alt: "land",
    },
  ];
  return (
    <section>
      <ProjectHeroSection />
      <Facilities />
      <VideoShowSection />
      <Living />
      <ImageGallery images={images} />
    </section>
  );
};

export default Project;
