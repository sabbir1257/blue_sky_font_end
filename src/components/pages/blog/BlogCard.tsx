/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const BlogCard = () => {
  return (
    <div>
      <img
        className="w-full max-h-[450px] h-full rounded-md shadow-sm"
        src="/images/land.jpg"
        alt="img"
      />
      <div className="my-3 flex flex-col gap-2 items-start">
        <h1 className="text-xl font-medium">
          Its like a kind of torture to have to watch the show
        </h1>
        <p className="paragraph">
          A tale of a fateful trip that started from this tropic port aboard
          this tiny ship today still wanted by the government apartment in the
          sky moving on up to the east side a family.
        </p>
        <Link href={"/blog/1"}>
          <button className="text-blue-800 hover:underline mt-2 font-medium">
            READ MORE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
