import Comments from "@/app/components/Comments";
import MovieCard from "@/app/components/MovieCard";
import { getMovieCommets } from "@/lib/getComments";
import { getMovie } from "@/lib/getMovie";
import { Suspense } from "react";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const movie = await getMovie(id);

  return {
    title: movie?.title,
    description: movie?.body,
  };
};

const page = async ({ params }) => {
  const { id } = await params;

  const moviePromise = getMovie(id);
  const commentsPromise = getMovieCommets(id);

  // const [movie, comments] = await Promise.all([moviePromise, commentsPromise]);

  return (
    <div className="container mx-auto">
      <MovieCard promise={moviePromise} />

      <h3 className="text-xl mt-6">Comments:</h3>
      <Suspense fallback={<h1>Loading comment ...</h1>}>
        <Comments promise={commentsPromise} />
      </Suspense>
    </div>
  );
};

export default page;
