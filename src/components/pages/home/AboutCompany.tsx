/* eslint-disable @next/next/no-img-element */
import { MedalIcon, StarIcon, TargetIcon } from '@/components/Icons/Icons';
import Container from '@/components/ui/Container';
import Separator from '@/components/ui/Separator';

const AboutCompany = () => {
  const aboutLink = [
    {
      icon: <StarIcon />,
      title: 'Vision',
    },
    {
      icon: <MedalIcon />,
      title: 'Missions',
    },
    {
      icon: <TargetIcon />,
      title: 'Goals',
    },
  ];
  return (
    <Container className="py-20 flex lg:flex-row flex-col item-center gap-10">
      <div className="flex-1 m-5 ">
        <img
          className="w-full h-full object-cover rounded-md"
          src="/images/about.jpg"
          alt="land"
        />
      </div>
      <div className="flex-1 flex flex-col items-center gap-2">
        <div className="text-center my-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            About Our Company
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
        </div>
        <p className="text-center mt-5 paragraph">
          A tale of a fateful trip that started from this tropic port aboard
          this tiny ship today still wanted by the government they survive as
          soldiers of fortune to a deluxe apartment in the sky moving on up to
          the east side a family.
          <br />
          <br />
          The government they survive as soldiers of fortune baby if you&apos;ve
          ever wondered the east side to a deluxe apartment.
        </p>

        <div className="w-full mt-8">
          <hr />
          <div className="grid mt-5 grid-cols-3 divide-x-2 text-gray-700">
            {aboutLink?.map((data, i) => {
              return (
                <div className="flex flex-col items-center py-5" key={i}>
                  <div className="text-7xl">{data?.icon}</div>
                  <h1 className="text-xl font-semibold">{data?.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutCompany;
