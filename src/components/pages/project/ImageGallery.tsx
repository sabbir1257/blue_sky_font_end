// components/ImageGallery.tsx
import { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  modalWidth?: string;
  modalHeight?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  modalWidth = "w-[850px]",
  modalHeight = "h-[800px]",
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="p-6">
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="cursor-pointer w-[350px] h-[300px]"
            onClick={() => setSelectedImage(img)}
          >
            <Image
              src={img}
              alt={`Gallery Image ${idx + 1}`}
              width={350}
              height={300}
              className="rounded-lg shadow object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Modal for Zoomed Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className={`relative ${modalWidth} ${modalHeight} bg-white p-4 rounded-lg shadow-lg`}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Zoomed"
              fill
              className="object-contain rounded"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-4 text-black text-4xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
