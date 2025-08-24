import { useRef } from "react";

function ImageWithLoader({ item, height, width }) {
  const containerRef = useRef(null);

  const handleImageLoad = () => {
    if (containerRef.current) {
      containerRef.current.classList.add("loaded");
    }
  };

  return (
    <div
      ref={containerRef}
      className="productContainer loading"
      style={{ height, width }}
    >
      <div className="imagePlaceholder"></div>
      <img src={item.src} alt={item.name} onLoad={handleImageLoad} />
      <p>{name}</p>
    </div>
  );
}

export default ImageWithLoader;
