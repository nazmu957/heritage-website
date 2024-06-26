import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import React from "react";
import fram4 from "../assets/images/Frame 4 (1).png";
import Image from "next/image";
import Counting from "@/components/ui/counting";
import img1 from "../assets/images/Group 28.png";
import line from "../assets/images/Line 9.png";
import img2 from "../assets/images/Group 29.png";
import person1 from "../assets/images/Rectangle 29.png";
import person2 from "../assets/images/Rectangle 30.png";
import person3 from "../assets/images/Rectangle 31.png";
import home from "../assets/images/home4.png";
import Testimonials from "@/components/ui/testimonials";

const About = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Image className="w-[100%] h-[320px]" src={fram4}></Image>
      </div>
      <div className="flex justify-center">
        <Counting />
      </div>
      <div class="flex items-center ms-[15rem]">
        <div className="mb-[14rem]">
          <Image className="w-[904px] h-[455px]" src={img1}></Image>

          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[40rem] ms-[12rem]  w-[592px] h-[230px] bg-[#ECF5FF]  ">
            <div className="flex px-5 pt-4">
              <Image className="h-[.2rem] mt-3 me-3" src={line}></Image>
              <h1 className="text-[18px] font-semibold text-[#EE6611]">
                Our Story
              </h1>
            </div>
            <div className="px-5">
              <h1 className="text-[36px] font-bold">
                Efficient and Transparent <br /> Home Buying Solutions
              </h1>
              <p className="text-[#6B7280] text-[16px] ">
                In the symphony of bustling markets and serene landscapes,{" "}
                <br />
                Heritage-Nest was born—a vision to
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center ms-[33rem]">
        <div className="mb-[14rem]">
          <Image className="w-[904px] h-[455px]" src={img2}></Image>

          <div class="absolute top-1/2  transform -translate-x-1/2 -translate-y-1/2 mt-[80rem] w-[592px] h-[230px] bg-[#FDF0E7]">
            <div class="flex px-5 pt-4">
              <Image class="h-[.2rem] mt-3 me-3" src={line} alt="Line"></Image>
              <h1 class="text-[18px] font-semibold text-[#EE6611]">
                Mission Statement
              </h1>
            </div>
            <div class="px-5">
              <h1 class="text-[36px] font-bold">
                Efficient and Transparent <br /> Home Buying Solutions
              </h1>
              <p class="text-[#6B7280] text-[16px]">
                In the symphony of bustling markets and serene landscapes,
                <br /> Heritage-Nest was born—a vision to
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[5rem] mx-[9rem]">
        <div className="flex  ">
          <Image className="h-[.2rem] mt-3 me-4" src={line}></Image>
          <p className="text-[18px] text-[#EE6611] font-semibold">Our Team</p>
        </div>
        <h1 className="font-bold text-[40px]">
          Discover the Faces Behind Our Success
        </h1>
        <div className="flex my-3">
          <Image className="w-[384px] h-[417px]" src={person1}></Image>
          <Image
            className="w-[384px] h-[417px] mx-[3rem]"
            src={person2}
          ></Image>
          <Image className="w-[384px] h-[417px]" src={person3}></Image>
        </div>
      </div>

      <div className="p-[5rem] mx-[9rem] flex">
        <div className="w-[68%]">
          <div className="flex  ">
            <Image className="h-[.2rem] mt-3 me-4" src={line}></Image>
            <p className="text-[18px] text-[#EE6611] font-semibold">
              Meet the Team For Book Consultation
            </p>
          </div>
          <h1 className="font-bold text-[40px]">
            Meet the stewards of your <br /> heritage journey
          </h1>
          <p className="py-3">
            each member an embodiment of expertise and warmth, dedicated to
            guiding you <br />
            home, every step of the way.
          </p>
          <button className="bg-[#0059B1] text-white w-[268px] h-[50px]">
            Book Consultation Now
          </button>
        </div>
        <div className="w-[25%]">
          <Image className="w-[384px] h-[304px] " src={home}></Image>
        </div>
      </div>
      <h1 className="text-center font-bold text-[40px] my-4">Testimonials</h1>
      <div className="flex justify-center">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default About;
