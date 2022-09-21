import {
  call,
  put,
  takeEvery,
  takeLatest,
  takeLeading
} from 'redux-saga/effects'

import { POST_API } from 'core/api'

import {
  createPost,
  postsReceived,
  postsRequested,
  postsRequestError
} from './postSlice'

function* getPosts() {
  try {
    const response = yield call(POST_API.get, '')

    yield put(postsReceived(response.data))

    console.log(response.data)
  } catch (error) {
    yield put(postsRequestError())
    console.error(error)
  }
}

// function* addPost() {
//   if (navigate) {
//     navigate(`/weather/${response.data.id}?lat=${geo.lat}&lng=${geo.lng}`)
//   }
// }

// export function* watchAddPost() {
//   yield takeLeading(createPost, addPost)
// }

export function* watchGetPosts() {
  yield takeLatest(postsRequested, getPosts)
}
