export const getMovie = async (id) => {
  const data = await fetch(`http://localhost:3000/movie/${id}`);
  const movie = await data.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return movie;
};
