import { useNavigate } from "react-router";
import useScrollTop from "../hooks/useScrollTop";
import LoginModal from "../components/LoginModal";
import { useState } from "react";
import { useSelector } from "react-redux";
function ProfilePage() {
  const { scrollTop } = useScrollTop();
  let navigate = useNavigate();
  const userInfo = useSelector((state) => state.login.userInfo);
  const [loginModel, setLoginModel] = useState(false);
  function LogoutFun() {
    localStorage.removeItem("persist:root");
    window.location.reload();
  }
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
              <p className="font-bold">Profile</p>
            </div>
          </div>
          <>
            {userInfo.length > 0 ? (
              <div className="w-[90%] sm:w-[410px] m-auto flex flex-row justify-center flex-wrap gap-2.5 mb-25 mt-16 p-2.5">
                <div className="text-[18px]  flex flex-col w-full">
                  <p>Username:</p>
                  <p className=" bg-gray-100 rounded-md w-full p-2.5">
                    {userInfo[0].username}
                  </p>
                </div>
                <div className="text-[18px]  flex flex-col w-full">
                  <p>Email:</p>
                  <p className=" bg-gray-100 rounded-md w-full p-2.5">
                    {userInfo[0].email}
                  </p>
                </div>
                <div
                  onClick={() => LogoutFun()}
                  className="text-[16px] p-2.5 rounded-md cursor-pointer flex flex-row w-full bg-red-400 text-white justify-center items-center gap-2"
                >
                  <svg className="size-6 cursor-pointer">
                    <use href="/sprite.svg#logout_icon" />
                  </svg>
                  <p>Log out</p>
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center h-dvh">
                <div
                  onClick={() => setLoginModel(true)}
                  className="bg-gray-300 rounded-md pt-2 pb-2 pl-3.5 pr-3.5 text-white flex flex-row items-center gap-1.5 cursor-pointer"
                >
                  Login to see Profile
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

export default ProfilePage;
