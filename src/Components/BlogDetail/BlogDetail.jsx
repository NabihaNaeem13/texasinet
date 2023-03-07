import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Menu from "./Menu";
import Navbar from "../Navbar/Navbar";
import "./detail.css";
import BlogCard from "./BlogCard";
import BlogBottom from "./BlogBottom";
import { useParams } from "react-router-dom";
import { useBlogContext } from "../../context/BlogContext";
import {useFilterContext} from "../../context/filterContext";

const API = "https://admin.texasinet.com/api/blogs";

const BlogDetail = () => {
    const {getSingleBlog,singleBlog}=useBlogContext();
    const {filter_blogs}=useFilterContext();
    console.log("SingleBlog1",singleBlog)
    const {id}=useParams();

    const {id:blogid,image,long_description,meta_description,meta_keywords,name}=singleBlog;
    useEffect(()=>{
        getSingleBlog(`${API}?id=${id}`);
    },[])


  return (
    <>
      <Navbar />
      <Menu />
      <div className="container-fluid">
        <div className="main">
          <div id="box">
            <p>{name}</p>
            <h3>{meta_description}</h3>
            <img
              id="thisimgmxcv"
              src={image}
              style={{ width: "100%", height: "495px" }}
              alt=""
            />
            <p className="mt-3">
              <strong>{name}</strong>
            </p>
            <p>
            {meta_keywords}
              <br />
              <br />
              {long_description}
              <br />
              <br />
            </p>
            <h2 className="text-center">PEOPLE ALSO READ</h2>
            <BlogCard blog={filter_blogs}/>
          </div>
        </div>
      </div>
      <BlogBottom />
      <Footer />
    </>
  );
};
export default BlogDetail;
