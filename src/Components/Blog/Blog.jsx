import React from "react";
import Footer from "../Footer/Footer";
import Menu from "../Blog/menu";
import Navbar from "../Navbar/Navbar";
import TopBox from "./TopBox";
import "./blog.css";
import BlogCard from "./BlogCard";
import BlogBottom from "./blogBottom";
import {useFilterContext} from "../../context/filterContext";


const Blog = () => {
  const {filter_blogs,all_blogs,filters:{category},updateFilterValue}=useFilterContext();
  console.log("filter blog",filter_blogs);
 
const getUniqueData=(data)=>{
    let newVal=data.map((curElem)=>{
       return curElem.category.name;
    })
    return (newVal=["All", ...new Set(newVal)])
}
  //we need unique data
  const categoryOnlyData =getUniqueData(all_blogs);
  
  return (
    <>
      <Navbar />
      <Menu />
      <div className="container-fluid">
        <div className="main">
          <TopBox />
          <div className="category_navbar">
        <div className="Category_btn_group">
          {categoryOnlyData.map((curElement,index) => {
            return (
              <button
                className="Category_btn_group_item"
                key={index}
                type="button"
                value={curElement}
                name="category"
                onClick={updateFilterValue}
              >
                {curElement}
              </button>
            );
          })}
        </div>
      </div>
          <BlogCard blog={filter_blogs}/>
        </div>
      </div>
      <BlogBottom />
      <Footer />
    </>
  );
};
export default Blog;
