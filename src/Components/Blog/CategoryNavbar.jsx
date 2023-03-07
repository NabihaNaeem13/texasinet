import React from "react";

const CategoryNavbar = ({ category }) => {
  return (
    <>
      <div className="category_navbar">
        <div className="Category_btn_group">
          {category.map((curElement) => {
            return (
              <button
                className="Category_btn_group_item"
              >
                {curElement}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default CategoryNavbar;
