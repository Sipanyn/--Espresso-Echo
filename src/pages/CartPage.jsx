import { useNavigate } from "react-router";
import Counter from "../components/Counter";
import useScrollTop from "../hooks/useScrollTop";
import LoginModal from "../components/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartProduct from "../components/CartProduct";
import { calTotal } from "../features/productSlice";
function CartPage() {
  const { scrollTop } = useScrollTop();
  let navigate = useNavigate();
  const userInfo = useSelector((state) => state.login.userInfo);
  const [loginModel, setLoginModel] = useState(false);
  const allProducts = useSelector((state) => state.products.allProducts);
  const totalPrice = useSelector((state) => state.products.totalPrice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calTotal());
  });
  return (
    <>
      {loginModel ? (
        <LoginModal setLoginModel={setLoginModel} />
      ) : (
        <div className="flex flex-col">
          {/* header */}
          <div
            className={`p-2.5 flex flex-row items-center justify-between fixed w-full z-9 bg-white ${
              scrollTop > 30 && "h-[40px]"
            }`}
          >
            <div className="flex flex-row items-center gap-4">
              <svg
                onClick={() => navigate(-1)}
                className="size-8 text-burntOrange cursor-pointer"
              >
                <use href="/sprite.svg#back_icon" />
              </svg>
              <p className="font-bold">Cart</p>
            </div>
            {userInfo.length > 0 ? (
              <div className="flex flex-row gap-0.5">
                <p className="font-bold">
                  {allProducts?.filter((item) => item.cart === true).length}
                </p>
                <p>item(s)</p>
              </div>
            ) : null}
          </div>
          <>
            {userInfo.length > 0 ? (
              <div className="flex flex-row justify-center flex-wrap gap-2.5 mb-25 mt-16 p-2.5">
                {allProducts?.filter((item) => item.cart === true).length >
                0 ? (
                  allProducts?.map((item) => {
                    if (item.cart) {
                      return <CartProduct key={item.id} item={item} />;
                    }
                  })
                ) : (
                  <p className="bg-gray-300 rounded-md pt-2 pb-2 pl-3.5 pr-3.5 text-white flex flex-row items-center gap-1.5">
                    No product in Cart 😞
                  </p>
                )}
                {/* product */}
              </div>
            ) : (
              <div className="flex justify-center items-center h-dvh">
                <div
                  onClick={() => setLoginModel(true)}
                  className="bg-gray-300 rounded-md pt-2 pb-2 pl-3.5 pr-3.5 text-white flex flex-row items-center gap-1.5 cursor-pointer"
                >
                  Login to see Cart
                  <svg className="size-6 sm:size-7">
                    <use href="/sprite.svg#login_icon" />
                  </svg>
                </div>
              </div>
            )}
          </>

          {/* total price */}
          {userInfo.length > 0 && (
            <div className="flex flex-row justify-between items-center font-bold fixed z-9 bottom-[60px] sm:bottom-[68px] bg-white w-full pt-2 pb-2 pl-4 pr-4">
              <p>Total</p>
              <p>${totalPrice}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default CartPage;
