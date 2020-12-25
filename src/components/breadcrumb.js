const breadcrumb = (props) => {
  const { categoryName, productName } = props;
  return (
    <div className="product-breadcroumb">
      <a href="">Home</a>
      <a href="">{categoryName}</a>
      <a href="">{productName}</a>
    </div>
  );
};

export default breadcrumb;
