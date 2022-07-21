import { FC } from 'react'
import { Menu } from '../Menu/Menu'

import { Post } from '../Post/Post'

import { Container } from './styled'

export const Feed: FC = () => {
  const date = new Date()
  return (
    <Container>
      <Menu text='Main'></Menu>
      <Post id='1' text='Hello' publishDate={date} image='none' likes={1} />
    </Container>
  )
}
