import { useRouter } from "next/router";
import { projects } from "../../../../public/datas/flatProject/projects";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { GrSchedules } from "react-icons/gr";
import { BiCopy } from "react-icons/bi";
import ImageGallery from "@/components/pages/project/ImageGallery";
import EmbeddedMap from "@/components/shared/EmbeddedMap";
import bedrooms from "../../../../public/images/bedroomes-1.webp";
import living from "../../../../public/images/living-rooms-1.webp";
import kitchen from "../../../../public/images/kitches-1.webp";
import balconies from "../../../../public/images/balconyes-1.webp";
import washrooms from "../../../../public/images/toiletto-1.webp";
export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const found = projects.find((p) => p.id === id);
      setProject(found || null);
    }
  }, [id]);

  if (!project)
    return <p className="p-10 text-center">Loading or project not found...</p>;

   const image = [
    { img: bedrooms, value: "3 Bedrooms" },
    { img: living, value: "Living & Family Living" },
    { img: kitchen, value: "Kitchen" },
    { img: balconies, value: "2 Balconies" },
    { img: washrooms, value: "3 Washrooms" },
  ];


   const gallerys = [
    "/images/gallery1.webp",
    "/images/gallery2.webp",
    "/images/gallery3.webp",
    "/images/gallery4.webp",
    "/images/gallery1.webp",
  ];

  const images = [
    "/images/apartment_axonometric1.png",
    "/images/apartmentAxonometric2.jpg",
    "/images/apartmentAxonometric3.png",
    "/images/apartmentAxonometric4.jpg",
    "/images/apartmentAxonometric5.jpeg",
    "/images/apartmentAxonometric6.jpg",
  ];

  return (
    <section className="">
      <main className="p-4 md:p-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-900">
          {project.title}
        </h1>
        {/* Two Column Layout */}
        <div className="gap-10 grid md:grid-cols-2 grid-cols-1 my-10 justify-between mx-2">
          {/* Left Side - Image & Buttons */}
          <div>
            <Image
              className="w-full h-auto max-w-[600px] max-h-[650px] rounded-lg"
              src={project.image}
              alt={project.title}
              width={600}
              height={650}
            />
            <div className="p-5 rounded-xl">
              <div className="flex flex-col sm:flex-row gap-4 justify-between mt-8">
                <button className="flex text-lg p-3 hover:bg-[#2546a0] gap-3 rounded-xl bg-[#1e3a8a] text-white items-center">
                  <FaFileDownload />
                  Download Brochure
                </button>
                <button className="flex border-2 text-lg p-3 gap-3 rounded-xl items-center">
                  <GrSchedules />
                  Schedule a Meeting
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Project Details */}
          <div className="grid grid-cols-1 gap-4">
            {project.details?.map((item: any, idx: number) => (
              <div key={idx} className="flex items-start gap-2">
                <BiCopy className="w-5 h-5 text-blue-800 mt-1" />
                <div className="flex flex-col sm:flex-row sm:items-start w-full">
                  <span className="font-semibold text-blue-900 min-w-[140px] sm:min-w-[180px]">
                    {item.label}
                  </span>
                  <span className="text-gray-700 sm:ml-2">: {item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Link (if available) */}
        {project.github && (
          <div className="text-center mt-10">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              View on GitHub
            </a>
          </div>
        )}
      </main>
      <div className="max-w-[1250px] mx-auto">
         {/*  FEATURE & AMENITIES section */}
        <section className="my-10 px-4">
          <h1 className="text-center md:text-5xl text-3xl font-semibold mb-10">
            FEATURE & AMENITIES
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-16 gap-6">
            {image.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center "
              >
                <div className="relative w-60 h-60 gap-6">
                  <Image
                    src={item.img}
                    alt={item.value}
                    fill
                    className="object-cover rounded-md w-24"
                  />
                </div>
                <p className="mt-3 text-lg font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </section>
        {/* floor plane */}
        <section>
          <h1 className="text-center md:text-5xl text-3xl md:my-10 my-4">
            Floor Plane
          </h1>
          <ImageGallery
            images={images}
            modalWidth="w-[850px]"
            modalHeight="h-[800px]"
          />
        </section>
        {/* gallery */}
        <h1 className="text-center md:text-5xl text-3xl md:my-10 my-4">
          Gallery
        </h1>
        <ImageGallery
          images={gallerys}
          modalWidth="w-[90vw]"
          modalHeight="h-[80vh]"
        />
      </div>
      {/* google map */}
      <EmbeddedMap />
    </section>
  );
}
