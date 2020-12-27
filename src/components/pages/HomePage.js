import BrandsArea from "../layout/brandsArea";
import Carousel from "../layout/carousel";
import ProductWidgets from "../products/productWidgets";
import PromotionArea from "../layout/promotion";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <PromotionArea />
      <BrandsArea />
      <ProductWidgets />
    </>
  );
};
export default HomePage;
