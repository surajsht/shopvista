import { useContext } from "react";
import { GlobalContext } from "../context/Context";
import CategoryItem from "./CategoryItem";

const Category = () => {
  let { categoryData } = useContext(GlobalContext);
  let newCategory = ["all", ...categoryData];

  return (
    <div className="categories">
      <div className="categories-title">
        <h2> Categories </h2>
      </div>
      <div className="category-btns">
        {newCategory.map((category, categoryId) => {
          return <CategoryItem key={categoryId} category={category} />;
        })}
      </div>
    </div>
  );
};

export default Category;
