import { call, delay } from 'redux-saga/effects'
import jwtDecode from 'jwt-decode'
import { differenceInSeconds, fromUnixTime } from 'date-fns'

import { USER_API } from 'core/api'
import { getToken, setToken, tokenCheckRange } from 'core/token'

function* tokenRefreshSaga() {
  const token = getToken()
  const decodedToken = token ? jwtDecode(token) : null
  const isTokenExpired =
    //@ts-ignore
    differenceInSeconds(fromUnixTime(decodedToken?.exp), new Date()) <=
    tokenCheckRange

  if (isTokenExpired) {
    //@ts-ignore
    const response = yield call(USER_API.post, 'auth/token', {
      refreshToken: token
    })
    const newToken = response?.data?.accessToken

    if (newToken) {
      setToken(newToken)
    }
  }
}

export function* watchTokenRefreshSaga() {
  while (true) {
    yield call(tokenRefreshSaga)
    yield delay(tokenCheckRange * 1000)
  }
}
