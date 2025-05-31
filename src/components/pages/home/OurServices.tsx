/* eslint-disable @next/next/no-img-element */
import Container from '@/components/ui/Container';
import Separator from '@/components/ui/Separator';

const OurServices = () => {
  return (
    <Container className="my-20">
      <section className="flex flex-col items-center gap-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Our SERVICES{' '}
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
        </div>
        <Separator />
        <p className="paragraph">
          A tale of a fateful trip that started from this tropic port aboard
          this tiny ship today stillers
        </p>
        {/* service cards  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          <OurServiceCard />
          <OurServiceCard />
          <OurServiceCard />
          <OurServiceCard />
          <OurServiceCard />
          <OurServiceCard />
        </div>

        <div>
          <h1 className="mt-5 text-xl text-center text-gray-600 leading-8">
            You can also send us an email and we’ll get in touch shortly, or
            Call us
            <br />
            <span className="text-blue-900 underline">
              info@support.com (or) +1 234 6780 900
            </span>
          </h1>
        </div>
      </section>
    </Container>
  );
};

const OurServiceCard = () => {
  return (
    <div className="border rounded-md flex items-center hover:shadow-md transition-all duration-200">
      <img
        className="w-[120px] rounded-l-md h-[130px]"
        src="/images/land.jpg"
        alt="land"
      />
      <div className="px-8 items-start flex flex-col gap-1">
        <h1 className="text-2xl font-medium text-gray-700">
          Business Services
        </h1>
        <p className="mb-3 text-gray-600">The tiny ship today stiller</p>

        <button className="uppercase font-medium">Read more {'>'}</button>
      </div>
    </div>
  );
};

export default OurServices;
