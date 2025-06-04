import React from "react";

const MainFeature = ({
  title,
  description,
  url,
  image,
  source,
  source_url,
  source_icon,
  category,
  time,
}) => {
  return (
    <section className="main-feature-container flex justify-center">
      <div className="main-feature flex">
        <div className="feature-img-container flex-[1]">
          <img src={image} alt="" className="rounded-lg" />
        </div>
        <div className="main-feature-content flex-[1]">
          <div className="content-source-info flex gap-1 items-center mt-3 tracking-tighter">
            <div className="flex gap-3 items-center">
              <img src={source_icon} alt="" />
              <span className="text-zinc-600">
                <a href={source_url} target="_blank">
                  {source}
                </a>
              </span>
            </div>
            <span className="text-zinc-400">&bull;</span>
            <span className="text-zinc-600">{time}</span>
          </div>
          <h1 className="text-4xl font-bold  leading-[1.2] mt-3">
            <a href={url} target="_blank" className="news-heading">
              {title.slice(0, 50)}...
            </a>
          </h1>
          <p className="mt-3 text-zinc-700">
            {description && description.slice(0, 200)}...
          </p>
          <div className="flex gap-2 items-center mt-3">
            <span className="text-red-600">
              {category.charAt(0).toUpperCase() +
                category.slice(1).toLowerCase()}
            </span>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFeature;
