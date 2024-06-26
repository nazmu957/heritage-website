import React from "react";
import ractangle from "../../assets/images/Rectangle 26.png";
import navigation from "../../assets/images/Group 44.png";
import banner1 from "../../assets/images/Banner Image (1).jpg";
import count from "../../assets/images/Image count.png";
import banner2 from "../../assets/images/Banner Image 2.jpg";
import banner3 from "../../assets/images/Banner Image 3.jpg";

import Image from "next/image";

const Propertycard = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="card w-96 bg-[#F9FAFB] rounded-none m-4">
        <figure>
          <Image
            className="absolute top-0 left-0 w-full h-[200px] object-cover"
            src={banner1}
            alt="Banner Image"
          />
          <Image
            className="absolute top-[10rem] left-[1rem] w-[55px] h-[28px]"
            src={count}
            alt="Count Image"
          />
        </figure>
        <div className="card-body mt-[12rem]">
          <div className="flex justify-between">
            <button className="bg-[#C5E2FF] px-3 py-1">Apartment</button>
            <div className="flex items-center">
              <Image
                className="h-[8px] w-[8px]  me-2"
                src={ractangle}
                alt="Rectangle Image"
              />
              <button>Ready to Move</button>
            </div>
          </div>
          <hr />
          <p className="text-[20px] font-semibold">SunnySlope Suites</p>
          <div className="flex items-center">
            <Image className="me-3" src={navigation} alt="Navigation Image" />
            <p className="text-[16px]">Meadowshire Park, Greenfield, USA</p>
          </div>
          <h1 className="text-[24px] font-semibold">$ 250000</h1>
        </div>
      </div>
      <div className="card w-96 bg-[#F9FAFB] rounded-none m-4">
        <figure>
          <Image
            className="absolute top-0 left-0 w-full h-[200px] object-cover"
            src={banner2}
            alt="Banner Image"
          />
          <Image
            className="absolute top-[10rem] left-[1rem] w-[55px] h-[28px]"
            src={count}
            alt="Count Image"
          />
        </figure>
        <div className="card-body mt-[12rem]">
          <div className="flex justify-between">
            <button className="bg-[#C5E2FF] px-3 py-1">Apartment</button>
            <div className="flex items-center">
              <Image
                className="h-[8px] w-[8px]  me-2"
                src={ractangle}
                alt="Rectangle Image"
              />
              <button>Ready to Move</button>
            </div>
          </div>
          <hr />
          <p className="text-[20px] font-semibold">SunnySlope Suites</p>
          <div className="flex items-center">
            <Image className="me-3" src={navigation} alt="Navigation Image" />
            <p className="text-[16px]">Meadowshire Park, Greenfield, USA</p>
          </div>
          <h1 className="text-[24px] font-semibold">$ 250000</h1>
        </div>
      </div>
      <div className="card w-96 bg-[#F9FAFB] rounded-none m-4">
        <figure>
          <Image
            className="absolute top-0 left-0 w-full h-[200px] object-cover"
            src={banner3}
            alt="Banner Image"
          />
          <Image
            className="absolute top-[10rem] left-[1rem] w-[55px] h-[28px]"
            src={count}
            alt="Count Image"
          />
        </figure>
        <div className="card-body mt-[12rem]">
          <div className="flex justify-between">
            <button className="bg-[#C5E2FF] px-3 py-1">Apartment</button>
            <div className="flex items-center">
              <Image
                className="h-[8px] w-[8px]  me-2"
                src={ractangle}
                alt="Rectangle Image"
              />
              <button>Ready to Move</button>
            </div>
          </div>
          <hr />
          <p className="text-[20px] font-semibold">SunnySlope Suites</p>
          <div className="flex items-center">
            <Image className="me-3" src={navigation} alt="Navigation Image" />
            <p className="text-[16px]">Meadowshire Park, Greenfield, USA</p>
          </div>
          <h1 className="text-[24px] font-semibold">$ 250000</h1>
        </div>
      </div>
    </div>
  );
};

export default Propertycard;
