/* eslint-disable @next/next/no-img-element */
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import EveryPageHeroSection from "@/components/ui/EveryPageHeroSection";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Separator from "@/components/ui/Separator";
import TextArea from "@/components/ui/TextArea";
import FollowUs from "../../components/shared/followUs/FollowUs";

const ContactUs = () => {
  return (
    <div>
      <EveryPageHeroSection title="CONTACT US" imageUrl="/images/landing.jpg" />

      <Container className="my-20">
        <section className="flex flex-col justify-center items-center gap-5">
          <h1 className="title">GET IN TOUCH</h1>
          <Separator />
          <p className="paragraph">
            A tale of a fateful trip that started from this tropic port aboard
            this tiny ship today stillers
          </p>
          {/* form div  */}
          <div className="lg:h-[500px] w-full gap-4 lg:gap-0 rounded-md shadow-md flex md:flex-row flex-col items-center  border mt-8">
            <div className=" md:flex-1 h-full w-full py-4 px-10 rounded-xl">
              <img
                className="h-full w-full  object-cover"
                src="/images/contact.jpg"
                alt="land"
              />
            </div>
            <div className="px-16 lg:py-0 py-4 w-full md:flex-1">
              <form className="w-full">
                <div className="grid grid-cols-2 gap-3">
                  <Input className="my-2" placeholder="Name*" />
                  <Input className="my-2" placeholder="Phone*" />
                  <Input className="my-2" placeholder="Email*" />
                  <Input className="my-2" placeholder="Website*" />
                  <TextArea className="col-span-2 my-2" placeholder="Message" />
                </div>
                <Button className="bg-blue-800 px-8 py-3 text-white rounded-md mt-14 w-fit">
                  SEND A MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </section>
      </Container>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58476.15199139296!2d88.80759085120717!3d23.648782482108437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9313db856084b%3A0x7f08064ccfe08eb0!2sChuadanga!5e0!3m2!1sen!2sbd!4v1722609470941!5m2!1sen!2sbd"
        className="w-full"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="my-20">
        <FollowUs />
      </div>
    </div>
  );
};

export default ContactUs;
