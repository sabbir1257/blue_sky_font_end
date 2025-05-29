export default function MissionVision() {
  return (
    <section className=" py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Mission */}
        <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl transition duration-300">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-blue-100 text-blue-600 rounded-full w-14 h-14 flex items-center justify-center text-3xl shadow-sm">
              🚀
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Mission</h2>
          </div>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            We aim to empower businesses and individuals with smart, scalable, and user-friendly digital solutions. By focusing on innovation and excellence, we help create an ecosystem where ideas grow, technology connects, and people succeed.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl transition duration-300">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-green-100 text-green-600 rounded-full w-14 h-14 flex items-center justify-center text-3xl shadow-sm">
              🌎
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Vision</h2>
          </div>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            We envision a world where technology bridges gaps, boosts growth, and brings people closer together. Our vision is to lead in digital innovation and build a future that’s inclusive, connected, and driven by creativity and purpose.
          </p>
        </div>
        
      </div>
    </section>
  );
}
