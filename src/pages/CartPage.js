import React, { useEffect, useState } from "react";
import Branding from "../components/branding/branding";
import CartContent from "../components/cart/cartContent";
import CartTotal from "../components/cart/cartTotal";
import CrossSells from "../components/cart/crossSells";

const CartPage = (props) => {
  return (
    <React.Fragment>
      <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-content-right">
                <div className="woocommerce">
                  <CartContent
                    cart={props.cart}
                    changeQuantityHandler={props.changeQuantityHandler}
                  />

                  <div className="cart-collaterals">
                    <CrossSells />
                    <CartTotal cart={props.cart} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartPage;
