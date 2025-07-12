import React from "react";
import { BackCard1, BackCard2, Card1, Card2, Card3, Card4 } from "../assets";
import Card from "../components/Card";
import SwipeCard from "../components/SwipeCard";

const features = [
  {
    img: Card1,
    title: "Start with Clarity",
    subtitle: "Step into a better learning path.",
    description:
      "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
    color: "#F45B5B",
    flip: false,
    imgPosition: "-left-20 ",
    animate: true,
  },
  {
    img: Card2,
    title: "Learn by Doing",
    subtitle: "Practical skills, real projects.",
    description:
      "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
    color: "#5492A0",
    flip: true,
    imgPosition: "right-10",
    animate: true,
  },
  {
    img: Card3,
    title: "Get Mentored & Supported",
    subtitle: "You're not learning alone.",
    description:
      "Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own.",
    color: "#6C64A8",
    flip: false,
    imgPosition: "-left-20 ",
    animate: true,
  },
  {
    img: Card4,
    title: "Achieve & Showcase",
    subtitle: "Build your portfolio, get job-ready.",
    description:
      "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
    color: "#A88964",
    flip: true,
    imgPosition: "-right-10",
    animate: true,
  },
];

const backFeature = [
  {
    id: 1,
    img: BackCard1,
    title: "Clarity unlocked—stickers, sips, and skills all in one go!",
    color: "#F45B5B",
    flip: false,
    imgPosition: "left-5 ",
  },
  {
    id: 2,
    img: BackCard2,
    title: "Learn by Doing",
    color: "#5492A0",
    flip: true,
    imgPosition: "-right-0",
  },
];

const Feature = () => {
  return (
    <div className="w-screen h-screen px-20 py-24 flex flex-col gap-10 ">
      <div>
        <span className="text-[24px] font-medium ">
          Your SkillShikshya Journey
        </span>
        <h2 className="font-bold text-[32px] font-[Outfit]">
          <span className="text-[#1DA077]">Step</span> In.{" "}
          <span className="text-[#1DA077]">Step</span> Up.{" "}
          <span className="text-[#1DA077]">Step</span> Out. 🚀
        </h2>
      </div>
      <div className="">
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-20">
          <SwipeCard front={features[0]} back={backFeature[0]} />
          <SwipeCard front={features[1]} back={backFeature[1]} />
          <Card feature={features[2]} />
          <Card feature={features[3]} />
        </div>
      </div>
    </div>
  );
};

export default Feature;
