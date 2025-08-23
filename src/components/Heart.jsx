import { useState } from "react";

function Heart() {
  const [filled, setFilled] = useState(true);
  return (
    <svg
      onClick={() => setFilled((pre) => !pre)}
      className={`size-8 cursor-pointer ${
        filled ? "text-red-500" : " text-gray-200"
      }`}
    >
      <use href="/sprite.svg#favorite_icon" />
    </svg>
  );
}

export default Heart;
