import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";
const Image = () => {
  const { imageData } = useContext(PixabayContext);
  return (
    <div className="container my-5">
      <div className="flex">
        {imageData.map((image) => (
          <div key={image.id}>
            <div className="items">
              <img src={image.largeImageURL} alt="balaji" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Image;
