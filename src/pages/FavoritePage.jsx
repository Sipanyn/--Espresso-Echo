import { useNavigate } from "react-router";
import useScrollTop from "../hooks/useScrollTop";

function FavoritePage() {
  const { scrollTop } = useScrollTop();
  let navigate = useNavigate();
  return (
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
          <p className="font-bold">Favorites</p>
        </div>
        <div className="flex flex-row gap-0.5">
          <p className="font-bold">1</p>
          <p>item(s)</p>
        </div>
      </div>
      {/* products container */}
      <div className="flex flex-col mb-19 mt-16">
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
        <p>product</p>
      </div>
    </div>
  );
}

export default FavoritePage;
