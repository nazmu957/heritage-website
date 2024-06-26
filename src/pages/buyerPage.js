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
    <div>
      <Navbar />
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-[309px]">
          <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
          <Image
            src={buyerframe}
            layout="fill"
            objectFit="cover"
            className="z-0"
            alt="Banner Image"
          />
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 ] z-10">
        <div className="card w-[984px] h-[376px] bg-base-100 shadow-xl ms-[7rem] mt-[28rem]">
          <div className="card-body">
            <div className="font-semibold">
              <button
                className="button mx-4  text-[16px] hover:text-[#0059B1]"
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
              <div>
                <Image
                  className="m-3"
                  src={search}
                  width={"24"}
                  height={"24"}
                ></Image>
              </div>
              <input
                className="w-full"
                type="text"
                name=""
                id=""
                placeholder="Search Properties"
              />
            </div>

            <div className="container mx-auto px-4 ">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full sm:w-1/2 lg:w-1/3  mb-4">
                  <div className="bg-white  rounded-lg p-6">
                    <div className="mt-3">
                      <div className="flex ">
                        <Image className="mx-2" src={location}></Image>
                        <p className="font-semibold">Your Location</p>
                      </div>
                      <div className="bg-[#ECF5FF] w-[285px] h-[48px] mt-4 ">
                        <Image className="float-end m-3" src={arrow}></Image>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/3  mb-4">
                  <div className="bg-white  rounded-lg p-6">
                    <div className="mt-3">
                      <div className="flex ">
                        <Image className="mx-2" src={home}></Image>
                        <p className="font-semibold">Property Type</p>
                      </div>
                      <div className="bg-[#ECF5FF] w-[285px] h-[48px] mt-4 ">
                        <Image className="float-end m-3" src={arrow}></Image>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4">
                  <div className="bg-white  rounded-lg p-6">
                    <div className="mt-3">
                      <div className="flex ">
                        <Image className="mx-2" src={dollar}></Image>
                        <p className="font-semibold">Budget</p>
                      </div>
                      <div className="bg-[#ECF5FF] w-[285px] h-[48px] mt-4 "></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-actions ">
              <Link
                href="/buyerSearch"
                className="btn btn-primary w-full bg-[#0059B1] text-white"
              >
                <Image className="bg-white" src={search2}></Image>
                Find Property
              </Link>
            </div>
          </div>
        </div>
        <Counting />
        <div className="flex justify-between mx-5">
          <p className="text-[32px] font-semibold mx-3">Popular Properties</p>
          <div>
            <p className="underline text-[18px] text-[#0059B1] font-semibold">
              See all property
            </p>
          </div>
        </div>
        <Propertycard />
        <div className="flex justify-between mx-5 mt-5">
          <p className="text-[32px] font-semibold mx-3">
            New Listed Properties
          </p>
          <div>
            <p className="underline text-[18px] text-[#0059B1] font-semibold">
              See all property
            </p>
          </div>
        </div>
        <Propertycard />
        <h1 className=" text-center text-[40px] font-bold mb-[3rem]">
          Testimonials
        </h1>
        <Testimonials />
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default BuyerPage;
