import { useEffect, useState } from "react";
import { FaBookmark, FaEye, FaShare } from "react-icons/fa";
import Rating from "react-rating";
import { useParams } from "react-router-dom";

const NewsDetails = () => {
  const { id } = useParams();
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("/data/news.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const selectedNews = data.find(dataNews=> dataNews._id === id)
        console.log(selectedNews)
        setNews(selectedNews);
      });
  }, [id]);
  const { title, details, author, total_view, rating, image_url } = news || {};
  return (
    <div>
        <h2 className="text-2xl font-bold">Dragon News</h2>
      <div className="card bg-base-100 shadow-xl">
        <div className="my-5 p-3 bg-gray-700 flex justify-between items-center">
          <div className="flex ">
            <img
              src={author?.img}
              alt=""
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
            <div className="ps-2">
              <p className="text-lg font-bold">
                {author?.name ? author.name : "No author name available"}
              </p>
              <p>
                {" "}
                <small>${author?.published_date ? author.published_date : ''}</small>{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <FaBookmark></FaBookmark>
            <FaShare></FaShare>
          </div>
        </div>
        <div className="card-body">
          <h4 className="card-title text-2xl font-bold my-4 mb-5 text-white">
            {title}
          </h4>
          <figure className="rounded-sm mb-5">
            <img src={image_url} alt="Movie" className="w-full rounded-sm" />
          </figure>
          <p className="card-text">{details}</p>

          <div className="flex justify-between">
            <div className="text-lg font-bold">
              {rating?.number ? (
                <Rating
                  placeholderRating={rating}
                  emptySymbol={<span>☆</span>}
                  fullSymbol={<span>★</span>}
                />
              ) : (
                "Not available"
              )}
            </div>

            <div className="text-lg font-bold flex items-center gap-3">
              <FaEye /> <span>{total_view ? total_view : "Not available"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
