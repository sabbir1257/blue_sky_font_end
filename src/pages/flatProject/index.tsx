import React from "react";
import banner from "../../../public/images/land3.jpg";
import Image from "next/image";
import ApartmentSection from "./ApartmentSection";
import bedrooms from "../../../public/images/bedroomes-1.webp";
import living from "../../../public/images/living-rooms-1.webp";
import kitchen from "../../../public/images/kitches-1.webp";
import balconies from "../../../public/images/balconyes-1.webp";
import washrooms from "../../../public/images/toiletto-1.webp";
import ImageGallery from "@/components/pages/project/ImageGallery";
import EmbeddedMap from "@/components/shared/EmbeddedMap";

const SwiperComponent = () => {
  const image = [
    { img: bedrooms, value: "3 Bedrooms" },
    { img: living, value: "Living & Family Living" },
    { img: kitchen, value: "Kitchen" },
    { img: balconies, value: "2 Balconies" },
    { img: washrooms, value: "3 Washrooms" },
  ];

  const gallerys = [
    "/images/gallery1.webp",
    "/images/gallery2.webp",
    "/images/gallery3.webp",
    "/images/gallery4.webp",
    "/images/gallery1.webp",
  ];

  const images = [
    "/images/apartment_axonometric1.png",
    "/images/apartmentAxonometric2.jpg",
    "/images/apartmentAxonometric3.png",
    "/images/apartmentAxonometric4.jpg",
    "/images/apartmentAxonometric5.jpeg",
    "/images/apartmentAxonometric6.jpg",
  ];

  return (
    <div className="">
      <div className="relative w-full md:h-[500px] h-40">
        <Image
          src={banner}
          alt="Blue Sky City"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white md:text-4xl text-3xl font-bold  tracking-wider uppercase">
            Blue Sky Flat Project
          </h1>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <ApartmentSection />
        {/*  FEATURE & AMENITIES section */}
        <section className="my-10 px-4">
          <h1 className="text-center md:text-5xl text-3xl font-semibold mb-10">
            FEATURE & AMENITIES
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-16 gap-6">
            {image.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center "
              >
                <div className="relative w-60 h-60 gap-6">
                  <Image
                    src={item.img}
                    alt={item.value}
                    fill
                    className="object-cover rounded-md w-24"
                  />
                </div>
                <p className="mt-3 text-lg font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </section>
        {/* floor plane */}
        <section>
          <h1 className="text-center md:text-5xl text-3xl md:my-10 my-4">
            Floor Plane
          </h1>
          <ImageGallery
            images={images}
            modalWidth="w-[850px]"
            modalHeight="h-[800px]"
          />
        </section>
        {/* gallery */}
        <h1 className="text-center md:text-5xl text-3xl md:my-10 my-4">
          Gallery
        </h1>
        <ImageGallery
          images={gallerys}
          modalWidth="w-[90vw]"
          modalHeight="h-[80vh]"
        />{" "}
      </div>
      {/* google map */}
      <EmbeddedMap />
    </div>
  );
};
export default SwiperComponent;
