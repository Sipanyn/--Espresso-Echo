import { useState } from "react";

function AddToCart() {
  const [added, setAdded] = useState(false);
  return (
    <div
      onClick={() => setAdded((pre) => !pre)}
      className={`flex flex-row justify-center border-1 gap-1 cursor-pointer   rounded-md mt-2 pt-1.5 pb-1.5 text-white
        ${added ? "bg-red-500  " : " bg-green-400"}
        `}
    >
      <p className="text-[14px]">{added ? "Remove" : "Add"}</p>
      <svg className="size-5">
        <use href="/sprite.svg#cart_icon" />
      </svg>
    </div>
  );
}

export default AddToCart;
