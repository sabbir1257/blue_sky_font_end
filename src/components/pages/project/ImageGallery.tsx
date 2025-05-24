import Image from 'next/image';
import React from 'react';

interface ImageGalleryProps {
  title: string;
  images: { src: string; alt: string }[];
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ title, images, className = '' }) => {
  return (
    <div className={`py-16 px-4  text-gray-900 lg:w-[90%] lg:mx-auto mx-4 ${className}`}>
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden h-80 md:h-[420px]  rounded-xl transition-all duration-500"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={450}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
