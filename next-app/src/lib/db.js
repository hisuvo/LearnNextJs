// fetch data by fetch() API
export const moviesData = async () => {
  const data = await fetch("http://localhost:3000/movies");
  const movies = await data.json();
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return movies;
};
