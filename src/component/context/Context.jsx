import { useState, useEffect, createContext } from "react";

let GlobalContext = createContext(null);

let FeaturedUrl = "https://fakestoreapi.com/products?limit=3";
let categoryUrl = "https://fakestoreapi.com/products/categories";
let AllProductUrl = "https://fakestoreapi.com/products";
let CarouselProduct = "https://fakestoreapi.com/products?limit=20";

const Context = (props) => {
  let [allProduct, setAllProduct] = useState([]);
  let [fetchedData, setFetchedData] = useState([]);
  let [categoryData, setCategoryData] = useState([]);
  let [carouselProductData, setCarouselProductData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [productLoading, setProductLoading] = useState(true);

  let fetchAllProduct = async () => {
    try {
      let response = await fetch(AllProductUrl);
      let data = await response.json();
      setAllProduct(data);
      setProductLoading(false);
    } catch (e) {
      console.error(e);
      setProductLoading(true);
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
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(true);
    }
  };

  const categoryUrls = {
    all: AllProductUrl,
    "men's clothing":
      "https://fakestoreapi.com/products/category/men's%20clothing",
    "women's clothing":
      "https://fakestoreapi.com/products/category/women's%20clothing",
    electronics: "https://fakestoreapi.com/products/category/electronics",
    jewelery: "https://fakestoreapi.com/products/category/jewelery",
  };

  const fetchCategoryData = async (btnText) => {
    const url = categoryUrls[btnText];
    setProductLoading(true);
    if (url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setAllProduct(data);
        setProductLoading(false);
      } catch (e) {
        console.error(e);
        setProductLoading(true);
      }
    }
  };

  let carouselProduct = async () => {
    setProductLoading(true);
    try {
      let response = await fetch(CarouselProduct);
      let data = await response.json();
      let newData = data.slice(10, 16);
      setCarouselProductData(newData);
      setProductLoading(false);
    } catch (e) {
      console.error(e);
      setProductLoading(true);
    }
  };

  // search filter

  useEffect(() => {
    fetchFeatured();
    fetchCategory();
    fetchAllProduct();
    fetchCategoryData();
    carouselProduct();
  }, []);

  let contextValue = {
    fetchedData,
    loading,
    categoryData,
    allProduct,
    fetchCategoryData,
    productLoading,
    carouselProductData,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Context;
export { GlobalContext };
