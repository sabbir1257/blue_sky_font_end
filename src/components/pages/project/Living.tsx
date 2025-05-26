import Image from "next/image";
import React from "react";

const facilities = [
  { title: "Mosque", img: "/images/Living/mosque.png", alt: "Mosque" },
  { title: "School", img: "/images/Living/school.png", alt: "School" },
  {
    title: "Fire Service Station",
    img: "/images/Living/fire-station.png",
    alt: "Fire Service Station",
  },
  {
    title: "Lake",
    img: "/images/Living/lake.png",
    alt: "Lake",
  },
  {
    title: "Wasa",
    img: "/images/Living/Wasa.png",
    alt: "Wasa",
  },
  {
    title: "Hospital",
    img: "/images/Living/Hospital.png",
    alt: "Hospital",
  },
  {
    title: "Police Station",
    img: "/images/Living/police-station.png",
    alt: "Police Station",
  },
  {
    title: "Children Park",
    img: "/images/Living/Children_Park.png",
    alt: "Children Park",
  },
  {
    title: "PDB Office",
    img: "/images/Living/pdb-file.png",
    alt: "PDB Office",
  },
  {
    title: "Green Road",
    img: "/images/Living/road.png",
    alt: "Green Road",
  },
  {
    title: "Electricity Station",
    img: "/images/Living/electric-factory.png",
    alt: "Electricity Station",
  },
  {
    title: "Holyday Village",
    img: "/images/Living/Holyday_Village.png",
    alt: "Holyday Village",
  },
  {
    title: "BTCL",
    img: "/images/Living/BTCL.png",
    alt: "BTCL",
  },
  {
    title: "Convention Center",
    img: "/images/Living/Convention_Center.png",
    alt: "Convention Center",
  },
  {
    title: "Titash Gas",
    img: "/images/Living/Titash_Gas.png",
    alt: "Titash Gas",
  },
  {
    title: "Graveyard",
    img: "/images/Living/Graveyard.png",
    alt: "Graveyard",
  },
  {
    title: "Nursing Home",
    img: "/images/Living/Nursing_Home.png",
    alt: "Nursing Home",
  },
  {
    title: "Supper Market",
    img: "/images/Living/supermarket.png",
    alt: "Supper Market",
  },
];


const Living = () => {
  return (
    <div>
      <h5 className="title text-center mt-10 text-blue-900">
        Living Standard in the City
      </h5>
      <p className="text-center w-[50%] mx-auto pt-6 pb-20">
        Blue Sky Cite LTD is the other name of the trust, reliability, and
        social partnership model. We maintain all the living standards of modern
        township planning in the capital city Dhaka. We are committed to people,
        communities, and sustainability.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-[70%] mx-auto">
        {facilities.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center shadow-xl p-10 rounded-2xl transition-transform transform hover:scale-110"
          >
            <div className="bg-blue-300 rounded-full h-[120px] w-[120px] flex justify-center items-center overflow-hidden">
              <Image
                width={80}
                height={80}
                src={item.img}
                alt={item.alt}
                className="object-contain"
              />
            </div>

            <h5 className="text-center text-sm font-bold pt-3">{item.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Living;
