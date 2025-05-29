"use client";
import React, { useState } from "react";
import NavTop from "./NavTop";
import {
  navLinks,
  TNavLinks,
} from "../../../../public/datas/navbar/navbarLinks";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FacebookIcon,
  LinkedinIcon,
  MenuIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/Icons/Icons";
import SideNav from "./SideNav";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const path = router?.asPath;

  return (
    <div className="lg:max-w-[1200px] mx-auto lg:px-4 py-2">
      {/* top section of navbar */}
      <NavTop />

      {/* main section of navbar */}
      <nav className="text-white bg-blue-900 px-5 md:px-10 md:py-5 py-4 rounded-sm flex justify-between relative z-[999]">
        <div className="hidden md:block">
          <ul className="text-gray-300 flex gap-6 text-lg">
            {navLinks?.map((link: TNavLinks, i: number) => {
              const isActive = path === link?.path;
              return (
                <li
                  key={i}
                  className={`group relative ${
                    isActive ? "text-white font-medium" : ""
                  }`}
                >
                  <Link
                    href={link?.path}
                    className="relative inline-block uppercase"
                  >
                    {link?.name}
                    <span
                      className={`absolute left-0 bottom-[-2px] h-[2px] bg-white transition-all duration-300 ease-in-out 
                                        ${
                                          isActive
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                        }`}
                    ></span>
                  </Link>

                  {/* Child items dropdown */}
                  {link?.children && (
                    <div className="absolute left-0 top-full mt-2 bg-blue-800 text-white rounded-md shadow-lg w-56 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 ease-in-out">
                      {link.children.map((item: any, j: number) => (
                        <div key={j}>
                          <Link
                            href={item.path}
                            className="block px-4 py-2 hover:bg-blue-700 truncate w-full max-w-[230px]"
                          >
                            {item.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className="md:hidden text-2xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          <MenuIcon />
        </div>

        <div
          className={`absolute top-0 left-0 bg-blue-900 w-full h-screen transition-transform duration-300 md:hidden ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SideNav setOpen={setOpen} />
        </div>

        {/* Social Icons */}
        <div className="flex divide-x-[2px] items-center">
          <div className="flex pr-5 gap-1">
            <FacebookIcon />
            <TwitterIcon />
            <LinkedinIcon />
            <YoutubeIcon />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
