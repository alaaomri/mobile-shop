import React, { useState, useEffect } from "react";

import { searchProducts } from "../api";
import SingleProduct from "../components/products/SinglePorduct";
import Banner from "../layout/banner";

const SearchPage = (props) => {
  const {
    location: { search },
  } = props;

  const [products, setProducts] = useState([]);
  const query = search.split("?q=");
  useEffect(() => {
    const getSearchResult = async () => {
      const data = await searchProducts(query[1]);

      setProducts(data);
    };
    getSearchResult();
  }, []);

  const productCategory = (productName) => {
    if (productName.startsWith("apple")) return "Apple";
    if (productName.startsWith("sony")) return "Sony";
    if (productName.startsWith("lg")) return "LG";
    if (productName.startsWith("samsung")) return "Samsung";
    if (productName.startsWith("huawei")) return "Huawei";
    return "";
  };

  return (
    <React.Fragment>
      <Banner categoryName={`Résultats pour “${query[1]}”`} />
      <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <SingleProduct
                addToCart={props.addToCart}
                key={product.id}
                categoryName={productCategory(product.name)}
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

export default SearchPage;
