import {
  createSlice,
  PayloadAction,
  nanoid,
  createEntityAdapter,
  current
} from '@reduxjs/toolkit'

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
  initialState: usersAdapter.getInitialState(),
  reducers: {
    createUser: (state, action) => {
      usersAdapter.addOne(state, action.payload)
    },
    userRequested: (state, action: PayloadAction<User['_id']>) => {
      console.log(action.payload)

      console.log('requested')
    },
    userRequestError(error) {
      // state.Status = 'FAILURE'
      console.log(error)
    },
    userReceived: (state, action) => {
      usersAdapter.setOne(state, action.payload)

      console.log(current(state))
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

export const { createUser, userReceived, userRequestError, userRequested } =
  actions
