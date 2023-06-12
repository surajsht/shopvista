import { useEffect } from "react";
import Navbar from "../component/navbar/Navbar";
import SingleProduct from "../component/single/SingleProduct";
import Featured from "../component/featured/Featured";
import Carousel from "../component/carousel/Carousel";

const Single = () => {
  useEffect(() => {
    document.body.classList.add("single");

    return () => document.body.classList.remove("single");
  }, []);

  return (
    <>
      <Navbar />
      <div className="single-page-content">
        <div className="wrapper">
          <SingleProduct />
        </div>
      </div>
      <Featured />
      <Carousel />
    </>
  );
};

export default Single;
