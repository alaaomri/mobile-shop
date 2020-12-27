import React from "react";
import { Link } from "react-router-dom";

const CartSummary = (props) => {
  const { cart } = props;
  const className = props.isSearchDisplay ? "col-sm-4" : "col-sm-6";

  const quantity = props.cart.items
    .map((item) => item.qty)
    .reduce((sum, current) => sum + current, 0);

  return (
    <div className={className}>
      <div className="shopping-item">
        <Link to="/cart.html">
          Cart : <span className="cart-amunt">{cart.total} €</span>
          <i className="fa fa-shopping-cart"></i>
          <span className="product-count">{quantity}</span>
        </Link>
      </div>
    </div>
  );
};

export default CartSummary;
