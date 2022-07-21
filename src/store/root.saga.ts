import { all } from 'redux-saga/effects'

import { watchGetPosts as watchGetPostsSaga } from './posts/posts.sagas'
// import { watchGetCities as watchGetCitiesSaga } from './cities/cities.saga'

export function* rootSaga() {
  yield all([watchGetPostsSaga()])
}
