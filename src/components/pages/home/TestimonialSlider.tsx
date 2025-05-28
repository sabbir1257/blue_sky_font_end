'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

type Testimonial = {
  name: string;
  title: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Ajijul Haque',
    title: 'Retired Banker',
    image: '/images/man2.jpg',
    quote:
      'With Unity Landmark Limited, innovation and elegance converge seamlessly. Their real estate ventures stand as testaments to their dedication to creating spaces that harmoniously blend luxury, comfort, and functionality.',
  },
  {
    name: 'Farzana Rahman',
    title: 'Interior Designer',
    image: '/images/man2.jpg',
    quote:
      'Working with Unity Landmark was a dream. Their understanding of aesthetics and functionality is unmatched. I always recommend them to clients seeking refined living spaces.',
  },
  {
    name: 'Mahmudul Hasan',
    title: 'Corporate Consultant',
    image: '/images/man2.jpg',
    quote:
      'From the initial consultation to project delivery, Unity Landmark impressed me with their professionalism. Every detail was handled with care and commitment.',
  },
  {
    name: 'Sharmeen Akter',
    title: 'Entrepreneur',
    image: '/images/man2.jpg',
    quote:
      'I invested in a property developed by Unity Landmark and it was one of the best decisions I’ve made. Elegant design, strong infrastructure, and great customer service.',
  },
];

export default function TestimonialSlider(): JSX.Element {
  const [current, setCurrent] = useState<number>(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-white py-16 px-6 text-center relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Testimonial
        </h2>
        <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
      </div>

      <div className="max-w-3xl mx-auto">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <Image
            src={testimonials[current].image}
            alt={testimonials[current].name}
            width={100}
            height={100}
            className="w-56 h-56 rounded-full object-cover border-4 border-sky-300 shadow-lg mb-6"
          />
          <h4 className="text-2xl font-bold text-[#1e3a8a]">
            {testimonials[current].name}
          </h4>
          <p className="text-blue-500 my-3">{testimonials[current].title}</p>
          <p className="text-gray-600 italic text-lg mb-4 max-w-xl">
            “{testimonials[current].quote}”
          </p>
        </motion.div>
      </div>

      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-700">
        <button
          onClick={prevSlide}
          className="text-2xl hover:scale-110 transition-transform"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft />
        </button>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sky-700">
        <button
          onClick={nextSlide}
          className="text-2xl hover:scale-110 transition-transform"
          aria-label="Next testimonial"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}