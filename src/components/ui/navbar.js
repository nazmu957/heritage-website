import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import Link from "next/link";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="navbar bg-[#ECF5FF] h-[96px] text-black relative z-10">
        <div className="navbar-start flex items-center">
          <button
            className="block md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <div className="hidden md:flex font-[Montserrat] ms-4 md:ms-[112px]">
            <Link href="/propertyDetail" className="text-[18px] mx-2 md:mx-4">
              Buy
            </Link>
            <Link href="/buyerPage" className="mx-2 md:mx-4">
              Sell
            </Link>
            <Link href="/propertyDetail" className="mx-2 md:mx-4">
              Service
            </Link>
            <Link href="/about" className="mx-2 md:mx-4">
              About
            </Link>
          </div>
        </div>
        <div className="navbar-center">
          <Link href="/">
            <Image src={logo} width={53} height={80} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-end flex items-center">
          <Link href="/signIn" className="me-4 md:me-[112px]">
            Sign In
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[96px] left-0 w-full bg-[#ECF5FF] md:hidden z-20">
          <div className="flex flex-col items-start p-4 space-y-2">
            <Link href="/buyerPage" className="text-[18px]">
              Buy
            </Link>
            <Link href="/buyerSearch" className="text-[18px]">
              Sell
            </Link>
            <Link href="/propertyDetail" className="text-[18px]">
              Service
            </Link>
            <Link href="/about" className="text-[18px]">
              About
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
