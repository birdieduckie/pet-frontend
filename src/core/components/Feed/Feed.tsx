import { FC } from 'react'

import { Post } from '../Post/Post'

import { Container } from './styled'

export const Feed: FC = () => {
  return (
    <Container>
      <Post text='Hello!' />
    </Container>
  )
}
