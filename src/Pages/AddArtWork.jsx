import React, { use, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";

const AddArtWork = () => {

  const {user} = use(AuthContext)


  const [artwork, setArtwork] = useState({
    image: "",
    title: "",
    category: "",
    medium: "",
    description: "",
    dimensions: "",
    price: "",
    visibility: "Public",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtwork({ ...artwork, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      image: e.target.image.value,
      title: e.target.title.value,
      category : e.target.target.value,
      medium : e.target.medium.value,
      description : e.target.description.value,
      dimensions : e.target.dimensions.value,
      price : e.target.price.value,
      visibility : e.target.visibility.value,
      createdAt: new Date() ,
      likes: 0,
      artistName: user.name,
      artistEmail: user.email,


    }
    console.log(formData)
    alert("🎨 Artwork added successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-white shadow-md rounded-2xl border border-gray-100">
      <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-700">
        Add New Artwork
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={artwork.image}
          onChange={handleChange}
          className="input input-bordered w-full focus:ring-2 focus:ring-indigo-400"
          required
        />

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={artwork.title}
          onChange={handleChange}
          className="input input-bordered w-full focus:ring-2 focus:ring-indigo-400"
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={artwork.category}
          onChange={handleChange}
          className="input input-bordered w-full focus:ring-2 focus:ring-indigo-400"
          required
        />

        <input
          type="text"
          name="medium"
          placeholder="Medium / Tools"
          value={artwork.medium}
          onChange={handleChange}
          className="input input-bordered w-full focus:ring-2 focus:ring-indigo-400"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={artwork.description}
          onChange={handleChange}
          className="textarea textarea-bordered w-full focus:ring-2 focus:ring-indigo-400"
          rows="4"
        ></textarea>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="dimensions"
            placeholder="Dimensions (optional)"
            value={artwork.dimensions}
            onChange={handleChange}
            className="input input-bordered w-full focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="number"
            name="price"
            placeholder="Price (optional)"
            value={artwork.price}
            onChange={handleChange}
            className="input input-bordered w-full focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <select
          name="visibility"
          value={artwork.visibility}
          onChange={handleChange}
          className="select select-bordered w-full focus:ring-2 focus:ring-indigo-400"
        >
          <option value="Public">Public</option>
          <option value="Private">Private</option>
        </select>

      
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="User Name"
            readOnly
            className="input input-bordered w-full  cursor-not-allowed"
          />
          <input
            type="email"
            placeholder="User Email"
            readOnly
            className="input input-bordered w-full  cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          className="btn bg-indigo-600 text-white hover:bg-indigo-700 w-full mt-4 transition-all duration-300"
        >
          Add Artwork
        </button>
      </form>
    </div>
  );
};

export default AddArtWork;
