import { useNavigate } from "react-router";
import useScrollTop from "../hooks/useScrollTop";
import LoginModal from "../components/LoginModal";
import { useSelector } from "react-redux";
import { useState } from "react";
import FavProduct from "../components/FavProduct";
function FavoritePage() {
  const { scrollTop } = useScrollTop();
  let navigate = useNavigate();
  const userInfo = useSelector((state) => state.login.userInfo);
  const [loginModel, setLoginModel] = useState(false);
  const allProducts = useSelector((state) => state.products.allProducts);
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
              <p className="font-bold">Favorite</p>
            </div>
            {userInfo.length > 0 ? (
              <div className="flex flex-row gap-0.5">
                <p className="font-bold">
                  {" "}
                  {allProducts?.filter((item) => item.favorite === true).length}
                </p>
                <p>item(s)</p>
              </div>
            ) : null}
          </div>
          <>
            {userInfo.length > 0 ? (
              <div className="flex flex-row justify-center flex-wrap gap-2.5 mb-25 mt-16 p-2.5">
                {allProducts?.filter((item) => item.favorite === true).length >
                0 ? (
                  allProducts?.map((item) => {
                    if (item.favorite) {
                      return <FavProduct key={item.id} item={item} />;
                    }
                  })
                ) : (
                  <p className="bg-gray-300 rounded-md pt-2 pb-2 pl-3.5 pr-3.5 text-white flex flex-row items-center gap-1.5">
                    No product in Favorite 💔
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
                  Login to see Favorite
                  <svg className="size-6 sm:size-7">
                    <use href="/sprite.svg#login_icon" />
                  </svg>
                </div>
              </div>
            )}
          </>
        </div>
      )}
    </>
  );
}

export default FavoritePage;
