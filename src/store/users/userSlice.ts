import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'

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

export const userSlice = createSlice({
  name: USERS_SLICE,
  initialState: [] as User[],
  reducers: {
    createUser: {
      prepare: (
        userName: User['userName'],
        firstName: User['firstName'],
        lastName: User['lastName'],
        userPic: User['userPic'],
        email: User['email'],
        phone: User['phone'],
        password: User['password']
      ) => {
        const id = nanoid()
        return {
          payload: {
            id,
            userName,
            firstName,
            lastName,
            userPic,
            email,
            phone,
            password
          }
        }
      },
      reducer: (state, action: PayloadAction<User>) => {
        state.push(action.payload)
      }
    },
    editUser(state, action: PayloadAction<User>) {
      state.map(User =>
        User.id === action.payload.id
          ? User.userName === action.payload.userName
          : User
      )
    },
    deleteUser(state, action: PayloadAction<User['id']>) {
      state.filter(User => User.id !== action.payload)
    },
    setUsers(state, action: PayloadAction<User[]>) {
      return action.payload
    }
  }
})

const { actions, reducer } = userSlice

export const { createUser, setUsers } = actions

export default userSlice.reducer
