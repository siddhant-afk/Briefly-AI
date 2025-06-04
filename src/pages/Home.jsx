import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import MainFeature from "../components/MainFeature";
import NewsCard from "../components/NewsCard";
import { fetchNews, timeAgo } from "../utils/newsUtils";

const Home = () => {
  const [topNews, setTopNews] = useState(null);
  const [news, setNews] = useState([]);

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  const NEWS_URL = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&category=business,technology,sports,entertainment,lifestyle&language=en`;

  useEffect(() => {
    fetchNews(NEWS_URL).then((result) => {
      console.log(result);
      setTopNews(result[0]);
      setNews(result?.slice(1));
    });
  }, []);

  return (
    <>
      <Header />

      {topNews && (
        <MainFeature
          title={topNews["title"]}
          description={topNews["description"]}
          url={topNews["link"]}
          image={topNews["image_url"]}
          source={topNews["source_name"]}
          source_url={topNews["source_url"]}
          source_icon={topNews["source_icon"]}
          category={topNews.category[0]}
          time={timeAgo(topNews.pubDate)}
        />
      )}

      <section className="news-section flex flex-col items-center">
        <h1 className="self-start text-3xl font-bold news-section-heading">
          Latest News
        </h1>
        <div className="news-container mt-8 flex-wrap">
          {news &&
            news.map((newsItem) => {
              return (
                <NewsCard
                  key={newsItem.article_id}
                  title={newsItem["title"]}
                  description={newsItem["description"]}
                  url={newsItem["link"]}
                  image={newsItem["image_url"]}
                  source={newsItem["source_name"]}
                  source_url={newsItem["source_url"]}
                  source_icon={newsItem["source_icon"]}
                  category={newsItem.category[0]}
                  time={timeAgo(newsItem.pubDate)}
                />
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Home;
