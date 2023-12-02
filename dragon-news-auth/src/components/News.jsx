import { FaEye, FaBookmark, FaShare } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

const News = ({ news }) => {
  console.log(news);
  const { title, details, author, total_view, rating, image_url, _id } =
    news || {};
  return (
    <div>
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
                {author.name ? author.name : "No author name available"}
              </p>
              <p>
                {" "}
                <small>${author.published_date}</small>{" "}
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
          <p className="card-text">
            {details.length < 200 ? (
              details
            ) : (
              <span>
                {details.slice(0, 200)}
                <Link to={`news/${_id}`} className="link text-green-700">
                  Read More
                </Link>
              </span>
            )}
          </p>

          <div className="flex justify-between">
            <div className="text-lg font-bold">
              {rating.number ? (
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

export default News;
