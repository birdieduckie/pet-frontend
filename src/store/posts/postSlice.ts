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
  initialState: postsAdapter.getInitialState({
    status: Status.Initial
  }),
  reducers: {
    postRequested(state, action) {
      state.status = Status.Pending
    },
    postReceived(state, action) {
      postsAdapter.setOne(state, action.payload)
      state.status = Status.Success
    },
    postRequestError(state) {
      state.status = Status.Failure
    },
    postsRequested(state) {
      state.status = Status.Pending
    },
    postsReceived(state, action) {
      postsAdapter.setAll(state, action.payload)
      state.status = Status.Success
    },
    postsRequestError(state) {
      state.status = Status.Failure
    },
    editPostRequest(state, action) {
      state.status = Status.Pending
    },
    editPostSuccess(state, action) {
      postsAdapter.updateOne(state, action.payload)
      state.status = Status.Success
    },
    deletePostRequest(state, action) {
      state.status = Status.Pending
    },
    deletePostSuccess(state, action) {
      postsAdapter.removeOne(state, action.payload)
      state.status = Status.Success
    },
    createPostRequest(state, action) {
      state.status = Status.Pending
    },
    createPostSuccess(state, action) {
      postsAdapter.addOne(state, action.payload)
      state.status = Status.Success
    }
  }
})

export const { actions, reducer } = postSlice

export const postsSelectors = postsAdapter.getSelectors()

export const {
  postsRequested,
  postsReceived,
  postsRequestError,
  deletePostRequest,
  deletePostSuccess,
  editPostRequest,
  editPostSuccess,
  createPostRequest,
  createPostSuccess,
  postRequested,
  postReceived,
  postRequestError
} = actions
