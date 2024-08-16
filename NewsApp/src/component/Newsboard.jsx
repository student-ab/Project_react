import { useEffect, useState } from "react";
import Newsitems from "./Newsitems";

const Newsboard = () => {
  const [articles, setarticles] = useState([]);
  useEffect(() => {
    let url = ` https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then((response) =>
      response.json().then((data) => setarticles(data.articles))
    );
  }, []);
  return (
    <div>
      <h2 className="text-center my-4 ">
        Latest News <span className=" badge bg-danger">A B C </span>{" "}
      </h2>
      {articles.map((news, index) => {
        return (
          <Newsitems
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default Newsboard;
