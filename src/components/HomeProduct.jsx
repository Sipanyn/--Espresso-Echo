import AddToCart from "./AddToCart";
import Heart from "../components/Heart";
import ImageWithLoader from "../components/ImageWithLoader";
function HomeProduct({ item }) {
  return (
    <div className="relative flex flex-col items-center rounded-md shadow-md p-3 pb-0 gap-2.5 w-[162px]  bg-stone-50/20 ">
      {/* image */}
      {/* <img className="h-[138px] w-[152px]" src={item.src} alt="Hot Chocolate" /> */}
      <ImageWithLoader item={item} height={"142px"} width={"138px"} />
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

        <AddToCart item={item} />
      </div>
      <div className="absolute right-3 top-3 z-2">
        <Heart item={item} />
      </div>
    </div>
  );
}

export default HomeProduct;
