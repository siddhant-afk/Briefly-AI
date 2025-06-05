import MainFeature from "../components/MainFeature";
import NewsCard from "../components/NewsCard";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchNews, timeAgo } from "../utils/newsUtils";

const CategoryPage = () => {
  const { category } = useParams();
  const [topNews, setTopNews] = useState(null);
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  const NEWS_URL = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&category=${category}&language=en`;

  useEffect(() => {
    setLoading(true);
    fetchNews(NEWS_URL)
      .then((result) => {
        setTopNews(result[0]);
        setNews(result?.slice(1));
        setError(null);
      })
      .catch((err) => {
        console.log(err);
        setError("Unable to fetch news at the moment. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-red-600 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <p className="text-red-500 text-center mt-4">{error}</p>
      ) : (
        topNews && (
          <>
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
        )
      )}
    </>
  );
};

export default CategoryPage;
