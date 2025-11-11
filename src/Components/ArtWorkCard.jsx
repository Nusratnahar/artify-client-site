import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router";
import { BiSolidLike } from "react-icons/bi";

const ArtworkCard = ({ artwork }) => {
  const {
    _id,image,title,category,description, price,
    artistName,artistPhoto,likes,createdAt,} = artwork;

  

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 rounded-2xl overflow-hidden border border-gray-100">
    
      <figure className="relative">
        <img
          src={image}
          alt=""
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
     
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full hover:bg-red-100 transition">
          <FaRegHeart className="text-red-500 text-lg" />
        </button>
      </figure>


      <div className="p-4 flex flex-col justify-between h-56">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-1">{title}</h2>
          <p className="text-sm text-gray-500 mb-2">Category: {category}</p>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>

     
       

       
        <div className="mt-3 flex justify-between items-center text-sm text-gray-600">
           <span className="inline-flex items-center gap-1">
  <BiSolidLike className="text-lg text-red-400" />
  <span>{likes} Likes</span>
</span>
          {price > 0 ? (
            <span className="font-semibold text-gray-800">${price}</span>
          ) : (
            <span className="italic text-gray-500">Free</span>
          )}
        </div>
         <div className="mt-4 flex justify-between items-center">
    
          <div className="flex items-center gap-2">
            <img
              src={artistPhoto}
              alt=""
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-gray-800">{artistName}</p>
              <p className="text-xs text-gray-500">{createdAt}</p>
            </div>
          </div>

       
          <Link
            to={`/artworks/${_id}`}
            className="btn btn-sm bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg"
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;
