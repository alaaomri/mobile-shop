import React, { useState, useEffect } from "react";
import Breadcrumb from "../layout/Breadcrumb";
import Price from "../format/Price";
import { fetchProductDetails } from "../../api";
import SideBar from "../products/SideBar";
import { withRouter } from "react-router-dom";
import Spinner from "../layout/Spinner";

const ProductDetails = (props) => {
  const {
    match: {
      params: { id, categoryName },
    },
    categories,
    recentlyViewed,
  } = props;

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductInformations() {
      const data = await fetchProductDetails(id);
      props.recentViewedChange(data);
      setProduct(data);
      setLoading(false);
    }
    fetchProductInformations();
  }, [quantity]);

  const changeQuantityHandler = (event) => {
    const value = parseInt(event.target.value);
    setQuantity(value);
  };

  const addTocartHandler = (product) => {
    props.addToCart(product, quantity);
    //setQuantity(1);
  };

  return loading ? (
    <Spinner />
  ) : (
    <div className="single-product-area">
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <SideBar
              categories={categories}
              currentCategory={categoryName}
              recentlyViewed={recentlyViewed}
            />
          </div>

          <div className="col-md-8">
            <div className="product-content-right">
              <Breadcrumb
                categoryName={categoryName}
                productName={product.name}
              />

              <div className="row">
                <div className="col-sm-6">
                  <div className="product-images">
                    <div className="product-main-img">
                      <img
                        src={
                          product.imageName
                            ? require(`../../assets/img/produts-img/${categoryName}/${product.imageName}`)
                                .default
                            : require(`../../assets/img/noImage.jpg`).default
                        }
                        alt=""
                      />
                    </div>

                    <div className="product-gallery">
                      <img
                        src={
                          product.imageName
                            ? require(`../../assets/img/produts-img/${categoryName}/${product.imageName}`)
                                .default
                            : require(`../../assets/img/noImage.jpg`).default
                        }
                        alt=""
                      />
                      <img
                        src={
                          product.imageName
                            ? require(`../../assets/img/produts-img/${categoryName}/${product.imageName}`)
                                .default
                            : require(`../../assets/img/noImage.jpg`).default
                        }
                        alt=""
                      />
                      <img
                        src={
                          product.imageName
                            ? require(`../../assets/img/produts-img/${categoryName}/${product.imageName}`)
                                .default
                            : require(`../../assets/img/noImage.jpg`).default
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="product-inner">
                    <h2 className="product-name">{product.name}</h2>
                    <Price
                      stylingClass="product-inner-price"
                      discount={product.discountRate}
                      price={product.price}
                    />
                    <div className="cart">
                      <div className="quantity">
                        <input
                          type="number"
                          size="4"
                          className="input-text qty text"
                          title="Qty"
                          value={quantity}
                          name="quantity"
                          min="1"
                          step="1"
                          onChange={changeQuantityHandler}
                        />
                      </div>
                      <input
                        className="add_to_cart_button"
                        type="submit"
                        value="Add to cart"
                        onClick={() => addTocartHandler(product)}
                      />
                    </div>

                    <div className="product-inner-category">
                      <h2>Product Description</h2>
                      <p>{product.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProductDetails);
