function HomePage() {
  return (
    <div className="flex flex-col p-2.5">
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-2 text-burntOrange font-bold">
            <svg className="size-8 ">
              <use href="/sprite.svg#app_icon" />
            </svg>
            <h2>Espresso Echo</h2>
          </div>
          <p className="text-gray-300 font-extralight">
            Kindly select your preferred coffee type
          </p>
        </div>

        <div className="flex flex-row items-center gap-2 text-gray-400 cursor-pointer hover:text-burntOrange">
          <svg className="size-6 sm:size-8">
            <use href="/sprite.svg#login_icon" />
          </svg>
          <h2>Login</h2>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
