import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ Newses: news }) => {
  const {
    title,
    author,
    published_date,
    thumbnail_url,
    details,
    rating,
    total_view,
  } = news;

  return (
    <div className="card w-full bg-base-100 shadow-lg">
      <div className="flex items-center p-4">
        <img
          className="w-10 h-10 rounded-full"
          src={author.img}
          alt={author.name}
        />
        <div className="ml-3">
          <h3 className="font-semibold text-sm">{author.name}</h3>
          <p className="text-xs text-gray-500">{published_date}</p>
        </div>
      </div>
      <h2 className="card-title text-lg font-bold p-4">{title}</h2>

      <figure>
        <img
          src={thumbnail_url}
          alt="News Thumbnail"
          className="w-full h-52 object-cover"
        />
      </figure>

      <div className="card-body p-4">
        <p className="text-gray-700 text-sm my-2 line-clamp-3">{details}</p>
        <Link
          to={`/news/${news._id}`}
          className="text-blue-600 font-semibold text-sm"
        >
          Read More
        </Link>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center text-orange-500">
            <FaStar className="mr-1" />
            <span className="font-semibold text-sm">{rating.number}</span>
            <span className="text-xs ml-1">({rating.badge})</span>
          </div>
          <div className="flex items-center text-gray-500">
            <FaEye className="mr-1" />
            <span className="text-sm">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
