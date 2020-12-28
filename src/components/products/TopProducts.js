import ProductSummary from "./ProductSummary";

const TopProducts = (props) => {
  return (
    <div className="col-md-4">
      <div className="single-product-widget">
        <h2 className="product-wid-title">{props.title}</h2>
        <a href="" className="wid-view-more">
          View All
        </a>
        {props.products.map((product) => (
          <ProductSummary key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
