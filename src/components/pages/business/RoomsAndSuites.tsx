import React from 'react';

const rooms = [
  { type: 'Luxury Suites', description: 'with balconies overlooking nature' },
  { type: 'Deluxe Rooms', description: 'with modern amenities' },
  { type: 'Family Villas', description: 'perfect for group stays' },
];

const roomFeatures = [
  'Air Conditioning',
  'Free WiFi',
  'Smart TV',
  'Room Service',
  'Premium Bedding',
];

const amenities = [
  'Infinity Swimming Pool',
  'Full-service Spa & Wellness Center',
  'Multi-cuisine Restaurant',
  'In-house Café & Juice Bar',
  'Conference & Event Hall',
  "Game Zone & Kids' Play Area",
  'Guided Nature Trails or Beach Access',
];
const services = [
  '24/7 Customer Service',
  'Online Booking',
  'Airport Pickup & Drop',
  'Custom Travel Packages',
  'Wedding & Event Planning',
];

const RoomsAndSuites: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto p-8 font-sans text-gray-900">
      {/* Section Header */}
      <div className="text-center my-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          🏠 Rooms & Suites &amp; Amenities
        </h2>
        <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
      </div>

      {/* Grid Container */}
      <div className="grid gap-12 md:grid-cols-2">
        {/* Rooms & Suites */}
        <div>
          <div className="text-center my-4">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900">
              Rooms & Suites
            </h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
          </div>

          <div className="space-y-8">
            {rooms.map((room, idx) => (
              <div
                key={idx}
                className="bg-blue-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-xl font-semibold mb-2 text-blue-900">
                  {room.type}
                </h4>
                <p className="text-blue-700">{room.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h4 className="text-lg font-semibold text-blue-700 mb-4 text-center">
              All rooms include:
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {roomFeatures.map((feature, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 px-5 py-2 rounded-full text-sm font-medium shadow-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div>
          <div className="text-center my-4">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900">
              Amenities
            </h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
          </div>

          <div className="space-y-6">
            {amenities.map((item, idx) => (
              <div
                key={idx}
                className="bg-blue-50 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-default"
              >
                <p className="text-blue-800 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* service */}
      <div className="text-center my-10 ">
        <h2 className="text-4xl font-bold mb-2 text-blue-700 flex justify-center items-center gap-3">
           Services
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto rounded"></div>
      </div>

      <ul className="grid gap-6 md:grid-cols-2">
        {services.map((service, idx) => (
          <li
            key={idx}
            className="bg-blue-50 rounded-lg shadow-md p-6 cursor-default hover:shadow-lg transition-shadow duration-300 flex items-center gap-4"
          >
            <span className="text-blue-600 text-2xl">✔️</span>
            <p className="text-blue-800 text-lg font-medium">{service}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RoomsAndSuites;
