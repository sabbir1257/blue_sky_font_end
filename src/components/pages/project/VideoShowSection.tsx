import { PlayIcon } from '@/components/Icons/Icons';
import Image from 'next/image';
import React, { useState } from 'react';

const VideoShowSection = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handlePlayClick = () => {
    setIsVideoVisible(true);
  };

  return (
    <div className="py-16 text-white mx-4 lg:mx-0">
      <div className="relative max-w-7xl mx-auto text-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Why Choose Blue Sky City
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
        </div>

        <div className="relative">
          {/* Image Thumbnail with Blur */}
          {!isVideoVisible && (
            <div className="relative w-full h-[480px] md:h-[500px] bg-gray-300 rounded-lg">
              <Image
                src="https://img.youtube.com/vi/o9F7oUgmyg0/maxresdefault.jpg"
                alt="Video Thumbnail"
                fill
                className="object-cover rounded-lg filter blur-sm transition-all duration-300"
                sizes="(max-width: 768px) 100vw, 700px"
              />
              <button
                onClick={handlePlayClick}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-6xl bg-opacity-50 bg-black rounded-full p-4"
              >
                <PlayIcon className="text-white text-6xl" />
              </button>
            </div>
          )}

          {/* Video Embed */}
          {isVideoVisible && (
            <div className="relative w-full h-[480px] md:h-[500px]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/o9F7oUgmyg0?autoplay=1"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="YouTube Video"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoShowSection;
