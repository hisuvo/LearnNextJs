import React from "react";

const MovieCard = async ({ promise }) => {
  const movie = await promise;
  return (
    <div className="mt-6 w-full max-w-lg mx-auto p-8 border">
      <h1 className="text-3xl font-bold">{movie?.title}</h1>
      <p>
        Relase: {movie?.year} year ( {new Date().getFullYear() - movie.year}{" "}
        ago)
      </p>
      <p>Rating: {movie?.rating} / 10</p>
      <p>Language: {movie?.language} </p>
    </div>
  );
};

export default MovieCard;
