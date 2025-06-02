'use client';

import React from 'react';

type Goal = {
  icon: string;
  title: string;
  points: string[];
};

const goals: Goal[] = [
  {
    icon: '🏘️',
    title: '1. Develop Model Residential Communities',
    points: [
      'Establish multiple integrated housing projects in key growth areas near Dhaka.',
      'Focus on planned layouts with roads, utilities, parks, markets, and social infrastructure.',
      'Incorporate eco-friendly features like green zones, water reservoirs, and waste management.',
    ],
  },
  {
    icon: '📈',
    title: '2. Deliver Sustainable Investment Growth',
    points: [
      'Ensure land appreciation of 2–3x in 5–7 years through smart location selection.',
      'Offer secure, high-return investment options for both residential buyers and institutional investors.',
      'Create resale and rental value opportunities by maintaining demand through infrastructure and services.',
    ],
  },
  {
    icon: '🛡️',
    title: '3. Ensure 100% Legal and Transparent Transactions',
    points: [
      'Maintain zero tolerance for irregular or unverified documentation.',
      'Provide clients with complete legal support and due diligence for every transaction.',
      'Build a reputation as one of the most trusted and legally compliant developers in Bangladesh.',
    ],
  },
  {
    icon: '👪',
    title: '4. Make Land Ownership Accessible',
    points: [
      'Offer affordable pricing models for middle-class and salaried individuals.',
      'Introduce easy EMI plans, low down payments, and flexible financing.',
      'Simplify the land purchase process with personalized guidance for first-time buyers.',
    ],
  },
  {
    icon: '🌆',
    title: '5. Become a Leader in Satellite Township Development',
    points: [
      'Pioneer the growth of future-ready suburbs with connectivity to Dhaka’s metro and highway networks.',
      'Set a benchmark for township planning that balances growth, affordability, and liveability.',
      'Launch mixed-use developments that include housing, education, healthcare, and commercial zones.',
    ],
  },
  {
    icon: '📣',
    title: '6. Build a Recognizable and Respected Brand',
    points: [
      'Establish Blue Sky Dream City Ltd. as a household name in real estate.',
      'Develop a strong online and offline marketing presence to educate and attract clients.',
      'Build client loyalty through consistent service, community events, and after-sale support.',
    ],
  },
  {
    icon: '🌍',
    title: '7. Contribute to National Urban Growth',
    points: [
      'Support the government’s “Smart Bangladesh” and urban decentralization goals.',
      'Create employment opportunities through real estate, construction, and related sectors.',
      'Promote responsible urbanization that respects nature, tradition, and the aspirations of modern citizens.',
    ],
  },
];

const StrategicGoals: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Our Strategic Goals{' '}
            </h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              At Blue Sky Dream City Ltd., our goals are not only about building
              land and infrastructure—they’re about building trust, sustainable
              communities, and a better future for our clients and the nation.
            </p>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-semibold text-blue-800">
                  {goal.title}
                </h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {goal.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicGoals;
