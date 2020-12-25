import React from "react";

const CartSummary = (props) => {
  const { cart } = props;
  const totalQty = () => {
    const qty = 0;
    return cart.items.length !== 0
      ? cart.items.map((entry1) => {
          return qty + entry1.qty;
        })
      : 0;
  };
  return (
    <div className="col-sm-4">
      <div className="shopping-item">
        <a href="cart.html">
          Cart : <span className="cart-amunt">{cart.total} €</span>{" "}
          <i className="fa fa-shopping-cart"></i>
          <span className="product-count">{totalQty()}</span>
        </a>
      </div>
    </div>
  );
};

export default CartSummary;
