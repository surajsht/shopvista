const SingleProductSkeletonLoading = () => {
  return (
    <div className="single-product-skeleton">
      <div className="single-product-skeleton-image product-image"></div>

      <div className="single-product-skeleton-content product-content">
        <span className="single-product-skeleton-category"></span>
        <span className="single-product-skeleton-rating"></span>
        <span className="single-product-skeleton-title"></span>
        <span className="single-product-skeleton-description"></span>
        <span className="single-product-skeleton-price"></span>
        <span className="single-product-skeleton-button"></span>
      </div>
    </div>
  );
};

export default SingleProductSkeletonLoading;
