import React from "react";
import { NavLink } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="card-container1">
    {blog.map((curElem)=>{
      const {
    id,
    name,
    image,
    meta_description,
    long_description
  } = curElem;
      return(
        <NavLink to={`/singleBlog/${id}`} style={{textDecoration:"none"}}>
        <div className="card" key={id}>
            <div className="image-session">
              <img src={image} alt={name} />
            </div>
            <div className="article">
              <a href="#as">{meta_description}</a>
              <p>{long_description}</p>
            </div>
            <div className="blog-view">
              <a href="#as">Read more</a>
            </div>
          </div>
        </NavLink>
      )
    })}
    </div>
    
  );
};
export default BlogCard;
