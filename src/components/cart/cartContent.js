const cartContent = (props) => {
  const {
    cart: { items },
  } = props;

  const imageDirectory = (imageName) => {
    if (imageName.startsWith("apple")) return "Apple";
    if (imageName.startsWith("sony")) return "Sony";
    if (imageName.startsWith("lg")) return "LG";
    if (imageName.startsWith("samsung")) return "Samsung";
    if (imageName.startsWith("huawei")) return "Huawei";
    return "";
  };

  const changeQuantityForCart = (event, cartItem) => {
    const value = event.target.value;
    props.changeQuantityHandler(cartItem, value);
  };

  const changeQuantityByOne = (cartItem, operation) => {
    const index = items.findIndex((item) => item.id === cartItem);
    let quantity = items[index].qty;
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

  return items.length !== 0 ? (
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
              <a href="single-product.html">
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
  ) : (
    <div className="cart-empty">
      <div className="panierVide">
        <div className="iconPanierVide mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="42"
            viewBox="0 0 34 42"
          >
            <path
              id="Rectangle_1_copie"
              data-name="Rectangle 1 copie"
              className="cls-1"
              d="M34,42H0L1,12h9.029C10.325,3.984,14.117-.06,17-0.06S23.675,3.984,23.971,12H33ZM17,2c-3.922,0-4.862,5.841-4.983,10h9.967C21.862,7.841,20.922,2,17,2ZM31,14H3L2,40H32ZM10.5,16A1.5,1.5,0,1,1,9,17.5,1.5,1.5,0,0,1,10.5,16Zm13,0A1.5,1.5,0,1,1,22,17.5,1.5,1.5,0,0,1,23.5,16Z"
            ></path>
          </svg>
        </div>
        <p className="text-center">
          Votre panier est vide
          <br />
          Continuez vos achats
        </p>
        <a href="/" className="emtyCartBack" alt="Continuer mes achats">
          Commencer mes achats
        </a>
      </div>
    </div>
  );
};

export default cartContent;
