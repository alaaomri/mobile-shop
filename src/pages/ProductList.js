import React, { useState, useEffect } from "react";
import { fetchProducts } from "../api";
import Branding from "../components/branding/branding";
import productSummary from "../components/products/ProductSummary";
import SingleProduct from "../components/products/SinglePorduct";
import Banner from "../layout/banner";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchProducts(props.category.productListId);
      setProducts(data.items);
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Banner categoryName={props.category.name} />
      <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <SingleProduct
                key={product.id}
                categoryName={props.category.name}
                product={product}
              />
            ))}
          </div>

          <div className="row">
            <div className="col-md-12">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ProductList;
