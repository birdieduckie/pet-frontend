import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { Comment } from 'components/Comment/Comment'

interface Comment {
  id: string
  text: string
  publishDate: string
  author: string
  toPost: string
}

const commentsAdapter = createEntityAdapter<Comment>({
  sortComparer: (a, b) => a.publishDate.localeCompare(b.publishDate)
})

export const COMMENTS_SLICE = 'comments'

export const commentSlice = createSlice({
  name: COMMENTS_SLICE,
  initialState: commentsAdapter.getInitialState(),
  reducers: {
    commentsReceived(state, action) {
      commentsAdapter.setAll(state, action.payload)
    },
    editComment(state, action) {
      console.log(action.payload)
      commentsAdapter.updateOne(state, action.payload)
    },
    deleteComment(state, action) {
      commentsAdapter.removeOne(state, action.payload)
    },
    createComment(state, action) {
      commentsAdapter.addOne(state, action.payload)
    }
  }
})

export const { actions, reducer } = commentSlice

export const commentSelectors = commentsAdapter.getSelectors()

export const { commentsReceived, deleteComment, editComment, createComment } =
  actions
