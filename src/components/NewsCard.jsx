import Image from "../assets/feature-story.jpg";
import SourceImg from "../assets/Netflix-icon.png";

const NewsCard = () => {
  return (
    <div className="news-card flex flex-col">
      <img src={Image} alt="" className="rounded-xl" />
      <div className="flex gap-1 items-center mt-4 tracking-tighter">
        <div className="flex gap-2 items-center">
          <img src={SourceImg} alt="" className="w-5 rounded-full" />
          <span className="text-zinc-600 text-sm">Netflix</span>
        </div>
        <span className="text-zinc-400 text-sm">&bull;</span>
        <span className="text-zinc-600  text-sm">3 hours ago</span>
      </div>
      <h1 className="text-xl font-bold  leading-[1.2] mt-3 news-heading">
        Where To Watch 'John Wick: Chapter 4'
      </h1>
      <p className="mt-3 text-zinc-700 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, pariatur
        nwskdjwfnsdnjkfnwknde...
      </p>
      <div className="flex gap-1 items-center mt-3 text-sm">
        <span className="text-red-600">Sport</span>{" "}
        <span className="text-zinc-400">&bull;</span>
        <span className="text-zinc-600">4 min read</span>
      </div>
    </div>
  );
};

export default NewsCard;
