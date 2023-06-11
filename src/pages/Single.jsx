import { useEffect } from "react";
import Navbar from "../component/navbar/Navbar";
import SingleProduct from "../component/single/SingleProduct";
import Featured from "../component/featured/Featured";

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
    </>
  );
};

export default Single;
