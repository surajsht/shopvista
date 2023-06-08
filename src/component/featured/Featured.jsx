import { useContext } from "react";
import FeaturedItem from "./FeaturedItem";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/Context";
import Skeleton from "../skeletonLoading/Skeleton";

const Featured = () => {
  let { fetchedData, loading } = useContext(GlobalContext);

  const FeaturedContent = () => {
    return (
      <div className="featured-body">
        <div className="featured-body-content">
          {fetchedData.map((data) => {
            return <FeaturedItem key={data.id} data={data} />;
          })}
        </div>

        <Link to="/shop" className="secondary-btn">
          All Products
        </Link>
      </div>
    );
  };

  return (
    <div className="featured">
      <div className="wrapper">
        <div className="featured-header">
          <div className="header-title">Featured</div>
        </div>

        {loading ? <Skeleton count={3} /> : FeaturedContent()}
      </div>
    </div>
  );
};

export default Featured;
