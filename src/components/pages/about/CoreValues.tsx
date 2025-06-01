'use client';

import React from 'react';

type CoreValue = {
  title: string;
  description: string;
  icon: string;
};

const coreValues: CoreValue[] = [
  {
    title: 'Integrity & Transparency',
    description:
      'We provide fully legal and verified land documents, with open communication throughout the process.',
    icon: '🔹',
  },
  {
    title: 'Innovation',
    description:
      'We embrace forward-thinking ideas and modern urban development strategies to meet changing demands.',
    icon: '🔹',
  },
  {
    title: 'Quality',
    description:
      'We never compromise on construction, infrastructure, or legal integrity—every plot and project meets high standards.',
    icon: '🔹',
  },
  {
    title: 'Sustainability',
    description:
      'We plan communities with long-term environmental balance—green spaces, water bodies, and proper zoning.',
    icon: '🔹',
  },
  {
    title: 'Community Commitment',
    description:
      'Our goal is to build societies, not just structures. Every development encourages social interaction, harmony, and security.',
    icon: '🔹',
  },
];

const CoreValues: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Our Core Values
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
          <p className="text-gray-600 text-lg mt-4">
            Our organization is built on strong foundational values that guide
            our work and our promise to clients.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-blue-600 text-2xl">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {value.title}
              </h3>
            </div>
            <p className="text-gray-600 text-base">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
