import { combineReducers } from 'redux'
import postReducer from './posts/postSlice'

export const rootReducer = combineReducers({
  posts: postReducer
})
