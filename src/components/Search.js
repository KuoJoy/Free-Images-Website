import React from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <label htmlFor="search">
        <input
          className="input"
          onChange={inputHandler}
          type="text"
          placeholder="Search..."
          id="search"
        />
        <button onClick={search}>
          <i class="fas fa-regular fa-magnifying-glass"></i>
        </button>        
      </label>

    </div>
  );
};

export default Search;
