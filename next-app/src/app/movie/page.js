import React, { Suspense } from "react";
import MovieList from "../components/MovieList";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MovieList />
    </Suspense>
  );
};

export default page;
