import React from "react";
import arrow from "../../assets/images/Arrow Right.png";
import Image from "next/image";
import Link from "next/link";
import icon from "../../assets/images/icon.svg";
import icon2 from "../../assets/images/icon2.png";

const Counting = () => {
  return (
    <div className="my-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div className="bg-[#FDF0E7] w-full h-[185px] p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-[40px] font-bold text-[#D95D0F]">2K+</h1>
          <p className="text-[16px]">New Flat Listed</p>
        </div>
        <div className="flex justify-between items-center">
          <a className="underline text-[16px] text-[#EE6611]" href="">
            View all
          </a>
          <div className="w-6 h-6">
            <Link href="/">
              <Image src={icon2}></Image>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#ECF5FF] w-[280px] h-[185px] p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-[40px] font-bold text-[#0051A1]">2K+</h1>
          <p className="text-[16px]">New Flat Listed</p>
        </div>
        <div className="flex justify-between items-center">
          <a className="underline text-[16px] text-[#0051A1]" href="">
            View all
          </a>
          <div className="w-6 h-6">
            <Link href="/">
              <Image src={icon}></Image>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#FDF0E7] w-full h-[185px] p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-[40px] font-bold text-[#D95D0F]">2K+</h1>
          <p className="text-[16px]">New Flat Listed</p>
        </div>
        <div className="flex justify-between items-center">
          <a className="underline text-[16px] text-[#EE6611]" href="">
            View all
          </a>
          <div className="w-6 h-6">
            <Link href="/">
              <Image src={icon2}></Image>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#ECF5FF] w-full h-[185px] p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-[40px] font-bold text-[#0051A1]">2K+</h1>
          <p className="text-[16px]">New Flat Listed</p>
        </div>
        <div className="flex justify-between items-center">
          <a className="underline text-[16px] text-[#0051A1]" href="">
            View all
          </a>
          <div className="w-6 h-6">
            <Link href="/">
              <Image src={icon}></Image>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counting;
