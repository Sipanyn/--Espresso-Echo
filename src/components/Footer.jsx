import { NavLink, Outlet } from "react-router";

function Footer() {
  return (
    <div className="flex flex-col justify-between h-dvh *:select-none">
      <Outlet />
      <div className="bg-white w-full *:text-gray-300 flex flex-row justify-between *:cursor-pointer border-t-1 border-gray-300 mt-2 pt-[19px] pb-[24px] pl-[35px] pr-[35px]">
        <NavLink
          to="/"
          className={`flex flex-col items-center ({ isActive }) => (isActive ? "active" : "")`}
        >
          <svg className="size-8 ">
            <use href="sprite.svg#home_icon" />
          </svg>
          Home
        </NavLink>
        <NavLink
          to="/cart"
          className={`flex flex-col items-center ({ isActive }) => (isActive ? "active" : "")`}
        >
          <svg className="size-8 ">
            <use href="sprite.svg#cart_icon" />
          </svg>
          Cart
        </NavLink>
        <NavLink
          to="/favorite"
          className={`flex flex-col items-center ({ isActive }) => (isActive ? "active" : "")`}
        >
          <svg className="size-8 ">
            <use href="sprite.svg#favorite_icon" />
          </svg>
          Favorite
        </NavLink>
        <NavLink
          to="/profile"
          className={`flex flex-col items-center ({ isActive }) => (isActive ? "active" : "")`}
        >
          <svg className="size-8 ">
            <use href="sprite.svg#profile_icon" />
          </svg>
          Profile
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;
