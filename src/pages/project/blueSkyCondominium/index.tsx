import React from "react";
import Image from "next/image";
import soldout from "../../../../public/images/condominium/soldout.webp";
import tower from "../../../../public/images/condominium/tower-2.webp";
import BlueSkyBanner from "@/components/pages/project/blueSkyCondominium/BlueSkyBanner";
import Amenities from "@/components/pages/project/blueSkyCondominium/Amenities";
import FloorPlan from "@/components/pages/project/blueSkyCondominium/FloorPlan";
// import CategorySection from "@/components/pages/project/CategorySection";

const BlueSkyCondominium = () => {
  return (
    <>
      <BlueSkyBanner />
      <div className="lg:w-[1200px] p-4 mx-auto md:mt-20">
        <p className="text-justify">
          Blue Sky City Limited is a prominent land development company
          dedicated to shaping the future of real estate through innovative and
          sustainable projects. One of their flagship ventures, the Blue Sky Tower
          Project, stands as a testament to their commitment to excellence. This
          ambitious undertaking combines the elements of modern urban living
          with thriving commercial spaces. Blue Sky Tower is a symbol of
          architectural brilliance where individuals can experience the best of
          both worlds, offering a harmonious blend of residential and commercial
          areas. Here, they create not just apartments but thriving communities,
          providing people with the opportunity to own a piece of a dynamic,
          interconnected world.  Blue Sky City Limiteds Blue Sky Tower Project
          redefines urban living, promising a lifestyle that is both convenient
          and luxurious.
        </p>
        <div className="md:flex items-center justify-center my-10 gap-4">
          <div className="my-4 relative md:w-[420px] w-full mx-auto bg-blue-100 rounded-lg shadow-lg p-4 transition transform hover:scale-105">
            {/* Image */}
            <div className="relative md:h-[500px] h-96 overflow-hidden rounded-md">
              <Image
                src={tower}
                alt="Unity Tower 01"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
              {/* SOLD OUT Badge */}
              <div className="absolute top-4 right-4 w-[100px] rotate-12 z-10">
                <Image
                  src={soldout}
                  alt="Sold Out"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
            {/* Text Content */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-gray-900">Tower 01</h3>
              <p className="text-sm text-gray-700 flex items-center justify-center gap-2 mt-1">
                🏢 Residential
              </p>
            </div>
          </div>

          <div className="my-4 md:w-[420px] mx-auto bg-blue-100 rounded-lg shadow-lg p-4 transition transform hover:scale-105">
            {/* Image */}
            <div className="relative md:h-[500px] h-96 overflow-hidden rounded-md">
              <Image
                src={tower}
                alt="Unity Tower 02"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
            </div>
            {/* Text Content */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-gray-900">Tower 02</h3>
              <p className="text-sm text-gray-700 flex items-center justify-center gap-2 mt-1">
                🏢 Residential
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <CategorySection/> */}
      <Amenities/>
      <FloorPlan/>
    </>
  );
};

export default BlueSkyCondominium;