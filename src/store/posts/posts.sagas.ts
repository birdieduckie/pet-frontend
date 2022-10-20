import { call, put, takeLatest, takeLeading } from 'redux-saga/effects'

import { POST_API } from 'core/api'

import {
  createPostSuccess,
  createPostRequest,
  editPostRequest,
  editPostSuccess,
  postsReceived,
  postsRequested,
  postsRequestError,
  deletePostRequest,
  deletePostSuccess,
  postRequested,
  postReceived,
  postRequestError
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

function* getPost({ payload: id }) {
  try {
    //@ts-ignore
    const response = yield call(POST_API.get, `/${id}`)

    yield put(postReceived(response.data))

    console.log(response.data)
  } catch (error) {
    yield put(postRequestError())
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

//@ts-ignore
function* postDelete({ payload: id }) {
  try {
    console.log({ id })

    //@ts-ignore
    const response = yield call(POST_API.delete, `/${id}/delete`)

    yield put(deletePostSuccess(id))
  } catch (error) {
    yield put(postsRequestError())
    console.error(error)
  }
}

export function* watchAddPost() {
  yield takeLeading(createPostRequest, postAdd)
}

export function* watchGetPosts() {
  yield takeLatest(postsRequested, getPosts)
}

export function* watchGetPost() {
  yield takeLatest(postRequested, getPost)
}

export function* watchEditPost() {
  yield takeLeading(editPostRequest, postEdit)
}
export function* watchDeletePost() {
  yield takeLeading(deletePostRequest, postDelete)
}
