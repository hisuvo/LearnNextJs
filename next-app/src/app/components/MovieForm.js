"use client";
import { useState } from "react";

export default function MovieForm() {
  const [movie, setMovie] = useState({
    title: "",
    genre: "",
    year: "",
    rating: "",
    language: "",
    boxOffice: "",
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(movie); // Replace with API POST request later
    alert("Movie submitted successfully!");
  };

  return (
    <div className="max-w-lg mx-auto border shadow-xl rounded-2xl p-6 mt-10">
      <h1 className="text-2xl font-semibold text-center mb-6">
        🎬 Upload Movie
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title and Genre */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Title */}
          <div>
            <label className="block font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={movie.title}
              onChange={handleChange}
              required
              className="w-full p-2 border"
              placeholder="Inception"
            />
          </div>

          {/* Genre */}
          <div>
            <label className="block font-medium">Genre</label>
            <input
              type="text"
              name="genre"
              value={movie.genre}
              onChange={handleChange}
              required
              className="w-full p-2 border"
              placeholder="Sci-Fi"
            />
          </div>
        </div>

        {/* Year and Rating */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Year */}
          <div>
            <label className="block font-medium">Year</label>
            <input
              type="number"
              name="year"
              value={movie.year}
              onChange={handleChange}
              required
              className="w-full p-2 border"
              placeholder="2010"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block font-medium">Rating</label>
            <input
              type="number"
              step="0.1"
              name="rating"
              value={movie.rating}
              onChange={handleChange}
              required
              className="w-full p-2 border"
              placeholder="8.8"
            />
          </div>
        </div>

        {/* Language and Box office */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Language */}
          <div>
            <label className="block font-medium">Language</label>
            <input
              type="text"
              name="language"
              value={movie.language}
              onChange={handleChange}
              required
              className="w-full p-2 border"
              placeholder="English"
            />
          </div>

          {/* Box Office */}
          <div>
            <label className="block font-medium">
              Box Office (in millions)
            </label>
            <input
              type="number"
              step="0.1"
              name="boxOffice"
              value={movie.boxOffice}
              onChange={handleChange}
              required
              className="w-full p-2 border"
              placeholder="829.9"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-white text-black font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Upload Movie
        </button>
      </form>
    </div>
  );
}
