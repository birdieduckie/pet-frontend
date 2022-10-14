export const tokenCheckRange = 3600

export const getToken = () => localStorage.getItem('accessToken')
export const clearToken = () => localStorage.removeItem('accessToken')
export const setToken = (token: string) =>
  localStorage.setItem('accessToken', token)
