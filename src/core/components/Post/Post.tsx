import { FC } from 'react'

import { Container, Like } from './styled'

interface PostProps {
  text: string
}

export const Post: FC<PostProps> = ({ text }) => {
  return (
    <Container>
      {text}
      <Like></Like>
    </Container>
  )
}
