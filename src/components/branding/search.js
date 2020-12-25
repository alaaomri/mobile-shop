import React, { useState } from "react";
import { searchProduct } from "../../api";

const Search = (props) => {
  const [query, setQuery] = useState("");

  const queryChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  const serchProductsHandler = async () => {
    if (query !== undefined && query !== "" && query !== null) {
      window.location.href = "http://localhost:3000/search?q=" + query;
      const data = await searchProduct(query);
    }
  };

  return (
    <div className="col-sm-4">
      <input
        type="text"
        value={query}
        style={{ marginTop: "30px" }}
        placeholder="Search products..."
        onChange={queryChangeHandler}
      />
      <input type="button" value="Search" onClick={serchProductsHandler} />
    </div>
  );
};

export default Search;
