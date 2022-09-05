import { FC } from 'react'

import { Container, Avatar, Username } from './styled'

interface UserProps {
  id: string
  username: string
  avatar: string
}

export const User: FC<UserProps> = ({ id, username, avatar }) => {
  return (
    <Container id={id}>
      <Avatar src={avatar}></Avatar>
      <Username>{username}</Username>
    </Container>
  )
}
