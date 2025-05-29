/* eslint-disable @next/next/no-img-element */
import Container from "@/components/ui/Container";

const businesses = [
  {
    title: "Blue Sky Dream Hotel and Resorts",
    description:
      "We help clients identify, acquire, and develop properties tailored to their goals. From urban planning to final delivery, we manage the full lifecycle. Our team ensures all zoning, permits, and environmental concerns are handled professionally to reduce delays and risks.",
    image: "/images/land.jpg",
  },
  {
    title: "Investment Strategy",
    description:
      "Maximize returns with expert insights on real estate trends, risks, and capital allocation. We help you build a sustainable investment portfolio, guide you through market research, and provide ongoing performance analysis to adapt to changing conditions.",
    image: "/images/land.jpg",
  },
  {
    title: "Construction & Management",
    description:
      "With a dedicated project team, we handle residential and commercial builds from blueprint to handover. We emphasize budget control, transparency, and quality assurance through every phase — from contractor selection to project completion.",
    image: "/images/land.jpg",
  },
];

const OurBusiness = () => {
  return (
    <Container className="my-20">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-blue-900">Our Business</h2>
        <div className="w-20 h-1 mx-auto mt-3 bg-blue-600 rounded-full"></div>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          We offer a range of real estate and business services tailored to help you grow, invest, and build smarter.
        </p>
      </div>

      <div className="space-y-20">
        {businesses.map((biz, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-8`}
          >
            <img
              src={biz.image}
              alt={biz.title}
              className="w-full md:w-1/2 h-72 object-cover rounded-lg shadow"
            />
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-blue-800">{biz.title}</h3>
              <p className="text-gray-600 mt-3 leading-relaxed">{biz.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default OurBusiness;
