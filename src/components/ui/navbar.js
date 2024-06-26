import Image from "next/image";
import React from "react";
import logo from "../../assets/images/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-[#ECF5FF] h-[96px] text-black">
        <div className="navbar-start">
          <div className="d-flex font-[Montserrat] ms-4 md:ms-[112px]">
            <Link href="/buyerPage" className="text-[18px] mx-2 md:mx-4">
              Buy
            </Link>
            <Link href="/buyerSearch" className="mx-2 md:mx-4">
              Sell
            </Link>
            <Link className="mx-2 md:mx-4" href="/propertyDetail">
              Service
            </Link>
            <Link className="mx-2 md:mx-4" href="/about">
              About
            </Link>
          </div>
        </div>
        <div className="navbar-center">
          <Link href="/">
            <Image src={logo} width={53} height={80} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-end">
          <div className="flex me-4 md:me-[112px]">
            <Link className="me-2 md:me-3" href="/">
              Manage Rentals
            </Link>
            <Link href="/signIn">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
