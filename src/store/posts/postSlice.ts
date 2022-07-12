import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'

import { Post } from 'core/components/Post/Post'

export interface Post {
  id: string
  text: string
}

export const POSTS_SLICE = 'posts'

export const postSlice = createSlice({
  name: POSTS_SLICE,
  initialState: [] as Post[],
  reducers: {
    createPost: {
      prepare: (text: Post['text']) => {
        const id = nanoid()
        return { payload: { id, text } }
      },
      reducer: (state, action: PayloadAction<Post>) => {
        state.push(action.payload)
      }
    },
    setPosts(state, action: PayloadAction<Post[]>) {
      return action.payload
    }
  }
})

const { actions, reducer } = postSlice

export const { createPost, setPosts } = actions

export default postSlice.reducer
