import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  // tasks: taskReducer,
})

export const store = configureStore({
  reducer: rootReducer
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().prepend(localStorageMiddleware.middleware),
})

// startLocalStorageListener(TASKS_SLICE)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
