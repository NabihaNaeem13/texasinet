import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducers/blogReducer";

const AppContext = createContext();
const API = "https://admin.texasinet.com/api/blogs";

const initialState={
  isLoading:false,
  isError:false,
  blogs:[],
  category:[],
  isSingleLoading:false,
  singleBlog:{}

}
const AppProvider = ({ children }) => {
  const [state,dispatch]=useReducer(reducer,initialState);

  const getBlogs = async (url) => {
    dispatch({type:"SET_LOADING"})
  try {
    const res = await axios.get(url);
    console.log(res);
    const blogs=await res.data;
    console.log(blogs);
    dispatch({type:"SET_API_DATA",payload:blogs})
    
  } catch (error) {
    dispatch({type:"API_ERROR"})
  }
  };

  const getSingleBlog=async(url)=>{
    dispatch({type:"SET_SINGLE_LOADING"})
    try {
      const res = await axios.get(url);
      console.log(res);
      const singleBlog=await res.data;
      console.log("name",singleBlog.data[0].name);
      dispatch({type:"SET_SINGLE_BLOG",payload:singleBlog})
    } catch (error) {
      dispatch({type:"SET_SINGLE_ERROR"})
    }
  }
  useEffect(() => {
    getBlogs(API);
  }, []);
  return <AppContext.Provider value={{...state,getSingleBlog}}>{children}</AppContext.Provider>;
};

//custom hooks
const useBlogContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useBlogContext };
