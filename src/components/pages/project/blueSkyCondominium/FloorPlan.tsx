import Image from "next/image";
import React from "react";
import floor from "../../../../../public/images/condominium/floor1.jpg";
import floor_digine from "../../../../../public/images/condominium/floor1_digine.jpg";
const FloorPlan = () => {
  return (
    <div>
      <h1 className="text-5xl text-center underline">Floor Plan</h1>
      <section className="grid md:grid-cols-2 grid-cols-1  items-start justify-between max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 py-12 gap-20">
        {/* Left Side - Image */}
        <div className="w-full">
          <Image
            src={floor}
            alt="The Point Building"
            className="w-full h-full rounded-lg shadow-lg object-cover"
            priority
          />
        </div>

        {/* Right Side - Text and Details */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-semibold">The Point</h2>

          <div className="space-y-2 text-base sm:text-lg">
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span>3BR</span>
              <span>3,850 sq. ft.</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span>4BR</span>
              <span>4,800 sq. ft.</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span>4BR Duplex</span>
              <span>7,200 sq. ft.</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm sm:text-base">
            Unique residences, individually designed to maximize the open space
            and to showcase the expansive terraces and views.
          </p>

          {/* Floor Plan */}
          <div className="pt-4">
            <Image
              src={floor_digine}
              alt="Floor Plan"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </section>
      <section className="grid md:grid-cols-2 grid-cols-1 items-start justify-between max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 py-12 gap-20">
        {/* Right Side - Text and Details (now first in code for mobile) */}
        <div className="w-full lg:w-1/2 space-y-6 order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl font-semibold">The Point</h2>

          <div className="space-y-2 text-base sm:text-lg">
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span>3BR</span>
              <span>3,850 sq. ft.</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span>4BR</span>
              <span>4,800 sq. ft.</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span>4BR Duplex</span>
              <span>7,200 sq. ft.</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm sm:text-base">
            Unique residences, individually designed to maximize the open space
            and to showcase the expansive terraces and views.
          </p>

          {/* Floor Plan */}
          <div className="pt-4">
            <Image
              src={floor_digine}
              alt="Floor Plan"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain"
            />
          </div>
        </div>

        {/* Left Side - Image (displayed on right via order) */}
        <div className="w-full order-1 md:order-2">
          <Image
            src={floor}
            alt="The Point Building"
            className="w-full h-full rounded-lg shadow-lg object-cover"
            priority
          />
        </div>
      </section>
    </div>
  );
};

export default FloorPlan;