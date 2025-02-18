import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { categoriesObj } from "../../data/all-products";

const CategoryMenu = ({  changeCategory, activeCategory, closeMenu }) => {
  const [allCategories, setAllCategories] = useState([]);

  const getCategories = () => {
    setAllCategories(categoriesObj);
  };
  useEffect(() => {
    getCategories()
  }, []);
  
  return (
    <ul>
      <NavLink
        to="/"
        onClick={() => {
          changeCategory("");
          closeMenu();
        }}
        className="home-link">
        <li>Home</li>
      </NavLink>
      {allCategories.map((category) => (
        <NavLink
          to={`/store/${category.name}`}
          key={category.id}
          className={activeCategory === category.name
            ? "active-category-link"
            : "inactive-category-link"}>
          <li
            onClick={() => {
              changeCategory(category.name);
              closeMenu();
            }}>{category.name}</li>
        </NavLink>
      ))}
    </ul>
  );
}

export default CategoryMenu;
