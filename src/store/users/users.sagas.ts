import { call, put, takeEvery, takeLeading } from 'redux-saga/effects'

import { USER_API } from 'core/api'

import {
  userReceived,
  userRequestError,
  userRequested,
  createUserRequest,
  createUserSuccess,
  userLoginRequest,
  userLoginSuccess,
  userLoginError
} from './userSlice'

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

function* createUser({
  //@ts-ignore
  payload: { username, email, avatar, phone, password, navigate }
}) {
  try {
    //@ts-ignore
    const response = yield call(USER_API.post, '/signup', {
      username,
      email,
      avatar,
      phone,
      password
    })

    yield put(createUserSuccess(response.data))

    if (navigate) {
      navigate('/')
    }
  } catch (error) {
    yield put(userRequestError())
    console.error(error)
  }
}
//@ts-ignore
function* loginUser({ payload: { username, password, navigate } }) {
  try {
    console.log(password)
    //@ts-ignore

    const response = yield call(USER_API.post, '/login', { username, password })

    yield put(userLoginSuccess(response.data))

    localStorage.setItem('user', JSON.stringify(response.data))

    if (navigate) {
      navigate('/')
    }
  } catch (error) {
    yield put(userLoginError())
    console.log(error)
  }
}

export function* watchGetUser() {
  yield takeEvery(userRequested, getUser)
}

export function* watchCreateUser() {
  yield takeLeading(createUserRequest, createUser)
}

export function* watchLogin() {
  yield takeLeading(userLoginRequest, loginUser)
}
