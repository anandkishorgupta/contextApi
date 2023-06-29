import React from "react";
import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  // data filling
  const fetchBlogPosts = async (page = 1) => {
    let url = `${baseUrl}get-blogs?page=${page}`;
    setLoading(true);
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setPosts(data.posts);
      setPage(data.page);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("error ");
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  };

  function handlePageChange(page) {
    setPage(page);
    fetchBlogPosts(page);
  }

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
