import { call, put, takeEvery } from 'redux-saga/effects'

import { USER_API } from 'core/api'

import { userReceived, userRequestError, userRequested } from './userSlice'

//@ts-ignore
function* getUser({ payload: id }) {
  try {
    console.log(id)
    //@ts-ignore
    const response = yield call(USER_API.get, `/${id}`)

    yield put(userReceived(response.data))

    console.log(response.data)
  } catch (error) {
    yield put(userRequestError())
    console.error(error)
  }
}

export function* watchGetUser() {
  yield takeEvery(userRequested, getUser)
}
