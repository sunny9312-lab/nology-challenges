import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Carousal = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.bhc.co.kr/images/index/banner/img_main_banner_220418.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide</h3>
            <p>Yummy Chicken</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.bhc.co.kr/images/index/banner/img_main_banner_230418_1.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide</h3>
            <p>Mild Chicken</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.bhc.co.kr/images/index/banner/img_main_banner_230418_2.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide</h3>
            <p>Spicey chicken</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
// export default Carousal;
