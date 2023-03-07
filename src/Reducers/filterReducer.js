const filterReducer=(state,action)=>{
switch(action.type){
    case "LOAD_FILTER_BLOG":
        return {
            ...state,
            filter_blogs:[...action.payload],
            all_blogs:[...action.payload]
        }
    case "UPDATE_VALUE":
        const {name,value}=action.payload
        return {
            ...state,
            filters:{
                ...state.filters,
                [name]:value
            }
        }
    case "FILTERS_BLOG":
        let {all_blogs}=state;
        let temFilterBlog=[...all_blogs];
        
        const {text,category}=state.filters;

        if(text){
            temFilterBlog = temFilterBlog.filter((curElem)=>{
                return curElem.name.toLowerCase().includes(text);
            })
        }
        if(category){
            temFilterBlog = temFilterBlog.filter((curElem)=>{
                console.log(curElem.category);
                return curElem.category===category;
            }) 
        }
        return{
            ...state,
            filter_blogs:temFilterBlog,
        }
    default:return state
}
}
export default filterReducer;