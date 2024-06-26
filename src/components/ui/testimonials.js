import React from "react";
import grade from "../../assets/images/grade.png";
import grade1 from "../../assets/images/grade (1).png";
import tony from "../../assets/images/Ellipse 1 (1).png";
import tony2 from "../../assets/images/Ellipse 2.png";

import Image from "next/image";
import Footer from "./footer";

const Testimonials = () => {
  return (
    <div className="my-[3rem]">
      <div className="flex ">
        <div className="card w-[592px] h-[364px] bg-[#ECF5FF] shadow-xl ms-4">
          <div className="card-body">
            <div className="flex justify-center my-4">
              <Image className="w-[32px] h-[32px]" src={grade}></Image>
              <Image className="w-[32px] h-[32px]" src={grade}></Image>
              <Image className="w-[32px] h-[32px]" src={grade}></Image>
              <Image className="w-[32px] h-[32px]" src={grade}></Image>
              <Image className="w-[32px] h-[32px]" src={grade1}></Image>
            </div>
            <p className="text-center">
              The level of security provided by CypherPlay is unmatched. I feel
              confident using my card for both everyday purchases and travel.
              Its the peace of mind I was looking for
            </p>
            <div className="flex justify-center">
              <div className="text-center ">
                <Image
                  className="w-[48px] h-[48px] ms-[4rem] my-3"
                  src={tony}
                ></Image>
                <p className="text-[20px] font-semibold">Tony Stark</p>
                <p>Marketing manager, XYZ</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-[592px] h-[364px] bg-[#ECF5FF] shadow-xl ms-[5rem]">
          <div className="card-body">
            <div className="flex justify-center my-4">
              <Image className="w-[32px] h-[32px]" src={grade}></Image>
              <Image className="w-[32px] h-[32px]" src={grade}></Image>
              <Image className="w-[32px] h-[32px]" src={grade}></Image>
              <Image className="w-[32px] h-[32px]" src={grade}></Image>
              <Image className="w-[32px] h-[32px]" src={grade1}></Image>
            </div>
            <p className="text-center">
              The level of security provided by CypherPlay is unmatched. I feel
              confident using my card for both everyday purchases and travel.
              Its the peace of mind I was looking for
            </p>
            <div className="flex justify-center">
              <div className="text-center ">
                <Image
                  className="w-[48px] h-[48px] ms-[4rem] my-3"
                  src={tony2}
                ></Image>
                <p className="text-[20px] font-semibold">Tony Stark</p>
                <p>Marketing manager, XYZ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
