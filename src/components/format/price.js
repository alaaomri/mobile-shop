import React from "react";
import PropTypes from "prop-types";

const Price = (props) => {
  const { price, discount } = props;
  Price.propTypes = {
    discount: PropTypes.number,
    price: PropTypes.number,
    currency: PropTypes.string,
    stylingClass: PropTypes.string,
  };

  Price.defaultProps = {
    discount: 0.0,
    currency: "$",
    stylingClass: "product-wid-price",
  };

  const promotionalPrice =
    discount !== 0
      ? (price - (price * discount) / 100).toFixed(2)
      : price
      ? price.toFixed(2)
      : 0.0;

  return (
    <div className={props.stylingClass}>
      <ins>${promotionalPrice}</ins>
      <del>${price ? price.toFixed(2) : price}</del>
    </div>
  );
};
export default Price;
