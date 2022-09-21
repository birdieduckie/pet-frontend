import {
  createSlice,
  PayloadAction,
  nanoid,
  createEntityAdapter
} from '@reduxjs/toolkit'

export interface User {
  id: string
  userName: string
  firstName: string
  lastName: string
  userPic: string
  email: string
  phone: string
  password: string
}

export const USERS_SLICE = 'users'

const usersAdapter = createEntityAdapter<User>({
  sortComparer: (a, b) => a.userName.localeCompare(b.userName)
})

export const userSlice = createSlice({
  name: USERS_SLICE,
  initialState: usersAdapter.getInitialState(),
  reducers: {
    usersReceived: (state, action) => {
      usersAdapter.setAll(state, action.payload)
    },
    createUser: (state, action) => {
      usersAdapter.addOne(state, action.payload)
    }
  }
  // prepare: (
  //   userName:,
  //   firstName: User['firstName'],
  //   lastName: User['lastName'],
  //   userPic: User['userPic'],
  //   email: User['email'],
  //   phone: User['phone'],
  //   password: User['password']
  // ) => {
  //   const id = nanoid()
  //   return {
  //     payload: {
  //       id,
  //       userName,
  //       firstName,
  //       lastName,
  //       userPic,
  //       email,
  //       phone,
  //       password
  //     }
  //   }
  // },

  // editUser(state, action: PayloadAction<User>) {
  //   state.map(User =>
  //     User.id === action.payload.id
  //       ? User.userName === action.payload.userName
  //       : User
  //   )
  // },
  // deleteUser(state, action: PayloadAction<User['id']>) {
  //   state.filter(User => User.id !== action.payload)
  // },
  // setUsers(state, action: PayloadAction<User[]>) {
  //   return action.payload
  // }
})

export const usersSelectors = usersAdapter.getSelectors()

export const { actions, reducer } = userSlice

export const { createUser, usersReceived } = actions
