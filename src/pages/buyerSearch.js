import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import React from "react";
import home2 from "../assets/images/home2.png";
import location from "../assets/images/Group 44.png";
import loading from "../assets/images/Capa_1.png";
import frame from "../assets/images/Frame.png";
import group from "../assets/images/Group.png";

import Image from "next/image";
import Testimonials from "@/components/ui/testimonials";
import Link from "next/link";

const BuyerSearch = () => {
  return (
    <div>
      <Navbar />
      <div className="ms-[7rem] my-[3rem]">
        <button className="w-[176px] h-[44px] text-white bg-[#0059B1]">
          properties(400)
        </button>
        <Link href="/propertyDetail">
          <button className="w-[176px] h-[44px] text-black bg-[#ECF5FF] mx-4">
            New Projects(400)
          </button>
        </Link>
        <Link href="/">
          <button className="w-[176px] h-[44px] text-black bg-[#ECF5FF]">
            pre-launch offers
          </button>
        </Link>
        <hr className="mt-3 w-[35rem]" />
        <h1 className="text-[24px]">400 results for rental property</h1>
      </div>

      <div>
        <div className="card w-[800px] card-side rounded-none bg-[#F9FAFB]  ms-[7rem] ">
          <figure>
            <Image className="w-[152px] h-[184px] m-3" src={home2}></Image>
          </figure>
          <div className="card-body">
            <div className="flex">
              <div>
                <h2 className="card-title">
                  3 BHK Builder Floor for Sale in Site Ram Bazar
                </h2>
                <p className="text-[18px] font-semibold">New Delhi</p>

                <div className="flex my-3">
                  <Image
                    className="w-[20px] h-[20px] me-2 mt-"
                    src={location}
                  ></Image>
                  <p className="text-[16px]">
                    {" "}
                    Meadowshire Park, Greenfield, USA
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[24px] font-bold ms-5">$ 300000</p>
                <Link href="/propertyDetail">
                  <button className="border px-4 py-2 ms-[1rem] border-black mt-3">
                    {" "}
                    Bid Property
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex">
              <h1>Property details</h1>
              <div className="w-[27rem] h-[0.2rem] mt-3 bg-[#E3E3E3] ms-3"></div>
            </div>
            <div>
              <div className="flex ">
                <div className="bg-[#EE6611] w-[40px] h-[40px] rounded-md mt-1">
                  <Image className="ms-2 pt-2" src={loading}></Image>
                </div>
                <div className="ms-3 me-[4rem]">
                  <p>Total Area</p>
                  <p>892 sqft</p>
                </div>
                <div className="bg-[#EE6611] w-[40px] h-[40px] rounded-md mt-1">
                  <Image className="ms-2 pt-2" src={frame}></Image>
                </div>
                <div className="ms-3 me-[4rem]">
                  <p>Status</p>
                  <p>Ready to move</p>
                </div>
                <div className="bg-[#EE6611] w-[40px] h-[40px] rounded-md mt-1">
                  <Image className="ms-2 pt-2" src={group}></Image>
                </div>
                <div className="ms-3 ">
                  <p>Total Area</p>
                  <p>892 sqft</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card w-[800px] card-side rounded-none bg-[#F9FAFB]  ms-[7rem] my-4 ">
          <figure>
            <Image className="w-[152px] h-[184px] m-3" src={home2}></Image>
          </figure>
          <div className="card-body">
            <div className="flex">
              <div>
                <h2 className="card-title">
                  3 BHK Builder Floor for Sale in Site Ram Bazar
                </h2>
                <p className="text-[18px] font-semibold">New Delhi</p>

                <div className="flex my-3">
                  <Image
                    className="w-[20px] h-[20px] me-2 mt-"
                    src={location}
                  ></Image>
                  <p className="text-[16px]">
                    {" "}
                    Meadowshire Park, Greenfield, USA
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[24px] font-bold ms-5">$ 300000</p>
                <Link href="/propertyDetail">
                  <button className="border px-4 py-2 ms-[1rem] border-black mt-3">
                    {" "}
                    Bid Property
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex">
              <h1>Property details</h1>
              <div className="w-[27rem] h-[0.2rem] mt-3 bg-[#E3E3E3] ms-3"></div>
            </div>
            <div>
              <div className="flex ">
                <div className="bg-[#EE6611] w-[40px] h-[40px] rounded-md mt-1">
                  <Image className="ms-2 pt-2" src={loading}></Image>
                </div>
                <div className="ms-3 me-[4rem]">
                  <p>Total Area</p>
                  <p>892 sqft</p>
                </div>
                <div className="bg-[#EE6611] w-[40px] h-[40px] rounded-md mt-1">
                  <Image className="ms-2 pt-2" src={frame}></Image>
                </div>
                <div className="ms-3 me-[4rem]">
                  <p>Status</p>
                  <p>Ready to move</p>
                </div>
                <div className="bg-[#EE6611] w-[40px] h-[40px] rounded-md mt-1">
                  <Image className="ms-2 pt-2" src={group}></Image>
                </div>
                <div className="ms-3 ">
                  <p>Total Area</p>
                  <p>892 sqft</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-[800px] card-side rounded-none bg-[#F9FAFB]  ms-[7rem] my-4 ">
          <figure>
            <Image className="w-[152px] h-[184px] m-3" src={home2}></Image>
          </figure>
          <div className="card-body">
            <div className="flex">
              <div>
                <h2 className="card-title">
                  3 BHK Builder Floor for Sale in Site Ram Bazar
                </h2>
                <p className="text-[18px] font-semibold">New Delhi</p>

                <div className="flex my-3">
                  <Image
                    className="w-[20px] h-[20px] me-2 mt-"
                    src={location}
                  ></Image>
                  <p className="text-[16px]">
                    {" "}
                    Meadowshire Park, Greenfield, USA
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[24px] font-bold ms-5">$ 300000</p>
                <Link href="/propertyDetail">
                  <button className="border px-4 py-2 ms-[1rem] border-black mt-3">
                    {" "}
                    Bid Property
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex">
              <h1>Property details</h1>
              <div className="w-[27rem] h-[0.2rem] mt-3 bg-[#E3E3E3] ms-3"></div>
            </div>
            <div>
              <div className="flex ">
                <div className="bg-[#EE6611] w-[40px] h-[40px] rounded-md mt-1">
                  <Image className="ms-2 pt-2" src={loading}></Image>
                </div>
                <div className="ms-3 me-[4rem]">
                  <p>Total Area</p>
                  <p>892 sqft</p>
                </div>
                <div className="bg-[#EE6611] w-[40px] h-[40px] rounded-md mt-1">
                  <Image className="ms-2 pt-2" src={frame}></Image>
                </div>
                <div className="ms-3 me-[4rem]">
                  <p>Status</p>
                  <p>Ready to move</p>
                </div>
                <div className="bg-[#EE6611] w-[40px] h-[40px] rounded-md mt-1">
                  <Image className="ms-2 pt-2" src={group}></Image>
                </div>
                <div className="ms-3 ">
                  <p>Total Area</p>
                  <p>892 sqft</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-[800px] card-side rounded-none bg-[#F9FAFB]  ms-[7rem] my-4 ">
          <figure>
            <Image className="w-[152px] h-[184px] m-3" src={home2}></Image>
          </figure>
          <div className="card-body">
            <div className="flex">
              <div>
                <h2 className="card-title">
                  3 BHK Builder Floor for Sale in Site Ram Bazar
                </h2>
                <p className="text-[18px] font-semibold">New Delhi</p>

                <div className="flex my-3">
                  <Image
                    className="w-[20px] h-[20px] me-2 mt-"
                    src={location}
                  ></Image>
                  <p className="text-[16px]">
                    {" "}
                    Meadowshire Park, Greenfield, USA
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[24px] font-bold ms-5">$ 300000</p>
                <Link href="/propertyDetail">
                  <button className="border px-4 py-2 ms-[1rem] border-black mt-3">
                    {" "}
                    Bid Property
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex">
              <h1>Property details</h1>
              <div className="w-[27rem] h-[0.2rem] mt-3 bg-[#E3E3E3] ms-3"></div>
            </div>
            <div>
              <div className="flex ">
                <div className="bg-[#EE6611] w-[40px] h-[40px] rounded-md mt-1">
                  <Image className="ms-2 pt-2" src={loading}></Image>
                </div>
                <div className="ms-3 me-[4rem]">
                  <p>Total Area</p>
                  <p>892 sqft</p>
                </div>
                <div className="bg-[#EE6611] w-[40px] h-[40px] rounded-md mt-1">
                  <Image className="ms-2 pt-2" src={frame}></Image>
                </div>
                <div className="ms-3 me-[4rem]">
                  <p>Status</p>
                  <p>Ready to move</p>
                </div>
                <div className="bg-[#EE6611] w-[40px] h-[40px] rounded-md mt-1">
                  <Image className="ms-2 pt-2" src={group}></Image>
                </div>
                <div className="ms-3 ">
                  <p>Total Area</p>
                  <p>892 sqft</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-[800px] card-side rounded-none bg-[#F9FAFB]  ms-[7rem] my-4 ">
          <figure>
            <Image className="w-[152px] h-[184px] m-3" src={home2}></Image>
          </figure>
          <div className="card-body">
            <div className="flex">
              <div>
                <h2 className="card-title">
                  3 BHK Builder Floor for Sale in Site Ram Bazar
                </h2>
                <p className="text-[18px] font-semibold">New Delhi</p>

                <div className="flex my-3">
                  <Image
                    className="w-[20px] h-[20px] me-2 mt-"
                    src={location}
                  ></Image>
                  <p className="text-[16px]">
                    {" "}
                    Meadowshire Park, Greenfield, USA
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[24px] font-bold ms-5">$ 300000</p>
                <Link href="/propertyDetail">
                  <button className="border px-4 py-2 ms-[1rem] border-black mt-3">
                    {" "}
                    Bid Property
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex">
              <h1>Property details</h1>
              <div className="w-[27rem] h-[0.2rem] mt-3 bg-[#E3E3E3] ms-3"></div>
            </div>
            <div>
              <div className="flex ">
                <div className="bg-[#EE6611] w-[40px] h-[40px] rounded-md mt-1">
                  <Image className="ms-2 pt-2" src={loading}></Image>
                </div>
                <div className="ms-3 me-[4rem]">
                  <p>Total Area</p>
                  <p>892 sqft</p>
                </div>
                <div className="bg-[#EE6611] w-[40px] h-[40px] rounded-md mt-1">
                  <Image className="ms-2 pt-2" src={frame}></Image>
                </div>
                <div className="ms-3 me-[4rem]">
                  <p>Status</p>
                  <p>Ready to move</p>
                </div>
                <div className="bg-[#EE6611] w-[40px] h-[40px] rounded-md mt-1">
                  <Image className="ms-2 pt-2" src={group}></Image>
                </div>
                <div className="ms-3 ">
                  <p>Total Area</p>
                  <p>892 sqft</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50rem] h-[0.1rem] mt-3 bg-[#E3E3E3] ms-[7rem] mb-4"></div>
        <div className="ms-[7rem] my-5">
          <button className="bg-[#0059B1] w-[38px] h-[40px] text-white rounded-md">
            01
          </button>
          <button className="bg-[#ECF5FF] w-[38px] h-[40px]  mx-3 rounded-md">
            02
          </button>
          <button className="bg-[#ECF5FF] w-[71px] h-[40px]  rounded-md">
            Next
          </button>
        </div>
      </div>

      <div className="ms-[15rem]">
        <h1 className=" ms-[35rem] text-[40px] font-bold mb-[3rem]">
          Testimonials
        </h1>
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default BuyerSearch;
