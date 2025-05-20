import { SearchIcon } from "@/components/Icons/Icons";
import Input from "@/components/ui/Input";
import React from "react";
import RecentPostCard from "./RecentPostCard";
import Button from "@/components/ui/Button";

const BlogSidePart = () => {
  return (
    <section className="flex flex-col gap-14">
      <div className="relative">
        <Input placeholder="Search..." />
        <div className="absolute top-3 right-4">
          <SearchIcon />
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-[400] tracking-wide">Recent Posts</h1>
        <div className="mt-5">
          <RecentPostCard />
          <div className="my-4 bg-gray-500 w-full h-[1px]" />
          <RecentPostCard />
          <div className="my-4 bg-gray-500 w-full h-[1px]" />
          <RecentPostCard />
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-[400] tracking-wide">Tags</h1>
        <div className="mt-5 flex flex-wrap gap-1">
          <button className="border px-4 py-1 rounded-md bg-gray-50 hover:bg-gray-100">
            Business
          </button>
          <button className="border px-4 py-1 rounded-md bg-gray-50 hover:bg-gray-100">
            Business
          </button>
          <button className="border px-4 py-1 rounded-md bg-gray-50 hover:bg-gray-100">
            Business
          </button>
          <button className="border px-4 py-1 rounded-md bg-gray-50 hover:bg-gray-100">
            Business
          </button>
          <button className="border px-4 py-1 rounded-md bg-gray-50 hover:bg-gray-100">
            Business
          </button>
          <button className="border px-4 py-1 rounded-md bg-gray-50 hover:bg-gray-100">
            Business
          </button>
          <button className="border px-4 py-1 rounded-md bg-gray-50 hover:bg-gray-100">
            Business
          </button>
          <button className="border px-4 py-1 rounded-md bg-gray-50 hover:bg-gray-100">
            Business
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSidePart;
