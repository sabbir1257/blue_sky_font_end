/* eslint-disable @next/next/no-img-element */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Link from "next/link";

const heroSlides = [
  {
    title: "We IMPROVE YOUR SALES EFFICIENCY",
    subtitle: "The government they survive article of fortune",
    image: "/images/landing.jpg",
  },
  {
    title: "GROW YOUR BUSINESS WITH US",
    subtitle: "Success is not by chance, it’s by choice",
    image: "/images/landing.jpg",
  },
  {
    title: "EMPOWER YOUR BRAND",
    subtitle: "Creating strategies that drive results",
    image: "/images/landing.jpg",
  },
];

const HeroSection = () => {
  const controls = useAnimation();
  const [activeIndex, setActiveIndex] = useState(0);

  // Trigger animation every time activeIndex changes
  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      y: [50, 0],
      transition: { duration: 0.8, ease: "easeOut" },
    });
  }, [activeIndex, controls]);

  return (
    <section className="relative w-full -mt-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-[75vh] md:h-[60vh] lg:h-[95vh]"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                className="h-full w-full object-cover"
                src={slide.image}
                alt={`Slide ${index}`}
              />
              <div className="absolute h-full w-full bg-[#000000af] top-0 right-0">
                <Container className="flex justify-start items-center w-full h-full">
                  {/* 👇 Animate every slide change */}
                  <motion.div
                    className="flex flex-col gap-2 max-w-xl"
                    animate={controls}
                    initial={{ opacity: 0, y: 50 }}
                    key={index === activeIndex ? `active-${index}` : `inactive-${index}`}
                  >
                    <h4 className="text-3xl text-gray-300 tracking-wide font-light">
                      {slide.subtitle}
                    </h4>
                    <h1 className="lg:text-6xl text-3xl font-bold text-blue-800 mb-8 mt-3 uppercase">
                      {slide.title}
                    </h1>
                    <Link href="/contact">
                      <Button className="bg-white rounded-md w-fit px-8 py-3">
                        CONTACT US
                      </Button>
                    </Link>
                  </motion.div>
                </Container>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
