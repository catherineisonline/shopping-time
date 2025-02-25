import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { categoriesObj } from "../../data/all-products";

const CategoryMenu = ({ changeCategory, activeCategory, closeMenu }) => {
  const [allCategories, setAllCategories] = useState([]);

  const getCategories = () => {
    setAllCategories(categoriesObj);
  };
  useEffect(() => {
    getCategories()
  }, []);

  return (
    <ul>
      <li>
        <NavLink
          to="/"
          onClick={() => {
            changeCategory("");
            closeMenu();
          }}
          className="home-link">
          Home
        </NavLink>
      </li>
      {allCategories.map((category) => (
        <li
          key={category.id}
          onClick={() => {
            changeCategory(category.name);
            closeMenu();
          }}>
          <NavLink
            to={`/store/${category.name}`}
            className={activeCategory === category.name
              ? "active-category-link"
              : "inactive-category-link"}>
            {category.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default CategoryMenu;
