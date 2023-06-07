import SkeletonItem from "./SkeletonItem";

const Skeleton = ({ count }) => {
  const renderSkeleton = () => {
    let cards = [];

    for (let i = 0; i < count; i++) {
      cards.push(<SkeletonItem key={i} />);
    }

    return cards;
  };

  return (
    <div className="skeleton">
        <div className="skeleton-content">{renderSkeleton()}</div>
    </div>
  );
};

export default Skeleton;
