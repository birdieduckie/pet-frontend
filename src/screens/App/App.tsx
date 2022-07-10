import { FC } from 'react'

import { Feed } from 'core/components/Feed/Feed'
import { Menu } from 'core/components/Menu/Menu'

import { Container } from './styled'

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <Container>
      <Menu text='Main' />
      <Feed />
    </Container>
  )
}
