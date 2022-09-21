import axios from 'axios'

export const USER_API_URL = 'http://localhost:5000/api/v1/users/'

export const POST_API_URL = 'http://localhost:5000/api/v1/posts/'

export const USER_API = axios.create({
  baseURL: USER_API_URL
})

export const POST_API = axios.create({
  baseURL: POST_API_URL
})
