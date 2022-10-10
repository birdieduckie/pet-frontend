import { call, put, takeLatest, takeLeading } from 'redux-saga/effects'

import { POST_API } from 'core/api'

import {
  createPostSuccess,
  createPost,
  editPost,
  editPostSuccess,
  postsReceived,
  postsRequested,
  postsRequestError
} from './postSlice'

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
function* postEdit({ payload: { id, text, navigate } }) {
  try {
    //@ts-ignore
    const response = yield call(POST_API.patch, `/${id}/edit`, { text })

    yield put(editPostSuccess({ id, changes: { text } }))

    if (navigate) {
      navigate('/')
    }
  } catch (error) {
    yield put(postsRequestError())
    console.error(error)
  }
}

function* postAdd({
  //@ts-ignore
  payload: { username, text, img, createdAt, navigate }
}) {
  try {
    //@ts-ignore
    const response = yield call(POST_API.post, '/newpost', {
      username,
      img,
      text,
      createdAt
    })

    yield put(createPostSuccess(response.data))

    if (navigate) {
      navigate('/')
    }
  } catch (error) {
    yield put(postsRequestError())
    console.error(error)
  }
}

export function* watchAddPost() {
  yield takeLeading(createPost, postAdd)
}

export function* watchGetPosts() {
  yield takeLatest(postsRequested, getPosts)
}

export function* watchEditPost() {
  yield takeLeading(editPost, postEdit)
}
