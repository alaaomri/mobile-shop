import React from "react";
import TopProducts from "./TopProducts";

const productWidgets = (props) => {
  const { recentlyViewed, topSellers, topNew } = props;
  return (
    <div className="product-widget-area">
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="row">
          <TopProducts title="Top Sellers" products={topSellers} />
          <TopProducts
            title="Recently Viewed"
            products={recentlyViewed.slice(0, 3)}
          />
          <TopProducts title="Top New" products={topNew} />
        </div>
      </div>
    </div>
  );
};

export default productWidgets;
