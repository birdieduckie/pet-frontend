import { FC } from 'react'

import { User } from '../User/User'

import { Container, Text } from './styled'
import photo from 'assets/photo.jpg'

interface CommentProps {
  id: string
  text: string
  publishDate: string
  author: string
  toPost: string
}

export const Comment: FC<CommentProps> = ({ text }) => {
  return (
    <Container>
      <User id={'0'} username='пипа' avatar={photo}></User>
      <Text>{text}</Text>
    </Container>
  )
}
