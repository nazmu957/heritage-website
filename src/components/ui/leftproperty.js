import Image from "next/image";
import React from "react";
import property1 from "../../assets/images/property-image1.jpg";
import property2 from "../../assets/images/property-img-2.jpg";
import play from "../../assets/images/Group 27.png";
import Findbutton from "./findbutton";
import line from "../../assets/images/Line 9.png";

const Leftproperty = () => {
  return (
    <div className="flex flex-wrap justify-center  relative h-auto md:h-[504px]">
      {/* Left Side */}
      <div className="w-full md:w-1/2  relative">
        <Image
          className=" md:w-[458px] md:h-[400px] w-[230px] h-[200px] absolute top-0 left-0 opacity-80 md:ms-[5rem] ms-[2rem]  mt-[5rem] "
          src={property1}
        ></Image>
        {/* <img
          className=" md:w-[458px] md:h-[400px] w-[230px] h-[200px] absolute top-0 left-0 opacity-80 md:ms-[5rem] ms-[2rem]  mt-[5rem] "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk5wjVVEfV5BRHpV19oZ8oMCPvCZQhStMujA&s"
          alt=""
        /> */}
        <Image
          className="md:w-[452px] md:h-[240px] w-[70%] h-[150px] absolute md:top-[20rem] top-[12rem] md:left-[6rem] left-[5rem] md:ms-[5rem]"
          src={property2}
        ></Image>
        <Image
          className="md:w-[72px] md:h-[72px] w-[60px] absolute md:top-[18rem] top-[10rem] md:left-[16rem] left-[15rem] md:ms-[15rem]"
          src={play}
        ></Image>
      </div>
      {/* Right Side */}
      <div className="w-full md:w-1/2 p-4 md:mt-[4rem] mt-[23rem] md:p-[0px] px-[2rem]">
        <div className=" md:text-left">
          {/* <p className="md:text-[18px] text-[10px] text-[#F06711] font-semibold ">
            Property buying
          </p> */}

          <div className="flex items-center mb-4">
            <Image className="h-1 md:h-[.2rem] mt-3 mr-3" src={line} />
            <h1 className="text-lg md:text-[18px] font-semibold text-[#EE6611]">
              Property buying 
            </h1>
          </div>
          <h2 className="md:text-[40px] text-[25px]  font-bold mb-4">
            Efficient and Transparent <br /> Home Buying Solutions
          </h2>
          <p className="text-lg mb-4">
            It is a long established fact that a reader will be distracted by
            the <br /> readable content of a page when looking at its layout. 
          </p>
          <Findbutton />
        </div>
      </div>
    </div>
  );
};

export default Leftproperty;
