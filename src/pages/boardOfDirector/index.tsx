import Image from 'next/image';
import Container from '@/components/ui/Container';
import React from 'react';
import ExecutiveTeam from '@/components/pages/teams/ExecutiveTeam';
import ShareHolders from '@/components/pages/teams/ShareHolders';

const boardMembers = [
  {
    name: 'John Doe',
    position: 'CEO',
    image: '/images/man2.jpg',
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    image: '/images/man1.jpg',
  },
  {
    name: 'David Johnson',
    position: 'CFO',
    image: '/images/man1.jpg',
  },
  {
    name: 'Emily Davis',
    position: 'COO',
    image: '/images/man1.jpg',
  },
];

const BoardDirector = () => {
  return (
    <>
      <Container>
        <div className="py-16  text-gray-900">
          <div className="text-center my-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Board of Directors
            </h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => (
              <div
                key={index}
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
                  <h3 className="text-white text-lg font-bold">
                    {member.name}
                  </h3>
                  <p className="text-white">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div id="executiveTeam">
        <ExecutiveTeam />
      </div>
      <div id="shareHolders">
        <ShareHolders />
      </div>
    </>
  );
};

export default BoardDirector;
