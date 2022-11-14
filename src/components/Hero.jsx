import React from "react";
import hero from "../assets/images/hero.png";
const Hero = () => {
  return (
    <div className="w-[80%] mt-[124px] mx-auto grid grid-cols-2 gap-12 font-rose ">
      <div className="">
        <h1 className="text-[50px]  font-xxbold ">
          Rent a <span className="text-purple"> Place</span> away from{" "}
          <span className="text-purple">Home</span> in the{" "}
          <span className="text-purple">Metaverse</span>
        </h1>
        <p className="mt-8">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <input
          type="text"
          placeholder="Search for location"
          className="mt-8 border h-[48px] px-3"
        />{" "}
        <span>
          {" "}
          <button className="bg-purple border h-[48px] px-8 ml-[-5px] text-base text-white font-normal ">
            search
          </button>
        </span>
      </div>
      <div className="">
        <img src={hero} alt="" width={500} />
      </div>
    </div>
  );
};

export default Hero;
