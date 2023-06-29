import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

export const Blog = () => {
  // consume
  const { posts, loading } = useContext(AppContext);

  return (
    <div
      style={{ marginBottom: "150px", maxWidth: "650px", marginTop: "100px" }}
      className="container"
    >
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <h1>No Posts Found</h1>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="mb-4">
            <p className="fw-bold mb-0">{post.title}</p>
            <p className="mb-1">
              By <span>{post.author} </span> on{" "}
              <span className="fw-bold">
                <u>{post.category}</u>
              </span>
              <br />
              <span>posted on {post.date}</span>
            </p>
            <p className="mb-0">{post.content}</p>
            <div className="fs-6 text-primary d-flex gap-2 row-gap-0 flex-wrap ">
              {post.tags.map((tag, index) => (
                <small key={index}>
                  <u>{`#${tag}`}</u>
                </small>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};
