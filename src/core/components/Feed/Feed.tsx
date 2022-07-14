import { FC } from 'react'
import { Menu } from '../Menu/Menu'

import { Post } from '../Post/Post'

import { Container } from './styled'

export const Feed: FC = () => {
  return (
    <Container>
      <Menu text='Main'></Menu>
      <Post id='1' text='Hello!' contact='z' />
    </Container>
  )
}
