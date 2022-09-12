// import {
//   call,
//   put,
//   takeEvery,
//   takeLatest,
//   takeLeading
// } from 'redux-saga/effects'

// import { POST_API } from 'core/api'

// import { setPosts, createPost, getPostRequest } from './postSlice'

// function* getPosts() {
//   try {
//     const { response } = yield call(POST_API.get, '')

//     console.log(response)

//     yield put(setPosts(response))
//     // if (navigate) {
//     //   navigate(`/weather/${response.data.id}?lat=${geo.lat}&lng=${geo.lng}`)
//     // }
//   } catch (error) {
//     // yield put(getWeatherError(error))
//     console.error(error)
//   }
// }

// // function* addPost() {
// //   if (navigate) {
// //     navigate(`/weather/${response.data.id}?lat=${geo.lat}&lng=${geo.lng}`)
// //   }
// // }

// // export function* watchAddPost() {
// //   yield takeLeading(createPost, addPost)
// // }

// export function* watchGetPosts() {
//   yield takeLatest(getPostRequest, getPosts)
// }
