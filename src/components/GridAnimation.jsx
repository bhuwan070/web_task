import React, { useEffect, useState } from "react";

const GRIDX = 10;
const GRIDY = 30;
const totalBoxes = GRIDX * GRIDY;

function getRandomValues(count, max) {
  const arr = [];
  while (arr.length < count) {
    const n = Math.floor(Math.random() * max);
    if (!arr.includes(n)) arr.push(n);
  }
  return arr;
}
const initialValues = getRandomValues(9, totalBoxes);

const GridAnimation = () => {
  const [colorfulValues, setColorfulValues] = useState(initialValues);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorfulValues(getRandomValues(9, totalBoxes));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-100">
      <div className="w-full min-w-screen min-h-screen h-full flex flex-wrap">
        {Array.from({ length: totalBoxes }).map((_, i) => {
          const isColorful = colorfulValues.includes(i);
          return (
            <div
              key={i}
              className="border border-gray-300 box-border"
              style={{
                width: `calc(100% / ${GRIDY})`,
                height: `calc(100% / ${GRIDX})`,
              }}
            >
              <div
                className={`w-full h-full transition-all duration-1000 ${
                  isColorful
                    ? "opacity-100 bg-indigo-500"
                    : "opacity-0 bg-white"
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GridAnimation;
