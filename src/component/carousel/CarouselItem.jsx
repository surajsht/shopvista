import { Link } from "react-router-dom";

const CarouselItem = ({ data }) => {
  let { id, image, title, price } = data;
  return (
    <div className="carousel-item">
      <img src={image} alt={title} />
      <h2 className="shopvista-item-title">
        <Link to={`/product/${id}`}> {title} </Link>
      </h2>
      <span className="shopvista-price"> ${price} </span>
    </div>
  );
};

export default CarouselItem;
