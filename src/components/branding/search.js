import React, { useState } from "react";

const Search = (props) => {
  const [query, setQuery] = useState("");

  const queryChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  const searchProductsHandler = () => {
    debugger;
    if (query !== undefined && query !== "" && query !== null) {
      window.location.href = "http://localhost:3000/search?q=" + query;
      props.searchProducts(query);
    }
  };

  return props.isSearchDisplay ? (
    <div className="col-sm-4">
      <input
        type="text"
        value={query}
        style={{ marginTop: "30px" }}
        placeholder="Search products..."
        onChange={queryChangeHandler}
      />
      <input type="button" value="Search" onClick={searchProductsHandler} />
    </div>
  ) : null;
};

export default Search;
