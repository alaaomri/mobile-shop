import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OtherBrands from "../branding/OtherBrands";
import Price from "../format/Price";

const SideBar = (props) => {
  const [otherBrands, setOtherBrands] = useState([]);
  const categories = [...props.categories];
  const { currentCategory, recentlyViewed } = props;
  useEffect(() => {
    const index = categories.findIndex((item) => item.name === currentCategory);
    categories.splice(index, 1);
    setOtherBrands(categories);
  }, [props.categories]);

  const imageDirectory = (imageName) => {
    if (imageName.startsWith("apple")) return "Apple";
    if (imageName.startsWith("sony")) return "Sony";
    if (imageName.startsWith("lg")) return "LG";
    if (imageName.startsWith("samsung")) return "Samsung";
    if (imageName.startsWith("huawei")) return "Huawei";
    return "";
  };
  return (
    <React.Fragment>
      <div className="single-sidebar">
        <h2 className="sidebar-title">Recently Viewed</h2>
        {recentlyViewed.slice(1, 5).map((product) => (
          <div key={product.id} className="thubmnail-recent">
            <img
              src={
                imageDirectory(product.name) !== ""
                  ? require(`../../assets/img/produts-img/${imageDirectory(
                      product.name
                    )}/${product.imageName}`).default
                  : require(`../../assets/img/noImage.jpg`).default
              }
              className="recent-thumb"
              alt=""
            />
            <h2>
              <Link
                to={`/${imageDirectory(product.name)}/${
                  product.id
                }/${product.name.replaceAll(" ", "_")}.html`}
              >
                {product.name}
              </Link>
            </h2>
            <Price
              stylin
              discount={product.discountRate}
              price={product.price}
              stylingClass="product-sidebar-price"
            />
          </div>
        ))}
      </div>
      <OtherBrands otherBrands={otherBrands} />
    </React.Fragment>
  );
};

export default SideBar;
