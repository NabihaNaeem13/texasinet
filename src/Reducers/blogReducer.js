const BlogReducer=(state,action)=>{
    switch(action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true
            };
            case "SET_API_DATA":
                const categoryData=action.payload.filter((curElem)=>{
                 return curElem.category.name===true;
                });
              return{
                ...state,
                isLoading:false,
                blogs:action.payload,
                categoryData:categoryData
              }
            case "API_ERROR":
                return{
                    ...state,
                    isLoading:true,
                    isError:true
                };
            case "SET_SINGLE_LOADING":
            return{
                ...state,
                isSingleLoading:true
            };
            case "SET_SINGLE_BLOG":
              return{
                ...state,
                isSingleLoading:false,
                singleBlog:action.payload,
               
              }
              case "SET_SINGLE_ERROR":
                return{
                    ...state,
                    isSingleLoading:true,
                    isError:true
                };

        default:
            return state;
    }
}
export default BlogReducer;