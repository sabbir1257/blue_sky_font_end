import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import EveryPageHeroSection from '@/components/ui/EveryPageHeroSection';
import MissionVision from '@/components/pages/home/MissionVission';
import CoreValues from '@/components/pages/about/CoreValues';

const AboutUs: FC = () => {
  return (
    <>
      <EveryPageHeroSection title="ABOUT US" imageUrl="/images/land3.jpg" />
      <main className="bg-white text-gray-800">
        {/* Short History */}
        <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="/images/land3.jpg"
              alt="Company History"
              width={600}
              height={400}
              className="rounded-xl"
            />
          </div>
          <div>
            <div className="my-4">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                Our Story{' '}
              </h2>
              <div className="w-20 h-1 mt-4 bg-blue-600 rounded-full"></div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Founded by Mr. Harun-Nur-Rashid in 2022, Blue Sky City Ltd. began
              with a mission to create livable, well-planned communities near
              Dhaka. From humble beginnings, our vision grew into an ambitious
              housing movement backed by infrastructure, technology, and
              people-first values. Today, we are shaping better futures through
              sustainable urban development.
            </p>
            <Link
              href="/project"
              className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Company Values */}
       <CoreValues/>
        {/* missions and visions */}
<MissionVision/>
        {/* Milestones */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Our Impact
            </h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
          </div>
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
            <h2 className="text-3xl font-semibold mb-4">
              Interested in Partnering with Us?
            </h2>
            <p className="text-lg mb-6">
              Let’s talk about your next dream project. We’re here to help you
              build it.
            </p>
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
