import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { Status } from 'store/types'

import { Post } from 'components/Post/Post'

export interface Post {
  _id: string
  text: string
  img: string
  likes: number
  createdAt: string
  owner: string
}

const postsAdapter = createEntityAdapter<Post>({
  selectId: post => post._id,
  sortComparer: (a, b) => a.createdAt.localeCompare(b.createdAt)
})

export const POSTS_SLICE = 'posts'

export const postSlice = createSlice({
  name: POSTS_SLICE,
  initialState: postsAdapter.getInitialState(),
  reducers: {
    postsRequested() {
      console.log('request')
    },
    postsReceived(state, action) {
      postsAdapter.setAll(state, action.payload)
      console.log('received')
      // state.Status = 'SUCCESS'
    },
    postsRequestError(error) {
      // state.Status = 'FAILURE'
      console.error(error)
    },
    editPost(state, action) {
      console.log(action.payload)
    },
    editPostSuccess(state, action) {
      postsAdapter.updateOne(state, action.payload)
    },
    deletePost(state, action) {
      postsAdapter.removeOne(state, action.payload)
    },
    createPost(state, action) {
      postsAdapter.addOne(state, action.payload)
    }
  }
})

export const { actions, reducer } = postSlice

export const postsSelectors = postsAdapter.getSelectors()

export const {
  postsRequested,
  postsReceived,
  postsRequestError,
  deletePost,
  editPost,
  editPostSuccess,
  createPost
} = actions
