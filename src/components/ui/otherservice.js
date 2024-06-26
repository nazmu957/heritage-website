import Image from "next/image";
import React from "react";
import home from "../../assets/images/Home.png";
const Otherservice = () => {
  return (
    <div className="p-[1rem] md:p-[5rem] md:mt-[0px] ">
      <h1 className="text-center text-[24px] md:text-[40px] font-bold mb-[2rem] md:mb-[5rem]">
        Other Service
      </h1>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="bg-[#ECF5FF] shadow-lg rounded-lg w-full md:w-[384px] md:h-[200px] mb-4 md:mb-0">
          <div className="p-4 flex">
            <div className="w-[48px] h-[48px] bg-[#EE6611] rounded-sm mt-3">
              <Image
                className="m-3"
                src={home}
                width={22}
                height={22}
                alt="Home"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2 ms-5 mt-2 text-[18px] md:text-[24px]">
              Advanced Property <br /> Search
            </h2>
          </div>
          <p className="ms-5 md:ms-[5rem]">
            Effortlessly find your dream <br /> property with advanced search{" "}
            <br /> filters.
          </p>
        </div>
        <div className="bg-[#ECF5FF] shadow-lg rounded-lg w-full md:w-[384px] md:h-[200px] mx-0 md:mx-[5rem] mb-4 md:mb-0">
          <div className="p-4 flex">
            <div className="w-[48px] h-[48px] bg-[#EE6611] rounded-sm mt-3">
              <Image
                className="m-3"
                src={home}
                width={22}
                height={22}
                alt="Home"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2 ms-5 mt-2 text-[18px] md:text-[24px]">
              Virtual Tours and <br /> Multimedia
            </h2>
          </div>
          <p className="ms-5 md:ms-[5rem]">
            Explore properties through <br /> immersive virtual tours and HD{" "}
            <br /> photos.
          </p>
        </div>
        <div className="bg-[#ECF5FF] shadow-lg rounded-lg w-full md:w-[384px] md:h-[200px]">
          <div className="p-4 flex">
            <div className="w-[48px] h-[48px] bg-[#EE6611] rounded-sm mt-3">
              <Image
                className="m-3"
                src={home}
                width={22}
                height={22}
                alt="Home"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2 ms-5 mt-2 text-[18px] md:text-[24px]">
              Secure Online <br /> Transactions
            </h2>
          </div>
          <p className="ms-5 md:ms-[5rem]">
            Ensure secure transactions and <br /> e-sign documents seamlessly{" "}
            <br /> online.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Otherservice;
