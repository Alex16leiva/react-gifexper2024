import { useState } from "react";
import { AddCategory, GifGrid } from "./Components";

export const GifExpertApp = () => {
  debugger;
  const [categories, setCategories] = useState([]);

  const onNewCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories((cat) => [newCategory, ...cat]);
  };

  return (
    <>
      <div>GifExpertApp</div>

      <AddCategory onNewCategory={(value) => onNewCategory(value)} />

      {categories.map((item) => {
        return <GifGrid category={item} key={item} />;
      })}
    </>
  );
};