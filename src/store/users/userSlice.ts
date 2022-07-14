import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'

export interface User {
  id: string
  name: string
}

export const USERS_SLICE = 'users'

export const userSlice = createSlice({
  name: USERS_SLICE,
  initialState: [] as User[],
  reducers: {
    createUser: {
      prepare: (name: User['name']) => {
        const id = nanoid()
        return { payload: { id, name } }
      },
      reducer: (state, action: PayloadAction<User>) => {
        state.push(action.payload)
      }
    },
    setUsers(state, action: PayloadAction<User[]>) {
      return action.payload
    }
  }
})

const { actions, reducer } = userSlice

export const { createUser, setUsers } = actions

export default userSlice.reducer
