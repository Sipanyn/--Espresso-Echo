import Counter from "./Counter";

function FavProduct({ item }) {
  return (
    <div
      key={item}
      className="flex flex-row rounded-md shadow-md p-3 gap-2.5 w-full sm:w-fit bg-stone-50/20"
    >
      {/* image */}
      <img src="/Hot%20Chocolate.png" alt="Hot Chocolate" />
      <div className="flex flex-col justify-between w-full pt-1 pb-4">
        {/* name + rate */}
        <div className="flex flex-col gap-1.5">
          <p className="font-medium">Hot Chocolate</p>
          <span className="flex flex-row gap-0.5">
            <span>⭐</span>
            <span className="text-gray-400 font-light">4.5</span>
          </span>
        </div>
        {/* count + price */}
        <div className="flex flex-row justify-between items-center gap-8 w-full">
          <p className="font-medium">$12</p>
          <Counter />
        </div>
      </div>
    </div>
  );
}

export default FavProduct;
