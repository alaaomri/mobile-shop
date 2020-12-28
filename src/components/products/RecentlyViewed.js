import ProductSummary from "./ProductSummary";

const RecentlyViewed = (props) => {
  return (
    <div className="col-md-4">
      <div className="single-product-widget">
        <h2 className="product-wid-title">Recently Viewed</h2>
        <a href="#" className="wid-view-more">
          View All
        </a>
        {props.recentlyViewed.slice(0, 3).map((product) => (
          <ProductSummary key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
