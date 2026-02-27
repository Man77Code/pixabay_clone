import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";

const Image = () => {
  const { imageData } = useContext(PixabayContext);

  return (
    <div className="container my-5">
      <div className="flex">
        {imageData && imageData.length > 0 &&
          imageData.map((image, index) => (
            <div key={image.id} className="items">
              <img
                src={image.webformatURL}
                alt={image.tags}
                loading={index === 0 ? "eager" : "lazy"}
                fetchpriority={index === 0 ? "high" : "auto"}
                width="300"
                height="200"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Image;