import { useState, useEffect } from "react";
import FeaturedItem from "./FeaturedItem";
import { Link } from "react-router-dom";

let URL = "https://fakestoreapi.com/products?limit=3";

const Featured = () => {
  let [fetchedData, setFetchedData] = useState([]);

  let fetchFeatured = async () => {
    try {
      let response = await fetch(URL);
      let data = await response.json();
      setFetchedData(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchFeatured();
  }, []);

  return (
    <div className="featured">
      <div className="wrapper">
        <div className="featured-header">
          <div className="header-title">Featured</div>
        </div>

        <div className="featured-body">
          <div className="featured-body-content">
            {fetchedData.map((data) => {
              return <FeaturedItem key={data.id} data={data} />;
            })}
          </div>

          <Link to="/product" className="secondary-btn">
            All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
