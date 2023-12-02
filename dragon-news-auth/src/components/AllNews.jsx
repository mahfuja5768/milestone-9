import { useEffect, useState } from "react";
import News from "./News";

const AllNews = () => {
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    fetch("data/news.json")
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">Dragon News Home</h2>
      <div className="flex flex-col gap-6">
        {allNews.map((news) => (
          <News key={news._id} news={news}></News>
        ))}
      </div>
    </div>
  );
};

export default AllNews;
