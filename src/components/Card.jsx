import React from "react";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import rating from "../assets/images/rating.png";

const Card = () => {
  return (
    <div className=" font-rose ">
      <h1 className=" text-xl text-center font-xxbold my-4 tablet:text-4xl">
        {" "}
        Inspiration for your next adventure
      </h1>
      <div className="w-[85%] mx-auto grid   justify-center items-center  mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-8">
        <div className="h-[340px] w-[240px] border border-gray rounded-xl my-8 text-[12px] text-black">
          <div className="w-[90%] mx-auto flex flex-col justify-center  ">
            <img src={image1} alt="" width={240} className="my-4" />
            <div className="flex justify-between">
              <span>Desert King </span>{" "}
              <span className="font-xxbold">1mb per night</span>
            </div>
            <div className="mt-1 flex justify-between ">
              <span>2km away</span>{" "}
              <span className="">available for 2week stay</span>
            </div>
            <img src={rating} alt="" width={100} className="my-2" />
          </div>
        </div>
        <div className="h-[340px] w-[240px] border  border-gray rounded-xl my-8 text-[12px] text-black">
          <div className="w-[90%] mx-auto flex flex-col justify-center align-center">
            <img src={image2} alt="" width={240} className="my-4" />
            <div className="flex justify-between">
              <span>Desert King </span>{" "}
              <span className="font-xxbold">1mb per night</span>
            </div>
            <div className="mt-1 flex justify-between ">
              <span>2km away</span>{" "}
              <span className="">available for 2week stay</span>
            </div>
            <img src={rating} alt="" width={100} className="my-2" />
          </div>
        </div>
        <div className="h-[340px] w-[240px] border  border-gray rounded-xl my-8 text-[12px] text-black">
          <div className="w-[90%] mx-auto flex flex-col justify-center align-center">
            <img src={image3} alt="" width={240} className="my-4" />
            <div className="flex justify-between">
              <span>Desert King </span>{" "}
              <span className="font-xxbold">1mb per night</span>
            </div>
            <div className="mt-1 flex justify-between ">
              <span>2km away</span>{" "}
              <span className="">available for 2week stay</span>
            </div>
            <img src={rating} alt="" width={100} className="my-2" />
          </div>
        </div>
        <div className="h-[340px] w-[240px] border  border-gray rounded-xl my-8 text-[12px] text-black">
          <div className="w-[90%] mx-auto flex flex-col justify-center align-center">
            <img src={image4} alt="" width={240} className="my-4" />
            <div className="flex justify-between">
              <span>Desert King </span>{" "}
              <span className="font-xxbold">1mb per night</span>
            </div>
            <div className="mt-1 flex justify-between ">
              <span>2km away</span>{" "}
              <span className="">available for 2week stay</span>
            </div>
            <img src={rating} alt="" width={100} className="my-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
