import { useDispatch, useSelector } from "react-redux";
import { toggleToCart } from "../features/productSlice";
import toast, { Toaster } from "react-hot-toast";

function AddToCart({ item }) {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.login.userInfo);
  const notify = () =>
    toast.error("Please Login!", {
      duration: 2000,
    });
  return (
    <>
      <Toaster />
      <div
        onClick={() => {
          if (userInfo.length > 0) {
            dispatch(toggleToCart(item));
          } else {
            notify();
          }
        }}
        className={`flex flex-row justify-center border-1 gap-1 cursor-pointer  rounded-md mt-2 pt-1.5 pb-1.5 text-white
        ${item.cart ? "bg-red-500  " : " bg-green-400"}
        `}
      >
        <p className="text-[14px]">{item.cart ? "Remove" : "Add"}</p>
        <svg className="size-5">
          <use href="/sprite.svg#cart_icon" />
        </svg>
      </div>
    </>
  );
}

export default AddToCart;
