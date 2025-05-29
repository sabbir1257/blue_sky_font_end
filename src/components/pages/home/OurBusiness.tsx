/* eslint-disable @next/next/no-img-element */
import Container from '@/components/ui/Container';

const services = [
  {
    title: 'Real Estate Consulting',
    description: 'Expert advice for buying, selling, or investing in property.',
    image: '/images/land.jpg',
  },
  {
    title: 'Market Analysis',
    description: 'In-depth research to help you make informed decisions.',
    image: '/images/land.jpg',
  },
  {
    title: 'Property Management',
    description: 'Professional care for your rental or commercial property.',
    image: '/images/land.jpg',
  },
  {
    title: 'Legal Assistance',
    description: 'Navigate real estate law with confidence and clarity.',
    image: '/images/land.jpg',
  },
  {
    title: 'Construction Services',
    description: 'From design to build, we handle every phase of development.',
    image: '/images/land.jpg',
  },
  {
    title: 'Investment Strategy',
    description: 'Grow your wealth with custom real estate investment plans.',
    image: '/images/land.jpg',
  },
];

const OurBusiness = () => {
  return (
    <Container className="my-20">
      <section className="flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">Our Business</h2>
          <div className="w-24 h-1 mx-auto mt-3 bg-blue-600 rounded-full" />
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            We provide comprehensive business solutions tailored to help your
            venture grow and thrive in a competitive marketplace.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {services.map((service, idx) => (
            <BusinessCard key={idx} {...service} />
          ))}
        </div>
      </section>
    </Container>
  );
};

const BusinessCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300 flex flex-col h-full">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-6 flex flex-col justify-between flex-1">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 font-medium">
          Explore
        </button>
      </div>
    </div>
  );
};

export default OurBusiness;
