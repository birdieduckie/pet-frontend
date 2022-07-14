import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Feed } from 'core/components/Feed/Feed'

import { Container } from './styled'

import { NewPost } from 'core/components/Forms/NewPost/Newpost'
import { SignUp } from 'core/components/Forms/SignUp/Signup'
import { SignIn } from 'core/components/Forms/SignIn/Signin'

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/newpost' element={<NewPost />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Container>
  )
}
