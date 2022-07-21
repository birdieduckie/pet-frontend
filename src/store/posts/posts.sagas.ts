import { call, put, takeLatest } from 'redux-saga/effects'

import { POST_API } from 'core/api'

import { setPosts, getPostRequest } from './postSlice'

function* getPosts() {
  try {
    const response = yield call(POST_API.get, '/post?limit=10')

    console.log(response)

    yield put(setPosts(response.data))
    // if (navigate) {
    //   navigate(`/weather/${response.data.id}?lat=${geo.lat}&lng=${geo.lng}`)
    // }
  } catch (error) {
    // yield put(getWeatherError(error))
    console.error(error)
  }
}

export function* watchGetPosts() {
  yield takeLatest(getPostRequest, getPosts)
}
