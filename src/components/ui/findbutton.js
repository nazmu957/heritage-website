import React from "react";
import search from "../../assets/images/Magnifer.png";
import Image from "next/image";
import Link from "next/link";

const Findbutton = () => {
  return (
    <div className="my-[2rem]">
      <Link href="/buyerSearch">
        <button className="bg-[#ECF5FF] md:w-[210px] md:h-[56px] w-[160px] h-[45px] text-[#0059B1]  py-2 px-4 rounded">
          <div className="flex">
            <Image
              className="md:w-[24px] md:h-[24px]  w-[15px] h-[15px]  mx-3"
              src={search}
            ></Image>
            <p className="md:text-[18px] text-[13px]">Find Property</p>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Findbutton;
