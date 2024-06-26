import Image from "next/image";
import React from "react";
import property5 from "../../assets/images/property-img-5.jpg";
import property6 from "../../assets/images/property-img-6.jpg";
import play from "../../assets/images/Group 27.png";
import Findbutton from "./findbutton";
import line from "../../assets/images/Line 9.png";

const Otherproperty = () => {
  return (
    <div className="flex flex-wrap justify-center  relative h-[504px] md:my-[3rem] my-[12rem]">
      {/* Left Side */}
      <div className="w-full md:w-1/2  relative md:mb-[0rem] mb-[18rem]">
        <Image
          className=" md:w-[458px] md:h-[400px] w-[70%] h-[200px]  absolute top-0 left-0 opacity-80 md:ms-[5rem] ms-[2rem] mt-[5rem]"
          src={property5}
        ></Image>
        <Image
          className="md:w-[452px] md:h-[240px] w-[70%] h-[140px] absolute md:top-[20rem] top-[12rem] md:left-[6rem] left-[5rem] md:ms-[5rem] rounded-md"
          src={property6}
        ></Image>
        <Image
          className=" absolute md:top-[18rem] top-[10rem] md:left-[16rem] left-[2rem] ms-[15rem]  md:w-[72px] md:h-[72px] w-[60px]"
          src={play}
        ></Image>
      </div>
      {/* Right Side */}
      <div className="w-full md:w-1/2 p-4 mt-[4rem]">
        <div className=" md:text-left  ">
          <div className="flex items-center mb-4">
            <Image className="h-1 md:h-[.2rem] mt-3 mr-3" src={line} />
            <h1 className="text-lg md:text-[18px] font-semibold text-[#EE6611]">
              Property buying
            </h1>
          </div>
          <h2 className="md:text-[40px] text-[25px] font-bold mb-4">
            Efficient and Transparent <br /> Home Buying Solutions
          </h2>
          <p className="text-lg mb-4">
            It is a long established fact that a reader will be distracted by
            the <br />
            readable content of a page when looking at its layout. 
          </p>
          <Findbutton />
        </div>
      </div>
    </div>
  );
};

export default Otherproperty;
