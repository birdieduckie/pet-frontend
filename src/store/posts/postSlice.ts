import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'

import { Post } from 'core/components/Post/Post'
import { NewPost } from 'core/components/Forms/NewPost/NewPost'

export interface Post {
  id: string
  name: string
  text: string
  contact: string
}

export const POSTS_SLICE = 'posts'

export const postSlice = createSlice({
  name: POSTS_SLICE,
  initialState: [] as Post[],
  reducers: {
    createPost: {
      prepare: (
        text: Post['text'],
        name: Post['name'],
        contact: Post['contact']
      ) => {
        const id = nanoid()
        return { payload: { id, text, name, contact } }
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
