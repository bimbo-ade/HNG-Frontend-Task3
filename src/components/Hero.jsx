import React from "react";
import hero from "../assets/images/hero.png";
import mlogo1 from "../assets/images/mlogo1.svg";
import mlogo2 from "../assets/images/mlogo2.svg";
import opensea from "../assets/images/opensea.svg";
const Hero = () => {
  return (
    <>
      <div className="w-[80%] mt-[16px] mb-4 mx-auto grid tablet:grid-cols-2 laptop:grid-cols-2 gap-28 font-rose mobile:grid-cols-1 tablet:mt-[100px]  ">
        <div className="max-w-[460px] mt-[60px] ">
          <h1 className="text-[30px]  font-xxbold tracking-tight tablet:text-[40px]">
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
            className="mt-8 border border-gray h-[48px] px-3 "
          />{" "}
          <span>
            {" "}
            <button className="bg-purple border h-[48px] px-8 ml-[-5px] text-base text-white font-normal ">
              search
            </button>
          </span>
        </div>
        <div className=" flex justify-center align-center">
          <img src={hero} alt="" width={440} className="mr-0 object-fill " />
        </div>
      </div>
      <div className="bg-purple w-[100%] h-[56px] mt-[48px] mb-8 flex justify-evenly">
        <img src={mlogo1} alt="" width={180} className="mobile:w-[20%]" />
        <img src={mlogo2} alt="" width={180} className="mobile:w-[20%]" />
        <img src={opensea} alt="" width={180} className="mobile:w-[20%]" />
      </div>
    </>
  );
};

export default Hero;
