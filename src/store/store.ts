import { configureStore } from '@reduxjs/toolkit'

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

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
