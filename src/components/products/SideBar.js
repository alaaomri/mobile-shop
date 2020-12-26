import React, { useState, useEffect } from "react";
import OtherBrands from "../branding/otherBrands";

const SideBar = (props) => {
  const [otherBrands, setOtherBrands] = useState([]);
  const categories = [...props.categories];
  const { currentCategory } = props;
  useEffect(() => {
    const index = categories.findIndex((item) => item.name === currentCategory);
    categories.splice(index, 1);
    setOtherBrands(categories);
  }, [props.categories]);

  return (
    <>
      <div className="single-sidebar">
        <h2 className="sidebar-title">Recently Viewed</h2>
        <div className="thubmnail-recent">
          <img src="img/product-thumb-1.jpg" className="recent-thumb" alt="" />
          <h2>
            <a href="">Sony Smart TV - 2015</a>
          </h2>
          <div className="product-sidebar-price">
            <ins>700.00 € </ins> <del>100.00 €</del>
          </div>
        </div>
        <div className="thubmnail-recent">
          <img src="img/product-thumb-1.jpg" className="recent-thumb" alt="" />
          <h2>
            <a href="">Sony Smart TV - 2015</a>
          </h2>
          <div className="product-sidebar-price">
            <ins>$700.00</ins> <del>$100.00</del>
          </div>
        </div>
        <div className="thubmnail-recent">
          <img src="img/product-thumb-1.jpg" className="recent-thumb" alt="" />
          <h2>
            <a href="">Sony Smart TV - 2015</a>
          </h2>
          <div className="product-sidebar-price">
            <ins>$700.00</ins> <del>$100.00</del>
          </div>
        </div>
        <div className="thubmnail-recent">
          <img src="img/product-thumb-1.jpg" className="recent-thumb" alt="" />
          <h2>
            <a href="">Sony Smart TV - 2015</a>
          </h2>
          <div className="product-sidebar-price">
            <ins>$700.00</ins> <del>$100.00</del>
          </div>
        </div>
      </div>
      <OtherBrands otherBrands={otherBrands} />
    </>
  );
};

export default SideBar;
