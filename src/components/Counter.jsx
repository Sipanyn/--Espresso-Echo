import { useDispatch } from "react-redux";
import { calTotal, decrement, increment } from "../features/productSlice";

function Counter({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row items-center justify-center gap-6 border-1 border-gray-300 pt-1 pb-1 pl-4 pr-4 rounded-md">
      <button
        className="text-burntOrange font-medium cursor-pointer"
        onClick={() => dispatch(decrement(item))}
        disabled={item.count <= 0}
      >
        -
      </button>

      <span className=" border-1 border-gray-300 pt-0.5 pb-0.5 pr-2.5 pl-2.5 rounded-md font-bold">
        {item.count}
      </span>
      <button
        className="text-burntOrange font-medium cursor-pointer"
        onClick={() => {
          dispatch(increment(item));
          dispatch(calTotal());
        }}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
