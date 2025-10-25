export const getMovieCommets = async (id) => {
  const data = await fetch(`http://localhost:3000/comments/${id}`);
  const comments = await data.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return comments;
};
