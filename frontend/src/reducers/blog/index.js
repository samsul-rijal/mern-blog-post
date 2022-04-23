import { GET_LIST_BLOG, ADD_BLOG } from "../../actions/blogAction";

const initialState = {
    getListBlogResult: false,
    getListBlogLoading: false,
    getListBlogError: false,
    
    addBlogResult: false,
    addBlogLoading: false,
    addBlogError: false,
}

const blog = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_BLOG:
            return {
                ...state,
                getListBlogResult: action.payload.data,
                getListBlogLoading: action.payload.loading,
                getListBlogError: action.payload.errorMessage
            }

        case ADD_BLOG:
            return {
                ...state,
                addBlogResult: action.payload.data,
                addBlogLoading: action.payload.loading,
                addBlogError: action.payload.errorMessage
            }

        default: return state
    }
}

export default blog