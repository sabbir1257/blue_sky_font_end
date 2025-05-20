"use client"
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from '@/components/Icons/Icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React, { useRef } from 'react'
import { Autoplay } from 'swiper/modules';

const FlowUsSection = () => {
   const swiperRef = useRef<any>(null);

   const handleMouseEnter = () => {
      if (swiperRef.current) {
         swiperRef.current.autoplay.stop(); // Stop autoplay on mouse enter
      }
   };

   const handleMouseLeave = () => {
      if (swiperRef.current) {
         swiperRef.current.autoplay.start(); // Restart autoplay on mouse leave
      }
   };

   return (
      <>
         <div className="hidden lg:block my-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 w-[80%] mx-auto">
               <a
                  href="https://www.facebook.com/usppllc"
                  className="bg-white py-8 rounded-2xl drop-shadow-2xl h-[150px] w-full flex flex-col justify-center items-center hover:scale-105 transition-all duration-300 ease-in-out"
               >
                  <div className="text-4xl drop-shadow-lg">
                     <FacebookIcon />
                  </div>
                  <h5 className="font-semibold pt-4 italic">Blue Sky City</h5>
               </a>

               <a
                  href="https://www.instagram.com/usppllc"
                  className="bg-white py-8 rounded-2xl drop-shadow-2xl h-[150px] w-full flex flex-col justify-center items-center hover:scale-105 transition-all duration-300 ease-in-out"
               >
                  <div className="text-3xl">
                     <InstagramIcon />
                  </div>
                  <h5 className="font-semibold pt-4 italic">Instagram</h5>
               </a>

               <a
                  href="https://www.youtube.com/@usppllc"
                  className="bg-white py-8 rounded-2xl drop-shadow-2xl h-[150px] w-full flex flex-col justify-center items-center hover:scale-105 transition-all duration-300 ease-in-out"
               >
                  <div className="text-4xl">
                     <YoutubeIcon />
                  </div>
                  <h5 className="font-semibold pt-4 italic">Youtube</h5>
               </a>

               <a
                  href="https://x.com/usppllc"
                  className="bg-white py-8 rounded-2xl drop-shadow-2xl h-[150px] w-full flex flex-col justify-center items-center hover:scale-105 transition-all duration-300 ease-in-out"
               >
                  <div className="text-3xl">
                     <TwitterIcon />
                  </div>
                  <h5 className="font-semibold pt-4 italic">Twitter</h5>
               </a>

               <a
                  href="https://www.linkedin.com/company/usppllc"
                  className="bg-white py-8 rounded-2xl drop-shadow-2xl h-[150px] w-full flex flex-col justify-center items-center hover:scale-105 transition-all duration-300 ease-in-out"
               >
                  <div className="text-4xl">
                     <LinkedinIcon />
                  </div>
                  <h5 className="font-semibold pt-4 italic">Linkedin</h5>
               </a>
            </div>
         </div>

         <div className='lg:hidden'>
            <Swiper
               onSwiper={(swiper: any) => {
                  swiperRef.current = swiper;
               }}
               autoplay={{
                  delay: 500,
                  disableOnInteraction: false,
               }}
               speed={1500}
               pagination={{
                  clickable: true,
               }}
               modules={[Autoplay]}
               spaceBetween={10}
               slidesPerView={2}
               loop={true}
               breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
               }}
               className="mySwiper"
            >
               <SwiperSlide className="pb-20 pt-5">
                  <a href={'https://www.facebook.com/usppllc'} className='bg-white py-8 rounded-2xl drop-shadow-xl h-[150px] w-full flex flex-col justify-center items-center'>
                     <div className=' text-4xl drop-shadow-lg '> <FacebookIcon /></div>
                     <h5 className='font-semibold pt-4 italic'>Blue Sky city</h5>
                  </a>
               </SwiperSlide>
               <SwiperSlide className="pb-20 pt-5">
                  <a href={'https://www.instagram.com/usppllc'} className='bg-white py-8 rounded-2xl drop-shadow-xl h-[150px] w-full flex flex-col justify-center items-center'>
                     <div className=' text-3xl'> <InstagramIcon /></div>
                     <h5 className='font-semibold pt-4 italic'>Instagram</h5>
                  </a>
               </SwiperSlide>
               <SwiperSlide className="pb-20 pt-5">
                  <a href={'https://www.youtube.com/@usppllc'} className='bg-white py-8 rounded-2xl drop-shadow-xl h-[150px] w-full flex flex-col justify-center items-center'>
                     <div className=' text-4xl'> <YoutubeIcon /></div>
                     <h5 className='font-semibold pt-4 italic'>Youtube</h5>
                  </a>
               </SwiperSlide>
               <SwiperSlide className="pb-20 pt-5">
                  <a href={'https://x.com/usppllc'} className='bg-white py-8 rounded-2xl drop-shadow-xl h-[150px] w-full flex flex-col justify-center items-center'>
                     <div className=' text-3xl'> <TwitterIcon /></div>
                     <h5 className='font-semibold pt-4 italic'>Twitter</h5>
                  </a>
               </SwiperSlide>
               <SwiperSlide className="pb-20 pt-5">
                  <a href={'https://www.linkedin.com/company/usppllc'} className='bg-white py-8 rounded-2xl drop-shadow-xl h-[150px] w-full flex flex-col justify-center items-center'>
                     <div className=' text-4xl'> <LinkedinIcon /></div>
                     <h5 className='font-semibold pt-4 italic'>Linkedin</h5>
                  </a>
               </SwiperSlide>
            </Swiper>
         </div>
      </>
   )
}

export default FlowUsSection


