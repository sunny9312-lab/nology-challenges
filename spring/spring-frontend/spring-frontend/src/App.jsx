import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { getAllPosts } from "./services/posts";
import PostsList from "./containers/PostsList/PostsList";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((res) => {
      setPosts(res);
      console.log(res);
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostsList posts={posts} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// CHALLENGE MVP
// make the delete button work, it should remove the record from the database
// and not display it on the frontend
