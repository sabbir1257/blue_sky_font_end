import Image from 'next/image';
import Container from '@/components/ui/Container';
import React, { useState } from 'react';

type Member = {
  name: string;
  title?: string;
  image: string;
};

type TeamSection = {
  title: string;
  members: Member[];
};

const teamData: TeamSection[] = [
  {
    title: 'Board of Directors',
    members: [
      { name: 'John Doe', title: 'CEO', image: '/images/man2.jpg' },
      { name: 'Jane Smith', title: 'CTO', image: '/images/man1.jpg' },
      { name: 'David Johnson', title: 'CFO', image: '/images/man1.jpg' },
      { name: 'Emily Davis', title: 'COO', image: '/images/man1.jpg' },
      { name: 'Steve Rogers', title: 'CMO', image: '/images/man1.jpg' },
      { name: 'Tony Stark', title: 'CTIO', image: '/images/man2.jpg' },
      { name: 'Bruce Wayne', title: 'Advisor', image: '/images/man1.jpg' },
      { name: 'Clark Kent', title: 'Strategy Head', image: '/images/man2.jpg' },
      {
        name: 'Diana Prince',
        title: 'Operations',
        image: '/images/woman1.jpg',
      },
      { name: 'Another One', title: 'Legal', image: '/images/man1.jpg' },
      { name: 'Yet Another', title: 'Support', image: '/images/man1.jpg' },
      { name: 'John Doe', title: 'CEO', image: '/images/man2.jpg' },
      { name: 'Jane Smith', title: 'CTO', image: '/images/man1.jpg' },
      { name: 'David Johnson', title: 'CFO', image: '/images/man1.jpg' },
      { name: 'Emily Davis', title: 'COO', image: '/images/man1.jpg' },
      { name: 'Steve Rogers', title: 'CMO', image: '/images/man1.jpg' },
      { name: 'Tony Stark', title: 'CTIO', image: '/images/man2.jpg' },
      { name: 'Bruce Wayne', title: 'Advisor', image: '/images/man1.jpg' },
      { name: 'Clark Kent', title: 'Strategy Head', image: '/images/man2.jpg' },
      {
        name: 'Diana Prince',
        title: 'Operations',
        image: '/images/woman1.jpg',
      },
      { name: 'Another One', title: 'Legal', image: '/images/man1.jpg' },
      { name: 'Yet Another', title: 'Support', image: '/images/man1.jpg' },
    ],
  },
  {
    title: 'Executive Team',
    members: [
      {
        name: 'Michael Scott',
        title: 'VP of Sales',
        image: '/images/man2.jpg',
      },
      {
        name: 'Pam Beesly',
        title: 'Creative Director',
        image: '/images/woman1.jpg',
      },
    ],
  },
  {
    title: 'Share Holders',
    members: [
      { name: 'Dwight Schrute', image: '/images/man1.jpg' },
      { name: 'Angela Martin', image: '/images/woman2.jpg' },
    ],
  },
];

const BoardDirector = () => {
  const [selectedSection, setSelectedSection] = useState('Board of Directors');
  const [visibleCount, setVisibleCount] = useState(8);

  const currentSection = teamData.find(
    (section) => section.title === selectedSection
  );
  const members = currentSection?.members || [];

  const membersToShow = members.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const handleSectionChange = (title: string) => {
    setSelectedSection(title);
    setVisibleCount(8); // reset visible count on tab change
  };

  return (
    <Container>
      <div className="py-16  text-gray-900">
        {/* Tabs */}
        <nav className="flex justify-center space-x-6 mb-12">
          {teamData.map((section) => (
            <button
              key={section.title}
              onClick={() => handleSectionChange(section.title)}
              className={`px-4 py-2 font-semibold rounded-lg ${
                selectedSection === section.title
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {section.title}
            </button>
          ))}
        </nav>

        {/* Section Title */}
        <div className="text-center my-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            {currentSection?.title}
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {membersToShow.map((member, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden h-80 md:h-[320px] rounded-xl"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={320}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-white text-lg font-bold">{member.name}</h3>
                <p className="text-white">{member?.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < members.length && (
          <div className="mt-8 text-center">
            <button
              onClick={handleShowMore}
              className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-800 rounded-lg transition"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default BoardDirector;
