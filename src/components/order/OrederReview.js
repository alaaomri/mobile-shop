import React from "react";
import PaymentMode from "./PaymentMode";
const orderReview = ({ order, change, submit }) => {
  return (
    <React.Fragment>
      <h3 id="order_review_heading">Your order</h3>
      <div id="order_review" style={{ position: "relative" }}>
        <table className="shop_table">
          <thead>
            <tr>
              <th className="product-name">Product</th>
              <th className="product-total">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="cart_item">
              <td className="product-name">
                Ship Your Idea <strong className="product-quantity">× 1</strong>
              </td>
              <td className="product-total">
                <span className="amount">{order.total} € </span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="cart-subtotal">
              <th>Cart Subtotal</th>
              <td>
                <span className="amount">{order.subTotal} € </span>
              </td>
            </tr>

            <tr className="shipping">
              <th>Taxe (20%)</th>
              <td>{order.tax} €</td>
            </tr>

            <tr className="order-total">
              <th>Order Total</th>
              <td>
                <strong>
                  <span className="amount">{order.total} € </span>
                </strong>
              </td>
            </tr>
          </tfoot>
        </table>
        <PaymentMode change={change} submit={submit} />
      </div>
    </React.Fragment>
  );
};
export default orderReview;
