import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Feed } from 'components/Feed/Feed'
import { NewPost } from 'components/Forms/NewPost/Newpost'
import { SignUp } from 'components/Forms/SignUp/Signup'
import { SignIn } from 'components/Forms/SignIn/Signin'

import { Container } from './styled'

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route
          path='/newpost'
          element={<NewPost id={undefined} owner={''} text={''} img={''} />}
        />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Container>
  )
}
