import React, { useState, useEffect } from "react";
import Breadcrumb from "../components/breadcrumb";
import Price from "../components/format/price";
import RecentlyViewed from "../components/products/RecentlyViewed";
import { fetchProductDetails } from "../api";

const ProductDetails = (props) => {
  const {
    match: {
      params: { id, categoryName },
    },
  } = props;
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchProductInformations() {
      const data = await fetchProductDetails(id);
      console.log(data);
      setProduct(data);
    }
    fetchProductInformations();
  }, []);

  return product !== {} ? (
    <div class="single-product-area">
      <div class="zigzag-bottom"></div>
      <div class="container">
        <div class="row">
          <RecentlyViewed />
          <div class="col-md-8">
            <div class="product-content-right">
              <Breadcrumb
                categoryName={categoryName}
                productName={product.name}
              />

              <div class="row">
                <div class="col-sm-6">
                  <div class="product-images">
                    <div class="product-main-img">
                      <img
                        src={
                          product.imageName
                            ? require(`../assets/img/produts-img/${categoryName}/${product.imageName}`)
                                .default
                            : require(`../assets/img/noImage.jpg`).default
                        }
                        alt=""
                      />
                    </div>

                    <div class="product-gallery">
                      <img
                        src={
                          product.imageName
                            ? require(`../assets/img/produts-img/${categoryName}/${product.imageName}`)
                                .default
                            : require(`../assets/img/noImage.jpg`).default
                        }
                        alt=""
                      />
                      <img
                        src={
                          product.imageName
                            ? require(`../assets/img/produts-img/${categoryName}/${product.imageName}`)
                                .default
                            : require(`../assets/img/noImage.jpg`).default
                        }
                        alt=""
                      />
                      <img
                        src={
                          product.imageName
                            ? require(`../assets/img/produts-img/${categoryName}/${product.imageName}`)
                                .default
                            : require(`../assets/img/noImage.jpg`).default
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="product-inner">
                    <h2 class="product-name">{product.name}</h2>
                    <Price
                      stylingClass="product-inner-price"
                      discount={product.discountRate}
                      price={product.price}
                    />
                    <form action="" class="cart">
                      <div class="quantity">
                        <input
                          type="number"
                          size="4"
                          class="input-text qty text"
                          title="Qty"
                          value="1"
                          name="quantity"
                          min="1"
                          step="1"
                        />
                      </div>
                      <button class="add_to_cart_button" type="submit">
                        Add to cart
                      </button>
                    </form>

                    <div class="product-inner-category">
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
  ) : (
    "loading ..."
  );
};

export default ProductDetails;
