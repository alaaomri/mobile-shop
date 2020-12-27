import { Link } from "react-router-dom";
import EmptyCart from "./emptyCart";
const cartContent = (props) => {
  const { cart } = props;
  const imageDirectory = (imageName) => {
    if (imageName.startsWith("apple")) return "Apple";
    if (imageName.startsWith("sony")) return "Sony";
    if (imageName.startsWith("lg")) return "LG";
    if (imageName.startsWith("samsung")) return "Samsung";
    if (imageName.startsWith("huawei")) return "Huawei";
    return "";
  };

  const changeQuantityForCart = (event, cartItem) => {
    const value = parseInt(event.target.value);
    if (isNaN(value)) {
      props.changeQuantityHandler(cartItem, value);
    } else {
      props.changeQuantityHandler(cartItem, value);
    }
  };

  const changeQuantityByOne = (cartItem, operation) => {
    const index = props.cart.items.findIndex((item) => item.id === cartItem);
    let quantity = props.cart.items[index].qty;
    if (operation === "add") {
      quantity = parseInt(quantity) + 1;
      props.changeQuantityHandler(cartItem, quantity);
    } else if (operation === "remove") {
      quantity = quantity - 1;
      props.changeQuantityHandler(cartItem, quantity);
    } else if (operation === "deleteEntry") {
      props.changeQuantityHandler(cartItem, 0);
    }
  };

  return cart.items.length !== 0 ? (
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
        {cart.items.map((cartItem) => (
          <tr key={cartItem.id} className="cart_item">
            <td className="product-remove">
              <a
                title="Remove this item"
                className="remove"
                href="#"
                onClick={() => changeQuantityByOne(cartItem.id, "deleteEntry")}
              >
                ×
              </a>
            </td>

            <td className="product-thumbnail">
              <Link
                to={`/${imageDirectory(cartItem.imageName)}/${
                  cartItem.id
                }/${cartItem.name.replaceAll(" ", "_")}.html`}
              >
                <img
                  width="145"
                  height="145"
                  alt="poster_1_up"
                  className="shop_thumbnail"
                  src={
                    require(`../../assets/img/produts-img/${imageDirectory(
                      cartItem.imageName
                    )}/${cartItem.imageName}`).default
                  }
                />
              </Link>
            </td>

            <td className="product-name">
              <Link
                to={`/${imageDirectory(cartItem.imageName)}/${
                  cartItem.id
                }/${cartItem.name.replaceAll(" ", "_")}.html`}
              >
                {cartItem.name}
              </Link>
            </td>

            <td className="product-price">
              <span className="amount">{cartItem.price}€</span>
            </td>

            <td className="product-quantity">
              <div className="quantity buttons_added">
                <input
                  type="button"
                  className="minus"
                  value="-"
                  disabled={cartItem.qty <= 1}
                  onClick={() => changeQuantityByOne(cartItem.id, "remove")}
                />
                <input
                  type="number"
                  size="4"
                  className="input-text qty text"
                  title="Qty"
                  value={cartItem.qty}
                  onChange={(event) =>
                    changeQuantityForCart(event, cartItem.id)
                  }
                  min="1"
                  step="1"
                />
                <input
                  type="button"
                  className="plus"
                  value="+"
                  onClick={() => changeQuantityByOne(cartItem.id, "add")}
                />
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
                document.location.href = "/checkout.html";
              }}
              value="Checkout"
              name="proceed"
              className="checkout-button button alt wc-forward"
            />
          </td>
        </tr>
      </tbody>
    </table>
  ) : (
    <EmptyCart />
  );
};

export default cartContent;
