'use client';

import Image from 'next/image';
import React from 'react';

type TeamMember = {
  name: string;
  title: string;
  image: string;
};

const team: TeamMember[] = [
  {
    name: 'Md. Abdur Rahim',
    title: 'Chairman',
    image: '/images/man1.jpg',
  },
  {
    name: 'Sharmin Akter Joty',
    title: 'Managing Director',
    image: '/images/man2.jpg',
  },
  {
    name: 'Kamrul Hasan',
    title: 'Director, Operations',
    image: '/images/man3.jpg',
  },
  {
    name: 'Nusrat Jahan',
    title: 'Head of Marketing',
    image: '/images/man4.jpg',
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          🤝 Leadership / Management Team
        </h2>
        <p className="text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
          Meet the leadership team shaping the vision and progress of Blue Sky Dream City Ltd.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-5"
            >
              <div className="relative w-full h-64 mb-5 overflow-hidden rounded-lg border border-gray-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="object-top"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-blue-700 font-medium mt-1">{member.title}</p>
              <div className="mt-4 flex justify-center space-x-4 text-blue-600">
                {/* Placeholder icons */}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22,12A10,10,0,1,1,12,2,10.0113,10.0113,0,0,1,22,12ZM10,17h2V11H10Zm0-8h2V7H10Z" />
                </svg>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.485 2 12.006c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.134 22 16.997 22 12.006 22 6.485 17.523 2 12 2z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
