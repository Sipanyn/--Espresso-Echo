import AddToCart from "./AddToCart";

function HomeProduct({ item }) {
  return (
    <div className="flex flex-col rounded-md shadow-md p-3 pb-0 gap-2.5 w-[162px]  bg-stone-50/20 relative">
      {/* image */}
      <img className="h-[138px] w-[152px]" src={item.src} alt="Hot Chocolate" />
      <div className="flex flex-col justify-between w-full pt-1 pb-4">
        {/* name + rate */}
        <div className="flex flex-col gap-1.5">
          <p className="font-medium w-[140px] whitespace-nowrap overflow-hidden text-ellipsis">
            {item.name}
          </p>
          {/* rate + price */}
          <div className="flex flex-row justify-between">
            <span className="flex flex-row gap-0.5">
              <span>⭐</span>
              <span className="text-gray-400 font-light">{item.rate}</span>
            </span>
            <p className="font-medium">${item.price}</p>
          </div>
        </div>
        {/* add */}

        <AddToCart />
      </div>
    </div>
  );
}

export default HomeProduct;
