import { useNavigate } from "react-router";
import Counter from "../components/Counter";
import useScrollTop from "../hooks/useScrollTop";
import LoginModal from "../components/LoginModal";
import { useSelector } from "react-redux";
import { useState } from "react";
function CartPage() {
  const { scrollTop } = useScrollTop();
  let navigate = useNavigate();
  const userInfo = useSelector((state) => state.login.userInfo);
  const [loginModel, setLoginModel] = useState(false);
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
                <p className="font-bold">1</p>
                <p>item(s)</p>
              </div>
            ) : (
              <div
                className="flex flex-row items-center gap-2 text-gray-400 cursor-pointer hover:text-burntOrange"
                onClick={() => setLoginModel(true)}
              >
                <svg className="size-6 sm:size-8">
                  <use href="/sprite.svg#login_icon" />
                </svg>
                <h2>Login</h2>
              </div>
            )}
          </div>
          <>
            {userInfo.length > 0 ? (
              <div className="flex flex-row justify-center flex-wrap gap-2.5 mb-25 mt-16 p-2.5">
                {/* product */}
                <div className="flex flex-row rounded-md shadow-md p-3 gap-2.5 w-full sm:w-fit bg-stone-50/20">
                  {/* image */}
                  <img src="/Hot%20Chocolate.png" />
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
                {/* product */}
                <div className="flex flex-row rounded-md shadow-md p-3 gap-2.5 w-full sm:w-fit bg-stone-50/20">
                  {/* image */}
                  <img src="/Hot%20Chocolate.png" />
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
                {/* product */}
                <div className="flex flex-row rounded-md shadow-md p-3 gap-2.5 w-full sm:w-fit bg-stone-50/20">
                  {/* image */}
                  <img src="/Hot%20Chocolate.png" />
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
                {/* product */}
                <div className="flex flex-row rounded-md shadow-md p-3 gap-2.5 w-full sm:w-fit bg-stone-50/20">
                  {/* image */}
                  <img src="/Hot%20Chocolate.png" />
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
                {/* product */}
                <div className="flex flex-row rounded-md shadow-md p-3 gap-2.5 w-full sm:w-fit bg-stone-50/20">
                  {/* image */}
                  <img src="/Hot%20Chocolate.png" />
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
                {/* product */}
                <div className="flex flex-row rounded-md shadow-md p-3 gap-2.5 w-full sm:w-fit bg-stone-50/20">
                  {/* image */}
                  <img src="/Hot%20Chocolate.png" />
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
              </div>
            ) : (
              <div className="flex justify-center items-center h-dvh">
                <p className="bg-gray-300 rounded-md pt-2 pb-2 pl-3.5 pr-3.5 text-white">
                  Login to see Cart !
                </p>
              </div>
            )}
          </>

          {/* total price */}
          <div className="flex flex-row justify-between items-center font-bold fixed z-9 bottom-[60px] sm:bottom-[68px] bg-white w-full pt-2 pb-2 pl-4 pr-4">
            <p>Total</p>
            <p>$12</p>
          </div>
        </div>
      )}
    </>
  );
}

export default CartPage;
