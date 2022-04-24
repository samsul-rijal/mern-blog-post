import { combineReducers } from 'redux'
import BlogReducer from './blog'
import UserReducer from './user'


export default combineReducers({
    BlogReducer,
    UserReducer
})