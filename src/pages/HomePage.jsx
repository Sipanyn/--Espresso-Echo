import { useEffect, useState } from "react";
import LoginModal from "../components/LoginModal"; // assuming you have this component
import { useDispatch, useSelector } from "react-redux";
import useProduct from "../hooks/useProduct";
import HomeProduct from "../components/HomeProduct";
import useScrollTop from "../hooks/useScrollTop";
import { getAllProducts } from "../features/productSlice";
import { EosIconsBubbleLoading } from "../components/Loader";

function HomePage() {
  const [loginModel, setLoginModel] = useState(false);
  const userInfo = useSelector((state) => state.login.userInfo);
  const { scrollTop } = useScrollTop();
  const { data, isLoading } = useProduct();
  const allProducts = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading && data && data.length > 0) {
      dispatch(getAllProducts(data));
      console.log(data);
    }
  }, [data, isLoading, dispatch]);

  return (
    <>
      {loginModel ? (
        <LoginModal setLoginModel={setLoginModel} />
      ) : (
        <div className="flex flex-col p-2.5 w-full">
          {/* header */}
          <div className="flex flex-row justify-between items-start sticky top-0  z-9 bg-white pt-2">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2 text-burntOrange font-bold">
                <svg className="size-8">
                  <use href="/sprite.svg#app_icon" />
                </svg>
                <h2>Espresso Echo</h2>
              </div>

              <p
                className={`text-gray-400 font-extralight w-[261px] whitespace-nowrap overflow-hidden text-ellipsis ${
                  scrollTop > 0 &&
                  "opacity-0 invisible transition-all duration-200"
                }`}
              >
                Select your preferred coffee type
              </p>
            </div>

            {userInfo.length > 0 ? (
              <p className="text-gray-400 text-end sm:w-fit mt-2 w-[105px] whitespace-nowrap overflow-hidden text-ellipsis">
                Hi {userInfo[0].username}
              </p>
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
          {/* search bar */}
          <div className="bg-gray-50 shadow-sm rounded-md w-[90%] sm:w-[410px] flex flex-row gap-1 placeholder:text-gray-400 mt-3 m-auto pt-3 pb-3 pl-1.5 pr-1.5 sticky top-12 z-9">
            <svg className="size-6 text-gray-400">
              <use href="/sprite.svg#search_icon" />
            </svg>
            <input type="text" placeholder="Search by coffee name" />
          </div>
          {/* products container */}
          {/* {isLoading ? console.log("is loading") : console.log(data)} */}
          <div className="flex flex-row justify-center flex-wrap gap-2.5 mb-25 mt-5 p-2.5">
            {isLoading && <EosIconsBubbleLoading />}
            {!isLoading &&
              allProducts?.map((item) => (
                <HomeProduct item={item} key={item.id} />
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
