import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const Pagination = () => {
  const { page, fetchBlogPosts, totalPages } = useContext(AppContext);
  return (
    <div
      className="bg-white fixed-bottom py-2"
      style={{ boxShadow: " 0 -0.125rem 0.25rem rgba(0, 0, 0, 0.075)" }}
    >
      <div
        className="border-5  d-flex justify-content-between container"
        style={{ maxWidth: "650px" }}
      >
        <div className=" d-flex gap-3">
          {page > 1 && (
            <button
              type="button"
              className="btn border"
              onClick={() => fetchBlogPosts(page - 1)}
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              type="button"
              className="btn border"
              onClick={() => fetchBlogPosts(page + 1)}
            >
              Next
            </button>
          )}
        </div>
        <div>
          <p>{`page ${page} of ${totalPages}`}</p>
        </div>
      </div>
    </div>
  );
};
