import React from "react";
import Image from "../assets/feature-story.jpg";
import SourceImg from "../assets/Netflix-icon.png";

const MainFeature = () => {
  return (
    <section className="main-feature-container flex justify-center">
      <div className="main-feature flex">
        <div className="feature-img-container flex-[1]">
          <img src={Image} alt="" className="rounded-lg" />
        </div>
        <div className="main-feature-content flex-[1]">
          <div className="content-source-info flex gap-1 items-center mt-3 tracking-tighter">
            <div className="flex gap-3 items-center">
              <img src={SourceImg} alt="" />
              <span className="text-zinc-600">Netflix</span>
            </div>
            <span className="text-zinc-400">&bull;</span>
            <span className="text-zinc-600">12 minutes ago</span>
          </div>
          <h1 className="text-4xl font-bold  leading-[1.2] mt-5">
            Where To Watch 'John Wick: Chapter 4'
          </h1>
          <p className="mt-5 text-zinc-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            pariatur nostrum. Fuga facere atque minus sequi eum iste
            necessitatibus ipsam, tenetur quod, iure est perferendis, culpa
            sapiente deleniti maxime ad!
          </p>
          <div className="flex gap-2 items-center mt-5">
            <span className="text-red-600">Entertainment</span>{" "}
            <span className="text-zinc-400">&bull;</span>
            <span className="text-zinc-600">4 min read</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFeature;
