import React from "react";
import { useContext, useEffect } from "react";
import { Blog } from "./components/Blog";
import { Header } from "./components/Header";
import { Pagination } from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import { BrowserRouter, Routes } from "react-router-dom";
const App = () => {
  const { fetchBlogPosts } = useContext(AppContext);
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  return (
    <div>
      <Header />
      <Blog />
      <Pagination />
    </div>
  );
};

export default App;
