import { useRef } from "react";

function ImageWithLoader({ item }) {
  const containerRef = useRef(null);
  const handleImageLoad = () => {
    if (containerRef.current) {
      containerRef.current.classList.add("loaded");
    }
  };

  return (
    <div ref={containerRef} className="productContainer loading">
      <div className="imagePlaceholder"></div>
      <img src={item.src} alt={item.name} onLoad={handleImageLoad} />
    </div>
  );
}

export default ImageWithLoader;
