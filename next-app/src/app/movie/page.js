import React, { Suspense } from "react";
import MovieList from "../components/MovieList";

const page = () => {
  return (
    <div className="mt-6 ">
      <Suspense fallback={<div>Loading...</div>}>
        <MovieList />
      </Suspense>
    </div>
  );
};

export default page;
