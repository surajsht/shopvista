import { useState, useEffect, createContext } from "react";

let GlobalContext = createContext(null);

let FeaturedUrl = "https://fakestoreapi.com/products?limit=3";

const Context = (props) => {
  let [fetchedData, setFetchedData] = useState([]);
  let [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchFeatured();
  }, []);

  let contextValue = { fetchedData, loading };

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Context;
export { GlobalContext };
