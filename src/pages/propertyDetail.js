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
import Link from "next/link";

const PropertyDetail = () => {
  return (
    <div>
      <Navbar />
      <div className="flex mx-[5rem] my-[5rem]">
        <div className="w-[60%]">
          <div className="flex">
            <div className="">
              <p className="text-[20px] font-semibold">
                3 BHK Builder Floor for Sale in Site Ram Bazar Hyderabad
              </p>
              <div className="flex">
                <Image src={location}></Image>
                <p className="ms-2">Meadowshire Park, Greenfield, USA</p>
              </div>
            </div>
            <div className="ms-[20rem]">
              <p className="font-bold text-[28px]">$300k</p>
            </div>
          </div>
          <hr className="my-5" />
          <div>
            <Image className="w-[1000px] h-[500px]" src={pic1}></Image>
          </div>
          <div className="flex">
            <div>
              <Image className="w-[360px] h-[180px] mt-4" src={pic2}></Image>
            </div>
            <div>
              <Image
                className="w-[360px] h-[180px] mt-4 mx-4"
                src={pic3}
              ></Image>
            </div>
            <div>
              <Image
                className="w-[234px] h-[180px] mt-4 ms-3"
                src={pic4}
              ></Image>
            </div>
          </div>

          <div className="card w-[980px] bg-[#F9FAFB] mt-4">
            <div className="card-body">
              <p className="font-semibold text-[24px]">Overview</p>
              <div className="bg-white h-[56px] shadow-lg">
                <div className="flex">
                  <Image src={bathtab}></Image>
                  <Image className="mx-5" src={bed}></Image>
                  <Image className="mx-5" src={belcony}></Image>
                  <Image className="mx-5" src={furnished}></Image>
                </div>
              </div>
              <div className="flex">
                <div className="mt-5">
                  <p>Carpet Area</p>
                  <p className="text-16 font-semibold">2000 sqft</p>
                  <p>$ 225/sqft</p>
                </div>
                <div className="mt-5 mx-[3rem]">
                  <p>Floor</p>
                  <p className="text-16 font-semibold">
                    Second (Out of 6th floor)
                  </p>
                </div>
                <div className="mt-5 mx-[3rem]">
                  <p>Transaction Type</p>
                  <p className="text-16 font-semibold">Ready to move</p>
                </div>
                <div className="mt-5 mx-[3rem]">
                  <p>Lift</p>
                  <p className="text-16 font-semibold">1</p>
                </div>
              </div>
              <div className="flex">
                <div className="mt-5">
                  <p>Facing</p>
                  <p className="text-16 font-semibold">North - East</p>
                </div>
                <div className="mt-5 mx-[3rem]">
                  <p>Additional Rooms</p>
                  <p className="text-16 font-semibold">
                    1 servant room & 1 gust room
                  </p>
                </div>
                <div className="mt-5 mx-[3rem]">
                  <p>Age of construction</p>
                  <p className="text-16 font-semibold">New Construction</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[35%]">
          <div className="w-[384px] h-[492px] bg-[#ECF5FF] mt-[6rem] ms-[3rem]">
            <div className="p-5">
              <p>Property Value</p>
              <p className="font-bold text-[24px] my-4">$ 300k - $ 310k</p>
              <h6>
                Your bid can not be than 10% of the <br /> property Minimum
                value.
              </h6>
              <div className="mt-3">
                <small>Min</small> <br />
                <input type="text" name="" id="" placeholder="$ 280k" />
              </div>
              <div className="mt-3">
                <small>Max</small> <br />
                <input type="text" name="" id="" placeholder="$ 280" />
              </div>
            </div>
            <div className="flex justify-center ">
              <Link href="/">
                <button className="px-4 bg-[#0059B1] text-white w-[166px] h-[48px] rounded-sm mt-[5rem]">
                  Bid Property
                </button>
              </Link>
            </div>
          </div>
          <div>
            <Image
              className="w-[384px] h-[422px] ms-[3rem] mt-[3rem]"
              src={pic5}
            ></Image>
          </div>
        </div>
      </div>

      <div className="card w-[77%] ms-[6rem] bg-[#F9FAFB] mt-[4rem]">
        <div className="card-body">
          <p className="font-semibold text-[24px]">Amenities</p>
          <div className=" h-[56px] ">
            <div className="flex">
              <Image src={item1}></Image>
              <Image className="mx-5" src={item2}></Image>
              <Image className="mx-5" src={item3}></Image>
              <Image className="mx-5" src={item4}></Image>
            </div>
          </div>
          <div className=" mt-8">
            <Image src={item5}></Image>
            <Image src={item6}></Image>
            <Image src={item7}></Image>
            <Image src={item8}></Image>
            <Image src={item9}></Image>
          </div>
        </div>
      </div>
      <Otherservice />
      <div className="flex justify-between mx-[18rem] mt-5">
        <p className="text-[32px] font-semibold">Other Nearby Properties</p>
        <div>
          <p className="underline text-[18px] text-[#0059B1] font-semibold">
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
