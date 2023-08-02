export const getAllPosts = async () => {
  // fetch the data
  const response = await fetch("http://localhost:8080/posts");
  return await response.json();
};
