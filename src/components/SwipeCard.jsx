import React, { useState } from "react";
import Card from "./Card";
import BackCard from "./BackCard";

const SwipeCard = ({ front, back }) => {
  const [swiped, setSwiped] = useState(false);
  return (
    <div className="relative w-full h-full group ">
      {/* Back card */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100 z-10`}
      >
        <BackCard feature={back} />
      </div>
      {/* Front card */}
      <div
        className={` transition-all duration-700 group-hover:-translate-x-full group-hover:opacity-0 translate-x-0 opacity-100 group-hover:pointer-events-none
            -z-[${10 * back.id}]
            `}
      >
        <Card feature={front} />
      </div>
    </div>
  );
};

export default SwipeCard;
