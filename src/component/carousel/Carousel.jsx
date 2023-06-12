import { useContext } from "react";
import { GlobalContext } from "../context/Context";
import React from "react";
import Slider from "react-slick";
import CarouselItem from "./CarouselItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from "../skeletonLoading/Skeleton";

const Carousel = () => {
  let { carouselProductData, productLoading } = useContext(GlobalContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const getCarouselProduct = () => {
    return (
      <Slider {...settings}>
        {carouselProductData.map((item) => {
          return <CarouselItem key={item.id} data={item} />;
        })}
      </Slider>
    );
  };

  return (
    <div className="carousel">
      <div className="wrapper">
        <div className="carousel-header">
          <div className="header-title"> Trending Products </div>
        </div>

        <div className="carousel-body">
          {productLoading ? <Skeleton count={3} /> : getCarouselProduct()}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
