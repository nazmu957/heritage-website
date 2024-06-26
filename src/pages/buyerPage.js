import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import React from "react";
import buyerframe from "../assets/images/Frame 108.jpg";
import search from "../assets/images/search-icon.svg";
import search2 from "../assets/images/Magnifer-white.png";
import location from "../assets/images/Group 44.png";
import home from "../assets/images/fi-bs-home-location.png";
import dollar from "../assets/images/Dollar Minimalistic.png";
import arrow from "../assets/images/Alt Arrow Down.png";
import Counting from "@/components/ui/counting";
import Propertycard from "@/components/ui/propertycard";
import Testimonials from "@/components/ui/testimonials";
import Footer from "@/components/ui/footer";
import Link from "next/link";

const BuyerPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="relative w-full h-[400px]">
        <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
        <Image
          src={buyerframe}
          layout="fill"
          objectFit="cover"
          className="z-0"
          alt="Banner Image"
        />
        <div className="md:absolute md:inset-0 flex justify-center items-center md:z-20">
          <div className="w-full max-w-[984px] bg-white p-6 shadow-xl rounded-lg md:mt-[10rem] mt-[30rem] ">
            <div className="font-semibold text-center">
              <button
                className="button mx-4 text-[16px] hover:text-[#0059B1]"
                tabIndex="1"
              >
                Buy
              </button>
              <button
                className="button mx-4 text-[16px] hover:text-[#0059B1]"
                tabIndex="2"
              >
                Rent
              </button>
              <button
                className="button mx-4 text-[16px] hover:text-[#0059B1]"
                tabIndex="3"
              >
                PG
              </button>
              <button
                className="button mx-4 text-[16px] hover:text-[#0059B1]"
                tabIndex="4"
              >
                Plot
              </button>
              <button
                className="button mx-4 text-[16px] hover:text-[#0059B1]"
                tabIndex="5"
              >
                Commercial
              </button>
              <hr className="mt-3" />
            </div>
            <div className="flex border mt-3">
              <Image
                className="m-3"
                src={search}
                width={"24"}
                height={"24"}
                alt="Search Icon"
              />
              <input
                className="w-full"
                type="text"
                placeholder="Search Properties"
              />
            </div>
            <div className="flex flex-wrap mt-4">
              <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="flex items-center">
                    <Image
                      className="mx-2"
                      src={location}
                      alt="Location Icon"
                    />
                    <p className="font-semibold">Your Location</p>
                  </div>
                  <div className="bg-[#ECF5FF] w-full h-[48px] mt-4 flex items-center justify-end px-4">
                    <Image src={arrow} alt="Arrow Icon" />
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="flex items-center">
                    <Image className="mx-2" src={home} alt="Home Icon" />
                    <p className="font-semibold">Property Type</p>
                  </div>
                  <div className="bg-[#ECF5FF] w-full h-[48px] mt-4 flex items-center justify-end px-4">
                    <Image src={arrow} alt="Arrow Icon" />
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="flex items-center">
                    <Image className="mx-2" src={dollar} alt="Dollar Icon" />
                    <p className="font-semibold">Budget</p>
                  </div>
                  <div className="bg-[#ECF5FF] w-full h-[48px] mt-4"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <Link href="/buyerSearch">
                <button className="btn btn-primary w-full md:w-[58rem] bg-[#0059B1] text-white flex items-center justify-center">
                  <Image className="mr-2" src={search2} alt="Search Icon" />
                  Find Property
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mx-[12rem] md:mt-[10rem] mt-[50rem] md:p-[0] p-5">
        <Counting />
      </div>
      <div className="flex justify-between md:mx-[17rem]">
        <p className="text-[32px] font-semibold mx-3">Popular Properties</p>
        <div>
          <p className="underline text-[18px] text-[#0059B1] font-semibold">
            See all property
          </p>
        </div>
      </div>
      <Propertycard />
      <div className="flex justify-between md:mx-[17rem] mt-5">
        <p className="text-[32px] font-semibold mx-3">New Listed Properties</p>
        <div>
          <p className="underline text-[18px] text-[#0059B1] font-semibold">
            See all property
          </p>
        </div>
      </div>
      <Propertycard />
      <h1 className="text-center text-[35px] font-bold mb-[3rem]">
        Testimonials
      </h1>
      <Testimonials />

      <div className="flex flex-col md:flex-row justify-between items-center bg-[#fdf0e7] h-auto md:h-[166px] p-4 md:p-0">
        <div className="md:p-8 flex-1 text-center md:text-left">
          <h1 className="text-[20px] font-semibold mb-2">
            Post your Property for free
          </h1>
          <p>List it on Your Propriety and get genuine leads</p>
        </div>
        <div className="mt-4 md:mt-0 md:p-8">
          <button className="px-6 md:px-12 text-white font-semibold py-2 md:py-4 bg-[#f06224] rounded">
            Post Property
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BuyerPage;
