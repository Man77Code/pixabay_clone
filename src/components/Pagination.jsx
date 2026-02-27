import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";

const Pagination = () => {
  const { page, setPage } = useContext(PixabayContext);

  return (
    <div className="text-center my-4">
      <button
        disabled={page === 1}
        onClick={() => setPage((prev) => prev - 1)}
        className="btn btn-outline-light mx-2"
      >
        Prev
      </button>

      <span className="mx-3">Page {page}</span>

      <button
        onClick={() => setPage((prev) => prev + 1)}
        className="btn btn-outline-light mx-2"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;