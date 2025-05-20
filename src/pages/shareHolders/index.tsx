"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import fakeData from "../../../public/datas/shareHolders/fakeData";

const IMAGES_PER_PAGE = 6;

const Gallery = () => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(fakeData.length / IMAGES_PER_PAGE);
  const startIndex = (page - 1) * IMAGES_PER_PAGE;
  const endIndex = startIndex + IMAGES_PER_PAGE;
  const currentItems = fakeData.slice(startIndex, endIndex);

  const handlePageClick = (pageNum: number) => {
    setPage(pageNum);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Shareholders</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentItems.map((person) => (
          <motion.div
            key={person.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden text-center p-5 border hover:shadow-2xl"
          >
            <Image
              src={person.image}
              alt={person.name}
              width={160}
              height={160}
              className="mx-auto rounded-full object-cover w-40 h-40 border-4 border-gray-100 shadow-sm"
            />
            <h2 className="mt-4 text-xl font-semibold text-gray-800">
              {person.name}
            </h2>
            <p className="text-gray-500">{person.job}</p>
          </motion.div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Prev
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageClick(i + 1)}
            className={`px-3 py-1 rounded transition-all duration-200 ${
              page === i + 1
                ? "bg-[#eb204c] text-white shadow"
                : "bg-gray-100 hover:bg-gray-500"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;
