/* eslint-disable @next/next/no-img-element */
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Separator from "@/components/ui/Separator";
import React from "react";

const OurHistories = () => {
  return (
    <Container className="my-10">
      <div className="flex items-center lg:flex-row flex-col gap-10">
        <h1 className="title1 font-bold w-[25ch] md:text-end text-center">
          High-Quality Market Experinces
        </h1>
        <div className="w-1 h-[100px] rounded-md bg-gray-400 lg:block hidden"></div>
        <p className="paragraph lg:w-[90ch] text-justify">
          A tale of a fateful trip that started from this tropic port aboard
          this tiny ship today still wanted by the government they survive as
          soldiers of fortune to ever wondered the east side to a deluxe
          apartment.
        </p>
        <Button className="bg-blue-800 text-white py-3 rounded-md w-[200px]">
          CONTACT US
        </Button>
      </div>

      <div className="my-10 items-center flex lg:flex-row flex-col gap-8">
        <img
          className="w-full rounded-md  max-h-[410px] h-full"
          src="/images/land1.jpg"
          alt="land"
        />
        <div className="flex flex-col gap-3 ">
          <h1 className="title">SHORT HISTORY</h1>
          <Separator />
          <p className="paragraph mt-5 text-justify">
            A tale of a fateful trip that started from this tropic port aboard
            this tiny ship today still wanted by the government they survive as
            soldiers of fortune to a deluxe you apartment in the sky to explore
            strange new worlds to seek out new life and new civilizations to
            boldly go where no man has gone.
            <br />
            <br />
            You would see the biggest gift would be from me and the card
            attached would so thank you for being a friend the biggest gift.
          </p>
          <Button className="bg-gray-100 border px-8 py-3 shadow-sm mt-10 w-fit rounded-md">
            LEARN MORE
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default OurHistories;
