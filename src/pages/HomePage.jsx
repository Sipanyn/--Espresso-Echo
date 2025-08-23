import { useState } from "react";
import LoginModal from "../components/LoginModal"; // assuming you have this component
import { useSelector } from "react-redux";

function HomePage() {
  const [loginModel, setLoginModel] = useState(false);
  const userInfo = useSelector((state) => state.login.userInfo);
  return (
    <>
      {loginModel ? (
        <LoginModal setLoginModel={setLoginModel} />
      ) : (
        <div className="flex flex-col p-2.5 w-full">
          {/* header */}
          <div className="flex flex-row justify-between items-start ">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2 text-burntOrange font-bold">
                <svg className="size-8">
                  <use href="/sprite.svg#app_icon" />
                </svg>
                <h2>Espresso Echo</h2>
              </div>
              <p className="text-gray-300 font-extralight w-[261px] whitespace-nowrap overflow-hidden text-ellipsis">
                Kindly select your preferred coffee type
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
          <div className="bg-gray-50 rounded-md w-[90%] sm:w-[410px] flex flex-row gap-1 placeholder:text-gray-400 mt-3 m-auto pt-2 pb-2 pl-1.5 pr-1.5">
            <svg className="size-6 text-gray-400">
              <use href="/sprite.svg#search_icon" />
            </svg>
            <input type="text" placeholder="Search by coffee name" />
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
