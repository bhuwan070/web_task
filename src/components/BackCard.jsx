import React from "react";
import { ArrowLeft, ArrowRight } from "../assets";

const BackCard = ({ feature }) => {
  return (
    <div
      className={`w-full h-[340px] flex flex-col md:flex-row text-white rounded-xl relative `}
      style={{ backgroundColor: feature.color }}
    >
      <div className=" absolute bg-white w-24 h-24 rounded-full -left-12 top-1/2 -translate-y-1/2" />
      <div className="absolute bg-white w-24 h-24 rounded-full -right-10 top-1/2 -translate-y-1/2" />
      <div className=" absolute shadow-lg flex justify-center items-center p-2 w-14 h-14 rounded-full -left-5 top-1/2 -translate-y-1/2">
        <img src={ArrowLeft} alt="" />
      </div>
      <div className=" absolute shadow-lg flex justify-center items-center p-2 w-14 h-14 rounded-full -right-5 top-1/2 -translate-y-1/2">
        <img src={ArrowRight} alt="" />
      </div>
      <img
        src={feature.img}
        alt=""
        className={`absolute z-20 h-full bottom-0 ${feature.imgPosition}`}
      />
      <div
        className={`flex flex-col w-full ${
          feature.flip ? "items-start" : "items-end"
        } p-8`}
      >
        <h1 className="font-bold w-52 text-[18px]">{feature.title}</h1>
      </div>
    </div>
  );
};

export default BackCard;
