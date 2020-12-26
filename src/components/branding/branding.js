import React from "react";
import CartSummary from "../cart/CartSummary";
import Brand from "./brand";
import Search from "./search";

const Branding = (props) => {
  return (
    <div className="site-branding-area">
      <div className="container">
        <div className="row">
          <Brand isSearchDisplay={props.isSearchDisplay} />
          <Search
            isSearchDisplay={props.isSearchDisplay}
            searchProducts={props.searchProducts}
          />

          <CartSummary
            cart={props.cart}
            isSearchDisplay={props.isSearchDisplay}
          />
        </div>
      </div>
    </div>
  );
};

export default Branding;
