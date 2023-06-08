import { useEffect } from "react";
import Category from "../component/category/Category";
import Navbar from "../component/navbar/Navbar";
import Product from "../component/product/Product";
import Search from "../component/search/Search";

const Shop = () => {
  useEffect(() => {
    document.body.classList.add("shop");

    return () => document.body.classList.remove("shop");
  }, []);

  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="product">
          <div>
            <Search />
            <Category />
          </div>

          <div>
            <Product />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
