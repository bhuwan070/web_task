import React from "react";
import {
  ArrowWhite,
  PenIcon,
  ReactIcon,
  TypescriptIcon,
  VueIcon,
} from "../assets";
const icons = [
  { src: TypescriptIcon, alt: "Typescript" },
  { src: ReactIcon, alt: "React" },
  { src: VueIcon, alt: "Vue" },
  { src: PenIcon, alt: "Pen" },
];

const CourseCard = ({ data, active, onClick, activeIndex }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer transition-all duration-700 ease-in-out rounded-[32px] overflow-hidden min-h-[500px]
        ${
          active
            ? "w-[592px] bg-[#C33241] p-[66px]"
            : "w-[280px] bg-[#F9EBEC] py-[40px] px-[35.5px]"
        }
        flex flex-col gap-10 text-white relative group`}
    >
      {active && (
        <div className="w-full flex justify-end">
          <button className="course-btn group w-fit flex gap-2 items-center text-[18px] cursor-pointer">
            View all Courses{" "}
            <img
              src={ArrowWhite}
              alt=""
              width={14}
              className="course-arrow object-contain group-hover:slight-move"
            />
          </button>
        </div>
      )}

      {active && (
        <div className="flex gap-[42px] transition-transform duration-500 delay-200 animate-icon-enter h-[75px]"></div>
      )}

      <div
        className={`relative flex-1 flex items-center  ${
          active ? "text-[#F9EBEC]" : "text-[#C33241] items-end"
        } transition-transform duration-700`}
      >
        <div className="flex items-start font-[Montserrat] z-10">
          <h1 className="font-bold leading-[120%] text-[150px] transition-all">
            {data.count.toString().padStart(2, "0")}
          </h1>
          <span className={`text-[64px] leading-[120%]`}>+</span>
        </div>

        <div
          className={` absolute 
          w-[300px] flex flex-col gap-[12px] flex-wrap transition-all duration-700
          ${
            active
              ? "animate-rotate-to-horizontal  text-[#F9EBEC]"
              : "animate-rotate-to-vertical text-[#C33241]"
          }
        `}
          style={{
            left: "230px",
            top: "40px",
            transformOrigin: "center left",
          }}
        >
          <span
            className={`font-[Outfit] ${
              active ? "w-[300px]" : "w-[250px]"
            } flex font-bold text-[32px] leading-[120%]`}
          >
            {data.title}
          </span>
          <p className="text-[18px] w-[260px] flex flex-wrap  leading-none">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
