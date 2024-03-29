import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Feed } from 'screens/Feed/Feed'
import { NewPost } from 'screens/NewPost/Newpost'
import { SignUp } from 'screens/SignUp/Signup'
import { SignIn } from 'screens/SignIn/Signin'
import { EditPost } from 'screens/EditPost/EditPost'
import { PostScreen } from 'screens/PostScreen/PostScreen'

import { Container } from './styled'

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/newpost' element={<NewPost />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/:id/edit' element={<EditPost />} />
        <Route path='/:id' element={<PostScreen />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Container>
  )
}
