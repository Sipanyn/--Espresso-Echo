function Search({ setSearchValue }) {
  function searchHandler(event) {
    setSearchValue(() => event.target.value.trim());
  }
  return (
    <div className="bg-gray-50 shadow-sm rounded-md w-[90%] sm:w-[410px] flex flex-row gap-1 placeholder:text-gray-400 mt-3 m-auto pt-3 pb-3 pl-1.5 pr-1.5 sticky top-12 z-9">
      <svg className="size-6 text-gray-400">
        <use href="/sprite.svg#search_icon" />
      </svg>
      <input
        onChange={(event) => searchHandler(event)}
        type="text"
        placeholder="Search by coffee name"
      />
    </div>
  );
}

export default Search;
