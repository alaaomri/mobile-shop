import React, { useEffect, useState, useRef } from "react";

const PaymentMode = ({ change, submit, order }) => {
  const [selected, setSelected] = useState("bacs");
  const [canPlaceOrder, setCanPlaceOrder] = useState(false);

  const checkSubmit = useRef(() => {});

  checkSubmit.current = () => {
    const disbled = order.tatal > 5;
    setCanPlaceOrder(disbled);
  };

  useEffect(() => {
    const disbled = order.tatal > 5;
    setCanPlaceOrder(disbled);
  }, []);
  const onChangeHandler = (event, name) => {
    const value = event.target.value;
    setSelected(value);
    change(name, value, "paymentMethod");
  };
  return (
    <div id="payment">
      <ul className="payment_methods methods">
        <li className="payment_method_bacs">
          <input
            type="radio"
            data-order_button_text=""
            checked={selected === "bacs"}
            value="bacs"
            name="payment_method"
            className="input-radio"
            id="payment_method_bacs"
            onChange={(event) => onChangeHandler(event, "paymentMethod")}
          />
          <label htmlFor="payment_method_bacs">
            &nbsp;Direct Bank Transfer{" "}
          </label>
          <div className="payment_box payment_method_bacs">
            <p>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order won’t be shipped
              until the funds have cleared in our account.
            </p>
          </div>
        </li>
        <li className="payment_method_cheque">
          <input
            checked={selected === "cheque"}
            type="radio"
            data-order_button_text=""
            value="cheque"
            name="payment_method"
            className="input-radio"
            id="payment_method_cheque"
            onChange={(event) => onChangeHandler(event, "paymentMethod")}
          />
          <label htmlFor="payment_method_cheque"> &nbsp;Cheque Payment </label>
          <div
            style={{ display: "none" }}
            className="payment_box payment_method_cheque"
          >
            <p>
              Please send your cheque to Store Name, Store Street, Store Town,
              Store State / County, Store Postcode.
            </p>
          </div>
        </li>
        <li className="payment_method_paypal">
          <input
            checked={selected === "paypal"}
            type="radio"
            data-order_button_text="Proceed to PayPal"
            value="paypal"
            name="payment_method"
            className="input-radio"
            id="payment_method_paypal"
            onChange={(event) => onChangeHandler(event, "paymentMethod")}
          />
          <label htmlFor="payment_method_paypal">
            &nbsp;PayPal &nbsp;
            <img
              alt="PayPal Acceptance Mark"
              src="https://www.paypalobjects.com/webstatic/mktg/Logo/AM_mc_vs_ms_ae_UK.png"
            />
            <a
              title="What is PayPal?"
              onClick={() => {
                window.open(
                  "https://www.paypal.com/gb/webapps/mpp/paypal-popup",
                  "WIPaypal",
                  "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700"
                );

                return false;
              }}
              className="about_paypal"
              href="#"
            >
              What is PayPal?
            </a>
          </label>
          <div
            style={{ display: "none" }}
            className="payment_box payment_method_paypal"
          >
            <p>
              Pay via PayPal; you can pay with your credit card if you don’t
              have a PayPal account.
            </p>
          </div>
        </li>
      </ul>

      <div className="form-row place-order">
        <input
          type="button"
          data-value="Place order"
          value="Place order"
          id="place_order"
          name="woocommerce_checkout_place_order"
          className="button alt disabled"
          disabled={canPlaceOrder}
          onClick={submit}
        />
      </div>

      <div className="clear"></div>
    </div>
  );
};
export default PaymentMode;
