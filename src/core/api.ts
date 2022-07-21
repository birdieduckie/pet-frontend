import axios from 'axios'

export const USER_API_URL = 'https://dummyapi.io/data/v1/user'

export const POST_API_URL = 'https://dummyapi.io/data/v1/post'

const options = {
  Headers: { 'app-id': '62d5ee6e9321e983d1312fe7' }
}

export const USER_API = axios.create({
  baseURL: USER_API_URL
})

export const POST_API = axios.create({
  baseURL: POST_API_URL,
  headers: { 'app-id': '62d5ee6e9321e983d1312fe7' }
})

POST_API.defaults.headers.common['app-id'] = '62d5ee6e9321e983d1312fe7'
