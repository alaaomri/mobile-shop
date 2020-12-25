import React from "react";

const CartSummary = (props) => {
  const { cart } = props;

  const quantity = cart.items
    .map((item) => item.qty)
    .reduce((sum, current) => parseInt(sum + current), 0);

  return (
    <div className="col-sm-4">
      <div className="shopping-item">
        <a href="cart.html">
          Cart : <span className="cart-amunt">{cart.total} €</span>
          <i className="fa fa-shopping-cart"></i>
          <span className="product-count">{quantity}</span>
        </a>
      </div>
    </div>
  );
};

export default CartSummary;
