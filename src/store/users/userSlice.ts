import {
  createSlice,
  PayloadAction,
  createEntityAdapter,
  current
} from '@reduxjs/toolkit'

import { Status } from 'store/types'

export interface User {
  _id: string
  username: string
  avatar: string
  email: string
  phone: string
  password: string
}

export const USERS_SLICE = 'users'

const usersAdapter = createEntityAdapter<User>({
  selectId: user => user._id,
  sortComparer: (a, b) => a.username.localeCompare(b.username)
})

export const userSlice = createSlice({
  name: USERS_SLICE,
  initialState: usersAdapter.getInitialState({
    status: Status.Initial
  }),
  reducers: {
    createUserRequest: (state, action) => {
      state.status = Status.Pending
    },
    createUserSuccess: (state, action) => {
      usersAdapter.addOne(state, action.payload)
      state.status = Status.Success
    },
    userRequested: (state, action: PayloadAction<User['_id']>) => {
      state.status = Status.Pending
    },
    userRequestError(state) {
      state.status = Status.Failure
    },
    userReceived: (state, action) => {
      usersAdapter.setOne(state, action.payload)
      state.status = Status.Success
    }
  }
})

export const usersSelectors = usersAdapter.getSelectors()

export const { actions, reducer } = userSlice

export const {
  createUserRequest,
  createUserSuccess,
  userReceived,
  userRequestError,
  userRequested
} = actions
