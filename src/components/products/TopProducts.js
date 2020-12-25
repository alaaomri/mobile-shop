import React, { useState, useEffect } from "react";
import { fetchTopProducts } from "../../api";
import ProductSummary from "./ProductSummary";

const TopProducts = (props) => {
  const [topProducts, setTopProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchTopProducts(props.url);
      setTopProducts(data);
    }
    fetchData();
  }, []);
  return (
    <div className="col-md-4">
      <div className="single-product-widget">
        <h2 className="product-wid-title">{props.title}</h2>
        <a href="" className="wid-view-more">
          View All
        </a>
        {topProducts.map((product) => (
          <ProductSummary key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
