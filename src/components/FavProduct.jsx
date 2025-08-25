import Heart from "../components/Heart";
import AddToCart from "../components/AddToCart";
import ImageWithLoader from "./ImageWithLoader";
function FavProduct({ item }) {
  return (
    <div className="flex flex-row rounded-md shadow-md p-3 gap-2.5 w-full sm:w-fit bg-stone-50/20">
      {/* image */}
      {/* <img src={item.src} alt="Hot Chocolate" /> */}
      <ImageWithLoader item={item} width={"78px"} height={"117px"} />
      <div className="flex flex-col justify-between w-full pt-1 pb-4">
        {/* name + rate */}
        <div className="flex flex-col gap-1.5">
          <div className="font-medium flex flex-row justify-between items-center w-full sm:w-[176px] ">
            {item.name}
            <Heart item={item} />
          </div>
          <span className="flex flex-row gap-0.5">
            <span>⭐</span>
            <span className="text-gray-400 font-light">{item.rate}</span>
          </span>
        </div>
        {/*  price */}
        <div className="flex flex-row justify-between items-center gap-1.5  w-full">
          <p className="font-medium">${item.price}</p>
        </div>
        <AddToCart item={item} />
      </div>
    </div>
  );
}

export default FavProduct;
