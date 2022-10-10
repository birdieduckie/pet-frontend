import { all } from 'redux-saga/effects'

import {
  watchGetPosts as watchGetPostsSaga,
  watchEditPost as watchEditPostSaga,
  watchAddPost as watchAddPostSaga
} from './posts/posts.sagas'
import { watchGetUser as watchGetUserSaga } from './users/users.sagas'
// import { watchGetCities as watchGetCitiesSaga } from './cities/cities.saga'

export function* rootSaga() {
  yield all([
    watchGetPostsSaga(),
    watchEditPostSaga(),
    watchAddPostSaga(),
    watchGetUserSaga()
  ])
}
