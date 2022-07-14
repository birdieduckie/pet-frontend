import { combineReducers } from 'redux'
import postReducer from './posts/postSlice'
import userReducer from './users/userSlice'

export const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer
})
