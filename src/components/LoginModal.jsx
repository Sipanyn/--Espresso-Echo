import { useState } from "react";

function LoginModal() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [match, setMatch] = useState(null);
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setMatch(value === confirmPassword);
  };

  const handleConfirmChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setMatch(password === value);
  };

  return (
    <div className="h-full w-full fixed top-0 z-10 bg-stone-100 flex flex-col  justify-start sm:justify-center items-center">
      <form className="flex flex-col items-center gap-2 pr-2 pl-2 pt-3.5 pb-3.5 w-[90%] sm:w-[410px]  rounded-md  bg-white text-inherit mt-10 sm:mt-0">
        <div className="flex flex-row-reverse gap-0.5 justify-center items-center">
          <h2 className="font-bold">Login</h2>
          <svg className="size-8 ">
            <use href="/sprite.svg#app_icon" />
          </svg>
        </div>
        <div className="w-[90%]  mb-1">
          <input
            className="input_username text-[18px]  bg-gray-100 rounded-md w-full p-2.5"
            type="text"
            placeholder="username"
            minLength={3}
            required
          />
          <p className="text-xs text-red-500 opacity-0 invisible">
            Minimum 3 characters required
          </p>
        </div>
        <div className="w-[90%]  mb-1">
          <input
            className="input_email text-[18px]  bg-gray-100 rounded-md w-full p-2.5"
            type="email"
            placeholder="email"
            required
          />
          <p className="text-xs text-gray-500 opacity-0 invisible">
            examaple@gmail.com
          </p>
        </div>
        <div></div>
        <div className="w-[90%]  mb-1">
          <input
            className="input_pass text-[18px]  bg-gray-100 rounded-md w-full p-2.5"
            type="password"
            placeholder="password"
            minLength={5}
            onChange={handlePasswordChange}
            required
          />
          <p className="text-xs text-red-500 opacity-0 invisible">
            Minimum 5 characters required
          </p>
        </div>
        <div className="w-[90%] mb-1">
          <input
            className={`input_confirm text-[18px] bg-gray-100 rounded-md w-full p-2.5 ${
              match === false
                ? "border-2 border-red-500"
                : match === true
                ? "border-2 border-green-500"
                : ""
            }`}
            type="password"
            placeholder="confirm password"
            onChange={handleConfirmChange}
          />
          {match === false && (
            <p className="text-red-500 text-sm">❌ Passwords do not match</p>
          )}
        </div>

        <button
          className={`bg-emerald-500 text-white p-2.5 rounded-md cursor-pointer w-full ${
            match === false &&
            "opacity-50 cursor-not-allowed pointer-events-none"
          }`}
        >
          Confirm
        </button>
      </form>
    </div>
  );
}

export default LoginModal;
