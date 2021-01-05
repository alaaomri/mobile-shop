import React, { useState, useEffect, useRef } from "react";
import { fetchProducts } from "../../api";

import SingleProduct from "../products/SinglePorduct";
import Banner from "../layout/Banner";
import Spinner from "../layout/Spinner";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDataRef = useRef(() => {});

  fetchDataRef.current = async () => {
    const data = await fetchProducts(props.category.productListId);
    setProducts(data.items);
    setLoading(false);
  };

  useEffect(() => {
    fetchDataRef.current();
  }, []);

  return (
    <React.Fragment>
      <Banner title={props.category.name} />
      {loading ? (
        <Spinner />
      ) : (
        <div className="single-product-area">
          <div className="zigzag-bottom"></div>
          <div className="container">
            <div className="row">
              {products.map((product) => (
                <SingleProduct
                  addToCart={props.addToCart}
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
      )}
    </React.Fragment>
  );
};
export default ProductList;
