const cartContent = (props) => {
  const {
    cart: { items },
  } = props;
  return (
    <table cellSpacing="0" className="shop_table cart">
      <thead>
        <tr>
          <th className="product-remove">&nbsp;</th>
          <th className="product-thumbnail">&nbsp;</th>
          <th className="product-name">Product</th>
          <th className="product-price">Price</th>
          <th className="product-quantity">Quantity</th>
          <th className="product-subtotal">Total</th>
        </tr>
      </thead>
      <tbody>
        {items.map((cartItem) => (
          <tr className="cart_item">
            <td className="product-remove">
              <a title="Remove this item" className="remove" href="#">
                ×
              </a>
            </td>

            <td className="product-thumbnail">
              <a href="single-product.html">
                <img
                  width="145"
                  height="145"
                  alt="poster_1_up"
                  className="shop_thumbnail"
                  src="img/product-thumb-2.jpg"
                />
              </a>
            </td>

            <td className="product-name">
              <a href="single-product.html">{cartItem.name}</a>
            </td>

            <td className="product-price">
              <span className="amount">{cartItem.price}€</span>
            </td>

            <td className="product-quantity">
              <div className="quantity buttons_added">
                <input type="button" className="minus" value="-" />
                <input
                  type="number"
                  size="4"
                  className="input-text qty text"
                  title="Qty"
                  value={cartItem.qty}
                  min="0"
                  step="1"
                />
                <input type="button" className="plus" value="+" />
              </div>
            </td>

            <td className="product-subtotal">
              <span className="amount">{cartItem.price * cartItem.qty} €</span>
            </td>
          </tr>
        ))}

        <tr>
          <td className="actions" colSpan="6">
            <input
              type="button"
              onClick={() => {
                document.location.href = "checkout.html";
              }}
              value="Checkout"
              name="proceed"
              className="checkout-button button alt wc-forward"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default cartContent;
