import BrandsArea from "../layout/brandsArea";
import Carousel from "../layout/carousel";
import ProductWidgets from "../products/productWidgets";
import PromotionArea from "../layout/promotion";

const homePage = (props) => {
  return (
    <>
      <Carousel />
      <PromotionArea />
      <BrandsArea />
      <ProductWidgets recentlyViewed={props.recentlyViewed} />
    </>
  );
};
export default homePage;
