import {
  call,
  put,
  take,
  takeEvery,
  takeLatest,
  takeLeading
} from 'redux-saga/effects'

import { POST_API } from 'core/api'

import {
  createPost,
  editPost,
  editPostSuccess,
  postsReceived,
  postsRequested,
  postsRequestError
} from './postSlice'
import { useSearchParams } from 'react-router-dom'

function* getPosts() {
  try {
    //@ts-ignore
    const response = yield call(POST_API.get, '')

    yield put(postsReceived(response.data))

    console.log(response.data)
  } catch (error) {
    yield put(postsRequestError())
    console.error(error)
  }
}
//@ts-ignore
function* postEdit({ payload: { id, text } }) {
  try {
    console.log('saga!')

    console.log(id)
    //@ts-ignore
    const response = yield call(POST_API.patch, `/${id}/edit`, { text })

    yield put(editPostSuccess({ id, changes: { text } }))
    console.log(response)
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

export function* watchEditPost() {
  yield takeLeading(editPost, postEdit)
}
