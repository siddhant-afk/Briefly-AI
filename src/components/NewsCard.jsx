import Image from "../assets/feature-story.jpg";
import SourceImg from "../assets/Netflix-icon.png";

const NewsCard = ({
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
    <div className="news-card flex flex-col mt-10">
      <div className="img-container">
        <img src={image} alt="" className="rounded-xl w-full h-full " />
      </div>
      <div className="flex gap-1 items-center mt-4 tracking-tighter">
        <div className="flex gap-2 items-center">
          <img src={source_icon} alt="" className="w-5 rounded-full" />
          <span className="text-zinc-600 text-sm">
            <a href={source_url} target="_blank">
              {source}
            </a>
          </span>
        </div>
        <span className="text-zinc-400 text-sm">&bull;</span>
        <span className="text-zinc-600  text-sm">{time}</span>
      </div>
      <h1 className="text-xl font-bold  leading-[1.2] mt-3">
        <a href={url} target="_blank" className=" news-heading">
          {title.slice(0, 45)}...
        </a>
      </h1>
      <p className="mt-3 text-zinc-700 ">
        {description && description.slice(0, 100)}...
      </p>
      <div className="flex gap-1 items-center mt-3 text-sm">
        <span className="text-red-600">
          {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
        </span>{" "}
      </div>
    </div>
  );
};

export default NewsCard;
