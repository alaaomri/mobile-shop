import React from "react";
import CartSummary from "../cart/CartSummary";
import Brand from "./brand";
import Search from "./search";

const Branding = (props) => {
  return (
    <div className="site-branding-area">
      <div className="container">
        <div className="row">
          <Brand />
          <Search />
          <CartSummary cart={props.cart} />
        </div>
      </div>
    </div>
  );
};

export default Branding;
