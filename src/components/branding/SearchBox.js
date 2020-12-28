import React, { useState } from "react";

const Search = (props) => {
  const [query, setQuery] = useState("");

  const queryChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  return props.isSearchDisplay ? (
    <div className="col-sm-4">
      <form action="/search">
        <input
          type="text"
          name="q"
          value={query}
          style={{ marginTop: "30px" }}
          placeholder="Search products..."
          onChange={queryChangeHandler}
        />
        <input type="submit" className="search-button" value="Search" />
      </form>
    </div>
  ) : null;
};

export default Search;
