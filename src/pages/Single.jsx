import { useEffect } from "react";
import Navbar from "../component/navbar/Navbar";
import SingleProduct from "../component/single/SingleProduct";

const Single = () => {
  useEffect(() => {
    document.body.classList.add("single");

    return () => document.body.classList.remove("single");
  }, []);

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <SingleProduct />
      </div>
    </>
  );
};

export default Single;
