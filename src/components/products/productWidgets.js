import React from "react";
import TopProducts from "./TopProducts";
import RecentlyViewed from "./RecentlyViewed";

const productWidgets = (props) => {
  return (
    <div className="product-widget-area">
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="row">
          <TopProducts title="Top Sellers" url="top-sellers-products" />
          <RecentlyViewed recentlyViewed={props.recentlyViewed} />
          <TopProducts title="Top New" url="top-new-products" />
        </div>
      </div>
    </div>
  );
};

export default productWidgets;
