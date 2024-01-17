import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const img = new Image();
    img.src = images[currentIndex];
    img.onload = () => {
      setLoading(false);
    };
  }, [currentIndex, images]);

  const nextImage = () => {
    setLoading(true);
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setLoading(true);
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      {loading && <div>Loading...</div>}{" "}
      <button onClick={prevImage}>Previous</button>
      <img
        src={images[currentIndex]}
        alt=""
        style={{ display: loading ? "none" : "block" }}
      />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default Carousel;
