import { useDispatch, useSelector } from "react-redux";
import { toggleToFav } from "../features/productSlice";
import toast, { Toaster } from "react-hot-toast";

function Heart({ item }) {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.login.userInfo);
  const notify = () =>
    toast.error("Please Login!", {
      duration: 2000,
    });
  return (
    <>
      <Toaster />
      <svg
        onClick={() => {
          if (userInfo?.length > 0) {
            dispatch(toggleToFav(item));
          } else {
            notify();
          }
        }}
        className={`size-8 cursor-pointer ${
          item.favorite ? "text-red-500" : " text-gray-200"
        }`}
      >
        <use href="/sprite.svg#favorite_icon" />
      </svg>
    </>
  );
}

export default Heart;
