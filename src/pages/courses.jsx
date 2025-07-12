import React, { useEffect, useRef, useState } from "react";
import {
  ArrowWhite,
  PenIcon,
  ReactIcon,
  TypescriptIcon,
  VueIcon,
} from "../assets";
import CourseCard from "../components/CourseCard";

const cards = [
  {
    title: "All Courses",
    description: "courses you're powering through right now.",
    count: 23,
    color: "#F9EBEC",
    bg: "#C33241",
  },
  {
    title: "Upcoming Courses",
    description: "exciting new courses waiting to boost your skills.",
    count: 5,
    color: "#F9EBEC",
    bg: "#C33241",
  },
  {
    title: "Ongoing Courses",
    description: "currently happening—don’t miss out on the action!",
    count: 10,
    color: "#F9EBEC",
    bg: "#C33241",
  },
];

const icons = [
  { src: TypescriptIcon, alt: "Typescript" },
  { src: ReactIcon, alt: "React" },
  { src: VueIcon, alt: "Vue" },
  { src: PenIcon, alt: "Pen" },
];

const Courses = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-screen h-screen px-20 py-24 flex flex-col gap-10 ">
      <div>
        <span className="text-[24px] font-medium ">
          Explore our classes and master trending skills!
        </span>
        <h2 className="font-bold text-[32px] font-[Outfit]">
          Dive Into{" "}
          <span className="text-[#1DA077]">What's Hot Right Now! 🔥</span>
        </h2>
      </div>

      <div className="flex w-[1240px] gap-10 relative">
        {cards.map((card, index) => (
          <CourseCard
            key={index}
            data={card}
            active={index === activeIndex}
            onClick={() => setActiveIndex(index)}
            activeIndex={activeIndex}
          />
        ))}
        <div
          className={`absolute top-34 translate-x-[66px] flex gap-[42px] transition-all duration-700 animate-icon-enter `}
          style={{
            // transform: `translateX(66px)`,
            left: `${activeIndex * 320}px`,
          }}
        >
          {icons.map((icon, index) => (
            <img
              key={index}
              src={icon.src}
              alt={icon.alt}
              width={75}
              height={75}
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
