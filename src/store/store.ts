import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './root.reducer'
import { rootSaga } from './root.saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
