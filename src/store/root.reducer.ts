import { combineReducers } from 'redux'

import { reducer as postsReducer } from './posts/postSlice'
import userReducer from './users/userSlice'

export const rootReducer = combineReducers({
  posts: postsReducer,
  users: userReducer
})
