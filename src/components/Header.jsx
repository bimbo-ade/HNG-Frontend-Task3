import React from "react";
import logo from "../assets/images/logo.png";
const Header = () => {
  return (
    <div className="w-[90%] h-[48px] mx-auto flex justify-between items-center font-rose mt-[16px]">
      <div>
        <img src={logo} alt="logo" width={180} />
      </div>
      <div>
        <ul className="flex justify-between w-[530px]">
          <li className="text-black font-normal  text-xl">Home</li>
          <li className="text-black font-normal  text-xl ">Place to Stay</li>
          <li className="text-black font-normal  text-xl ">NFT's</li>
          <li className="text-black font-normal text-xl  ">Community</li>
        </ul>
      </div>
      <div>
        <button className="bg-purple h-[48px] px-[20px] text-base text-white font-normal rounded">
          {" "}
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Header;
