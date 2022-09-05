import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'

import { Post } from 'components/Post/Post'

// type SliceState = { state: 'loading' } | { state: 'finished'; data: [] as Post }
// const initialState: SliceState = { state: 'finished', data: [] }

export interface Post {
  id: string
  text: string
  image: string
  owner: string
}

// export const getPostById = (state, id) => {
//   return state.find(post => post.id === id)
// }

export const POSTS_SLICE = 'posts'

export const postSlice = createSlice({
  name: POSTS_SLICE,
  initialState: { posts: [] as Post[], isLoading: false },
  reducers: {
    getPostRequest(state, action: PayloadAction<boolean>) {
      state.isLoading = true
    },
    // getPostSuccess(state, action: PayloadAction<[]>) {
    //   state.isLoading = false
    //   return (state.posts = { ...action.payload })
    // },
    getPostError(state, action) {
      state.isLoading = false
    },
    createPost: {
      prepare: (
        text: Post['text'],
        owner: Post['owner'],
        image: Post['image']
      ) => {
        const id = nanoid()
        // const publishDate = new Date()
        return { payload: { id, text, owner, image } }
      },
      reducer: (state, action: PayloadAction<Post>) => {
        state.posts.push(action.payload)
      }
    },

    editPost: (state, action: PayloadAction<Post>) => {
      state.posts.map(Post =>
        Post.id === action.payload.id ? Post.text === action.payload.text : Post
      )
    },

    deletePost(state, action: PayloadAction<Post['id']>) {
      state.posts.filter(Post => Post.id !== action.payload)
    },

    setPosts(state, action: PayloadAction<Post[]>) {
      state.posts = action.payload
    }
  }
})

const { actions, reducer } = postSlice

export const { createPost, setPosts, getPostRequest } = actions

export default postSlice.reducer
