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
    <div className="bg-white">
      <Navbar />
      <div>
        <Image className="w-[100%] h-[320px]" src={fram4}></Image>
      </div>
      <div className="flex justify-center ">
        <Counting />
      </div>

      <section className="md:mb-[0px] mb-[15rem]">
        <div className="flex items-center justify-center md:me-[15rem]">
          <div className="relative mb-14 md:mb-[14rem]">
            <Image
              className="w-full h-auto md:w-[904px] md:h-[455px]"
              src={img1}
            />
            <div className="absolute md:top-[-15rem] left-1/2 md:left-[45rem] transform -translate-x-1/2 -translate-y-1/2 mt-[10rem] md:mt-[40rem] md:ms-[12rem] w-11/12 md:w-[592px] h-auto md:h-[230px] bg-[#ECF5FF] p-5 md:p-0 ">
              <div className="p-5">
                <div className="flex items-center mb-4">
                  <Image className="h-1 md:h-[.2rem] mt-3 mr-3" src={line} />
                  <h1 className="text-lg md:text-[18px] font-semibold text-[#EE6611]">
                    Our Story
                  </h1>
                </div>
                <div>
                  <h1 className="text-2xl md:text-[36px] font-bold">
                    Efficient and Transparent <br className="hidden md:block" />{" "}
                    Home Buying Solutions
                  </h1>
                  <p className="text-[#6B7280] text-sm md:text-[16px] mt-2">
                    In the symphony of bustling markets and serene landscapes,{" "}
                    <br className="hidden md:block" />
                    Heritage-Nest was born—a vision to
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-center md:ms-[33rem]">
          <div className="relative mb-14 md:mb-[14rem]">
            <div className="relative mb-14 md:mb-[0rem]">
              <Image
                className="w-full h-auto md:w-[904px] md:h-[455px]"
                src={img2}
                alt="Image"
              />
              <div className="md:absolute md:top-[-52rem] transform md:-translate-x-1/2 md:-translate-y-1/2  md:mt-[80rem] w-11/12 md:w-[592px] h-auto md:h-[230px] bg-[#FDF0E7]  md:p-0">
                <div className="p-5 ">
                  <div className="flex items-center mb-4">
                    <Image
                      className="h-1 md:h-[.2rem] mt-3 mr-3"
                      src={line}
                      alt="Line"
                    />
                    <h1 className="text-lg md:text-[18px] font-semibold text-[#EE6611]">
                      Mission Statement
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-[36px] font-bold">
                      Efficient and Transparent{" "}
                      <br className="hidden md:block" /> Home Buying Solutions
                    </h1>
                    <p className="text-[#6B7280] text-sm md:text-[16px] mt-2">
                      In the symphony of bustling markets and serene landscapes,{" "}
                      <br className="hidden md:block" />
                      Heritage-Nest was born—a vision to
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="px-6 md:px-[5rem] mx-4 md:mx-[9rem]">
        <div className="flex items-center ">
          <Image
            className="h-1 md:h-[.2rem] mt-3 mr-4 mb-5"
            src={line}
            alt="Line"
          />
          <p className="text-lg md:text-[18px] text-[#EE6611] font-semibold mb-5">
            Our Team
          </p>
        </div>
        <h1 className="font-bold text-xl md:text-[30px] mb-5">
          Discover the Faces Behind Our Success
        </h1>
        <div className="flex flex-col md:flex-row my-3">
          <Image
            className="w-full md:w-[384px] h-auto md:h-[417px] mb-4 md:mb-0"
            src={person1}
            alt="Person 1"
          />
          <Image
            className="w-full md:w-[384px] h-auto md:h-[417px] mx-0 md:mx-[3rem] mb-4 md:mb-0"
            src={person2}
            alt="Person 2"
          />
          <Image
            className="w-full md:w-[384px] h-auto md:h-[417px]"
            src={person3}
            alt="Person 3"
          />
        </div>
      </div>

      <div className="p-6 md:p-[5rem] mx-4 md:mx-[9rem] flex flex-col md:flex-row">
        <div className="w-full md:w-[68%] mb-6 md:mb-0">
          <div className="flex items-center">
            <Image
              className="h-1 md:h-[.2rem] mt-3 mr-4"
              src={line}
              alt="Line"
            />
            <p className="text-lg md:text-[18px] text-[#EE6611] font-semibold">
              Meet the Team For Book Consultation
            </p>
          </div>
          <h1 className="font-bold text-2xl md:text-[30px] mt-4 md:mt-0 py-5">
            Meet the stewards of your <br className="hidden md:block" />{" "}
            heritage journey
          </h1>
          <p className="py-3 text-sm md:text-base">
            Each member an embodiment of expertise and warmth, dedicated to
            guiding you <br className="hidden md:block" />
            home, every step of the way.
          </p>
          <button className="bg-[#0059B1] text-white w-full md:w-[268px] h-[50px] my-5">
            Book Consultation Now
          </button>
        </div>
        <div className="w-full md:w-[25%] flex justify-center md:justify-end">
          <Image
            className="w-full md:w-[384px] h-auto md:h-[304px]"
            src={home}
            alt="Home"
          />
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
