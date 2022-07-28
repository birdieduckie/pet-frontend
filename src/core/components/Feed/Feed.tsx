import { FC } from 'react'
import { Header } from '../Header/Header'

import { Post } from '../Post/Post'

import { Container } from './styled'

export const Feed: FC = () => {
  const date = new Date()
  return (
    <Container>
      <Header text='Main'></Header>
      <Post id='1' text='Hello' publishDate={date} image='none' likes={1} />
    </Container>
  )
}
