import { createContext, useContext, useEffect, useReducer } from "react";
import {useBlogContext} from "./BlogContext";
import reducer from "../Reducers/filterReducer";

const FilterContext=createContext();
const initialState={
    filter_blogs:[],
    all_blogs:[],
    filters:{
       text:"",
       category:"all"
    }
}


export const FilterContextProvider=({children})=>{
    const {blogs} =useBlogContext();

    const [state,dispatch]=useReducer(reducer,initialState);

    const updateFilterValue=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        
        return dispatch({
            type:"UPDATE_VALUE",payload:{name,value}})
        }

    useEffect(()=>{
        dispatch({type:"FILTERS_BLOG"})
    dispatch({type:"LOAD_FILTER_BLOG",payload:blogs})
    },[blogs])
return(
    <FilterContext.Provider value={{...state,updateFilterValue}}>
        {children}
    </FilterContext.Provider>
)
}

export const useFilterContext=()=>{
    return useContext(FilterContext)
}