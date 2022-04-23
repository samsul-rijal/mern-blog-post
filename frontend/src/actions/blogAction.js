import axios from 'axios'

export const GET_LIST_BLOG = "GET_LIST_BLOG"
export const ADD_BLOG = "ADD_BLOG"

export const getListBlog = () => {
    return (dispatch) => {
        dispatch({
            type: GET_LIST_BLOG,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/posts',
            timemout: 120000
        }).then((response) => {
                dispatch({
                    type: GET_LIST_BLOG,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            }).catch((error) => {
                dispatch({
                    type: GET_LIST_BLOG,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}

export const addBlog = (data) => {
    return (dispatch) => {
        dispatch({
            type: ADD_BLOG,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/posts',
            timemout: 120000,
            data: data
        }).then((response) => {
                dispatch({
                    type: ADD_BLOG,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            }).catch((error) => {
                dispatch({
                    type: ADD_BLOG,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}