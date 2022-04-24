import axios from 'axios'

// export const GET_LIST_BLOG = "GET_LIST_BLOG"
export const REGISTER = "REGISTER"

export const register = (data) => {
    return (dispatch) => {
        dispatch({
            type: REGISTER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/register',
            timemout: 120000,
            data: data
        }).then((response) => {
                dispatch({
                    type: REGISTER,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })

            }).catch((error) => {
                dispatch({
                    type: REGISTER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}