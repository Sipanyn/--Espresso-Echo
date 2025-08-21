import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-row items-center justify-center gap-6 border-1 border-gray-300 pt-1 pb-1 pl-4 pr-4 rounded-md">
      <button
        className="text-burntOrange font-medium cursor-pointer"
        onClick={() => setCount(count - 1)}
        disabled={count <= 0}
      >
        -
      </button>

      <span className=" border-1 border-gray-300 pt-0.5 pb-0.5 pr-2.5 pl-2.5 rounded-md font-bold">
        {count}
      </span>
      <button
        className="text-burntOrange font-medium cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
