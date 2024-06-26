import React from "react";
import Image from "next/image";
import banner from "../../assets/images/banner.png";
import Link from "next/link";

const Banner = () => {
  return (
    // <div className="relative w-full h-[560px]">
    //   <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
    //   <Image
    //     src={banner}
    //     layout="fill"
    //     objectFit="cover"
    //     className="z-20"
    //     alt="Banner Image"
    //   />
    //   <div className="absolute inset-0 flex items-center justify-center z-30">
    //     <Link href="/buyerSearch">
    //       <button className="bg-opacity-0 text-white px-8 py-6 md:px-[6rem] md:py-[2.5rem] rounded-lg text-lg font-semibold mt-[23rem]"></button>
    //     </Link>
    //   </div>
    // </div>
    <div className="relative">
      <Image
        src={banner}
        alt="Banner"
        layout="responsive"
        width={1920}
        height={600}
      />
      <div className="absolute inset-0 flex items-center justify-center z-30">
      
        <Link href="/buyerSearch">
         
          <button className="bg-opacity-0 text-white px-8 py-6 md:px-[6rem] md:py-[2.5rem] rounded-lg text-lg font-semibold mt-[23rem]"></button>
        
        </Link>
        
      </div>
    </div>
  );
};

export default Banner;
