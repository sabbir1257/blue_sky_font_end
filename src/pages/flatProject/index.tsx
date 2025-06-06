import React from 'react';
import banner from '../../../public/images/land3.jpg';
import Image from 'next/image';
import EmbeddedMap from '@/components/shared/EmbeddedMap';
import ProjectCard from '@/components/pages/project/flarProjectCard';
import { projects } from '../../../public/datas/flatProject/projects';
import FlowUsSection from '@/components/shared/followUs/FollowUs';
import VideoShowSection from '@/components/pages/project/VideoShowSection';

const SwiperComponent = () => {
  return (
    <div className="">
      <div className="relative w-full md:h-[500px] h-40">
        <Image
          src={banner}
          alt="Blue Sky City"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white md:text-4xl text-3xl font-bold  tracking-wider uppercase">
            Blue Sky Flat Project
          </h1>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto">
        {/* card */}
        <main className="p-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              My Projects
            </h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </main>
      </div>
      {/* Flow us sertion */}
      <FlowUsSection />
      {/* video */}
      <VideoShowSection />
      {/* google map */}
      <EmbeddedMap />
    </div>
  );
};
export default SwiperComponent;
