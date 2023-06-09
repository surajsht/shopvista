import { useContext } from "react";
import { GlobalContext } from "../context/Context";

const CategoryItem = ({ category }) => {
  let { fetchCategoryData } = useContext(GlobalContext);

  return <button className="button-item" onClick = {() => fetchCategoryData(category)}>{category}</button>;
};

export default CategoryItem;
