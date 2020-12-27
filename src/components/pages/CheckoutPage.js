import Banner from "../layout/banner";

const CheckoutPage = (props) => {
  return (
    <>
      <Banner title="Checkout" />
      <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-content-right">
                <div className="woocommerce"></div>
                <form
                  enctype="multipart/form-data"
                  action="#"
                  className="checkout"
                  method="post"
                  name="checkout"
                ></form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
