import Link from "next/link";

const CallToAction = () => {
    return (
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-6">
            Ready to Get Started? <span className="text-yellow-400">Let’s Work Together!</span>
          </h2>
          <p className="text-lg mb-8">
            We help businesses like yours grow and succeed online. Whether you`&apos;`re looking for custom solutions, 
            or expert advice, our team is here to assist you every step of the way.
          </p>
          <div className="flex justify-center gap-6">
            <Link
              href="/contact"
              className="px-8 py-3 bg-yellow-400 text-blue-600 font-semibold text-lg rounded-lg transition-all duration-300 hover:bg-yellow-500 hover:text-white"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-lg transition-all duration-300 hover:bg-white hover:text-blue-600"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    );
  };
  
  export default CallToAction;
  