import { moviesData } from "@/lib/db";
import Link from "next/link";

const MovieList = async () => {
  const movies = await moviesData();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <div key={movie._id} className="p-4 border-2">
          <p>Relase:{movie?.year}</p>
          <Link href={`/movie/${movie._id}`}>{movie.title}</Link>
          <br />
          <button className="border px-2 mr-2">Remove</button>
          <button className="border px-2 mt-2">Update</button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
