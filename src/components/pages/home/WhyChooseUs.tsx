const WhyChooseUs = () => {
    return (
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 mb-10">
            We provide the best services with a commitment to excellence and customer satisfaction.
          </p>
  
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Exceptional Customer Service", description:  "We're available 24/7 with dedicated support to ensure your needs are always met."},
              { title: "Client-Centered Approach", description: "We listen, adapt, and build long-term partnerships focused on your success." },
              { title: "Affordable Pricing", description: "Transparent, flexible pricing with no hidden fees, ensuring great value for your investment." },
              { title: "Prime Locations", description: "Strategic, high-traffic locations that offer maximum visibility and accessibility." }
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md">
                <div className="text-blue-500 text-3xl">✔</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
  