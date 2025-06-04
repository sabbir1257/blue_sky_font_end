// components/BlueSkyDream.tsx
import Rooms from '@/components/pages/business/Rooms';
import RoomsAndSuites from '@/components/pages/business/RoomsAndSuites';
import AboutCompany from '@/components/pages/home/AboutCompany';
import CallToAction from '@/components/pages/home/CallToAction';
import HeroSlider from '@/components/shared/HeroSlider';
import React from 'react';

const heroSlides = [
  {
    title: 'We IMPROVE YOUR SALES EFFICIENCY',
    subtitle: 'The government they survive article of fortune',
    image: '/images/landing.jpg',
    buttonText: 'CONTACT US',
    buttonLink: '/contact',
  },
  {
    title: 'GROW YOUR BUSINESS WITH US',
    subtitle: 'Success is not by chance, it’s by choice',
    image: '/images/landing.jpg',
    buttonText: 'GET STARTED',
    buttonLink: '/get-started',
  },
  {
    title: 'EMPOWER YOUR BRAND',
    subtitle: 'Creating strategies that drive results',
    image: '/images/landing.jpg',
    buttonText: 'LEARN MORE',
    buttonLink: '/about',
  },
];

const BlueSkyDream = () => {
  return (
    <div className="bg-white text-gray-800">
      <HeroSlider
        slides={heroSlides}
        heightClass="h-[70vh] md:h-[80vh] lg:h-[100vh]"
        widthClass="w-full"
      />
      <div className="text-center my-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Blue Sky Dream Hotel and Resorts{' '}
        </h2>
        <div className="w-20 h-1 mx-auto my-4 bg-blue-600 rounded-full"></div>
        <p className="text-lg">Where your dream vacation begins</p>
      </div>
      <AboutCompany />
      <RoomsAndSuites />

      <CallToAction />
    </div>
  );
};

export default BlueSkyDream;
