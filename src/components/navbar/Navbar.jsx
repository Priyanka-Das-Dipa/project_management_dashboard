import React from "react";
import logo from "../../../public/images/bg_remove_logo.png";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="bg-white container mx-auto">
      <div className=" flex  justify-between items-center gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <Image
            src={logo}
            alt="logo"
            className="w-20"
            width={400}
            height={300}
          ></Image>
        </div>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <Link
              className="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
              href="/login"
            >
              Login
            </Link>

            <Link
              className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600 transition hover:text-blue-600/75 sm:block"
              href="#"
            >
              Register
            </Link>
          </div>

          <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
