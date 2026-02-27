import React, { useEffect, useState } from "react";
import PixabayContext from "./PixabayContext";

const PixabayState = (props) => {
  const [imageData, setImageData] = useState([]);
  const [query, setQuery] = useState("london");
  const [page, setPage] = useState(1);

  // (Debounce state)
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  const api_key = "46829746-ff95e31a062d390da1aadb868";

  //  (Debounce logic)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  // 🔁 UPDATED (use debouncedQuery + page)
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=${api_key}&q=${debouncedQuery}&image_type=photo&per_page=12&page=${page}`
        );
        const data = await response.json();
        setImageData(data.hits);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [debouncedQuery, page]);

  // 🔁 UPDATED (reset page when category changes)
  const fetchImageByCategory = (cat) => {
    if (cat !== query) {
    setPage(1);
    setQuery(cat);
  }
  };

  return (
    <PixabayContext.Provider
      value={{
        imageData,
        setQuery,
        fetchImageByCategory,
        page,
        setPage,
      }}
    >
      {props.children}
    </PixabayContext.Provider>
  );
};

export default PixabayState;