/* eslint-disable @next/next/no-img-element */
import Container from "@/components/ui/Container";

const OurPartners = () => {
  const logos = [
    "/images/Logo_PNG.png",
    "/images/logo/p-2.png",
    "/images/logo/p-3.png",
    "/images/logo/p-4.png",
    "/images/logo/p-5.png",
  ];

  return (
    <section className="bg-gray-100 py-2">
      <Container>
        <div className="gap-10 lg:gap-0 justify-between items-center">
          <div className="flex flex-wrap gap-8">
            {logos.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="logo"
                className="filter grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition duration-300 ease-in-out"
                style={{
                  maxHeight: "60px",
                  cursor: "pointer",
                  backgroundColor: "white",
                  padding: "6px",
                  borderRadius: "6px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                }}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurPartners;
