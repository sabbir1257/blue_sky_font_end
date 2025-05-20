import Image from 'next/image';
import Container from '@/components/ui/Container';
import React from 'react';

const BoardDirector = () => {
  return (
    <Container>
      <div className="py-16 bg-gray-50 text-gray-900">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
          Board of Directors
        </h2>

        {/* Image Gallery Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="group relative overflow-hidden h-80 md:h-[320px] rounded-xl">
            <Image
              src="/images/man2.jpg"
              alt="Director 1"
              width={400} 
              height={320}
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-white text-lg font-bold">John Doe</h3>
              <p className="text-white">CEO</p>
            </div>
          </div>

          <div className="group relative overflow-hidden h-80 md:h-[320px] rounded-xl">
            <Image
              src="/images/man1.jpg"
              alt="Director 2"
              width={400}
              height={320}
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-white text-lg font-bold">Jane Smith</h3>
              <p className="text-white">CTO</p>
            </div>
          </div>

          <div className="group relative overflow-hidden h-80 md:h-[320px] rounded-xl">
            <Image
              src="/images/man1.jpg"
              alt="Director 3"
              width={400}
              height={320}
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-white text-lg font-bold">David Johnson</h3>
              <p className="text-white">CFO</p>
            </div>
          </div>

          <div className="group relative overflow-hidden h-80 md:h-[320px] rounded-xl">
            <Image
              src="/images/man1.jpg"
              alt="Director 4"
              width={400}
              height={320}
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-white text-lg font-bold">Emily Davis</h3>
              <p className="text-white">COO</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default BoardDirector;
