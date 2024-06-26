import Banner from "@/components/ui/banner";
import Footer from "@/components/ui/footer";
import Leftproperty from "@/components/ui/leftproperty";
import Navbar from "@/components/ui/navbar";
import Otherproperty from "@/components/ui/otherproperty";
import Otherservice from "@/components/ui/otherservice";
import Rightproperty from "@/components/ui/rightproperty";
import React from "react";

const Homepage = () => {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <Banner />
      <Leftproperty />
      <Rightproperty />
      <Otherproperty />
      <Otherservice />
      <Footer />
    </div>
  );
};

export default Homepage;
