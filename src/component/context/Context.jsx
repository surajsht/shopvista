import { useState, useEffect, createContext } from "react";

let GlobalContext = createContext(null);

let FeaturedUrl = "https://fakestoreapi.com/products?limit=3";
let categoryUrl = "https://fakestoreapi.com/products/categories";
let AllProductUrl = "https://fakestoreapi.com/products";

const Context = (props) => {
  let [allProduct, setAllProduct] = useState([]);
  let [fetchedData, setFetchedData] = useState([]);
  let [categoryData, setCategoryData] = useState([]);
  let [loading, setLoading] = useState(true);

  let fetchAllProduct = async () => {
    try {
      let response = await fetch(AllProductUrl);
      let data = await response.json();
      setAllProduct(data);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(true);
    }
  };

  let fetchFeatured = async () => {
    try {
      let response = await fetch(FeaturedUrl);
      let data = await response.json();
      setFetchedData(data);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(true);
    }
  };

  let fetchCategory = async () => {
    try {
      let response = await fetch(categoryUrl);
      let data = await response.json();
      setCategoryData(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchFeatured();
    fetchCategory();
    fetchAllProduct();
  }, []);

  let contextValue = { fetchedData, loading, categoryData, allProduct };

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Context;
export { GlobalContext };
