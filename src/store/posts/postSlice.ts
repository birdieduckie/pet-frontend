import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'

import { Post } from 'core/components/Post/Post'

// type SliceState = { state: 'loading' } | { state: 'finished'; data: [] as Post }
// const initialState: SliceState = { state: 'finished', data: [] }

export interface Post {
  id: string
  name: string
  text: string
  contact: string
}

export const POSTS_SLICE = 'posts'

export const postSlice = createSlice({
  name: POSTS_SLICE,
  initialState: { posts: [] as Post[], isLoading: false },
  reducers: {
    getPostRequest(state, action: PayloadAction<boolean>) {
      state.isLoading = true
    },
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
        state.posts.push(action.payload)
      }
    },
    // updatePost: (state, action: PayloadAction<Post['id']>) => {
    //   return state.map(post =>
    //     post.id === action.payload ? {
    //   ...post, checked: !post.checked
    // } : post
    // //   )
    // // },
    setPosts(state, action: PayloadAction<Post[]>) {
      state.posts = action.payload
    }
  }
})

const { actions, reducer } = postSlice

export const { createPost, setPosts, getPostRequest } = actions

export default postSlice.reducer
