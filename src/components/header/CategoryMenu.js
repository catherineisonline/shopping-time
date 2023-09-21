import React from "react";
import { NavLink } from "react-router-dom";

const CategoryMenu = ({ allCategories, changeCategory, activeCategory, closeMenu }) => {
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
          key={category.name}
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
