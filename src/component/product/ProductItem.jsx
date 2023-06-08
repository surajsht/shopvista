const ProductItem = ({ product }) => {
  let { title, price, image, rating, category } = product;

  return (
    <div className="product-item">
      <img src={image} alt={category} />
      <h2 className="shopvista-item-title">{title}</h2>
      <span className="shopvista-price">${price}</span>
      <div className="shopvista-rating"></div>
    </div>
  );
};

export default ProductItem;
