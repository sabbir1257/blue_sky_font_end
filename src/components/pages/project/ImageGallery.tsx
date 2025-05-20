import Image from 'next/image';
import React from 'react';

const ImageGallery = () => {
  return (
      <div className="py-16 bg-gray-50 text-gray-900 lg:w-[90%] lg:mx-auto mx-4">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
          Jonota Housing 3D Visualization
        </h2>

        {/* Image Gallery Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="group relative overflow-hidden h-80 md:h-[320px] rounded-xl transition-all duration-500">
            <Image
              src="/images/land.jpg"
              alt="Gallery Image 1"
              width={400}
              height={320}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>

          <div className="group relative overflow-hidden h-80 md:h-[320px] rounded-xl transition-all duration-500">
            <Image
              src="/images/land.jpg"
              alt="Gallery Image 2"
              width={400}
              height={320}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>

          <div className="group relative overflow-hidden h-80 md:h-[320px] rounded-xl transition-all duration-500">
            <Image
              src="/images/land.jpg"
              alt="Gallery Image 3"
              width={400}
              height={320}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>

          <div className="group relative overflow-hidden h-80 md:h-[320px] rounded-xl transition-all duration-500">
            <Image
              src="/images/land.jpg"
              alt="Gallery Image 4"
              width={400}
              height={320}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
  );
};

export default ImageGallery;
