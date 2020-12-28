import CartContent from "../cart/CartContent";
import CartTotal from "../cart/CartTotal";
import CrossSells from "../products/CrossSells";

const cartPage = (props) => {
  return (
    <div className="single-product-area">
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="product-content-right">
              <div className="woocommerce">
                <CartContent
                  cartLoading={props.cartLoading}
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
  );
};

export default cartPage;
