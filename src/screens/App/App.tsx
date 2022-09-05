import React, { FC, useContext } from 'react'
import { BrowserHistory } from 'history'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Feed } from 'components/Feed/Feed'

import { Container } from './styled'

import { NewPost } from 'components/Forms/NewPost/Newpost'
import { SignUp } from 'components/Forms/SignUp/Signup'
import { SignIn } from 'components/Forms/SignIn/Signin'

// export default function usePathname() {
//   const [state, setState] = React.useState(window.location.pathname)

//   const navigation = useContext(UNSAFE_NavigationContext).navigator
//   React.useLayoutEffect(() => {
//     if (navigation) {
//       navigation.listen(locationListener =>
//         setState(locationListener.location.pathname)
//       )
//     }
//   }, [navigation])

//   return state
// }

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route
          path='/newpost'
          element={<NewPost id={undefined} owner={''} text={''} image={''} />}
        />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Container>
  )
}
