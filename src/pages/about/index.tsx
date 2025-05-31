// import CoreValues from '@/components/pages/about/CoreValues'
// import OurHistories from '@/components/pages/about/OurHistories'
// import WeAreBestSection from '@/components/pages/about/WeAreBestSection'
// // import TotalAnalysis from '@/components/shared/TotalAnalysis'
// // import Container from '@/components/ui/Container'
// import EveryPageHeroSection from '@/components/ui/EveryPageHeroSection'
// import React from 'react'

// const AboutUs = () => {
//   return (
//     <div>
//       <EveryPageHeroSection title='ABOUT US' imageUrl='/images/land3.jpg'/>
//       <OurHistories />
//       <WeAreBestSection />
//       {/* <Container className='flex justify-center  text-gray-600' >
//         <div className='mt-80 md:pt-20 lg:mt-0'>
//         <TotalAnalysis/>
//         </div>
//       </Container> */}
//       <CoreValues />
//     </div>
//   )
// }

// export default AboutUs


// components/AboutUs.tsx

import { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import EveryPageHeroSection from '@/components/ui/EveryPageHeroSection';

const AboutUs: FC = () => {
  return (
    <>
  <EveryPageHeroSection title='ABOUT US' imageUrl='/images/land3.jpg'/>
      <main className="bg-white text-gray-800">
        {/* Short History */}
        <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Image src="/images/land3.jpg" alt="Company History" width={600} height={400} className="rounded-xl" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Founded by Mr. Harun-Nur-Rashid in 2022, Blue Sky City Ltd. began with a mission to create livable, well-planned communities near Dhaka. From humble beginnings,
              our vision grew into an ambitious housing movement backed by infrastructure, technology, and people-first values. Today, we are shaping better futures
              through sustainable urban development.
            </p>
            <Link href="/project" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              Learn More
            </Link>
          </div>
        </section>

        {/* Company Values */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-12">Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {["Integrity", "Innovation", "Client Trust"].map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">{value}</h3>
                  <p className="text-gray-600">We believe in {value.toLowerCase()} as the foundation of our service to clients and communities.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Years of Experience', value: '30+' },
              { label: 'Client Satisfaction', value: '100%' },
              { label: 'Cases Completed', value: '53K' },
              { label: 'Consultants', value: '24' },
            ].map((item, index) => (
              <div key={index} className="text-blue-700">
                <h3 className="text-4xl font-bold mb-2">{item.value}</h3>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-blue-100 py-20 px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Interested in Partnering with Us?</h2>
            <p className="text-lg mb-6">Let’s talk about your next dream project. We’re here to help you build it.</p>
            <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              Get In Touch
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutUs;