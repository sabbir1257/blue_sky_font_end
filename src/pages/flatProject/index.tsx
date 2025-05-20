import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import FlowUsSection from '@/components/shared/followUs/FollowUs';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

const towerData = [
  {
    id: 1,
    name: 'Tower 1',
    description: 'Luxury tower with rooftop amenities and city views.',
    image: '/images/tower1.png',
  },
  {
    id: 2,
    name: 'tower 2',
    description: 'Modern design tower with lake-facing apartments.',
    image: '/images/tower1.png',
  },
];
const slidesData = [
  {
    id: 1,
    image: '/images/tower1.png',
    title: 'Farm Land',
    description: 'Experience the serenity of countryside farm living.',
  },
  {
    id: 2,
    image: '/images/tower1.png',
    title: 'Beach Front',
    description: 'Live by the ocean with stunning views and fresh breeze.',
  },
  {
    id: 3,
    image: '/images/tower1.png',
    title: 'City Gallery',
    description: 'Urban living with access to art and culture.',
  },
  {
    id: 4,
    image: '/images/tower1.png',
    title: 'Hunting Ranch',
    description: 'For those who enjoy thrill, nature, and luxury combined.',
  },
  {
    id: 5,
    image: '/images/tower1.png',
    title: 'Luxury Ranches',
    description: 'Private ranch estates with luxury and tranquility.',
  },
  {
    id: 6,
    image: '/images/tower1.png',
    title: 'Luxury Ranches',
    description: 'Private ranch estates with luxury and tranquility.',
  },
];


const SwiperComponent = () => {
  return (
    <div className='w-[1200px] mx-auto'>

      <div className=' h-[80vh] bg-[#1e232e] flex justify-center items-center'>
        <Swiper
          initialSlide={3}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false
          }}
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className='w-[400px] h-[500px] bg-[#1b1f2a] border-4 border-[rgba(255,255,255.1)] border-t-[#0099ff] border-b-[#0099ff] rounded-2xl'>
                <Image
                  width={500}
                  height={500}
                  alt={slide.title}
                  src={slide.image}
                  className='w-full h-[350px] rounded-xl object-cover'
                />
                <div className='text-white text-center px-4'>
                  <h1 className='text-2xl mb-2'>{slide.title}</h1>
                  <p className='text-sm mb-4'>{slide.description}</p>
                  <button className='py-2 px-6 rounded-lg text-white bg-purple-700'>Contact Us</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
      {/* Tower Section  */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">Blue Sky Tower Designs</h2>
          <h5 className='lg:w-[80%] px-4 lg:px-0 mx-auto'>Blue sky city is a prominent land development company dedicated to shaping the future of real estate through innovative and sustainable projects. One of their flagship ventures, the Blue sky Tower Project, stands as a testament to their commitment to excellence. This ambitious undertaking combines the elements of modern urban living with thriving commercial spaces. Blue sky Tower is a symbol of architectural brilliance where individuals can experience the best of both worlds, offering a harmonious blend of residential and commercial areas. Here, they create not just apartments but thriving communities, providing people with the opportunity to own a piece of a dynamic, interconnected world. Blue sky Landmark Limited&apos;s Blue sky Tower Project redefines urban living, promising a lifestyle that is both convenient and luxurious.</h5>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {towerData.map((tower, index) => (
              <motion.div
                key={tower.id}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="lg:h-[500px] h-[400px] w-full relative rounded-xl overflow-hidden mb-4">
                  <Image width={500} height={500} src={tower.image} alt={tower.name} />
                </div>
                <h3 className="text-xl font-bold mb-2">{tower.name}</h3>
                <p className="text-sm text-gray-600">{tower.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Section */}

      <section className="py-16 bg-gray-50 lg:w-[80%] mx-auto">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Our Projects?</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">Prime Location</h3>
              <p className="text-gray-600 text-sm">All our flats and towers are located in key areas with great connectivity and amenities.</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">Quality Construction</h3>
              <p className="text-gray-600 text-sm">We use the best materials and trusted engineering practices to ensure safe and strong structures.</p>
            </motion.div>
          </div>
        </div>
      </section>
      <FlowUsSection />
    </div>
  );
};
export default SwiperComponent;
