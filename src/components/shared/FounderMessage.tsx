import React from "react";

const FounderMessage: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Founder’s Message
        </h2>
        <blockquote className="italic text-lg text-gray-600 mb-6">
          "At the heart of every great endeavor lies a vision — a vision to make a difference, to inspire, and to build something meaningful"
        </blockquote>
        <p className="text-base text-gray-700 leading-relaxed mb-6">
          I founded this company with a simple belief: that excellence should be accessible, and integrity should lead the way. From humble beginnings to where we stand today, our journey has been shaped by passion, perseverance, and a deep commitment to delivering value.
        </p>
        <p className="text-base text-gray-700 leading-relaxed mb-6">
          Every step we take is rooted in our dedication to innovation, customer satisfaction, and long-term impact. Our mission goes beyond just business — it's about building trust, nurturing relationships, and contributing positively to our community.
        </p>
        <div className="mt-8">
          <p className="font-semibold text-gray-800 text-lg">– [Founder’s Name]</p>
          <p className="text-sm text-gray-600">Founder & CEO</p>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
