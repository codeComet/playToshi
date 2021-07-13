import React from "react";
import "./Gallery.css";

function Gallery({ img }) {
  return (
    <div className="gallery">
      <img src={img} alt={img} />
    </div>
  );
}

export default Gallery;
