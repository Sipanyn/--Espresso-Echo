import { useDispatch } from "react-redux";
import { toggleToFav } from "../features/productsSlice";

function Heart({ item }) {
  const dispatch = useDispatch();
  return (
    <svg
      onClick={() => dispatch(toggleToFav(item))}
      className={`size-8 cursor-pointer ${
        item.favorite ? "text-red-500" : " text-gray-200"
      }`}
    >
      <use href="/sprite.svg#favorite_icon" />
    </svg>
  );
}

export default Heart;
