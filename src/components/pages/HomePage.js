import BrandsArea from "../layout/BrandsArea";
import Carousel from "../layout/Carousel";
import ProductWidgets from "../products/ProductWidgets";
import PromotionArea from "../layout/Promotion";

const homePage = (props) => {
  return (
    <>
      <Carousel />
      <PromotionArea />
      <BrandsArea />
      <ProductWidgets
        recentlyViewed={props.recentlyViewed}
        topNew={props.topNew}
        topSellers={props.topSellers}
      />
    </>
  );
};
export default homePage;
