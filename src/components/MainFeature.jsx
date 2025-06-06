import fallbackImg from "../assets/fallback.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
          <LazyLoadImage
            src={image || fallbackImg}
            alt=""
            className="rounded-lg"
            effect="blur"
          />
        </div>
        <div className="main-feature-content flex-[1]">
          <div className="content-source-info flex gap-1 items-center mt-3 tracking-tighter">
            <div className="flex gap-3 items-center">
              <LazyLoadImage src={source_icon} alt="" effect="blur" />
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
            <a
              href={url}
              target="_blank"
              className="news-heading hover:text-red-600 hover:underline multi-line-truncate"
            >
              {title}
            </a>
          </h1>
          <p className="mt-3 text-zinc-700 multi-line-truncate">
            {description}
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
