import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
  nanoid
} from '@reduxjs/toolkit'

import { Post } from 'components/Post/Post'

import { mockPosts } from 'screens/Feed/mock'
// type SliceState = { state: 'loading' } | { state: 'finished'; data: [] as Post }
// const initialState: SliceState = { state: 'finished', data: [] }

export interface Post {
  id: string
  text: string
  img: string
  likes: number
  createdAt: string
  owner: string
}

const postsAdapter = createEntityAdapter<Post>({
  sortComparer: (a, b) => a.createdAt.localeCompare(b.createdAt)
})

export const POSTS_SLICE = 'posts'

export const postSlice = createSlice({
  name: POSTS_SLICE,
  initialState: postsAdapter.getInitialState(),
  reducers: {
    postsReceived(state, action) {
      postsAdapter.setAll(state, action.payload)
    },
    editPost(state, action) {
      console.log(action.payload)
      postsAdapter.updateOne(state, action.payload)
    },
    deletePost(state, action) {
      postsAdapter.removeOne(state, action.payload)
    },
    createPost(state, action) {
      postsAdapter.addOne(state, action.payload)
    }

    // createPost: {
    //   prepare: (text: Post['text'], owner: Post['owner'], img: Post['img']) => {
    //     const id = nanoid()
    //     const likes = 0
    //     return { payload: { id, text, owner, img, likes } }
    //   },
    //   reducer: (state, action: PayloadAction<Post>) => {
    //     state.posts.push(action.payload)
    //   }
    // },

    // editPost: (state, action: PayloadAction<Post>) => {
    //   state.posts.map(Post =>
    //     Post.id === action.payload.id ? Post.text === action.payload.text : Post
    //   )
    // },

    // deletePost: postsAdapter.removeOne,
    // // state.posts.filter(Post => Post.id !== action.payload)

    // setPosts(state, action: PayloadAction<Post[]>) {
    //   state.posts = action.payload
    // }
  }
})

// getPostById(state) {
//   state.find(post => post.id === id)
// }

export const { actions, reducer } = postSlice

export const postsSelectors = postsAdapter.getSelectors()

export const { postsReceived, deletePost, editPost, createPost } = actions
// export const { createPost, setPosts, deletePost } = actions
