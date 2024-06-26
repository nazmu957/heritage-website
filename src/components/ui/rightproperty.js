import Image from "next/image";
import React from "react";
import Findbutton from "./findbutton";

import property3 from "../../assets/images/property-img-3.jpg";
import property4 from "../../assets/images/property-img-4.jpg";
import play from "../../assets/images/Group 27.png";

const Rightproperty = () => {
  return (
    <div className="flex flex-wrap justify-center relative md:h-[504px]">
      {/* Right Side */}
      <div className="w-full md:w-1/2 md:p-4 md:mt-[4rem] md:px-[0px] px-[2rem]">
        <div className=" md:text-left md:ms-[5rem] mt-[4rem]">
          <p className="md:text-[18px] text-[15px]  text-[#F06711] font-semibold ">
            Property buying
          </p>
          <h2 className="md:text-[40px] text-[25px] font-bold mb-4">
            Efficient and Transparent <br /> Home Buying Solutions
          </h2>
          <p className="text-lg mb-4">
            It is a long established fact that a reader will be distracted by
            the <br /> readable content of a page when looking at its layout.
          </p>
          <Findbutton />
        </div>
      </div>
      {/* Left Side */}
      <div className="w-full md:w-1/2 relative md:mt-[5rem] md:mb-[0px] mb-[10rem]">
        <Image
          className="absolute top-5 left-0  md:ms-[5rem] ms-[2rem] mt-[5rem] md:w-[458px] md:h-[400px] w-[280px] h-[175px]"
          src={property3}
        ></Image>
        <Image
          className="absolute top-[2rem] md:left-[6rem] left-[4rem] md:ms-[5rem]  md:w-[452px] md:h-[240px] w-[70%] h-[140px]"
          src={property4}
        ></Image>
        <Image
          className="absolute top-[4rem] md:left-[9rem] left-[2rem] md:w-[72px] md:h-[72px] w-[60px]"
          src={play}
        ></Image>
      </div>
    </div>
  );
};

export default Rightproperty;
