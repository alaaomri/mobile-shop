import React from "react";
import BillingForm from "./BillingForm";

const addressForm = (props) => {
  return (
    <div>
      <BillingForm change={props.change} customer={props.customer} />
    </div>
  );
};
export default addressForm;
