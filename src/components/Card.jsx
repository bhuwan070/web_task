import React from "react";

const Card = ({ feature }) => {
  return (
    <div
      className={`w-full h-[340px] flex flex-col md:flex-row text-white p-8 rounded-xl relative `}
      style={{ backgroundColor: feature.color }}
    >
      <img
        src={feature.img}
        alt={feature.title || "Feature Image"}
        className={`${
          feature.animate ? "slight-bounce" : ""
        } relative md:absolute h-[280px] object-contain md:h-fit lg:h-[120%] md:-bottom-20 ${
          feature.imgPosition
        } z-10 md:object-cover`}
      />
      <div
        className={`flex flex-col ${
          feature.flip ? "items-start" : "items-end"
        } `}
      >
        <h1 className="card-title">{feature.title}</h1>
        <span className="card-subtitle">{feature.subtitle}</span>
        <p
          className={`card-description md:w-3/5 mt-4 md:${
            feature.flip ? "text-left" : "text-right"
          } `}
        >
          {feature.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
