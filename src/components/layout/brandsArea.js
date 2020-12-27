import img1 from "../../assets/img/brand1.png";
import img2 from "../../assets/img/brand2.png";
import img3 from "../../assets/img/brand3.png";
import img4 from "../../assets/img/brand4.png";
import img5 from "../../assets/img/brand5.png";
import img6 from "../../assets/img/brand6.png";
const brandsArea = () => {
  const images = [img1, img2, img3, img4, img5, img6, img1, img2];

  return (
    <div className="brands-area">
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="brand-wrapper">
              <div className="brand-list">
                {images.map((image, index) => (
                  <img key={index} src={image} alt="branding area"></img>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default brandsArea;
