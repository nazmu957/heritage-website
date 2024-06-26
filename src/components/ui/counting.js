import React from "react";
import arrow from "../../assets/images/Arrow Right.png";
import Image from "next/image";
import Link from "next/link";
import icon from "../../assets/images/icon.svg";
import icon2 from "../../assets/images/icon2.png";

const Counting = () => {
  return (
    <div className="my-[3rem]  flex  ">
      <div className="bg-[#FDF0E7] w-[280px] h-[185px] me-[3rem]">
        <div className="ms-[2.5rem]  pt-4">
          <h1 className="text-[40px] font-bold text-[#D95D0F]">2K+</h1>
          <p className="text-[16px]">New Flat Listed</p>
        </div>
        <div className="flex ms-[2.3rem] mt-[2rem]">
          <a className="underline text-[16px]  text-[#EE6611]" href="">
            View all
          </a>
          <div className=" w-[24px] h-[24px]  ">
            <Link href={"/"}>
              <Image className="ms-[8rem]" src={icon2}></Image>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#ECF5FF] w-[280px] h-[185px] me-[3rem]">
        <div className="ms-[2.5rem] pt-4">
          <h1 className="text-[40px] font-bold text-[#0051A1]">2K+</h1>
          <p className="text-[16px]">New Flat Listed</p>
        </div>
        <div className="flex ms-[2.3rem] mt-[2rem]">
          <a className="underline text-[16px]  text-[#0051A1]" href="">
            View all
          </a>
          <div className=" w-[24px] h-[24px]  ">
            <Link href={"/"}>
              <Image className="ms-[8rem]" src={icon}></Image>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#FDF0E7] w-[280px] h-[185px] me-[3rem]">
        <div className="ms-[2.5rem] pt-4">
          <h1 className="text-[40px] font-bold text-[#D95D0F]">2K+</h1>
          <p className="text-[16px]">New Flat Listed</p>
        </div>
        <div className="flex ms-[2.3rem] mt-[2rem]">
          <a className="underline text-[16px]  text-[#EE6611]" href="">
            View all
          </a>
          <div className=" w-[24px] h-[24px]  ">
            <Link href={"/"}>
              <Image className="ms-[8rem]" src={icon2}></Image>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#ECF5FF] w-[280px] h-[185px] ">
        <div className="ms-[2.5rem] pt-4">
          <h1 className="text-[40px] font-bold text-[#0051A1]">2K+</h1>
          <p className="text-[16px]">New Flat Listed</p>
        </div>
        <div className="flex ms-[2.3rem] mt-[2rem]">
          <a className="underline text-[16px]  text-[#0051A1]" href="">
            View all
          </a>
          <div className=" w-[24px] h-[24px]  ">
            <Link href={"/"}>
              <Image className="ms-[8rem]" src={icon}></Image>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counting;
