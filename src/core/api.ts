import axios from 'axios'

export const USER_API_URL = 'https://jsonplaceholder.typicode.com/users'

export const POST_API_URL = 'https://jsonplaceholder.typicode.com/posts'

export const USER_API = axios.create({
  baseURL: USER_API_URL
})

export const POST_API = axios.create({
  baseURL: POST_API_URL
})
