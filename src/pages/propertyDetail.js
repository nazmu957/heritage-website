import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import location from "../assets/images/Group 44.png";
import pic1 from "../assets/images/Rectangle 20.jpg";
import React from "react";
import Image from "next/image";
import pic2 from "../assets/images/Rectangle 21.png";
import pic3 from "../assets/images/pic3.png";
import pic4 from "../assets/images/Frame 137.png";
import pic5 from "../assets/images/Map icon.png";
import bathtab from "../assets/images/Beds.png";
import bed from "../assets/images/Beds2.png";
import belcony from "../assets/images/belcony.png";
import furnished from "../assets/images/Beds4.png";
import item1 from "../assets/images/item1.png";
import item2 from "../assets/images/item2.png";
import item3 from "../assets/images/item3.png";
import item4 from "../assets/images/item4.png";
import item5 from "../assets/images/Frame 154.png";
import item6 from "../assets/images/Frame 155.png";
import item7 from "../assets/images/Frame 156.png";
import item8 from "../assets/images/Frame 157.png";
import item9 from "../assets/images/Frame 158.png";
import Otherservice from "@/components/ui/otherservice";
import Propertycard from "@/components/ui/propertycard";
import radio from '../assets/images//Frame radio.png'
import Link from "next/link";

const PropertyDetail = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="flex flex-col md:flex-row mx-5 md:mx-[5rem] my-5 md:my-[5rem]">
        <div className="w-full md:w-[60%]">
          <div className="flex flex-col md:flex-row">
            <div className="flex-grow">
              <p className="text-2xl md:text-3xl font-semibold">
                3 BHK Builder Floor for Sale in Site Ram Bazar Hyderabad
              </p>
              <div className="flex items-center mt-2">
                <Image src={location} width={24} height={24} />
                <p className="ml-2">Meadowshire Park, Greenfield, USA</p>
              </div>
            </div>
            <div className="flex-shrink-0 md:ml-auto md:mt-0 mt-4 md:mt-0">
              <p className="font-bold text-3xl md:text-4xl">$300k</p>
            </div>
          </div>
          <hr className="my-5" />
          <div>
            <Image className="w-full  h-[400px] object-cover " src={pic1} />
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="w-full md:w-1/3">
              <Image className="w-full h-[180px] object-cover p-2" src={pic2} />
            </div>
            <div className="w-full md:w-1/3 mt-4 md:mt-0">
              <Image
                className="w-full h-[180px] object-cover mx-2 p-2"
                src={pic3}
              />
            </div>
            <div className="w-full md:w-1/3 mt-4 md:mt-0">
              <Image
                className="w-full h-[180px] object-cover ms-2 p-2"
                src={pic4}
              />
            </div>
          </div>

          <div className="card w-full md:w-[980px] bg-[#F9FAFB] mt-4">
            <div className="card-body">
              <p className="font-semibold text-3xl md:text-4xl">Overview</p>
              <div className="bg-white shadow-lg mt-4">
                <div className="grid grid-cols-2 md:grid-cols-4 items-center">
                  <Image src={bathtab} className="mx-2 my-2 md:mx-5 md:my-5" />
                  <Image src={bed} className="mx-2 my-2 md:mx-5 md:my-5" />
                  <Image src={belcony} className="mx-2 my-2 md:mx-5 md:my-5" />
                  <Image
                    src={furnished}
                    className="mx-2 my-2 md:mx-5 md:my-5"
                  />
                </div>
              </div>
              <div className="flex flex-wrap mt-5">
                <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                  <p>Carpet Area</p>
                  <p className="text-lg md:text-xl font-semibold">2000 sqft</p>
                  <p>$ 225/sqft</p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                  <p>Floor</p>
                  <p className="text-lg md:text-xl font-semibold">
                    Second (Out of 6th floor)
                  </p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                  <p>Transaction Type</p>
                  <p className="text-lg md:text-xl font-semibold">
                    Ready to move
                  </p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                  <p>Lift</p>
                  <p className="text-lg md:text-xl font-semibold">1</p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                  <p>Facing</p>
                  <p className="text-lg md:text-xl font-semibold">
                    North - East
                  </p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                  <p>Additional Rooms</p>
                  <p className="text-lg md:text-xl font-semibold">
                    1 servant room & 1 gust room
                  </p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                  <p>Age of construction</p>
                  <p className="text-lg md:text-xl font-semibold">
                    New Construction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[35%] mt-5 md:mt-0 md:ml-[3rem]">
          <div className="md:w-[384px]  md:w-full h-[492px] bg-[#ECF5FF] mt-[6rem]  p-5 md:ml-[3rem]">
            <p>Property Value</p>
            <p className="font-bold text-3xl md:text-4xl my-4">
              $ 300k - $ 310k
            </p>
            <h6 className="mt-4">
              Your bid can not be than 10% of the <br /> property Minimum value.
            </h6>
            <div className="mt-4">
              <small>Min</small> <br />
              <input
                type="text"
                name=""
                id=""
                placeholder="$ 280k"
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="mt-3">
              <small>Max</small> <br />
              <input
                type="text"
                name=""
                id=""
                placeholder="$ 280"
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div>
                <Image className="my-4 w-[33rem] h-[2rem]" src={radio}></Image>
            </div>
            <div className="flex justify-between">
                <div>$ 280k</div>
                <div>$ 305k</div>
            </div>
            <div className="flex justify-center mt-5">
              <Link href="/">
                <button className="px-4 bg-[#0059B1] text-white w-[166px] h-[48px] rounded-sm mt-5 md:mt-[5rem]">
                  Bid Property
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-5">
            <Image
              className="w-[384px] md:w-full h-[422px] md:ms-[3rem] md:ms-0"
              src={pic5}
            />
          </div>
        </div>
      </div>

      <div className="card w-full md:w-[90%] md:ml-[6rem] bg-[#F9FAFB] mt-4">
        <div className="card-body">
          <p className="font-semibold text-3xl md:text-4xl">Amenities</p>
          

          <div className="flex justify-center">
            <Image src={item5} />
          </div>
          <div className="flex justify-center">
            <Image src={item6} />
          </div>
          <div className="flex justify-center">
            <Image src={item7} />
          </div>
          <div className="flex justify-center">
            <Image src={item8} />
          </div>
          <div className="flex justify-center">
            <Image src={item9} />
          </div>
        </div>
      </div>

      <Otherservice />
      <div className="flex justify-between md:mx-[18rem] mt-5 md:p-[0px] p-5">
        <p className="md:text-3xl md:text-4xl font-semibold">
          Other Nearby Properties
        </p>
        <div>
          <p className="underline  md:text-xl text-[#0059B1] font-semibold">
            See all property
          </p>
        </div>
      </div>
      <Propertycard />
      <Footer />
    </div>
  );
};

export default PropertyDetail;
