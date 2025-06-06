import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MissionVision from '@/components/pages/home/MissionVission';
import CoreValues from '@/components/pages/about/CoreValues';
import StrategicGoals from '@/components/pages/about/StrategicGoals';
import HeroSlider from '@/components/shared/HeroSlider';

const heroSlides = [
  {
    image: '/images/landing.jpg',
  },
  {
    image: '/images/landing.jpg',
  },
  {
    image: '/images/landing.jpg',
  },
];

const AboutUs: FC = () => {
  return (
    <>
      {/* <EveryPageHeroSection title="ABOUT US" imageUrl="/images/land3.jpg" /> */}
      {/* <Slider slides={slideData}/> */}
      <HeroSlider
        slides={heroSlides}
        heightClass="h-[70vh] md:h-[80vh] lg:h-[100vh]"
        widthClass="w-full"
      />
      <main className="bg-white text-gray-800">
        {/* Short History */}
        <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <HeroSlider
              slides={heroSlides}
              heightClass="h-full"
              widthClass="w-full"
            />
          </div>
          <div>
            <div className="my-4">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                Our Story{' '}
              </h2>
              <div className="w-20 h-1 mt-4 bg-blue-600 rounded-full"></div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Founded by Mr. Harun-Nur-Rashid in 2022, Blue Sky City Ltd. began
              with a mission to create livable, well-planned communities near
              Dhaka. From humble beginnings, our vision grew into an ambitious
              housing movement backed by infrastructure, technology, and
              people-first values. Today, we are shaping better futures through
              sustainable urban development.
            </p>
            <Link
              href="/project"
              className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              Learn More
            </Link>
          </div>
        </section>
        <MissionVision />
        <CoreValues />
        <StrategicGoals />
      </main>
    </>
  );
};

export default AboutUs;
