import React from "react";
import BillingForm from "./BillingForm";
import ShippingForm from "./ShippingForm";
const addressForm = (props) => {
  return (
    <div>
      <BillingForm
        change={props.change}
        customer={props.customer}
        role="billingAddress"
      />
      <ShippingForm
        change={props.change}
        customer={props.customer}
        role="shippingAddress"
      />
    </div>
  );
};
export default addressForm;
