import emoji1 from "../assets/emoji_1.svg";
import emoji2 from "../assets/emoji_2.svg";
import emoji3 from "../assets/emoji_3.svg";
import emoji4 from "../assets/emoji_4.svg";

import image1 from "../assets/image_3.svg";
import image2 from "../assets/image_6.svg";
import image3 from "../assets/image_7.svg";
import image4 from "../assets/image_2.svg";
import image5 from "../assets/image_1.svg";
import image6 from "../assets/image_4.svg";

const data = [
  { type: "emoji", content: emoji1 },
  { type: "user", image: image1 },
  { type: "emoji", content: emoji2 },
  { type: "user", image: image2 },
  { type: "emoji", content: emoji3 },
  { type: "user", image: image3 },
  { type: "emoji", content: emoji4 },
  { type: "user", image: image4 },
  { type: "user", image: image5 },
  { type: "user", image: image6 },
];

const positions = [
  "top-7 left-40",
  "top-1/8 left-[70%] -translate-x-1/2",
  "top-1/2 left-[100%] -translate-x-1/2 -translate-y-1/2",
  "bottom-1/7 left-[90%] -translate-x-1/2",
  "bottom-5 left-1/2 -translate-x-1/2",
  "bottom-1/10 left-[15%] -translate-x-1",
  "top-1/2 right-90 -translate-y-1/2",
  "top-1/5 left-[5%] -translate-x-1",
  "bottom-1/5  -translate-x-1/2",
  "left-[90%] top-20",
];

const hoverTransforms = [
  "group-hover:-translate-y-6 group-hover:-translate-x-4",
  "group-hover:-translate-y-6 group-hover:translate-x-4",
  "group-hover:translate-x-4 group-hover:translate-y-6",
  "group-hover:translate-y-6 group-hover:translate-x-4",
  "group-hover:translate-y-4 group-hover:-translate-x-4",
  "group-hover:translate-y-6 group-hover:-translate-x-4",
  "group-hover:-translate-x-4",
  "group-hover:-translate-y-6 group-hover:-translate-x-4",
  " group-hover:-translate-x-9 group-hover:-translate-y-6 ",
  "group-hover:translate-y-6 group-hover:translate-x-4",
];

const Task1 = () => {
  return (
    <div className="relative w-[400px] h-[400px] mx-auto my-12 group">
      {/* Central Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <p className="text-gray-600">Hear How They Level Up Their Game!</p>
        <h2 className="text-2xl font-bold">
          Skill <span className="text-green-500">Masters</span> Unite!{" "}
          <span>🤝</span>
        </h2>
        <a href="#" className="mt-2 text-sm text-gray-700 underline">
          View all Testimonials →
        </a>
      </div>

      {/* Positioned of images and emojis */}
      {data.map((item, i) => (
        <div
          key={i}
          className={`absolute ${positions[i]}  rounded-xl flex items-center justify-center bg-white shadow-md transition-transform duration-500 ${hoverTransforms[i]}`}
        >
          <img
            src={item.type === "user" ? item.image : item.content}
            alt="item"
            className="w-15 h-15 rounded-xl object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Task1;
