import React from "react";
import Image from "next/image";
import search from '../../assets/images//Magnifer-white.png'
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative w-full h-[600px]">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://s3-figma-videos-production-sig.figma.com/video/1274346276736644011/TEAM/4634/d923/-f8f8-4a60-bda2-7982b8d7a898?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BJfxiJw~JYEn6gtY46jnUDhuAQ0FoTw4zeFdy8s9Fmh47JAcqExF8InnaYrslyjlXUEEyMhINfP1y-wPdcao6c2-6LBHcEWge7gh~Vix3jXoW2FCTyo2InJLRNu5e30tLKH70N8Ir2x4OUqWDLtQ425g~n0YDGzpEHkZ1hrY6iQXB5UYWe3CCfHrMFVMsW33CRU0wib4jxCgNdGulDZOqwS8xwBhhILbrhf7M4ClONuWoXyfFY6ZNef8~UcNAb8a5aOIKgC6VtsijhLQT4jXL1~98HG3~3HgSLDDQdXSQcSr4qGrsPMdu~H4Ngtx4P37i6j3OkUEEf7K4JaboxX-Og__"
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-col justify-center items-center h-full text-center text-white">
        <h1 className="font-inter md:text-[64px] text-[32px] font-bold mb-4">
          Your Portal to Indias <br /> Exquisite Real Estate
        </h1>
        <p className="md:text-[18px] px-5 md:px-[0px]">
          Seamlessly connecting you to the heartbeat of Indias prime properties
        </p>
        <Link className="mt-10" href="/buyerPage">
          <button className="bg-[#0059B1] flex  text-white px-6 py-3 w-[220px] h-[56px] text-[18px] font-[600] rounded">
         <Image className="me-5 w-[1.3rem] mt-1" src={search}></Image>  Find Property
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
