'use client';

import Image from 'next/image';
import React from 'react';

const MissionVision: React.FC = () => {
  const missionPoints = [
    'Planned Urbanization – Roads, drainage, playgrounds, markets, schools, mosques, and essential facilities as part of every project.',
    'Affordable Access – Ideal for middle-income families and working professionals through flexible installment options.',
    'Community-Oriented Design – Creating healthy, connected neighborhoods that strengthen social and family ties.',
    'Complete Client Support – End-to-end assistance from plot selection to final ownership, with full legal transparency.',
  ];

  const visionPoints = [
    'Close to Dhaka, Without the Chaos – Strategically located in western Dhaka, just minutes from the city, yet peaceful and spacious.',
    'Emerging Infrastructure Zone – This region is poised for rapid growth due to metro rail, highways, and flyovers under development.',
    'Future-Ready Design – Smart planning with scope for digital utilities, green spaces, and essential urban services.',
    'A Dream Worth Investing In – Whether for living or future resale, your investment today will serve as your legacy tomorrow.',
  ];

  return (
    <section className="py-24 px-6 bg-white">
      {/* Mission Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Our Mission
        </h2>
        <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto md:flex md:gap-12 md:items-stretch bg-blue-50 rounded-2xl p-6 shadow-md">
        {/* Image Left */}
        <div className="flex-1 rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/images/land1.jpg"
            alt="Mission"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Right */}
        <div className="flex-1 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              “To develop smart, sustainable communities that offer a complete
              and modern urban living experience.”
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              At <strong>Blue Sky Dream City Ltd.</strong>, our mission is to
              create more than just housing—we aim to build integrated,
              livable communities near Dhaka that meet the needs of today and
              tomorrow.
            </p>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              We strive to provide affordable, legally sound, and well-planned
              residential environments for families and investors alike.
            </p>
            <ul className="space-y-3">
              {missionPoints.map((point, index) => (
                <FeatureItem key={index} text={point} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-16 border-t border-gray-300"></div>

      {/* Vision Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Our Vision
        </h2>
        <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto md:flex md:flex-row-reverse md:gap-12 md:items-stretch bg-blue-100 rounded-2xl p-6 shadow-md">
        {/* Image Right */}
        <div className="flex-1 rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/images/land1.jpg"
            alt="Vision"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Left */}
        <div className="flex-1 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              “To become a model of future-ready residential development in
              Bangladesh, where life is secure, affordable, and fulfilling.”
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              We envision a new generation of satellite townships near Dhaka
              that integrate infrastructure, greenery, and technology.
            </p>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              Our goal is to offer a modern alternative to the congestion of
              city life without compromising on access or amenities.
            </p>
            <ul className="space-y-3">
              {visionPoints.map((point, index) => (
                <FeatureItem key={index} text={point} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

type FeatureItemProps = {
  text: string;
};

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => (
  <li className="flex items-start space-x-2 text-gray-700 text-base md:text-lg">
    <span className="text-blue-600 text-xl mt-1">✅</span>
    <span>{text}</span>
  </li>
);

export default MissionVision;
